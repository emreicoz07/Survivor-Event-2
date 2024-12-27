import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function HomeHero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[80vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070")',
          filter: 'brightness(0.4)'
        }}
      />
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          {t('hero.slogan')}
        </p>
        <Link
          to="/register"
          className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300 transform hover:scale-105"
        >
          {t('hero.register')}
        </Link>
      </div>
    </section>
  );
}