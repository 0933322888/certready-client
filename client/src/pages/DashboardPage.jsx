import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { getCourse } from '../data/courseContent';
import { getProgress } from '../utils/progress';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import Spinner from '../components/ui/Spinner';
import api from '../utils/api';

export default function DashboardPage() {
  const { t, i18n } = useTranslation();
  const { user, loading: authLoading } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      api.get('/users/dashboard')
        .then(res => {
          setDashboardData(res.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user]);

  const purchasedSlugs = (user?.purchases || []).map((p) => p.slug).filter(Boolean);
  const purchasedCourses = purchasedSlugs
    .map((slug) => getCourse(slug, i18n.language))
    .filter(Boolean);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO noIndex title={t('dashboard.seoTitle')} description={t('dashboard.seoDescription')} />
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold text-text-primary mb-2">
          {t('dashboard.welcome', { name: user?.name })}
        </h1>
        <p className="text-text-muted">{t('dashboard.continueJourney')}</p>
      </div>

      {/* My Courses */}
      <div className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-text-primary mb-6">
          {t('dashboard.myCourses')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {purchasedCourses.length === 0 ? (
            <Card className="flex flex-col">
              <p className="text-text-muted mb-4">{t('dashboard.noCourses')}</p>
              <Link to="/trades">
                <Button variant="outline">{t('dashboard.browseCourses')}</Button>
              </Link>
            </Card>
          ) : (
            purchasedCourses.map((course) => {
              const progress = getProgress(course.id);
              const progressPercentage = course.totalChapters
                ? (progress.completed.length / course.totalChapters) * 100
                : 0;
              return (
                <Card key={course.slug} hover className="flex flex-col">
                  <div className="flex-1 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="accent">{course.tradeCode}</Badge>
                      <span className="text-sm text-text-muted">
                        {progress.completed.length} / {course.totalChapters} {t('learn.chaptersCompleted')}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-text-muted mb-4">{course.subtitle}</p>
                    <ProgressBar value={progressPercentage} />
                  </div>
                  <Link to={`/learn/${course.slug}`}>
                    <Button className="w-full">{t('dashboard.continueLearning')} →</Button>
                  </Link>
                </Card>
              );
            })
          )}
        </div>
      </div>

      {/* Progress Summary - aggregate across purchased courses */}
      {purchasedCourses.length > 0 && (
        <Card>
          <h2 className="text-2xl font-display font-semibold text-text-primary mb-6">
            {t('dashboard.progressSummary')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-display font-bold text-accent mb-2">
                {purchasedCourses.reduce((sum, c) => sum + getProgress(c.id).completed.length, 0)}
              </div>
              <div className="text-text-muted">{t('dashboard.chaptersCompleted')}</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-accent-warm mb-2">
                {Math.round(
                  purchasedCourses.reduce((sum, c) => {
                    const p = getProgress(c.id);
                    return sum + (c.totalChapters ? (p.completed.length / c.totalChapters) * 100 : 0);
                  }, 0) / purchasedCourses.length
                )}%
              </div>
              <div className="text-text-muted">{t('dashboard.overallProgress')}</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-success mb-2">
                {purchasedCourses.reduce((sum, c) => sum + (c.totalQuestions || 0), 0)}
              </div>
              <div className="text-text-muted">{t('dashboard.practiceQuestions')}</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
