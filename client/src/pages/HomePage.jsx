import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import { getHomePageSEO, getOrganizationStructuredData, getWebSiteStructuredData, getFAQStructuredData } from '../utils/seo';
import HeroCarousel from '../components/home/HeroCarousel';
import FeaturesSection from '../components/home/FeaturesSection';
import CoursePreview from '../components/home/CoursePreview';
import Testimonials from '../components/home/Testimonials';
import PricingSection from '../components/home/PricingSection';
import Card from '../components/ui/Card';

const HOME_FAQ_FOR_SEO = [
  { question: 'What trades does CertReady offer exam prep for?', answer: 'CertReady currently offers courses for Hairstylist (332A) and Plumber (306A), with more trades being added. All courses are based on the official Red Seal Occupational Standard.' },
  { question: 'Is this affiliated with the Red Seal Program or Skilled Trades Ontario?', answer: 'No. CertReady is an independent study resource. We are not affiliated with or endorsed by any provincial or federal trades certification authority.' },
  { question: 'How long do I have access after purchasing?', answer: 'Lifetime access. There is no subscription — you pay once and study at your own pace, forever.' },
  { question: 'What if I fail the exam after using CertReady?', answer: 'We believe in our content, but we cannot guarantee exam results — exam content is set by certification authorities and can change. We do not offer refunds based on exam outcomes.' },
  { question: 'What payment methods are accepted?', answer: 'All major credit and debit cards via Stripe. Payments are processed securely — CertReady never stores your card information.' },
  { question: 'Can I preview before buying?', answer: 'Yes — the first 2 chapters of every course are completely free with no account required. Browse, read, and try practice questions before you decide.' },
];

const STAT_VALUES = ['15', '75+', '480', '70%'];
const STAT_KEYS = ['stats.chapters', 'stats.questions', 'stats.hours', 'stats.passingMark'];
const STEP_KEYS = [
  { title: 'home.step1Title', desc: 'home.step1Desc' },
  { title: 'home.step2Title', desc: 'home.step2Desc' },
  { title: 'home.step3Title', desc: 'home.step3Desc' },
];

export default function HomePage() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = t('home.faqs', { returnObjects: true });
  const faqList = Array.isArray(faqs) ? faqs : [];
  const seo = getHomePageSEO();

  return (
    <div>
      <SEO
        {...seo}
        structuredData={[
          getOrganizationStructuredData(),
          getWebSiteStructuredData(),
          getFAQStructuredData(HOME_FAQ_FOR_SEO),
        ]}
      />
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Bar */}
      <section className="py-8 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STAT_KEYS.map((key, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-accent-warm mb-1">
                  {STAT_VALUES[index]}
                </div>
                <div className="text-sm text-text-primary">{t(key)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-bg" aria-labelledby="how-it-works-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="how-it-works-heading" className="text-4xl font-display font-bold text-text-primary mb-4">
              {t('home.howItWorks')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEP_KEYS.map((step, index) => (
              <Card key={index} hover className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-2xl font-display font-bold text-accent mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {t(step.title)}
                </h3>
                <p className="text-text-primary">{t(step.desc)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <CoursePreview />

      {/* What's Inside */}
      <FeaturesSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <PricingSection />

      {/* FAQ */}
      <section id="faq" className="py-20 bg-surface scroll-mt-24" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-4xl font-display font-bold text-text-primary mb-4">
              {t('home.faqTitle')}
            </h2>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, index) => (
              <Card key={index}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
