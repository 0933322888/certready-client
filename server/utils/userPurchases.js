/**
 * Whether the user already owns a course (handles ObjectId / string / populated docs).
 */
export function userOwnsCourse(user, courseId) {
  if (!user?.purchases?.length || !courseId) return false;
  const id = courseId.toString();
  return user.purchases.some((entry) => {
    if (!entry) return false;
    if (typeof entry === 'string') return entry === id;
    if (entry._id) return entry._id.toString() === id;
    return entry.toString() === id;
  });
}
