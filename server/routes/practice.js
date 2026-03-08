import express from 'express';
import PracticeQuestion from '../models/PracticeQuestion.js';
import Course from '../models/Course.js';
import { optionalProtect } from '../middleware/auth.js';

const router = express.Router();

/** tradeSlug (URL) → course slug for purchase check */
const TRADE_SLUG_TO_COURSE_SLUG = {
  'construction-electrician': 'construction-electrician-309a',
  carpenter: 'carpenter-403a',
  plumber: 'plumber-306a',
  hairstylist: 'hairstylist-332a',
};

/** Full mock exam question count per trade (for readiness 20% calculation) */
const EXAM_QUESTIONS_BY_TRADE = {
  'construction-electrician': 100,
  carpenter: 100,
  plumber: 125,
  hairstylist: 120,
};

/**
 * GET /api/practice/:tradeSlug/questions
 * - Free users (not logged in or no course purchase): first 20 questions by order/_id (same every time).
 * - Paid users (logged in + purchased course for this trade): random set, limit 1–200.
 * Query: limit (default 20), topics (optional comma-separated topicIds to filter)
 */
router.get('/:tradeSlug/questions', optionalProtect, async (req, res) => {
  try {
    const { tradeSlug } = req.params;
    const limit = Math.min(Math.max(1, parseInt(req.query.limit, 10) || 20), 200);
    const topicsParam = req.query.topics;
    const topicIds = topicsParam
      ? topicsParam.split(',').map((t) => t.trim()).filter(Boolean)
      : null;

    const match = { tradeSlug };
    if (topicIds && topicIds.length > 0) {
      match.topicId = { $in: topicIds };
    }

    const courseSlug = TRADE_SLUG_TO_COURSE_SLUG[tradeSlug];
    let hasFullAccess = false;
    if (req.user && courseSlug) {
      const course = await Course.findOne({ slug: courseSlug, isPublished: true }).select('_id');
      if (course && req.user.purchases) {
        const purchaseIds = req.user.purchases.map((id) => id.toString());
        hasFullAccess = purchaseIds.includes(course._id.toString());
      }
    }

    let questions;
    if (hasFullAccess) {
      questions = await PracticeQuestion.aggregate([
        { $match: match },
        { $sample: { size: limit } },
        {
          $project: {
            _id: 1,
            tradeSlug: 1,
            topicId: 1,
            topicLabel: 1,
            question: 1,
            options: 1,
            correctIndex: 1,
            explanation: 1,
          },
        },
      ]);
    } else {
      const freeLimit = Math.min(limit, 20);
      questions = await PracticeQuestion.aggregate([
        { $match: match },
        { $sort: { order: 1, _id: 1 } },
        { $limit: freeLimit },
        {
          $project: {
            _id: 1,
            tradeSlug: 1,
            topicId: 1,
            topicLabel: 1,
            question: 1,
            options: 1,
            correctIndex: 1,
            explanation: 1,
          },
        },
      ]);
    }

    const normalized = questions.map((q) => ({
      id: q._id.toString(),
      tradeSlug: q.tradeSlug,
      topicId: q.topicId,
      topicLabel: q.topicLabel,
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation || '',
    }));

    res.json({ questions: normalized });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to load questions' });
  }
});

/**
 * GET /api/practice/:tradeSlug/readiness-questions
 * Returns a deterministic set of questions for the readiness test: 20% of full exam count,
 * with proportional representation from each topic. Same questions every time (order/_id).
 */
router.get('/:tradeSlug/readiness-questions', async (req, res) => {
  try {
    const { tradeSlug } = req.params;
    const examCount = EXAM_QUESTIONS_BY_TRADE[tradeSlug] ?? 100;
    const readinessCount = Math.min(
      Math.max(10, Math.ceil(0.2 * examCount)),
      200
    );

    const topicCounts = await PracticeQuestion.aggregate([
      { $match: { tradeSlug } },
      { $group: { _id: '$topicId', topicLabel: { $first: '$topicLabel' }, count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]);

    const totalInDb = topicCounts.reduce((s, t) => s + t.count, 0);
    if (totalInDb === 0) {
      return res.json({ questions: [] });
    }

    const takePerTopic = topicCounts.map((t) => ({
      topicId: t._id,
      topicLabel: t.topicLabel,
      take: Math.max(0, Math.floor((t.count / totalInDb) * readinessCount)),
    }));
    let assigned = takePerTopic.reduce((s, t) => s + t.take, 0);
    const byCountDesc = [...takePerTopic].sort((a, b) => b.take - a.take);
    for (let i = 0; assigned < readinessCount && i < byCountDesc.length; i++) {
      byCountDesc[i].take += 1;
      assigned += 1;
    }

    const allQuestions = [];
    for (const { topicId, take } of takePerTopic) {
      if (take === 0) continue;
      const topicQs = await PracticeQuestion.aggregate([
        { $match: { tradeSlug, topicId } },
        { $sort: { order: 1, _id: 1 } },
        { $limit: take },
        {
          $project: {
            _id: 1,
            tradeSlug: 1,
            topicId: 1,
            topicLabel: 1,
            question: 1,
            options: 1,
            correctIndex: 1,
            explanation: 1,
          },
        },
      ]);
      allQuestions.push(...topicQs);
    }

    const byTopicThenOrder = allQuestions.sort((a, b) => {
      if (a.topicId !== b.topicId) return (a.topicId || '').localeCompare(b.topicId || '');
      return (a.order ?? 0) - (b.order ?? 0) || (a._id.toString().localeCompare(b._id.toString()));
    });

    const normalized = byTopicThenOrder.map((q) => ({
      id: q._id.toString(),
      tradeSlug: q.tradeSlug,
      topicId: q.topicId,
      topicLabel: q.topicLabel,
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation || '',
    }));

    res.json({ questions: normalized });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to load readiness questions' });
  }
});

/**
 * GET /api/practice/:tradeSlug/topics
 * Returns list of topics (topicId, topicLabel) for a trade for filtering/display.
 */
router.get('/:tradeSlug/topics', async (req, res) => {
  try {
    const { tradeSlug } = req.params;
    const topics = await PracticeQuestion.aggregate([
      { $match: { tradeSlug } },
      { $group: { _id: '$topicId', topicLabel: { $first: '$topicLabel' } } },
      { $sort: { _id: 1 } },
      { $project: { topicId: '$_id', topicLabel: 1, _id: 0 } },
    ]);
    res.json({ topics });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to load topics' });
  }
});

/**
 * GET /api/practice/:tradeSlug/count
 * Returns total question count for a trade (for display on practice list page).
 */
router.get('/:tradeSlug/count', async (req, res) => {
  try {
    const { tradeSlug } = req.params;
    const count = await PracticeQuestion.countDocuments({ tradeSlug });
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to get count' });
  }
});

export default router;
