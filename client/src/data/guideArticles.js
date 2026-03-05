/**
 * Educational guide articles at /guides/:slug (topic-based, not trade-specific).
 * Used for SEO content like how-to-pass, exam-format, exam-cost.
 */

export const GUIDE_ARTICLE_SLUGS = [
  'how-to-pass-red-seal-exam',
  'red-seal-exam-format',
  'red-seal-exam-cost',
];

export const guideArticles = [
  {
    slug: 'how-to-pass-red-seal-exam',
    title: 'How to Pass the Red Seal Exam',
    seoTitle: 'How to Pass the Red Seal Exam — Study Tips & Strategy',
    excerpt: 'Practical strategies to prepare for and pass your Red Seal interprovincial exam on the first attempt.',
    description: 'Learn evidence-based study strategies, time management tips, and what to focus on when preparing for your Red Seal exam. Based on official Red Seal standards and real candidate feedback.',
    keywords: 'pass Red Seal exam, Red Seal study tips, Red Seal exam strategy, Canadian trades certification',
    sections: [
      { heading: 'Start with the exam blueprint', body: 'Every Red Seal exam is based on an occupational standard. Get the official blueprint for your trade and align your study plan with the exam weighting. Focus more time on areas that carry higher percentages.' },
      { heading: 'Use practice questions under exam conditions', body: 'Practice with timed, multiple-choice questions that mirror the real exam. This builds speed and reduces anxiety. Review every answer—including the ones you got right—to reinforce concepts.' },
      { heading: 'Cover the theory and the application', body: 'Red Seal questions test both knowledge and application. Don’t just memorize definitions; practice applying rules (e.g. code sections, formulas) to scenarios you might see on the exam.' },
      { heading: 'Manage your time on exam day', body: 'Plan to spend a similar amount of time per question. If you’re stuck, mark it and move on. Use any remaining time to review marked questions rather than second-guessing every answer.' },
    ],
  },
  {
    slug: 'red-seal-exam-format',
    title: 'Red Seal Exam Format',
    seoTitle: 'Red Seal Exam Format — What to Expect on Test Day',
    excerpt: 'What the Red Seal interprovincial exam looks like: question types, length, pass mark, and how it’s administered.',
    description: 'A clear overview of the Red Seal exam format: number of questions, time allowed, pass mark, and how the exam is delivered. Helps you know what to expect before you sit the exam.',
    keywords: 'Red Seal exam format, Red Seal exam structure, interprovincial exam format, Red Seal questions',
    sections: [
      { heading: 'Multiple-choice format', body: 'The Red Seal exam is multiple-choice. The number of questions and time allowed vary by trade (e.g. 100–125 questions). Check your trade’s official documentation for exact figures.' },
      { heading: 'Pass mark', body: 'The standard pass mark for Red Seal exams is 70%. You must achieve at least 70% to receive your Red Seal endorsement.' },
      { heading: 'Computer-based delivery', body: 'Exams are typically delivered on computer at approved test centres. You may receive a formula or reference sheet for some trades—familiarize yourself with it beforehand.' },
      { heading: 'No negative marking', body: 'There is no penalty for wrong answers. If you’re unsure, it’s better to choose your best guess than to leave a question blank.' },
    ],
  },
  {
    slug: 'red-seal-exam-cost',
    title: 'Red Seal Exam Cost',
    seoTitle: 'Red Seal Exam Cost — Fees and What’s Included',
    excerpt: 'What it costs to write the Red Seal exam and what fees to expect in your province or territory.',
    description: 'An overview of Red Seal exam fees, who sets them, and what’s typically included. Costs vary by province and trade—here’s what you need to know.',
    keywords: 'Red Seal exam cost, Red Seal exam fee, interprovincial exam price, Red Seal certification cost',
    sections: [
      { heading: 'Fees vary by province', body: 'Exam fees are set by each province and territory. The cost to write the Red Seal exam differs across Canada. Check your provincial apprenticeship or trades authority for the current fee.' },
      { heading: 'What’s usually included', body: 'The fee typically covers the exam administration. It does not usually include study materials, prep courses, or re-writes if you don’t pass the first time.' },
      { heading: 'Re-write fees', body: 'If you don’t pass, you can usually re-write the exam. There is often a separate fee for each attempt. Preparing thoroughly the first time can save you time and money.' },
      { heading: 'Invest in preparation', body: 'Many candidates invest in a structured prep course or practice questions. The one-time cost of quality study materials can be far less than the cost and delay of multiple exam attempts.' },
    ],
  },
];

export function getGuideArticleBySlug(slug) {
  return guideArticles.find((a) => a.slug === slug) || null;
}

export function isGuideArticleSlug(slug) {
  return GUIDE_ARTICLE_SLUGS.includes(slug);
}
