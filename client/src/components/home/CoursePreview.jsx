import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { formatPrice } from '../../utils/formatters';
import { getCourse, COURSE_SLUGS } from '../../data/courseContent';
import { getGuideSlugFromCourseSlug } from '../../data/tradeGuides';
import { useCoursePricing } from '../../hooks/useCoursePricing';
import { useAuth } from '../../context/AuthContext';
import { paths } from '../../utils/routes';

export default function CoursePreview() {
  const { t, i18n } = useTranslation();
  const { hasPurchasedBySlug } = useAuth();
  const { pricingBySlug } = useCoursePricing();
  const courses = COURSE_SLUGS.map((slug) => getCourse(slug, i18n.language)).filter(Boolean);

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4">
            {t('home.examPrepCoursesHeading')}
          </h2>
          <p className="text-lg text-text-muted">
            {t('home.startJourney')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const hasPurchased = hasPurchasedBySlug(course.slug);
            const tradeSlug = getGuideSlugFromCourseSlug(course.slug);
            const pricing = pricingBySlug[course.slug];
            const fullPrice = pricing?.fullPrice ?? course.price;
            const currentPrice = pricing?.currentPrice ?? course.price;
            const currency = pricing?.currency ?? course.currency ?? 'CAD';
            return (
              <Card key={course.slug} hover className="flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="accent">{course.tradeCode}</Badge>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-accent">
                        {formatPrice(fullPrice, currency)}
                      </span>
                      <p className="text-sm text-accent-warm font-medium mt-1">
                        {t('course.promoCodeHint')}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-2">
                    <Link to={tradeSlug ? paths.trade(tradeSlug) : `/courses/${course.slug}`} className="hover:text-accent transition-colors">
                      {course.trade} Exam Prep Course
                    </Link>
                  </h3>
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
                <div className="flex gap-2 items-stretch">
                  {hasPurchased ? (
                    <Link to={`/learn/${course.slug}`} className="flex-1 flex">
                      <Button className="w-full flex items-center justify-center">{t('home.continueLearning')} →</Button>
                    </Link>
                  ) : (
                    <>
                      <Link to={`/learn/${course.slug}`} className="flex-1 flex">
                        <Button variant="outline" className="w-full flex items-center justify-center">{t('home.previewFreeBtn')}</Button>
                      </Link>
                      <Link to={tradeSlug ? paths.trade(tradeSlug) : `/courses/${course.slug}`} className="flex-1 flex">
                        <Button className="w-full flex items-center justify-center">{t('home.getFullAccess')}</Button>
                      </Link>
                    </>
                  )}
                </div>
              </Card>
            );
          })}

          {/* Coming Soon Placeholder */}
          <Card className="flex flex-col opacity-60">
            <div className="flex-1">
              <Badge variant="warm" className="mb-4">{t('home.comingSoon')}</Badge>
              <h3 className="text-2xl font-display font-bold text-text-primary mb-2">
                {t('coursesPage.comingSoonTitle')}
              </h3>
              <p className="text-text-muted mb-4">{t('coursesPage.comingSoonDesc')}</p>
            </div>
            <Button disabled className="w-full">{t('home.comingSoon')}</Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
