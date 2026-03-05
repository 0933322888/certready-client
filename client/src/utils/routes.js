/**
 * Centralized SEO-friendly route paths. Use these for all internal links and redirects.
 */
const BASE = 'https://www.certready.ca';

export const paths = {
  home: '/',
  redSealExam: '/red-seal-exam',
  trades: '/trades',
  trade: (slug) => `/trades/${slug}`,
  practiceTests: '/practice-tests',
  practiceTest: (slug) => `/practice-tests/${slug}`,
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
  practiceTests: `${BASE}/practice-tests`,
  practiceTest: (slug) => `${BASE}/practice-tests/${slug}`,
  guides: `${BASE}/guides`,
  guideArticle: (slug) => `${BASE}/guides/${slug}`,
  blog: `${BASE}/blog`,
  tools: {
    readinessTest: `${BASE}/tools/red-seal-readiness-test`,
  },
};

export default paths;
