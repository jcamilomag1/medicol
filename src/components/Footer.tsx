import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useIsAdmin } from '@/hooks/useUserRole';

const footerNav = {
  solutions: [
    { key: 'nav.cosmetic', href: '/procedimientos/cirugia-cosmetica' },
    { key: 'nav.regenerative', href: '/procedimientos/medicina-regenerativa' },
    { key: 'nav.dental', href: '/procedimientos/diseno-de-sonrisa' },
    { key: 'nav.diagnostics', href: '/procedimientos/chequeos-avanzados' },
  ],
  company: [
    { key: 'nav.experience', href: '/experiencia-medicol' },
    { key: 'nav.team', href: '/nuestro-equipo' },
    { key: 'nav.results', href: '/resultados' },
    { key: 'nav.blog', href: '/blog' },
  ],
  legal: [
    { key: 'footer.legal.privacy', href: '/politica-privacidad' },
    { key: 'footer.legal.terms', href: '/terminos-condiciones' },
  ],
};

export const Footer = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { isAdmin } = useIsAdmin(user?.id);

  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Solutions Column */}
          <div>
            <h4 className="text-sm font-semibold leading-6 text-white mb-4">
              {t('footer.solutions')}
            </h4>
            <ul className="space-y-3">
              {footerNav.solutions.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold leading-6 text-white mb-4">
              {t('footer.company')}
            </h4>
            <ul className="space-y-3">
              {footerNav.company.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-sm font-semibold leading-6 text-white mb-4">
              {t('footer.legal.title')}
            </h4>
            <ul className="space-y-3">
              {footerNav.legal.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div>
            <h4 className="text-sm font-semibold leading-6 text-white mb-4">
              {t('footer.contact_us')}
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-6 text-gray-300">
                  Medellín, Colombia
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+573001234567"
                  className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                >
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@medicol.com"
                  className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                >
                  info@medicol.com
                </a>
              </li>
            </ul>

            <h4 className="text-sm font-semibold leading-6 text-white mb-4">
              {t('footer.social')}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/10 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Columna izquierda - Admin Link */}
          <div className="flex items-center justify-center sm:justify-start">
            <Link
              to="/admin"
              className="text-xs text-white hover:text-accent transition-colors duration-200 font-medium px-4 py-2 border border-white/20 rounded-md hover:border-accent/50"
            >
              Admin
            </Link>
          </div>

          {/* Columna central - Copyright */}
          <p className="text-xs leading-5 text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Medicol. {t('footer.rights_reserved')}
          </p>

          {/* Columna derecha - Vacía */}
          <div></div>
        </div>
      </div>
    </footer>
  );
};
