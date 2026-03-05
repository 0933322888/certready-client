/**
 * Centralized SEO-friendly route paths. Use these for all internal links and redirects.
 */
const BASE = 'https://www.certready.ca';

export const paths = {
  home: '/',
  redSealExam: '/red-seal-exam',
  trades: '/trades',
  trade: (slug) => `/trades/${slug}`,
  /** Trade guide page (exam overview, MWAs, sample questions) — canonical URL for the guide */
  tradeGuide: (slug) => `/trades/${slug}-red-seal`,
  practiceTests: '/practice-tests',
  practiceTest: (slug) => `/practice-tests/${slug}`,
  /** SEO landing: free practice questions by trade (e.g. /electrician-red-seal-practice-questions) */
  freePracticeLanding: (tradeKey) => `/${tradeKey}-red-seal-practice-questions`,
  mockExam: (slug) => `/practice-tests/${slug}/mock-exam`,
  guides: '/guides',
  guideArticle: (slug) => `/guides/${slug}`,
  tools: {
    readinessTest: '/tools/red-seal-readiness-test',
  },
  blog: '/blog',
  // Legacy (for redirects and learn flow)
  courses: '/courses',
  course: (slug) => `/courses/${slug}`,
  learn: (slug) => `/learn/${slug}`,
  practice: (slug) => `/practice/${slug}`,
  login: '/login',
  register: '/register',
  about: '/about',
  contact: '/contact',
  dashboard: '/dashboard',
  profile: '/profile',
  checkout: {
    success: '/checkout/success',
    cancel: '/checkout/cancel',
  },
};

export const fullUrl = {
  home: `${BASE}/`,
  redSealExam: `${BASE}/red-seal-exam`,
  trades: `${BASE}/trades`,
  trade: (slug) => `${BASE}/trades/${slug}`,
  tradeGuide: (slug) => `${BASE}/trades/${slug}-red-seal`,
  practiceTests: `${BASE}/practice-tests`,
  practiceTest: (slug) => `${BASE}/practice-tests/${slug}`,
  freePracticeLanding: (tradeKey) => `${BASE}/${tradeKey}-red-seal-practice-questions`,
  mockExam: (slug) => `${BASE}/practice-tests/${slug}/mock-exam`,
  guides: `${BASE}/guides`,
  guideArticle: (slug) => `${BASE}/guides/${slug}`,
  blog: `${BASE}/blog`,
  tools: {
    readinessTest: `${BASE}/tools/red-seal-readiness-test`,
  },
};

export default paths;
