import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import { getGuideBySlug } from '../data/tradeGuides';
import {
  getTradeGuideSEO,
  getFAQStructuredData,
  getBreadcrumbStructuredData,
} from '../utils/seo';
import NotFoundPage from './NotFoundPage';
import { paths } from '../utils/routes';

export default function TradeGuidePage({ tradeSlug: tradeSlugProp }) {
  const { tradeSlug: paramTradeSlug, slug: paramSlug } = useParams();
  const tradeSlug = tradeSlugProp ?? paramTradeSlug ?? paramSlug;
  const { t } = useTranslation();
  const guide = getGuideBySlug(tradeSlug);

  if (!guide) {
    return <NotFoundPage />;
  }

  const seo = getTradeGuideSEO(guide);
  const breadcrumbs = [
    { name: t('tradeGuidePage.home'), url: paths.home },
    { name: t('tradeGuidePage.studyGuides'), url: paths.guides },
    { name: guide.tradeName, url: paths.guideArticle(guide.slug) },
  ];

  return (
    <>
      <SEO
        {...seo}
        structuredData={[
          getFAQStructuredData(guide.faqs),
          getBreadcrumbStructuredData(breadcrumbs),
        ].filter(Boolean)}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbs} />

        <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
          {t('tradeGuidePage.guideTitle', { tradeName: guide.tradeName, tradeCode: guide.tradeCode })}
        </h1>

        <p className="text-lg text-text-primary leading-relaxed mb-8">
          {t('tradeGuidePage.introParagraph', { tradeName: guide.tradeName, count: guide.examQuestions, passMark: guide.passMark })}
        </p>

        <section className="mb-12" aria-labelledby="exam-overview-heading">
          <h2 id="exam-overview-heading" className="text-2xl font-display font-bold text-text-primary mb-4">
            {t('tradeGuidePage.overviewHeading', { tradeName: guide.tradeName })}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left p-4 text-text-primary font-semibold">{t('tradeGuidePage.detail')}</th>
                  <th className="text-left p-4 text-text-primary font-semibold">{t('tradeGuidePage.value')}</th>
                </tr>
              </thead>
              <tbody className="text-text-primary">
                <tr className="border-t border-border"><td className="p-4">{t('tradeGuidePage.totalQuestions')}</td><td className="p-4">{guide.examQuestions}</td></tr>
                <tr className="border-t border-border"><td className="p-4">{t('tradeGuidePage.passMark')}</td><td className="p-4">{guide.passMark}%</td></tr>
                <tr className="border-t border-border"><td className="p-4">{t('tradeGuidePage.apprenticeshipHours')}</td><td className="p-4">{guide.apprenticeshipHours.toLocaleString()}</td></tr>
                <tr className="border-t border-border"><td className="p-4">{t('tradeGuidePage.apprenticeshipLevels')}</td><td className="p-4">{guide.apprenticeshipLevels}</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12" aria-labelledby="exam-weighting-heading">
          <h2 id="exam-weighting-heading" className="text-2xl font-display font-bold text-text-primary mb-4">
            {t('tradeGuidePage.examWeightingHeading', { tradeName: guide.tradeName })}
          </h2>
          <p className="text-text-muted mb-4">
            {t('tradeGuidePage.examWeightingSubtitle')}
          </p>
          <div className="space-y-2">
            {guide.examWeighting.map((row, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-1 text-text-primary">{row.area}</div>
                <div className="w-32 h-4 bg-surface-2 rounded overflow-hidden">
                  <div
                    className="h-full bg-accent rounded"
                    style={{ width: `${row.percent}%` }}
                  />
                </div>
                <span className="w-12 text-right text-text-muted text-sm">{row.percent}%</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12" aria-labelledby="study-tips-heading">
          <h2 id="study-tips-heading" className="text-2xl font-display font-bold text-text-primary mb-4">
            {t('tradeGuidePage.studyTipsHeading', { tradeName: guide.tradeName })}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-text-primary">
            {guide.topStudyTips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-display font-bold text-text-primary mb-4">
            {t('tradeGuidePage.faqHeading')}
          </h2>
          <div className="space-y-6">
            {guide.faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{faq.question}</h3>
                <p className="text-text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface border border-border rounded-xl p-8" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-2xl font-display font-bold text-text-primary mb-4">
            {t('tradeGuidePage.ctaHeading')}
          </h2>
          <p className="text-text-muted mb-6">
            {t('tradeGuidePage.ctaSubtitle', { tradeName: guide.tradeName, count: guide.examQuestions })}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={paths.trade(guide.slug)}
              className="inline-flex items-center font-semibold text-accent hover:text-accent/80"
            >
              {t('tradeGuidePage.viewCourseLink', { tradeName: guide.tradeName })}
            </Link>
            <Link
              to={paths.practiceTest(guide.slug)}
              className="inline-flex items-center font-semibold text-accent hover:text-accent/80"
            >
              {t('tradeGuidePage.tryPracticeLink')}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
