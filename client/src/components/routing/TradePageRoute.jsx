import { useParams } from 'react-router-dom';
import TradePageTemplate from '../../pages/TradePageTemplate';
import TradeExamPage from '../../pages/TradeExamPage';
import NotFoundPage from '../../pages/NotFoundPage';
import { getTradeBySlug } from '../../data/tradeGuideContent';

/**
 * Dispatches /trades/:tradeSlug:
 * - If tradeSlug ends with "-red-seal", show the trade guide template (from tradeGuideContent).
 * - Otherwise show the purchase/course page (TradeExamPage).
 */
export default function TradePageRoute() {
  const { tradeSlug } = useParams();
  const isGuideUrl = tradeSlug && tradeSlug.endsWith('-red-seal');
  const normalizedSlug = isGuideUrl ? tradeSlug.replace(/-red-seal$/, '') : tradeSlug;
  const trade = isGuideUrl ? getTradeBySlug(normalizedSlug) : null;

  if (isGuideUrl && trade) {
    return <TradePageTemplate trade={trade} />;
  }
  if (isGuideUrl && !trade) {
    return <NotFoundPage />;
  }
  return <TradeExamPage />;
}
