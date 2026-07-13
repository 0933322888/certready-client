import express from 'express';
import Course from '../models/Course.js';
import { protect } from '../middleware/auth.js';
import { getCoursePricing } from '../utils/coursePricing.js';
import { userOwnsCourse } from '../utils/userPurchases.js';

const router = express.Router();

async function getOptionalAuthUser(req) {
  if (!req.headers.authorization?.startsWith('Bearer ')) {
    return null;
  }

  try {
    const jwt = await import('jsonwebtoken');
    const User = (await import('../models/User.js')).default;
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.default.verify(token, process.env.JWT_SECRET);
    return await User.findById(decoded.id);
  } catch (err) {
    return null;
  }
}

// @route   GET /api/courses
// @desc    Get all published courses
// @access  Public
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find({ isPublished: true })
      .select('-__v')
      .sort({ createdAt: -1 });

    const authUser = await getOptionalAuthUser(req);
    const withPricing = await Promise.all(
      courses.map(async (c) => {
        const pricing = await getCoursePricing(c, authUser);
        return {
          ...c.toObject(),
          ...pricing,
          ownsCourse: Boolean(authUser && userOwnsCourse(authUser, c._id)),
        };
      })
    );

    res.json(withPricing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/courses/sitemap
// @desc    Return all published course slugs (for sitemap generation)
// @access  Public
router.get('/sitemap', async (req, res) => {
  try {
    const courses = await Course.find({ isPublished: true }).select('slug trade createdAt updatedAt');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/courses/:slug
// @desc    Get course by slug
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug, isPublished: true });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const authUser = await getOptionalAuthUser(req);
    const pricing = await getCoursePricing(course, authUser);

    // Check if user owns the course (if authenticated)
    let ownsCourse = false;
    if (authUser && userOwnsCourse(authUser, course._id)) {
      ownsCourse = true;
    }

    res.json({
      ...course.toObject(),
      ...pricing,
      ownsCourse,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/courses/:slug/access
// @desc    Verify user has access to course
// @access  Private
router.get('/:slug/access', protect, async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug, isPublished: true });
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const user = await import('../models/User.js').then(m => m.default.findById(req.user._id));
    const hasAccess = userOwnsCourse(user, course._id);

    if (!hasAccess) {
      return res.status(403).json({ message: 'Access denied. Purchase required.' });
    }

    res.json({ 
      hasAccess: true,
      course: {
        slug: course.slug,
        title: course.title,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
