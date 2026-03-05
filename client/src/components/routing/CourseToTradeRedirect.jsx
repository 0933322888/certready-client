import { Navigate, useParams } from 'react-router-dom';
import { getGuideSlugFromCourseSlug } from '../../data/tradeGuides';

/**
 * Redirects /courses/:slug to /trades/:tradeSlug for SEO-friendly URLs.
 * If no guide exists for the course slug, redirect to /trades.
 */
export function CourseToTradeRedirect() {
  const { slug } = useParams();
  const tradeSlug = getGuideSlugFromCourseSlug(slug);
  const to = tradeSlug ? `/trades/${tradeSlug}` : '/trades';
  return <Navigate to={to} replace />;
}
