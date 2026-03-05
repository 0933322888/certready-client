import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import { getPracticeTestsListSEO, getBreadcrumbStructuredData } from '../utils/seo';
import { tradeGuides } from '../data/tradeGuides';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { paths } from '../utils/routes';

export default function PracticeTestsListPage() {
  const { t } = useTranslation();
  const seo = getPracticeTestsListSEO();
  const breadcrumbs = [
    { name: t('nav.home'), url: paths.home },
    { name: t('practiceTestsPage.breadcrumb'), url: paths.practiceTests },
  ];

  return (
    <>
      <SEO
        {...seo}
        structuredData={[getBreadcrumbStructuredData(breadcrumbs)].filter(Boolean)}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbs} />
        <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
          {t('practiceTestsPage.title')}
        </h1>
        <p className="text-lg text-text-muted mb-8">
          {t('practiceTestsPage.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tradeGuides.map((guide) => (
            <Card key={guide.slug} hover className="flex flex-col">
              <h2 className="text-xl font-display font-bold text-text-primary mb-2">
                {guide.tradeName} ({guide.tradeCode})
              </h2>
              <p className="text-text-muted text-sm flex-1 mb-4">
                {t('practiceTestsPage.cardDesc', { tradeName: guide.tradeName, count: guide.examQuestions })}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to={paths.practiceTest(guide.slug)}>
                  <Button>{t('practiceTestsPage.tryFreeQuestions')}</Button>
                </Link>
                <Link to={paths.trade(guide.slug)} className="text-accent hover:text-accent/80 text-sm font-medium self-center">
                  {t('practiceTestsPage.fullExamPrep')} →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-surface border-accent/20">
          <p className="text-text-primary mb-4">
            {t('practiceTestsPage.ctaText')}
          </p>
          <Link to={paths.trades}>
            <Button variant="outline">{t('practiceTestsPage.browseTrades')}</Button>
          </Link>
        </Card>
      </main>
    </>
  );
}
