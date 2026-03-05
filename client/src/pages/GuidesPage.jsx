import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import { getBreadcrumbStructuredData } from '../utils/seo';
import { tradeGuides } from '../data/tradeGuides';
import { guideArticles } from '../data/guideArticles';
import Card from '../components/ui/Card';
import { paths } from '../utils/routes';

export default function GuidesPage() {
  const { t } = useTranslation();
  const breadcrumbs = [
    { name: t('nav.home'), url: paths.home },
    { name: t('guidesPage.title'), url: paths.guides },
  ];

  return (
    <>
      <SEO
        title={t('guidesPage.title')}
        description={t('guidesPage.seoDescription')}
        keywords={t('guidesPage.seoKeywords')}
        canonical={paths.guides}
        structuredData={[getBreadcrumbStructuredData(breadcrumbs)].filter(Boolean)}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbs} />
        <h1 className="text-4xl font-display font-bold text-text-primary mb-4">
          {t('guidesPage.title')}
        </h1>
        <p className="text-lg text-text-muted mb-8">
          {t('guidesPage.subtitle')}
        </p>

        {guideArticles.length > 0 && (
          <section className="mb-10" aria-labelledby="guides-articles-heading">
            <h2 id="guides-articles-heading" className="text-2xl font-display font-bold text-text-primary mb-4">
              {t('guidesPage.articlesHeading')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {guideArticles.map((article) => (
                <Link key={article.slug} to={paths.guideArticle(article.slug)}>
                  <Card hover className="h-full">
                    <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                      {article.title}
                    </h3>
                    <p className="text-text-muted text-sm">
                      {article.excerpt}
                    </p>
                    <span className="text-accent font-medium mt-2 inline-block">
                      {t('guidesPage.readGuide')}
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="guides-trades-heading">
          <h2 id="guides-trades-heading" className="text-2xl font-display font-bold text-text-primary mb-4">
            {t('guidesPage.tradeGuidesHeading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tradeGuides.map((guide) => (
              <Link key={guide.slug} to={paths.guideArticle(guide.slug)}>
                <Card hover className="h-full">
                  <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                    {guide.tradeName} ({guide.tradeCode})
                  </h3>
                  <p className="text-text-muted text-sm">
                    {guide.examQuestions} questions · {guide.passMark}% pass mark · {guide.apprenticeshipHours.toLocaleString()} hours
                  </p>
                  <span className="text-accent font-medium mt-2 inline-block">
                    {t('guidesPage.readGuide')}
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
