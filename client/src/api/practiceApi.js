/**
 * Practice question engine API. Loads questions per trade from the backend.
 */
import api from '../utils/api';

const PRACTICE_SESSION_KEY = 'tradePrep_practiceSession';

/**
 * @param {string} tradeSlug
 * @param {{ limit?: number, topics?: string[] }} [opts]
 * @returns {Promise<{ questions: Array<{ id: string, tradeSlug: string, topicId: string, topicLabel: string, question: string, options: string[], correctIndex: number, explanation: string }> }>}
 */
export async function getQuestions(tradeSlug, opts = {}) {
  const params = new URLSearchParams();
  if (opts.limit) params.set('limit', String(opts.limit));
  if (opts.topics?.length) params.set('topics', opts.topics.join(','));
  const url = `/practice/${encodeURIComponent(tradeSlug)}/questions${params.toString() ? `?${params}` : ''}`;
  const { data } = await api.get(url);
  return data;
}

/**
 * @param {string} tradeSlug
 * @returns {Promise<{ topics: Array<{ topicId: string, topicLabel: string }> }>}
 */
export async function getTopics(tradeSlug) {
  const { data } = await api.get(`/practice/${encodeURIComponent(tradeSlug)}/topics`);
  return data;
}

/**
 * @param {string} tradeSlug
 * @returns {Promise<{ count: number }>}
 */
export async function getQuestionCount(tradeSlug) {
  const { data } = await api.get(`/practice/${encodeURIComponent(tradeSlug)}/count`);
  return data;
}

/**
 * Load session from localStorage for "continue later".
 * @returns {{ tradeSlug: string, questions: Array<{ id: string, topicId: string, topicLabel: string, question: string, options: string[], correctIndex: number, explanation: string }>, answers: Record<string, { selectedIndex: number, isCorrect: boolean }> } | null}
 */
export function loadSession() {
  try {
    const raw = localStorage.getItem(PRACTICE_SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Persist session to localStorage (includes questions so user can continue later).
 * @param {string} tradeSlug
 * @param {Array<{ id: string }>} questions
 * @param {Record<string, { selectedIndex: number, isCorrect: boolean }>} answers
 */
export function saveSession(tradeSlug, questions, answers) {
  try {
    localStorage.setItem(
      PRACTICE_SESSION_KEY,
      JSON.stringify({ tradeSlug, questions, answers })
    );
  } catch (e) {
    console.warn('Could not save practice session', e);
  }
}

/**
 * Clear persisted session (e.g. after completing or starting new).
 */
export function clearSession() {
  try {
    localStorage.removeItem(PRACTICE_SESSION_KEY);
  } catch {}
}
