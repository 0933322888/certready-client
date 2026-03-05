import { useParams } from 'react-router-dom';
import { getGuideArticleBySlug } from '../data/guideArticles';
import { getGuideBySlug } from '../data/tradeGuides';
import GuideArticlePage from './GuideArticlePage';
import TradeGuidePage from './TradeGuidePage';
import NotFoundPage from './NotFoundPage';

/**
 * Dispatches /guides/:slug to either a topic article (e.g. how-to-pass-red-seal-exam)
 * or a trade-specific guide (e.g. construction-electrician).
 */
export default function GuidesSlugPage() {
  const { slug } = useParams();
  const article = getGuideArticleBySlug(slug);
  const guide = getGuideBySlug(slug);

  if (article) {
    return <GuideArticlePage article={article} />;
  }
  if (guide) {
    return <TradeGuidePage tradeSlug={slug} />;
  }
  return <NotFoundPage />;
}
