import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import {
  getGuideArticleSEO,
  getArticleStructuredData,
  getBreadcrumbStructuredData,
} from '../utils/seo';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { paths } from '../utils/routes';

export default function GuideArticlePage({ article }) {
  const { t } = useTranslation();
  if (!article) return null;

  const seo = getGuideArticleSEO(article);
  const breadcrumbs = [
    { name: t('nav.home'), url: paths.home },
    { name: t('guidesPage.title'), url: paths.guides },
    { name: article.title, url: paths.guideArticle(article.slug) },
  ];

  return (
    <>
      <SEO
        {...seo}
        structuredData={[
          getBreadcrumbStructuredData(breadcrumbs),
          getArticleStructuredData(article),
        ].filter(Boolean)}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbs} />
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            {article.title}
          </h1>
          <p className="text-xl text-text-muted leading-relaxed mb-8">
            {article.excerpt}
          </p>

          <div className="space-y-8 mb-12">
            {article.sections?.map((section, index) => (
              <section key={index} aria-labelledby={`section-${index}`}>
                <h2 id={`section-${index}`} className="text-2xl font-display font-bold text-text-primary mb-4">
                  {section.heading}
                </h2>
                <p className="text-text-primary leading-relaxed">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <Card className="bg-accent/10 border-accent/30">
            <p className="text-text-primary mb-4">
              {t('guideArticle.ctaText')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to={paths.trades}>
                <Button>{t('guideArticle.browseTrades')}</Button>
              </Link>
              <Link to={paths.practiceTests}>
                <Button variant="outline">{t('guideArticle.tryPracticeTests')}</Button>
              </Link>
            </div>
          </Card>
        </article>
      </main>
    </>
  );
}
