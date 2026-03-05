import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getGuideSlugFromCourseSlug } from '../../data/tradeGuides';
import { paths } from '../../utils/routes';
import Button from './Button';

export default function LockOverlay({ courseSlug, price, onPurchase, purchasing = false }) {
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
      <div className="text-center p-8 max-w-md">
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
          {t('lockOverlay.title')}
        </h3>
        <p className="text-text-muted mb-6">
          {t('lockOverlay.description')}
        </p>
        <Button onClick={handleClick} size="lg" disabled={purchasing}>
          {purchasing ? t('course.processing') : `${t('lockOverlay.getAccess')} — ${price}`}
        </Button>
      </div>
    </div>
  );
}
