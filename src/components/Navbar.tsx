import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import medicolLogo from '@/assets/medicol-logo-blanco.png';

interface NavLink {
  href: string;
  key: string;
}

const navLinks: NavLink[] = [
  { href: '/', key: 'navbar.home' },
  { href: '/servicios', key: 'navbar.services' },
  { href: '/experiencia', key: 'navbar.experience' },
  { href: '/equipo', key: 'navbar.team' },
  { href: '/contacto', key: 'navbar.contact' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${
        isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={medicolLogo}
              alt="Medicol Logo"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-8">
            {navLinks.map((link) => (
              link.key === 'navbar.experience' ? (
                <motion.a
                  key={link.key}
                  href={link.href}
                  className="px-5 py-2 bg-accent text-primary font-bold rounded-full shadow-md shadow-accent/40 hover:shadow-lg hover:shadow-accent/60 hover:scale-105 transform transition-all duration-300"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t(link.key)}
                </motion.a>
              ) : (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-white hover:text-accent transition-colors duration-200 font-medium"
                >
                  {t(link.key)}
                </a>
              )
            ))}
          </nav>

          {/* Right Side Controls (Desktop) */}
          <div className="hidden md:flex items-center gap-x-4">
            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-x-2 text-white hover:text-accent transition-colors duration-200 px-3 py-2 rounded-md"
              aria-label="Toggle language"
            >
              <Globe size={20} />
              <span className="text-sm font-medium uppercase">
                {i18n.language === 'es' ? 'EN' : 'ES'}
              </span>
            </button>

            {/* CTA Button */}
            <Button
              variant="default"
              size="default"
              className="bg-accent text-primary hover:bg-accent/90 font-semibold"
            >
              {t('nav.cta')}
            </Button>
          </div>

          {/* Mobile Controls: Language + Menu */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language Switch (Always Visible) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-white hover:text-accent transition-colors duration-200 px-2 py-1.5 rounded-md"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="text-xs font-medium uppercase">
                {i18n.language === 'es' ? 'EN' : 'ES'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-accent transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-primary shadow-lg"
          >
            <nav className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                link.key === 'navbar.experience' ? (
                  <motion.a
                    key={link.key}
                    href={link.href}
                    onClick={handleNavClick}
                    className="px-5 py-2 bg-accent text-primary font-bold rounded-full shadow-md shadow-accent/40 hover:shadow-lg hover:shadow-accent/60 text-center transform transition-all duration-300"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {t(link.key)}
                  </motion.a>
                ) : (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-white hover:text-accent transition-colors duration-200 font-medium py-2"
                  >
                    {t(link.key)}
                  </a>
                )
              ))}


              {/* Mobile CTA Button */}
              <Button
                variant="default"
                size="default"
                className="bg-accent text-primary hover:bg-accent/90 font-semibold w-full"
              >
                {t('nav.cta')}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
