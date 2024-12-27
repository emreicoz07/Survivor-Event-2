import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Trophy, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com' },
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Youtube, href: 'https://youtube.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">Survivor Parkur</span>
            </Link>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/races" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.races')}
                </Link>
              </li>
              <li>
                <Link to="/info" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.info')}
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.results')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@survivorparkur.com</li>
              <li>+90 (555) 123 4567</li>
              <li>İstanbul, Türkiye</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Survivor Parkur. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}