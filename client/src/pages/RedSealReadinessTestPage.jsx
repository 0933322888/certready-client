import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import {
  getReadinessTestSEO,
  getBreadcrumbStructuredData,
} from '../utils/seo';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { paths } from '../utils/routes';

function getWebPageStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Red Seal Readiness Test',
    description: 'Free quiz to assess your readiness for the Red Seal interprovincial exam.',
    url: 'https://www.certready.ca/tools/red-seal-readiness-test',
    applicationCategory: 'EducationalApplication',
    publisher: { '@type': 'Organization', name: 'CertReady', url: 'https://www.certready.ca' },
  };
}

export default function RedSealReadinessTestPage() {
  const { t } = useTranslation();
  const seo = getReadinessTestSEO();
  const breadcrumbs = [
    { name: t('nav.home'), url: paths.home },
    { name: t('readinessTest.breadcrumb'), url: paths.tools.readinessTest },
  ];

  return (
    <>
      <SEO
        {...seo}
        structuredData={[
          getBreadcrumbStructuredData(breadcrumbs),
          getWebPageStructuredData(),
        ].filter(Boolean)}
      />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbs} />
        <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
          {t('readinessTest.title')}
        </h1>
        <p className="text-lg text-text-muted mb-8">
          {t('readinessTest.subtitle')}
        </p>

        <Card className="mb-8 p-8 text-center">
          <p className="text-text-primary mb-6">
            {t('readinessTest.intro')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={paths.trades}>
              <Button size="lg">{t('readinessTest.browseTrades')}</Button>
            </Link>
            <Link to={paths.practiceTests}>
              <Button variant="outline" size="lg">{t('readinessTest.tryPracticeTests')}</Button>
            </Link>
          </div>
        </Card>

        <section className="prose prose-invert max-w-none" aria-labelledby="readiness-heading">
          <h2 id="readiness-heading" className="text-2xl font-display font-bold text-text-primary mb-4">
            {t('readinessTest.whatIsHeading')}
          </h2>
          <p className="text-text-primary leading-relaxed">
            {t('readinessTest.whatIsBody')}
          </p>
        </section>
      </main>
    </>
  );
}
