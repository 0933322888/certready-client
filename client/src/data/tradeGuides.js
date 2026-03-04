/**
 * Trade guide content for SEO pages at /guides/:tradeSlug.
 * Add one object per trade — everything else (TradeGuidePage, sitemap) is automatic.
 */

export const tradeGuides = [
  {
    slug: 'hairstylist',
    courseSlug: 'hairstylist-332a',
    tradeName: 'Hairstylist',
    tradeCode: '332A',
    examQuestions: 100,
    passMark: 70,
    apprenticeshipHours: 3640,
    apprenticeshipLevels: 2,
    examWeighting: [
      { area: 'Workplace Practices', percent: 10 },
      { area: 'Hair and Scalp', percent: 15 },
      { area: 'Haircutting', percent: 20 },
      { area: 'Hair Styling', percent: 15 },
      { area: 'Chemical Texture Services', percent: 20 },
      { area: 'Hair Colouring and Lightening', percent: 20 },
    ],
    faqs: [
      {
        question: 'How many questions are on the Red Seal Hairstylist exam?',
        answer: 'The Red Seal Hairstylist interprovincial exam contains 100 multiple-choice questions. You must achieve a minimum of 70% (70 correct answers) to pass.',
      },
      {
        question: 'What is the hardest part of the Red Seal Hairstylist exam?',
        answer: 'Chemical services (perms, relaxers) and hair colouring and lightening together account for 40% of the exam, making them the highest-weighted and most challenging sections for most candidates.',
      },
      {
        question: 'How long is the Hairstylist apprenticeship in Ontario?',
        answer: 'The Skilled Trades Ontario Hairstylist (332A) apprenticeship requires 3,640 hours of on-the-job training across 2 levels, plus in-school technical training.',
      },
      {
        question: 'Can I use study materials during the Red Seal exam?',
        answer: 'No. The Red Seal interprovincial exam is closed-book. You must rely on your knowledge and preparation.',
      },
    ],
    topStudyTips: [
      'Focus on chemical services first — perms and relaxers together are 20% of the exam',
      'Memorize the pH scale and how it applies to each chemical service',
      'Understand the difference between oxidation and reduction in chemical services',
      'Know every WHMIS hazard class and which salon products fall into each',
      'Practice all formulation calculations — mixing ratios appear in multiple questions',
    ],
  },
  {
    slug: 'plumber',
    courseSlug: 'plumber-306a',
    tradeName: 'Plumber',
    tradeCode: '306A',
    examQuestions: 125,
    passMark: 70,
    apprenticeshipHours: 7200,
    apprenticeshipLevels: 4,
    examWeighting: [
      { area: 'Common Occupational Skills', percent: 11 },
      { area: 'Tube, Tubing and Pipe', percent: 10 },
      { area: 'DWV Systems', percent: 26 },
      { area: 'Water Service and Distribution', percent: 19 },
      { area: 'Fixtures, Appliances and Water Treatment', percent: 13 },
      { area: 'Low-Pressure Steam and Hydronic Systems', percent: 13 },
      { area: 'Specialized Systems', percent: 8 },
    ],
    faqs: [
      {
        question: 'How many questions are on the Red Seal Plumber exam?',
        answer: 'The Red Seal Plumber interprovincial exam contains 125 multiple-choice questions. A minimum score of 70% is required to pass.',
      },
      {
        question: 'What is the most important topic on the Red Seal Plumber exam?',
        answer: 'DWV (Drainage, Waste and Vent) systems carry the highest weighting at 26% of the exam — roughly 33 questions. This is the single most important area to study.',
      },
      {
        question: 'How long is the Plumber apprenticeship in Canada?',
        answer: 'The Plumber Red Seal apprenticeship requires 7,200 hours of training across 4 levels, combining on-the-job experience with in-school technical training.',
      },
      {
        question: 'Is a formula sheet provided during the Red Seal Plumber exam?',
        answer: 'An official Plumber Formulas reference sheet is provided. Familiarize yourself with all formulas in advance so you can apply them quickly under exam conditions.',
      },
    ],
    topStudyTips: [
      'Prioritize DWV systems — at 26% it is by far the most tested area',
      'Memorize all hydronic formulas: Btuh = gpm × 500 × ΔT and its variations',
      'Understand cross connection control thoroughly — it appears in both water and fixture sections',
      'Practice metric/imperial conversions using the official formula sheet',
      'Know all pipe joining methods and which materials they apply to',
    ],
  },
  {
    slug: 'construction-electrician',
    courseSlug: 'construction-electrician-309a',
    tradeName: 'Construction Electrician',
    tradeCode: '309A',
    examQuestions: 100,
    passMark: 70,
    apprenticeshipHours: 7200,
    apprenticeshipLevels: 4,
    examWeighting: [
      { area: 'Common Occupational Skills (MWA A)', percent: 12 },
      { area: 'Installation (MWA B)', percent: 26 },
      { area: 'Maintenance & Commissioning (MWA C)', percent: 34 },
      { area: 'Fault Diagnosis & Repair (MWA D)', percent: 18 },
      { area: 'Other (MWA E)', percent: 10 },
    ],
    faqs: [
      {
        question: 'How many questions are on the Red Seal Construction Electrician exam?',
        answer: 'The Red Seal Construction Electrician (309A) interprovincial exam contains 100 multiple-choice questions. A minimum score of 70% is required to pass.',
      },
      {
        question: 'What is the most important topic on the Red Seal Construction Electrician exam?',
        answer: 'MWA C (Maintenance & Commissioning) has the highest weighting at 34% of the exam — roughly 34 questions. MWA B (Installation) is next at 26%.',
      },
      {
        question: 'How long is the Construction Electrician apprenticeship in Canada?',
        answer: 'The Construction Electrician Red Seal apprenticeship requires 7,200 hours of training across 4 levels, combining on-the-job experience with in-school technical training.',
      },
      {
        question: 'Is the Canadian Electrical Code (CEC) referenced on the exam?',
        answer: 'Yes. The Red Seal exam is based on the Red Seal Occupational Standard and references the Canadian Electrical Code. Familiarity with CEC sections and application is essential.',
      },
    ],
    topStudyTips: [
      'Focus on MWA C first — at 34% it is the most tested area',
      'Know safety (PPE, arc flash, LOTO) and tools thoroughly — MWA A is 12%',
      'Memorize key CEC formulas and application (voltage drop, conduit fill, etc.)',
      'Understand commissioning and testing procedures for various systems',
      'Practice fault diagnosis scenarios across all system types',
    ],
  },
];

export function getGuideBySlug(slug) {
  return tradeGuides.find((g) => g.slug === slug) || null;
}

export function getGuideByCourseSlug(courseSlug) {
  return tradeGuides.find((g) => g.courseSlug === courseSlug) || null;
}

export function getAllGuideSlugs() {
  return tradeGuides.map((g) => g.slug);
}

/** Derive guide slug from course slug (e.g. hairstylist-332a -> hairstylist) for internal linking */
export function getGuideSlugFromCourseSlug(courseSlug) {
  const guide = getGuideByCourseSlug(courseSlug);
  return guide ? guide.slug : (courseSlug || '').split('-')[0] || null;
}
