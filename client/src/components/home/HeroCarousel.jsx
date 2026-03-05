import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { formatPrice } from '../../utils/formatters';
import { CertReadyLogoFull } from '../brand/CertReadyLogo';

const AUTOPLAY_MS = 6000;

export default function HeroCarousel() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const totalSlides = 2;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % totalSlides);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  const goTo = (i) => setIndex(i);
  const next = () => setIndex((i) => (i + 1) % totalSlides);
  const prev = () => setIndex((i) => (i - 1 + totalSlides) % totalSlides);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="flex min-h-screen transition-transform duration-500 ease-out"
        style={{ width: '200%', transform: `translateX(-${index * 50}%)` }}
      >
        {/* Slide 0: Main hero */}
        <div className="min-h-screen w-1/2 flex-shrink-0 relative flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/hero-bg.png)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bg/95 via-bg/90 to-accent/20" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eb8512' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <CertReadyLogoFull
              width={560}
              height={120}
              className="mx-auto mb-6 max-w-[560px] w-full h-auto"
            />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text-primary mb-6 leading-tight">
              {t('hero.title')} <span className="text-accent mt-2">— {t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-primary mb-10 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/trades">
                <Button size="lg" className="w-full sm:w-auto">
                  {t('hero.browseCourses')} →
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide 1: Discount */}
        <div className="min-h-screen w-1/2 flex-shrink-0 relative flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/hero-bg.png)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bg/95 via-bg/90 to-accent-warm/10" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eb8512' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <Badge variant="warm" className="text-sm px-4 py-1.5 mb-6">
              {t('hero.slideDiscountBadge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6 leading-tight">
              {t('hero.slideDiscountTitle')}
            </h2>
            <p className="text-lg md:text-xl text-text-primary mb-10 max-w-2xl mx-auto">
              {t('hero.slideDiscountSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-baseline justify-center gap-6 mb-8">
              <span className="text-2xl text-text-primary">
                {t('hero.slideDiscountPriceWas')}{' '}
                <span className="line-through">{formatPrice(4999, 'CAD')}</span>
              </span>
              <span className="text-4xl md:text-5xl font-display font-bold text-accent-warm">
                {t('hero.slideDiscountPriceNow')} {formatPrice(2999, 'CAD')}
              </span>
            </div>
            <p className="text-sm text-text-primary mb-4 font-mono font-semibold text-accent-warm">
              {t('hero.slideDiscountCode')}: SPRING2026
            </p>
            <p className="text-sm text-text-muted mb-8">
              {t('hero.slideDiscountSpots')}
            </p>
            <Link to="/trades">
              <Button size="lg" className="bg-accent-warm hover:bg-accent-warm/90 text-bg font-semibold">
                {t('hero.slideDiscountCta')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label={t('hero.carouselPrev')}
          className="p-2 rounded-full bg-surface/80 border border-border text-text-primary hover:bg-surface-2 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-2">
          {[0, 1].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-8 bg-accent-warm' : 'w-2 bg-surface-2 hover:bg-border'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label={t('hero.carouselNext')}
          className="p-2 rounded-full bg-surface/80 border border-border text-text-primary hover:bg-surface-2 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
