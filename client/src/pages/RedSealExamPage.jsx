import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import {
  getRedSealExamPageSEO,
  getBreadcrumbStructuredData,
  getWebSiteStructuredData,
} from '../utils/seo';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { paths } from '../utils/routes';

export default function RedSealExamPage() {
  const { t } = useTranslation();
  const seo = getRedSealExamPageSEO();
  const breadcrumbs = [
    { name: t('nav.home'), url: paths.home },
    { name: t('redSealExam.breadcrumb'), url: paths.redSealExam },
  ];

  return (
    <>
      <SEO
        {...seo}
        structuredData={[
          getBreadcrumbStructuredData(breadcrumbs),
          getWebSiteStructuredData(),
        ].filter(Boolean)}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbs} />
        <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
          {t('redSealExam.title')}
        </h1>
        <p className="text-lg text-text-muted leading-relaxed mb-8">
          {t('redSealExam.intro')}
        </p>

        <section className="prose prose-invert max-w-none mb-12" aria-labelledby="what-is-heading">
          <h2 id="what-is-heading" className="text-2xl font-display font-bold text-text-primary mb-4">
            {t('redSealExam.whatIsHeading')}
          </h2>
          <p className="text-text-primary leading-relaxed mb-4">
            {t('redSealExam.whatIsBody')}
          </p>
        </section>

        <section className="mb-12" aria-labelledby="next-steps-heading">
          <h2 id="next-steps-heading" className="text-2xl font-display font-bold text-text-primary mb-6">
            {t('redSealExam.nextStepsHeading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hover className="flex flex-col">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t('redSealExam.cardTradesTitle')}
              </h3>
              <p className="text-text-muted text-sm flex-1 mb-4">
                {t('redSealExam.cardTradesDesc')}
              </p>
              <Link to={paths.trades}>
                <Button variant="outline" className="w-full">{t('redSealExam.browseTrades')}</Button>
              </Link>
            </Card>
            <Card hover className="flex flex-col">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t('redSealExam.cardPracticeTitle')}
              </h3>
              <p className="text-text-muted text-sm flex-1 mb-4">
                {t('redSealExam.cardPracticeDesc')}
              </p>
              <Link to={paths.practiceTests}>
                <Button variant="outline" className="w-full">{t('redSealExam.tryPracticeTests')}</Button>
              </Link>
            </Card>
            <Card hover className="flex flex-col">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t('redSealExam.cardGuidesTitle')}
              </h3>
              <p className="text-text-muted text-sm flex-1 mb-4">
                {t('redSealExam.cardGuidesDesc')}
              </p>
              <Link to={paths.guides}>
                <Button variant="outline" className="w-full">{t('redSealExam.readGuides')}</Button>
              </Link>
            </Card>
          </div>
        </section>

        <Card className="bg-accent/10 border-accent/30">
          <p className="text-text-primary mb-4">
            {t('redSealExam.ctaText')}
          </p>
          <Link to={paths.trades}>
            <Button>{t('redSealExam.ctaButton')}</Button>
          </Link>
        </Card>
      </main>
    </>
  );
}
