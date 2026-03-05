import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import { getBlogPageSEO, getBreadcrumbStructuredData } from '../utils/seo';
import Card from '../components/ui/Card';
import { paths } from '../utils/routes';

export default function BlogPage() {
  const { t } = useTranslation();
  const seo = getBlogPageSEO();
  const breadcrumbs = [
    { name: t('nav.home'), url: paths.home },
    { name: t('blogPage.breadcrumb'), url: paths.blog },
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
          {t('blogPage.title')}
        </h1>
        <p className="text-lg text-text-muted mb-10">
          {t('blogPage.subtitle')}
        </p>

        <section aria-labelledby="blog-guides-heading">
          <h2 id="blog-guides-heading" className="text-2xl font-display font-bold text-text-primary mb-6">
            {t('blogPage.guidesHeading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to={paths.guideArticle('how-to-pass-red-seal-exam')}>
              <Card hover className="h-full">
                <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                  {t('blogPage.howToPassTitle')}
                </h3>
                <p className="text-text-muted text-sm">
                  {t('blogPage.howToPassExcerpt')}
                </p>
                <span className="text-accent font-medium mt-2 inline-block">{t('blogPage.readMore')}</span>
              </Card>
            </Link>
            <Link to={paths.guideArticle('red-seal-exam-format')}>
              <Card hover className="h-full">
                <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                  {t('blogPage.examFormatTitle')}
                </h3>
                <p className="text-text-muted text-sm">
                  {t('blogPage.examFormatExcerpt')}
                </p>
                <span className="text-accent font-medium mt-2 inline-block">{t('blogPage.readMore')}</span>
              </Card>
            </Link>
            <Link to={paths.guideArticle('red-seal-exam-cost')}>
              <Card hover className="h-full">
                <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                  {t('blogPage.examCostTitle')}
                </h3>
                <p className="text-text-muted text-sm">
                  {t('blogPage.examCostExcerpt')}
                </p>
                <span className="text-accent font-medium mt-2 inline-block">{t('blogPage.readMore')}</span>
              </Card>
            </Link>
          </div>
        </section>

        <Card className="mt-10 bg-surface border-accent/20">
          <p className="text-text-primary mb-4">
            {t('blogPage.ctaText')}
          </p>
          <Link to={paths.trades} className="text-accent hover:text-accent/80 font-medium">
            {t('blogPage.browseTrades')} →
          </Link>
        </Card>
      </main>
    </>
  );
}
