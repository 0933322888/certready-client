/**
 * Study plan phases per course (trade).
 * Used to generate weekly/daily plans: each phase becomes one or more weeks/days.
 */
export const STUDY_PLAN_PHASES = {
  'construction-electrician-309a': [
    { title: 'Safety and fundamentals', key: 'safety-fundamentals' },
    { title: 'Core systems (distribution, protection, grounding)', key: 'core-systems' },
    { title: 'Wiring, lighting, and controls', key: 'wiring-controls' },
    { title: 'Practice exams and review', key: 'practice-exams' },
  ],
  'carpenter-403a': [
    { title: 'Foundations, safety, and layout', key: 'foundations-layout' },
    { title: 'Concrete and framing', key: 'concrete-framing' },
    { title: 'Exterior and interior finishing', key: 'finishing' },
    { title: 'Renovations and practice exams', key: 'practice-exams' },
  ],
  'plumber-306a': [
    { title: 'Safety and fundamentals', key: 'safety-fundamentals' },
    { title: 'Pipe preparation and joining', key: 'pipe-joining' },
    { title: 'Drainage, water service, and systems', key: 'systems' },
    { title: 'Practice exams and formulas review', key: 'practice-exams' },
  ],
  'hairstylist-332a': [
    { title: 'Professional foundations and safety', key: 'foundations' },
    { title: 'Hair & scalp science and cutting', key: 'core' },
    { title: 'Chemical services', key: 'chemical' },
    { title: 'Practice exams and exam strategy', key: 'practice-exams' },
  ],
};

/** Course slugs that support study plans (must match COURSE_SLUGS on client) */
export const STUDY_PLAN_COURSE_SLUGS = Object.keys(STUDY_PLAN_PHASES);

/** Threshold: if days until exam <= this, use daily plan; otherwise weekly */
export const DAYS_FOR_DAILY_PLAN = 21;
