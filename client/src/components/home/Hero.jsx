import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { CertReadyLogoFull } from '../brand/CertReadyLogo';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image + gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-bg/95 via-bg/90 to-accent/20" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eb8512' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
    </section>
  );
}
