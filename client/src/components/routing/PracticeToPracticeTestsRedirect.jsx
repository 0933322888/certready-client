import { Navigate, useParams } from 'react-router-dom';

/** Redirects /practice/:tradeSlug to /practice-tests/:tradeSlug */
export function PracticeToPracticeTestsRedirect() {
  const { tradeSlug } = useParams();
  return <Navigate to={`/practice-tests/${tradeSlug}`} replace />;
}
