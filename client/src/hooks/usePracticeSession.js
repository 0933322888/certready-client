import { useState, useCallback, useMemo, useEffect } from 'react';
import { saveSession, clearSession as clearStorage } from '../api/practiceApi';

/**
 * Computes topic-level stats from questions and answers.
 * @param {Array<{ id: string, topicId: string, topicLabel: string }>} questions
 * @param {Record<string, { isCorrect: boolean }>} answers
 * @returns {Array<{ topicId: string, topicLabel: string, correct: number, total: number, percentage: number }>}
 */
export function getTopicStats(questions, answers) {
  const byTopic = new Map();
  for (const q of questions) {
    const cur = byTopic.get(q.topicId) || { topicId: q.topicId, topicLabel: q.topicLabel, correct: 0, total: 0 };
    cur.total += 1;
    const a = answers[q.id];
    if (a) cur.correct += a.isCorrect ? 1 : 0;
    byTopic.set(q.topicId, cur);
  }
  return Array.from(byTopic.values()).map((t) => ({
    ...t,
    percentage: t.total > 0 ? Math.round((t.correct / t.total) * 100) : 0,
  }));
}

const DEFAULT_LIMIT = 20;
const WEAK_THRESHOLD = 50;
const STRONG_THRESHOLD = 70;

/**
 * @param {Array<{ topicId: string, topicLabel: string, correct: number, total: number, percentage: number }>} topicStats
 * @returns {{ strong: string[], weak: string[] }}
 */
export function getStrongAndWeakTopics(topicStats) {
  const strong = topicStats.filter((t) => t.total >= 2 && t.percentage >= STRONG_THRESHOLD).map((t) => t.topicLabel);
  const weak = topicStats.filter((t) => t.total >= 1 && t.percentage < WEAK_THRESHOLD).map((t) => t.topicLabel);
  return { strong, weak };
}

/**
 * Hook to manage practice session state: questions, answers, progress, topic stats, and persistence.
 * @param {string} tradeSlug
 * @param {Array<{ id: string, topicId: string, topicLabel: string, question: string, options: string[], correctIndex: number, explanation: string }>} initialQuestions
 * @param {Record<string, { selectedIndex: number, isCorrect: boolean }>} [initialAnswers]
 */
export function usePracticeSession(tradeSlug, initialQuestions = [], initialAnswers = {}) {
  const [questions, setQuestions] = useState(initialQuestions);
  const [answers, setAnswers] = useState(initialAnswers);

  const questionsAnswered = Object.keys(answers).length;
  const correctAnswers = Object.values(answers).filter((a) => a.isCorrect).length;
  const accuracyPercentage = questionsAnswered > 0 ? Math.round((correctAnswers / questionsAnswered) * 100) : 0;
  const isComplete = questions.length > 0 && questionsAnswered >= questions.length;

  const topicStats = useMemo(
    () => getTopicStats(questions, answers),
    [questions, answers]
  );
  const { strong: strongTopics, weak: weakTopics } = useMemo(
    () => getStrongAndWeakTopics(topicStats),
    [topicStats]
  );

  const setAnswer = useCallback(
    (questionId, selectedIndex, isCorrect) => {
      setAnswers((prev) => {
        const next = { ...prev, [questionId]: { selectedIndex, isCorrect } };
        return next;
      });
    },
    []
  );

  const startSession = useCallback((newQuestions) => {
    setQuestions(newQuestions);
    setAnswers({});
  }, []);

  const restoreSession = useCallback((savedQuestions, savedAnswers) => {
    setQuestions(savedQuestions);
    setAnswers(savedAnswers || {});
  }, []);

  const clearSession = useCallback(() => {
    setQuestions([]);
    setAnswers({});
    clearStorage();
  }, []);

  // Persist to localStorage when answers change (for "continue later")
  useEffect(() => {
    if (!tradeSlug || questions.length === 0) return;
    saveSession(tradeSlug, questions, answers);
  }, [tradeSlug, questions, answers]);

  return {
    questions,
    answers,
    setAnswer,
    startSession,
    restoreSession,
    clearSession,
    questionsAnswered,
    correctAnswers,
    accuracyPercentage,
    isComplete,
    topicStats,
    strongTopics,
    weakTopics,
  };
}

export { WEAK_THRESHOLD, STRONG_THRESHOLD };
