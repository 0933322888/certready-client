import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function CheckoutCancelPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <SEO noIndex title={t('checkout.seoCancelledTitle')} description={t('checkout.seoCancelledDescription')} />
      <Card className="w-full max-w-md text-center">
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full bg-accent-warm/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-accent-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-3xl font-display font-bold text-text-primary mb-2">
            {t('checkout.cancelledTitle')}
          </h1>
          <p className="text-text-muted">
            {t('checkout.cancelledMessage')}
          </p>
        </div>

        <div className="flex flex-col gap-5 mt-2">
          <Link to="/trades">
            <Button size="lg" className="w-full">
              {t('checkout.returnToCourse')}
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" className="w-full">
              {t('checkout.backToHome')}
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
