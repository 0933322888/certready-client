import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { getCourse } from '../data/courseContent';
import { getAllChapters } from '../data/courseHelpers';
import { getGuideBySlug } from '../data/tradeGuides';
import { useCoursePricingBySlug } from '../hooks/useCoursePricing';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import { getTradeExamPageSEO, getBreadcrumbStructuredData } from '../utils/seo';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { formatPrice } from '../utils/formatters';
import api from '../utils/api';
import toast from 'react-hot-toast';
import Spinner from '../components/ui/Spinner';
import NotFoundPage from './NotFoundPage';
import { paths } from '../utils/routes';

export default function TradeExamPage() {
  const { tradeSlug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { user, hasPurchasedBySlug, loading: authLoading } = useAuth();
  const [purchasing, setPurchasing] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [applyingPromo, setApplyingPromo] = useState(false);

  const guide = getGuideBySlug(tradeSlug);
  const course = guide ? getCourse(guide.courseSlug, i18n.language) : null;
  const slug = course?.slug;
  const { pricing, loading: pricingLoading } = useCoursePricingBySlug(slug);

  const allChapters = course ? getAllChapters(course) : [];
  const hasPurchased = slug ? hasPurchasedBySlug(slug) : false;

  const currentPrice = pricing?.currentPrice ?? course?.price;
  const fullPrice = pricing?.fullPrice ?? course?.price;
  const currency = pricing?.currency ?? course?.currency ?? 'CAD';
  const displayPrice = appliedPromo ? appliedPromo.amountCents : (course?.price ?? fullPrice);
  const displayCurrency = appliedPromo ? appliedPromo.currency : currency;

  const handleApplyPromo = async () => {
    if (!slug || !user || !promoCode.trim()) return;
    setApplyingPromo(true);
    try {
      const res = await api.post('/payments/validate-promo', { promoCode: promoCode.trim(), courseSlug: slug });
      if (res.data?.valid) {
        setAppliedPromo({ code: promoCode.trim(), amountCents: res.data.amountCents, currency: res.data.currency });
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
      navigate(paths.login, { state: { from: paths.trade(tradeSlug) } });
      return;
    }
    if (hasPurchased && slug) {
      navigate(paths.learn(slug));
      return;
    }
    setPurchasing(true);
    try {
      const res = await api.post('/payments/create-checkout-session', {
        courseSlug: slug,
        promoCode: appliedPromo?.code || undefined,
      });
      if (res.data?.url) {
        window.location.href = res.data.url;
        return;
      }
    } catch (err) {
      toast.error(err.response?.data?.message || t('course.checkoutFailed'));
      setPurchasing(false);
    }
  };

  if (!guide || !course) {
    return <NotFoundPage />;
  }
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const seo = getTradeExamPageSEO(course, tradeSlug);
  const breadcrumbItems = [
    { name: t('nav.home'), url: paths.home },
    { name: t('tradesPage.breadcrumb'), url: paths.trades },
    { name: course.trade, url: paths.trade(tradeSlug) },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {seo && (
        <SEO
          {...seo}
          structuredData={[seo.structuredData, getBreadcrumbStructuredData(breadcrumbItems)].filter(Boolean)}
        />
      )}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <Badge variant="accent">{course.tradeCode}</Badge>
          <span className="text-text-muted">{t('course.skilledTradesOntario')}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
          {t('course.coursePageTitle', { trade: course.trade, code: course.tradeCode })}
        </h1>
        <p className="text-xl text-text-muted mb-6">{course.subtitle}</p>
        <p className="text-lg text-text-primary max-w-3xl leading-relaxed">
          {course.description || t('course.descriptionFallback')}
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link to={paths.guideArticle(tradeSlug)} className="text-accent hover:text-accent/80 font-medium">
            {t('course.learnMoreLink', { trade: course.trade })}
          </Link>
          <Link to={paths.practiceTest(tradeSlug)} className="text-accent hover:text-accent/80 font-medium">
            {t('tradesPage.tryFreePractice')} →
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <h2 className="text-2xl font-display font-bold text-text-primary mb-6">
              {t('course.whatsCovered')}
            </h2>
            <div className="space-y-3">
              {allChapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className={`p-4 rounded-lg border ${
                    chapter.isFree
                      ? 'border-accent/30 bg-accent/5'
                      : hasPurchased
                      ? 'border-border bg-surface'
                      : 'border-border bg-surface opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-semibold text-accent">{chapter.number}</span>
                      <div>
                        <h3 className="font-semibold text-text-primary">{chapter.title}</h3>
                        <p className="text-sm text-text-muted">{chapter.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {chapter.isFree && <Badge variant="accent">{t('course.freePreview')}</Badge>}
                      {!chapter.isFree && !hasPurchased && (
                        <svg className="w-5 h-5 text-accent-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      )}
                      {hasPurchased && (
                        <Link to={`${paths.learn(slug)}?chapter=${chapter.id}`}>
                          <Button variant="ghost" size="sm">{t('course.view')} →</Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-display font-bold text-text-primary mb-6">
              {t('course.whatsIncluded')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-primary">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <div className="text-center mb-6">
              <div className="text-4xl font-display font-bold text-accent mb-2">
                {formatPrice(displayPrice, displayCurrency)}
              </div>
              {appliedPromo && (
                <p className="text-sm text-accent-warm font-medium mb-2">
                  {appliedPromo.amountCents === 0 ? t('course.promoAppliedFree') : t('course.promoApplied')}
                </p>
              )}
              <p className="text-text-muted">{t('course.oneTime')}</p>
              <p className="text-sm mt-2 text-accent-warm font-medium">{t('course.promoCodeHint')}</p>
            </div>

            {!hasPurchased && user && (
              <div className="mb-4">
                <label htmlFor="promo-code" className="block text-sm font-medium text-text-primary mb-1">
                  {t('course.promoCodeLabel')}
                </label>
                <div className="flex gap-2">
                  <input
                    id="promo-code"
                    type="text"
                    value={promoCode}
                    onChange={(e) => handlePromoInputChange(e.target.value)}
                    placeholder={t('course.promoCodePlaceholder')}
                    className="flex-1 min-w-0 px-3 py-2 rounded-lg border border-border bg-surface text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label={t('course.promoCodeLabel')}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleApplyPromo}
                    disabled={applyingPromo || !promoCode.trim()}
                  >
                    {applyingPromo ? t('course.processing') : t('course.promoCodeApply')}
                  </Button>
                </div>
              </div>
            )}

            {hasPurchased ? (
              <Link to={paths.learn(slug)} className="block">
                <Button size="lg" className="w-full mb-4">
                  {t('home.continueLearning')} →
                </Button>
              </Link>
            ) : user ? (
              <Button
                size="lg"
                className="w-full mb-4"
                onClick={handlePurchase}
                disabled={purchasing}
              >
                {purchasing ? t('course.processing') : t('course.purchase', { price: formatPrice(displayPrice, displayCurrency) })}
              </Button>
            ) : (
              <Link to={paths.login} state={{ from: paths.trade(tradeSlug) }}>
                <Button size="lg" className="w-full mb-4">
                  {t('course.signInToPurchase')}
                </Button>
              </Link>
            )}

            <div className="space-y-3 text-sm text-text-muted">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('course.lifetimeAccess')}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('course.noSubscription')}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('course.studyPace')}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
