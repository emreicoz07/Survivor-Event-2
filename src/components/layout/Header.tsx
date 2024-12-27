import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, User, Trophy } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.races'), path: '/races' },
    { label: t('nav.info'), path: '/info' },
    { label: t('nav.media'), path: '/media' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.results'), path: '/results' },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold">Survivor Parkur</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Link
              to="/login"
              className="flex items-center space-x-1 text-gray-700 hover:text-orange-600"
            >
              <User className="h-5 w-5" />
              <span>{t('nav.login')}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 text-gray-700 hover:text-orange-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <LanguageSelector />
              <Link
                to="/login"
                className="flex items-center space-x-1 mt-4 text-gray-700 hover:text-orange-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>{t('nav.login')}</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}