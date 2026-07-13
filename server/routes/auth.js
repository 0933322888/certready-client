import express from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';
import { protect } from '../middleware/auth.js';
import { getResetExpiry, sendPasswordResetEmail } from '../utils/sendEmail.js';

const router = express.Router();
const googleClient = process.env.GOOGLE_CLIENT_ID
  ? new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
  : null;

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

/** Auth responses must include populated course purchases (slug) for client access checks. */
async function buildAuthUser(userId) {
  const user = await User.findById(userId)
    .select('-password')
    .populate('purchases', 'slug title tradeCode');
  if (!user) return null;
  return {
    id: user._id,
    _id: user._id,
    name: user.name,
    email: user.email,
    purchases: (user.purchases || []).filter(Boolean),
    createdAt: user.createdAt,
  };
}

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const authUser = await buildAuthUser(user._id);
    res.status(201).json({
      token: generateToken(user._id),
      user: authUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const authUser = await buildAuthUser(user._id);
    res.json({
      token: generateToken(user._id),
      user: authUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/auth/google
// @desc    Sign in or sign up with Google (ID token from frontend)
// @access  Public
router.post('/google', async (req, res) => {
  try {
    const { credential } = req.body;
    if (!credential) {
      return res.status(400).json({ message: 'Google credential is required' });
    }
    if (!googleClient) {
      return res.status(503).json({ message: 'Google sign-in is not configured' });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { sub: googleId, email, name } = payload;
    const emailLower = (email || '').toLowerCase();
    if (!emailLower) {
      return res.status(400).json({ message: 'Google account must have an email' });
    }

    let user = await User.findOne({ googleId });
    if (user) {
      const authUser = await buildAuthUser(user._id);
      res.json({
        token: generateToken(user._id),
        user: authUser,
      });
      return;
    }

    user = await User.findOne({ email: emailLower });
    if (user) {
      user.googleId = googleId;
      await user.save({ validateBeforeSave: false });
      const authUser = await buildAuthUser(user._id);
      res.json({
        token: generateToken(user._id),
        user: authUser,
      });
      return;
    }

    user = await User.create({
      name: name || emailLower.split('@')[0],
      email: emailLower,
      googleId,
    });

    const authUser = await buildAuthUser(user._id);
    res.status(201).json({
      token: generateToken(user._id),
      user: authUser,
    });
  } catch (error) {
    console.error('Google auth error:', error.message);
    if (error.message?.includes('Token used too late') || error.message?.includes('expired')) {
      return res.status(401).json({ message: 'Google sign-in expired. Please try again.' });
    }
    res.status(500).json({ message: error.message || 'Google sign-in failed' });
  }
});

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', protect, async (req, res) => {
  try {
    const authUser = await buildAuthUser(req.user._id);
    if (!authUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(authUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/auth/forgot-password
// @desc    Request password reset; send email with reset link
// @access  Public
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ message: 'Email is required' });
    }

    const user = await User.findOne({ email: email.trim().toLowerCase() });

    // Always return success to avoid revealing whether the email exists
    if (!user) {
      return res.json({ message: 'If an account exists, you will receive reset instructions.' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = getResetExpiry();
    await user.save({ validateBeforeSave: false });

    const baseUrl = (process.env.CLIENT_URL || 'http://localhost:5173').replace(/\/$/, '');
    const resetUrl = `${baseUrl}/reset-password?token=${token}`;

    await sendPasswordResetEmail(user.email, resetUrl);

    res.json({ message: 'If an account exists, you will receive reset instructions.' });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   PUT /api/auth/change-password
// @desc    Change password (logged-in user, current + new password)
// @access  Private
router.put('/change-password', protect, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Current password and new password are required' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ message: 'New password must be at least 6 characters' });
    }

    const user = await User.findById(req.user._id);
    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    user.password = newPassword;
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/auth/reset-password
// @desc    Reset password using token from email
// @access  Public
router.post('/reset-password', async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      return res.status(400).json({ message: 'Token and new password are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: new Date() },
    });

    if (!user) {
      return res.status(400).json({
        message: 'Invalid or expired reset link. Please request a new password reset.',
      });
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: 'Password has been reset. You can sign in with your new password.' });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
