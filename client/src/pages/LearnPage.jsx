import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { getCourse } from '../data/courseContent';
import { getChapterById, getAllChapters } from '../data/courseHelpers';
import { useCoursePricingBySlug } from '../hooks/useCoursePricing';
import { setLastChapter, markChapterComplete, getProgress } from '../utils/progress';
import SEO from '../components/seo/SEO';
import { getLearnPageSEO } from '../utils/seo';
import ChapterSidebar from '../components/course/ChapterSidebar';
import ChapterContent from '../components/course/ChapterContent';
import LockOverlay from '../components/ui/LockOverlay';
import Button from '../components/ui/Button';
import Spinner from '../components/ui/Spinner';
import { formatPrice } from '../utils/formatters';
import api from '../utils/api';
import toast from 'react-hot-toast';

export default function LearnPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { user, loading: authLoading, refreshUser, hasMockExamAccess } = useAuth();
  const { pricing } = useCoursePricingBySlug(slug);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [applyingPromo, setApplyingPromo] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const course = getCourse(slug, i18n.language);

  const userHasAccess = Boolean(
    user?.purchases?.some((p) => p && p.slug === slug) || pricing?.ownsCourse
  );
  const userHasMockExam = hasMockExamAccess(slug);

  useEffect(() => {
    if (!course) {
      navigate('/');
      return;
    }

    setHasAccess(userHasAccess);

    const progress = getProgress(course.id);
    const allChapters = getAllChapters(course);
    const firstChapterId = allChapters[0]?.id;
    const lastChapterId = progress.lastChapter || firstChapterId;
    const chapter = getChapterById(lastChapterId, course) || allChapters[0];

    if (chapter) {
      setCurrentChapterId(chapter.id);
      setCurrentChapter(chapter);
      setLastChapter(course.id, chapter.id);
    }
    setLoading(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug, userHasAccess, navigate, course]);

  const handleChapterSelect = (chapterId) => {
    const chapter = getChapterById(chapterId, course);
    if (!chapter) return;

    // Allow opening mock exam chapter with course access so unlock UI can show
    const canOpen = chapter.isMockExam
      ? (userHasMockExam || hasAccess)
      : (chapter.isFree || hasAccess);
    if (!canOpen) {
      toast.error(t('learn.chapterRequiresAccess'));
      return;
    }

    setCurrentChapterId(chapter.id);
    setCurrentChapter(chapter);
    setLastChapter(course.id, chapterId);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuestionComplete = () => {
    if (currentChapter && currentChapter.practiceQuestions && course) {
      markChapterComplete(course.id, currentChapter.id);
      toast.success(t('learn.progressSaved'));
    }
  };

  const fullPrice = pricing?.fullPrice ?? pricing?.currentPrice ?? course?.price;
  const fullCurrency = pricing?.currency ?? course?.currency ?? 'CAD';
  const unlockingMockExam = Boolean(userHasAccess && !userHasMockExam);
  const isFreeOffer = Boolean(
    !unlockingMockExam && (
      appliedPromo?.amountCents === 0 || (!appliedPromo && pricing?.isFreeWindowActive)
    )
  );
  const mockUnlockBasePrice = pricing?.fullPrice ?? course?.price ?? fullPrice;
  const displayPrice = appliedPromo
    ? appliedPromo.amountCents
    : unlockingMockExam
      ? mockUnlockBasePrice
      : (pricing?.currentPrice ?? course?.price ?? fullPrice);
  const displayCurrency = appliedPromo ? appliedPromo.currency : fullCurrency;

  const handleApplyPromo = async () => {
    const code = promoCode.trim();
    if (!code || !user) return;
    setApplyingPromo(true);
    try {
      const res = await api.post('/payments/validate-promo', { promoCode: code, courseSlug: slug });
      if (res.data?.valid) {
        setAppliedPromo({ code, amountCents: res.data.amountCents, currency: res.data.currency });
        toast.success(res.data.amountCents === 0 ? t('course.promoAppliedFree') : t('course.promoApplied'));
      } else {
        setAppliedPromo(null);
        toast.error(res.data?.message || t('course.invalidPromoCode'));
      }
    } catch (err) {
      setAppliedPromo(null);
      toast.error(err.response?.data?.message || t('course.invalidPromoCode'));
    }
    setApplyingPromo(false);
  };

  const handlePromoInputChange = (value) => {
    setPromoCode(value);
    setAppliedPromo(null);
  };

  const handlePurchase = async () => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: `/learn/${slug}` } } });
      return;
    }
    setPurchasing(true);
    try {
      const res = await api.post('/payments/create-checkout-session', {
        courseSlug: slug,
        promoCode: appliedPromo?.code || undefined,
      });
      if (res.data?.isFree || res.data?.sessionId?.startsWith('free_')) {
        await refreshUser();
        toast.success(t('checkout.successTitle'));
        setPurchasing(false);
        return;
      }
      if (res.data?.url) {
        window.location.href = res.data.url;
        return;
      }
    } catch (err) {
      if (err.response?.status === 400) {
        await refreshUser();
      } else {
        toast.error(err.response?.data?.message || t('course.checkoutFailed'));
      }
    }
    setPurchasing(false);
  };

  if (authLoading || loading || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!currentChapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-text-muted">{t('learn.chapterNotFound')}</p>
      </div>
    );
  }

  const isChapterAccessible = currentChapter.isMockExam
    ? userHasMockExam
    : (currentChapter.isFree || hasAccess);
  const learnSeo = getLearnPageSEO(course, currentChapter);
  const purchaseLabel = unlockingMockExam
    ? `${t('mockExam.unlockCta')} — ${formatPrice(displayPrice, displayCurrency)}`
    : isFreeOffer
      ? t('course.claimFreeAccess')
      : `${t('lockOverlay.getAccess')} — ${formatPrice(displayPrice, displayCurrency)}`;

  return (
    <div className="flex min-h-screen bg-bg">
      {learnSeo && <SEO {...learnSeo} />}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-20 left-4 z-30 md:hidden bg-surface border border-border rounded-lg p-2 shadow-lg"
        aria-label={t('common.ariaLabelToggleMenu')}
      >
        <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <ChapterSidebar
        course={course}
        currentChapterId={currentChapterId}
        onChapterSelect={handleChapterSelect}
        onClose={sidebarOpen}
        hasAccess={hasAccess}
        hasMockExamAccess={userHasMockExam}
      />

      <div className="flex-1 md:ml-80 min-h-screen">
        <div className="sticky top-16 z-20 bg-surface/95 backdrop-blur-sm border-b border-border px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-lg font-display font-semibold text-text-primary">
              {course.title}
            </h1>
            <p className="text-sm text-text-muted">{currentChapter.title}</p>
            {(!hasAccess || unlockingMockExam) && (
              <div className="mt-3 pt-3 border-t border-border space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-sm text-text-muted">
                    {unlockingMockExam
                      ? t('mockExam.unlockBanner')
                      : isFreeOffer
                        ? t('course.freeWindowOffer')
                        : t('lockOverlay.title')}
                  </span>
                  <span className="text-sm font-semibold text-accent">
                    {formatPrice(displayPrice, displayCurrency)}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:items-center">
                  {(unlockingMockExam || !isFreeOffer) && (
                    <>
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => handlePromoInputChange(e.target.value)}
                        placeholder={t('course.promoCodePlaceholder')}
                        className="flex-1 min-w-0 px-3 py-2 rounded-lg border border-border bg-surface text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                        aria-label={t('course.promoCodeLabel')}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={handleApplyPromo}
                        disabled={applyingPromo || !promoCode.trim() || !user}
                      >
                        {applyingPromo ? t('course.processing') : t('course.promoCodeApply')}
                      </Button>
                    </>
                  )}
                  <Button
                    onClick={handlePurchase}
                    disabled={purchasing}
                    size="sm"
                    className="flex-shrink-0"
                  >
                    {user
                      ? (purchasing ? t('course.processing') : purchaseLabel)
                      : t('course.signInToPurchase')}
                  </Button>
                </div>
                {unlockingMockExam && appliedPromo && (
                  <p className="text-sm text-accent-warm font-medium">
                    {appliedPromo.amountCents === 0
                      ? t('course.promoAppliedFree')
                      : t('course.promoApplied')}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            {isChapterAccessible ? (
              <ChapterContent
                course={course}
                chapter={currentChapter}
                onQuestionComplete={handleQuestionComplete}
              />
            ) : (
              <div className="relative">
                <div className="opacity-30 pointer-events-none">
                  <ChapterContent
                    course={course}
                    chapter={currentChapter}
                    onQuestionComplete={handleQuestionComplete}
                  />
                </div>
                <LockOverlay
                  courseSlug={slug}
                  price={formatPrice(displayPrice, displayCurrency)}
                  onPurchase={handlePurchase}
                  purchasing={purchasing}
                  title={currentChapter.isMockExam ? t('mockExam.lockedTitle') : undefined}
                  description={currentChapter.isMockExam ? t('mockExam.requiresPaidAccess') : undefined}
                  showPromo={Boolean(currentChapter.isMockExam || unlockingMockExam)}
                  promoCode={promoCode}
                  onPromoCodeChange={handlePromoInputChange}
                  onApplyPromo={handleApplyPromo}
                  applyingPromo={applyingPromo}
                  appliedPromo={appliedPromo}
                  promoHint={t('course.promoCodeHint')}
                  purchaseLabel={currentChapter.isMockExam ? t('mockExam.unlockCta') : undefined}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
