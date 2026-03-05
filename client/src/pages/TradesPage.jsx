import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import { getTradesPageSEO, getBreadcrumbStructuredData } from '../utils/seo';
import { ALL_TRADES } from '../data/tradeGuideContent';
import { paths } from '../utils/routes';

/** Sort: live guides first (alphabetically by name), then coming soon (alphabetically by name) */
function getSortedTrades() {
  const live = ALL_TRADES.filter((t) => t.live).sort((a, b) => a.name.localeCompare(b.name));
  const comingSoon = ALL_TRADES.filter((t) => !t.live).sort((a, b) => a.name.localeCompare(b.name));
  return [...live, ...comingSoon];
}

export default function TradesPage() {
  const { t } = useTranslation();
  const sortedTrades = getSortedTrades();
  const seo = getTradesPageSEO();
  const breadcrumbs = [
    { name: t('nav.home'), url: paths.home },
    { name: t('tradesPage.breadcrumb'), url: paths.trades },
  ];

  return (
    <>
      <SEO
        {...seo}
        structuredData={[getBreadcrumbStructuredData(breadcrumbs)].filter(Boolean)}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbs} />
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            {t('tradesPage.title')}
          </h1>
          <p className="text-lg text-text-muted max-w-2xl">
            {t('tradesPage.subtitle')}
          </p>
          <p className="mt-3 text-text-muted text-sm">
            <span className="text-accent">●</span> {t('tradesPage.liveGuidesHint')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {sortedTrades.map((trade) =>
            trade.live ? (
              <Link
                key={trade.slug}
                to={paths.tradeGuide(trade.slug)}
                className="flex items-center justify-between gap-2 p-3 rounded-xl border border-border bg-surface hover:border-accent hover:bg-accent/5 transition-colors"
                aria-label={`${trade.name} Red Seal guide`}
              >
                <div className="min-w-0">
                  <div className="text-sm font-medium text-text-primary truncate">{trade.name}</div>
                  <div className="text-xs text-text-muted">{trade.code}</div>
                </div>
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" aria-hidden />
              </Link>
            ) : (
              <div
                key={trade.slug}
                className="flex items-center justify-between gap-2 p-3 rounded-xl border border-border bg-surface opacity-60"
                aria-label={`${trade.name} Red Seal guide — coming soon`}
              >
                <div className="min-w-0">
                  <div className="text-sm font-medium text-text-primary truncate">{trade.name}</div>
                  <div className="text-xs text-text-muted">{trade.code}</div>
                </div>
                <span className="w-2 h-2 rounded-full bg-text-dim shrink-0" aria-hidden />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
