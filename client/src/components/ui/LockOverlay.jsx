import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getGuideSlugFromCourseSlug } from '../../data/tradeGuides';
import { paths } from '../../utils/routes';
import Button from './Button';

export default function LockOverlay({
  courseSlug,
  price,
  onPurchase,
  purchasing = false,
  title,
  description,
  showPromo = false,
  promoCode = '',
  onPromoCodeChange,
  onApplyPromo,
  applyingPromo = false,
  appliedPromo = null,
  promoHint = null,
  purchaseLabel = null,
}) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    if (onPurchase) {
      onPurchase();
    } else {
      const tradeSlug = getGuideSlugFromCourseSlug(courseSlug);
      navigate(tradeSlug ? paths.trade(tradeSlug) : paths.trades);
    }
  };

  return (
    <div className="absolute inset-0 bg-bg/95 backdrop-blur-sm flex items-center justify-center z-10 rounded-xl">
      <div className="text-center p-8 max-w-md w-full">
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-accent-warm mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-display font-bold mb-3">
          {title || t('lockOverlay.title')}
        </h3>
        <p className="text-text-muted mb-6">
          {description || t('lockOverlay.description')}
        </p>

        {showPromo && (
          <div className="mb-4 text-left space-y-2">
            <label htmlFor="lock-promo-code" className="block text-sm font-medium text-text-primary">
              {t('course.promoCodeLabel')}
            </label>
            <div className="flex gap-2">
              <input
                id="lock-promo-code"
                type="text"
                value={promoCode}
                onChange={(e) => onPromoCodeChange?.(e.target.value)}
                placeholder={t('course.promoCodePlaceholder')}
                className="flex-1 min-w-0 px-3 py-2 rounded-lg border border-border bg-surface text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={t('course.promoCodeLabel')}
              />
              <Button
                type="button"
                variant="outline"
                onClick={onApplyPromo}
                disabled={applyingPromo || !promoCode.trim()}
              >
                {applyingPromo ? t('course.processing') : t('course.promoCodeApply')}
              </Button>
            </div>
            {promoHint && !appliedPromo && (
              <p className="text-sm text-accent-warm font-medium">{promoHint}</p>
            )}
            {appliedPromo && (
              <p className="text-sm text-accent-warm font-medium">
                {appliedPromo.amountCents === 0
                  ? t('course.promoAppliedFree')
                  : t('course.promoApplied')}
              </p>
            )}
          </div>
        )}

        <Button onClick={handleClick} size="lg" disabled={purchasing} className="w-full">
          {purchasing
            ? t('course.processing')
            : `${purchaseLabel || t('lockOverlay.getAccess')} — ${price}`}
        </Button>
      </div>
    </div>
  );
}
