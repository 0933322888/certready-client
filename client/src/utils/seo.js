/**
 * SEO utilities — trade-agnostic. All metadata is generated from course/guide data.
 * Adding a new trade course automatically gets correct SEO via getCoursePageSEO(course).
 */

export function getCoursePageSEO(course) {
  if (!course) return null;
  const tradeName = course.trade;
  const tradeCode = course.tradeCode || '';
  const totalChapters = course.totalChapters ?? 0;
  const totalQuestions = course.totalQuestions ?? 0;

  return {
    title: `${tradeName} Red Seal Exam Prep — ${tradeCode} Study Guide`,
    description: `Prepare for your ${tradeName} Red Seal certification exam with confidence. ${totalChapters} chapters, ${totalQuestions}+ practice questions, and a full mock exam. Based on the official ${tradeCode} standard. Study at your own pace — one-time purchase, lifetime access.`,
    keywords: `${tradeName}, Red Seal, ${tradeCode}, exam prep, study guide, practice questions, certification, Canadian trades`,
    canonical: `/courses/${course.slug}`,
    ogType: 'product',
    ogImage: `/og-courses/${course.slug}.png`,
    structuredData: getCourseStructuredData(course),
  };
}

export function getLearnPageSEO(course, currentChapter) {
  if (!course || !currentChapter) return null;
  const tradeName = course.trade;
  const estimatedMinutes = currentChapter.estimatedMinutes ?? 15;

  return {
    title: `${currentChapter.title} — ${tradeName} Exam Prep`,
    description: `Study ${currentChapter.title} for your ${tradeName} Red Seal exam. ${estimatedMinutes} min read with practice questions and explanations.`,
    keywords: `${currentChapter.title}, ${tradeName}, Red Seal, exam prep, study guide`,
    canonical: `/learn/${course.slug}`,
    noIndex: true,
  };
}

export function getHomePageSEO() {
  return {
    title: 'Red Seal Exam Prep for Canadian Trades — Study Guides & Practice Questions',
    description: 'CertReady offers comprehensive Red Seal exam preparation courses for Canadian trades certification candidates. Practice questions, study guides, mock exams. Pass first try.',
    keywords: 'Red Seal, Canadian trades, exam prep, certification, practice questions, study guide, mock exam, CertReady, Sceau rouge',
    canonical: '/',
  };
}

/** Guide object: { tradeName, slug, ... } or { name, slug, ... } */
export function getTradeGuideSEO(guide) {
  if (!guide) return null;
  const tradeName = guide.tradeName || guide.name;

  return {
    title: `${tradeName} Red Seal Exam — Complete Study Guide`,
    description: `Everything you need to know about the ${tradeName} Red Seal interprovincial exam. Exam weighting, what to study, pass rates, and free practice questions.`,
    keywords: `${tradeName}, Red Seal, study guide, interprovincial exam, exam weighting, Canadian trades, certification`,
    canonical: `/guides/${guide.slug}`,
  };
}

export function getCourseStructuredData(course) {
  if (!course) return null;
  const price = typeof course.price === 'number' ? (course.price / 100).toFixed(2) : '0.00';

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description || `${course.trade} Red Seal exam preparation course`,
    provider: {
      '@type': 'Organization',
      name: 'CertReady',
      sameAs: 'https://www.certready.ca',
    },
    educationalLevel: 'Professional Certification',
    about: {
      '@type': 'Thing',
      name: `${course.trade} Red Seal Certification`,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Online',
      instructor: {
        '@type': 'Organization',
        name: 'CertReady',
      },
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'CAD',
      availability: 'https://schema.org/InStock',
      url: `https://www.certready.ca/courses/${course.slug}`,
    },
    numberOfCredits: course.totalChapters ?? 0,
    totalHistoricalEnrollment: null,
  };
}

export function getOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CertReady',
    url: 'https://www.certready.ca',
    description: 'Online exam preparation courses for Canadian Red Seal trades certification candidates',
    sameAs: [],
  };
}

/** WebSite schema — helps Google show a proper site name (e.g. "CertReady — Red Seal Exam Prep") instead of the domain in search results. */
export function getWebSiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CertReady — Red Seal Exam Prep',
    alternateName: 'CertReady',
    url: 'https://www.certready.ca',
    description: 'Comprehensive Red Seal exam preparation for Canadian trades. Study guides, practice questions, and mock exams.',
    publisher: {
      '@type': 'Organization',
      name: 'CertReady',
      url: 'https://www.certready.ca',
    },
  };
}

export function getFAQStructuredData(faqs) {
  if (!faqs || !faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/** items = [{ name: 'Home', url: '/' }, { name: 'Courses', url: '/courses' }, ...] */
export function getBreadcrumbStructuredData(items) {
  if (!items || !items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.certready.ca${item.url}`,
    })),
  };
}

/** SEO for All Courses page */
export function getAllCoursesPageSEO() {
  return {
    title: 'Red Seal Exam Prep Courses — All Trades',
    description: "Browse CertReady's Red Seal exam preparation courses for Canadian trades. Hairstylist (332A), Plumber (306A), and more. One-time purchase, lifetime access, free first 2 chapters.",
    keywords: 'Red Seal courses, exam prep, Canadian trades, Hairstylist, Plumber, 332A, 306A, certification, study guide',
    canonical: '/courses',
  };
}

/** SEO for free practice page — pass tradeName, tradeCode, tradeSlug, questionCount */
export function getPracticePageSEO({ tradeName, tradeCode, tradeSlug, questionCount = 5 }) {
  return {
    title: `Free ${tradeName} Red Seal Practice Questions`,
    description: `Try ${questionCount} free ${tradeName} Red Seal exam practice questions with full explanations. No account required. Based on the official ${tradeCode} standard.`,
    keywords: `${tradeName}, Red Seal, practice questions, free, ${tradeCode}, exam prep, Canadian trades`,
    canonical: `/practice-tests/${tradeSlug}`,
  };
}

/** SEO for /red-seal-exam */
export function getRedSealExamPageSEO() {
  return {
    title: 'Red Seal Exam — What It Is and How to Get Certified',
    description: 'Learn about the Red Seal interprovincial certification for Canadian trades: exam format, pass marks, which trades are covered, and how to prepare. Your guide to Red Seal certification.',
    keywords: 'Red Seal exam, Red Seal certification, interprovincial exam, Canadian trades, Sceau rouge, trade certification',
    canonical: '/red-seal-exam',
  };
}

/** SEO for /trades list */
export function getTradesPageSEO() {
  return {
    title: 'Red Seal Exam Prep by Trade — All Trades',
    description: 'Browse Red Seal exam preparation by trade: Hairstylist (332A), Plumber (306A), Construction Electrician (309A). Study guides, practice tests, and full exam prep. One-time purchase.',
    keywords: 'Red Seal by trade, exam prep trades, Hairstylist 332A, Plumber 306A, Construction Electrician 309A, Canadian trades certification',
    canonical: '/trades',
  };
}

/** SEO for /trades/:tradeSlug — trade exam page. Pass course and tradeSlug. */
export function getTradeExamPageSEO(course, tradeSlug) {
  if (!course || !tradeSlug) return null;
  const base = getCoursePageSEO(course);
  if (!base) return null;
  const tradeUrl = `https://www.certready.ca/trades/${tradeSlug}`;
  const structuredData = base.structuredData
    ? {
        ...base.structuredData,
        url: tradeUrl,
        offers: base.structuredData.offers
          ? { ...base.structuredData.offers, url: tradeUrl }
          : undefined,
      }
    : null;
  return {
    ...base,
    canonical: `/trades/${tradeSlug}`,
    structuredData,
  };
}

/** SEO for /practice-tests list */
export function getPracticeTestsListSEO() {
  return {
    title: 'Free Red Seal Practice Tests by Trade',
    description: 'Try free Red Seal practice questions for Hairstylist, Plumber, Construction Electrician, and more. No sign-up required. Get a feel for the real exam before you buy full prep.',
    keywords: 'Red Seal practice test, free practice questions, exam prep by trade, Canadian trades practice',
    canonical: '/practice-tests',
  };
}

/** SEO for guide articles (/guides/how-to-pass-red-seal-exam etc.) */
export function getGuideArticleSEO(article) {
  if (!article) return null;
  return {
    title: article.seoTitle || article.title,
    description: article.description || article.excerpt,
    keywords: article.keywords || 'Red Seal, exam prep, Canadian trades, study guide',
    canonical: `/guides/${article.slug}`,
    ogType: 'article',
  };
}

/** Article/Guide schema for educational content */
export function getArticleStructuredData(article) {
  if (!article) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description || article.excerpt,
    author: { '@type': 'Organization', name: 'CertReady' },
    publisher: { '@type': 'Organization', name: 'CertReady', url: 'https://www.certready.ca' },
    url: `https://www.certready.ca/guides/${article.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.certready.ca/guides/${article.slug}` },
  };
}

/** SEO for /blog */
export function getBlogPageSEO() {
  return {
    title: 'Red Seal Exam Prep Blog — Tips and Resources',
    description: 'Educational articles and tips for Red Seal exam preparation. Study strategies, trade-specific advice, and updates for Canadian trades certification candidates.',
    keywords: 'Red Seal blog, exam prep tips, Canadian trades, study tips, certification blog',
    canonical: '/blog',
  };
}

/** SEO for /tools/red-seal-readiness-test */
export function getReadinessTestSEO() {
  return {
    title: 'Red Seal Readiness Test — Are You Ready for the Exam?',
    description: 'Take our free Red Seal readiness quiz to see if you\'re prepared for the interprovincial exam. Quick assessment with personalized tips. No sign-up required.',
    keywords: 'Red Seal readiness test, exam readiness quiz, Red Seal practice, Canadian trades',
    canonical: '/tools/red-seal-readiness-test',
  };
}
