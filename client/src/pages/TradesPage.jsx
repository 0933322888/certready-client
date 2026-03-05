import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import { getTradesPageSEO, getBreadcrumbStructuredData } from '../utils/seo';
import { getCourse, COURSE_SLUGS } from '../data/courseContent';
import { getGuideSlugFromCourseSlug } from '../data/tradeGuides';
import { useCoursePricing } from '../hooks/useCoursePricing';
import { useAuth } from '../context/AuthContext';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { formatPrice } from '../utils/formatters';
import { paths } from '../utils/routes';

export default function TradesPage() {
  const { t, i18n } = useTranslation();
  const { hasPurchasedBySlug } = useAuth();
  const { pricingBySlug } = useCoursePricing();
  const courses = COURSE_SLUGS.map((slug) => getCourse(slug, i18n.language)).filter(Boolean);
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
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            {t('tradesPage.title')}
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t('tradesPage.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const hasPurchased = hasPurchasedBySlug(course.slug);
            const tradeSlug = getGuideSlugFromCourseSlug(course.slug);
            const pricing = pricingBySlug[course.slug];
            const currentPrice = pricing?.currentPrice ?? course.price;
            const currency = pricing?.currency ?? course.currency ?? 'CAD';

            return (
              <Card key={course.slug} hover className="flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="accent">{course.tradeCode}</Badge>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-accent">
                        {formatPrice(currentPrice, currency)}
                      </span>
                      <p className="text-sm text-accent-warm font-medium mt-1">
                        {t('course.promoCodeHint')}
                      </p>
                    </div>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-text-primary mb-2">
                    {course.trade} {t('coursesPage.courseTitleSuffix')}
                  </h2>
                  <p className="text-text-muted mb-4">{course.subtitle}</p>
                  <ul className="space-y-2 mb-6">
                    {course.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-text-muted">
                        <svg className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  {tradeSlug && (
                    <>
                      <Link to={paths.guideArticle(tradeSlug)} className="text-sm text-accent hover:text-accent/80">
                        {t('coursesPage.learnMoreAbout', { trade: course.trade })}
                      </Link>
                      <Link to={paths.practiceTest(tradeSlug)} className="text-sm text-accent hover:text-accent/80">
                        {t('tradesPage.tryFreePractice')}
                      </Link>
                    </>
                  )}
                  <div className="flex gap-2 items-stretch">
                    {hasPurchased ? (
                      <Link to={paths.learn(course.slug)} className="flex-1 flex">
                        <Button className="w-full flex items-center justify-center">{t('home.continueLearning')} →</Button>
                      </Link>
                    ) : (
                      <>
                        <Link to={paths.learn(course.slug)} className="flex-1 flex">
                          <Button variant="outline" className="w-full flex items-center justify-center">{t('home.previewFreeBtn')}</Button>
                        </Link>
                        <Link to={paths.trade(tradeSlug)} className="flex-1 flex">
                          <Button className="w-full flex items-center justify-center">{t('home.getFullAccess')}</Button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}

          <Card className="flex flex-col opacity-60">
            <div className="flex-1">
              <Badge variant="warm" className="mb-4">{t('home.comingSoon')}</Badge>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-2">
                {t('coursesPage.comingSoonTitle')}
              </h2>
              <p className="text-text-muted mb-4">{t('coursesPage.comingSoonDesc')}</p>
            </div>
            <Button disabled className="w-full">{t('home.comingSoon')}</Button>
          </Card>
        </div>
      </div>
    </>
  );
}
