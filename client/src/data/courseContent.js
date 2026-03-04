import { hairstylistCourse as courseEn } from './hairstylistCourse';
import { hairstylistCourseFr } from './hairstylistCourse.fr';
import hairstylistCourseRU from './hairstylistCourse.ru';
import plumberCourseData from './plumberCourse';
import plumberCourseDataFR from './plumberCourse.fr';
import plumberCourseDataRU from './plumberCourse.ru';
import electricianCourseData from './constructionElectrician';
import electricianCourseDataFR from './constructionElectrician.fr';

const coursesByLang = {
  en: {
    'hairstylist-332a': courseEn,
    'plumber-306a': plumberCourseData,
    'construction-electrician-309a': electricianCourseData,
  },
  fr: {
    'hairstylist-332a': hairstylistCourseFr,
    'plumber-306a': plumberCourseDataFR,
    'construction-electrician-309a': electricianCourseDataFR,
  },
  ru: {
    'hairstylist-332a': hairstylistCourseRU,
    'plumber-306a': plumberCourseDataRU,
    'construction-electrician-309a': electricianCourseData,
  },
};

/** All course slugs available for purchase (single source of truth) */
export const COURSE_SLUGS = ['hairstylist-332a', 'plumber-306a', 'construction-electrician-309a'];

/**
 * Get course data for a given slug and language.
 * Uses base language code (e.g. 'en' from 'en-US'). Falls back to English if not available.
 */
export function getCourse(slug, lang = 'en') {
  const baseLang = (lang && String(lang).split('-')[0]) || 'en';
  const langCourses = coursesByLang[baseLang] || coursesByLang.en;
  return langCourses[slug] || coursesByLang.en[slug] || null;
}

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'ru', label: 'Русский' },
];
