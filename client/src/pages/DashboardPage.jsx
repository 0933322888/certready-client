import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { getCourse, COURSE_SLUGS } from '../data/courseContent';
import { getProgress } from '../utils/progress';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import Spinner from '../components/ui/Spinner';
import api from '../utils/api';
import toast from 'react-hot-toast';

export default function DashboardPage() {
  const { t, i18n } = useTranslation();
  const { user, loading: authLoading } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [studyPlans, setStudyPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [studyPlanCourseSlug, setStudyPlanCourseSlug] = useState('');
  const [studyPlanExamDate, setStudyPlanExamDate] = useState('');
  const [generating, setGenerating] = useState(false);
  const [togglingId, setTogglingId] = useState(null);
  const [studyPlanCourses, setStudyPlanCourses] = useState([]);

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

  useEffect(() => {
    if (user) {
      api.get('/users/study-plans')
        .then(res => {
          const plans = res.data || [];
          setStudyPlans(plans);
          setSelectedPlan(prev =>
            prev && plans.some(p => p._id === prev._id) ? prev : (plans[0] || null)
          );
        })
        .catch(() => {});

      api.get('/users/study-plans/courses')
        .then(res => {
          const fromApi = res.data || [];
          if (fromApi.length) {
            setStudyPlanCourses(
              fromApi.map((c) => ({
                slug: c.slug,
                title: getCourse(c.slug, i18n.language)?.title || c.title || c.slug,
              }))
            );
          } else {
            setStudyPlanCourses(
              COURSE_SLUGS.map((slug) => ({
                slug,
                title: getCourse(slug, i18n.language)?.title || slug,
              })).filter((c) => c.title)
            );
          }
        })
        .catch(() => {
          setStudyPlanCourses(
            COURSE_SLUGS.map((slug) => ({
              slug,
              title: getCourse(slug, i18n.language)?.title || slug,
            })).filter((c) => c.title)
          );
        });
    }
  }, [user, i18n.language]);

  const handleGeneratePlan = (e) => {
    e.preventDefault();
    if (!studyPlanCourseSlug || !studyPlanExamDate) return;
    setGenerating(true);
    api.post('/users/study-plans', {
      courseSlug: studyPlanCourseSlug,
      examDate: studyPlanExamDate,
    })
      .then(res => {
        setStudyPlans(prev => [res.data, ...prev]);
        setSelectedPlan(res.data);
        setStudyPlanExamDate('');
        setGenerating(false);
        toast.success(t('dashboard.studyPlan.generated'));
      })
      .catch(err => {
        setGenerating(false);
        toast.error(err.response?.data?.message || t('dashboard.studyPlan.generateFailed'));
      });
  };

  const handleToggleItem = (planId, itemId) => {
    setTogglingId(itemId);
    api.patch(`/users/study-plans/${planId}/items/${itemId}`)
      .then(res => {
        setStudyPlans(prev =>
          prev.map(p => (p._id === planId ? res.data : p))
        );
        if (selectedPlan?._id === planId) {
          setSelectedPlan(res.data);
        }
        setTogglingId(null);
      })
      .catch(() => setTogglingId(null));
  };

  const handleDeletePlan = (planId) => {
    if (!confirm(t('dashboard.studyPlan.deletePlan') + '?')) return;
    api.delete(`/users/study-plans/${planId}`)
      .then(() => {
        setStudyPlans(prev => prev.filter(p => p._id !== planId));
        setSelectedPlan(prev => (prev?._id === planId ? (studyPlans.find(p => p._id !== planId) || null) : prev));
      })
      .catch(() => {});
  };

  const formatDate = (d) => {
    if (!d) return '';
    const date = new Date(d);
    return date.toLocaleDateString(i18n.language || 'en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

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

      {/* Study Plan */}
      <div className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-text-primary mb-2">
          {t('dashboard.studyPlan.title')}
        </h2>
        <p className="text-text-muted mb-6">{t('dashboard.studyPlan.subtitle')}</p>

        <Card className="mb-6">
          <form onSubmit={handleGeneratePlan} className="flex flex-wrap items-end gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-text-muted mb-1">
                {t('dashboard.studyPlan.selectTrade')}
              </label>
              <select
                value={studyPlanCourseSlug}
                onChange={(e) => setStudyPlanCourseSlug(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-text-primary focus:ring-2 focus:ring-accent focus:border-accent"
                required
              >
                <option value="">—</option>
                {studyPlanCourses.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.title}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[180px]">
              <label className="block text-sm font-medium text-text-muted mb-1">
                {t('dashboard.studyPlan.examDate')}
              </label>
              <input
                type="date"
                value={studyPlanExamDate}
                onChange={(e) => setStudyPlanExamDate(e.target.value)}
                min={new Date().toISOString().slice(0, 10)}
                className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-text-primary focus:ring-2 focus:ring-accent focus:border-accent"
                required
              />
            </div>
            <Button type="submit" disabled={generating}>
              {generating ? t('dashboard.studyPlan.generating') : t('dashboard.studyPlan.generate')}
            </Button>
          </form>
        </Card>

        {selectedPlan ? (
          <Card>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-display font-bold text-text-primary">
                  {selectedPlan.courseTitle}
                </h3>
                <p className="text-text-muted mt-1">
                  {t('dashboard.studyPlan.examOn')} {formatDate(selectedPlan.examDate)}
                  {' · '}
                  {selectedPlan.planType === 'daily'
                    ? t('dashboard.studyPlan.planTypeDaily')
                    : t('dashboard.studyPlan.planTypeWeekly')}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {studyPlans.length > 1 && (
                  <select
                    value={selectedPlan._id}
                    onChange={(e) => setSelectedPlan(studyPlans.find(p => p._id === e.target.value))}
                    className="rounded-xl border border-border bg-surface px-3 py-2 text-sm text-text-primary"
                  >
                    {studyPlans.map((p) => (
                      <option key={p._id} value={p._id}>
                        {p.courseTitle} — {formatDate(p.examDate)}
                      </option>
                    ))}
                  </select>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeletePlan(selectedPlan._id)}
                  className="text-text-muted hover:text-danger"
                >
                  {t('dashboard.studyPlan.deletePlan')}
                </Button>
              </div>
            </div>
            <ul className="space-y-3">
              {selectedPlan.items?.map((item) => (
                <li
                  key={item.id}
                  className={`flex items-center gap-3 rounded-lg border border-border px-4 py-3 ${
                    item.completed ? 'bg-success/10 border-success/30' : 'bg-surface-2'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleToggleItem(selectedPlan._id, item.id)}
                    disabled={togglingId === item.id}
                    className="flex-shrink-0 w-6 h-6 rounded border-2 border-border flex items-center justify-center hover:border-accent focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50"
                    aria-label={t('dashboard.studyPlan.markComplete')}
                  >
                    {item.completed && (
                      <span className="text-success font-bold" aria-hidden>✓</span>
                    )}
                  </button>
                  <span className={`flex-1 ${item.completed ? 'line-through text-text-muted' : 'text-text-primary'}`}>
                    {item.label}
                  </span>
                  {item.startDate && (
                    <span className="text-sm text-text-muted">
                      {formatDate(item.startDate)}
                      {item.periodType === 'week' && item.endDate && ` – ${formatDate(item.endDate)}`}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-text-muted">
              {selectedPlan.items?.filter(i => i.completed).length ?? 0} / {selectedPlan.items?.length ?? 0} {t('dashboard.studyPlan.completed')}
            </p>
          </Card>
        ) : (
          !generating && (
            <Card>
              <p className="text-text-muted">{t('dashboard.studyPlan.noPlan')}</p>
            </Card>
          )
        )}
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
