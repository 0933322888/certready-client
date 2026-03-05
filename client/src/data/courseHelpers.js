/**
 * Shared helpers for any course that has the shape { parts: [{ chapters: [...] }] }.
 * Used by both hairstylist and plumber (and future) courses.
 */

/** Flatten all chapters across all parts */
export function getAllChapters(course) {
  if (!course?.parts) return [];
  return course.parts.flatMap((p) => p.chapters);
}

/** Get only the free preview chapters */
export function getFreeChapters(course) {
  return getAllChapters(course).filter((ch) => ch.isFree);
}

/** Find a chapter by its id */
export function getChapterById(id, course) {
  return getAllChapters(course).find((ch) => ch.id === id) || null;
}

/** Find which part a chapter belongs to */
export function getPartForChapter(chapterId, course) {
  if (!course?.parts) return null;
  return course.parts.find((p) => p.chapters.some((ch) => ch.id === chapterId)) || null;
}

/** Get the previous and next chapters (for navigation) */
export function getAdjacentChapters(chapterId, course) {
  const all = getAllChapters(course);
  const idx = all.findIndex((ch) => ch.id === chapterId);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 && idx >= 0 ? all[idx + 1] : null,
  };
}

/** Count total practice questions across all chapters (or course.totalQuestions when questions live in API) */
export function getTotalQuestions(course) {
  const fromChapters = getAllChapters(course).reduce((sum, ch) => sum + (ch.practiceQuestions?.length || 0), 0);
  return fromChapters > 0 ? fromChapters : (course?.totalQuestions ?? 0);
}
