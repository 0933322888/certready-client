import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function PricingSection() {
  const { t } = useTranslation();
  const features = t('home.pricingFeatures', { returnObjects: true });
  const featureList = Array.isArray(features) ? features : [];

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4">
            {t('home.pricing')}
          </h2>
          <p className="text-lg text-text-muted">
            {t('home.pricingSub')}
          </p>
        </div>
        <Card className="text-center">
          <ul className="space-y-3 mb-8 text-left max-w-md mx-auto">
            {featureList.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-primary">{feature}</span>
              </li>
            ))}
          </ul>
          <Link to="/trades">
            <Button size="lg" className="w-full sm:w-auto">
              {t('home.viewCourses')}
            </Button>
          </Link>
          <p className="text-sm text-text-muted mt-4">
            {t('home.lifetimeNote')}
          </p>
          <p className="text-sm text-accent-warm font-medium mt-2">
            {t('home.launchOfferNote')}
          </p>
        </Card>
      </div>
    </section>
  );
}
