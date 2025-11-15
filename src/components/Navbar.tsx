import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import medicolLogo from '@/assets/medicol-logo-blanco.png';
import { useAuth } from '@/contexts/AuthContext';
import { useIsAdmin } from '@/hooks/useUserRole';

interface NavLink {
  href?: string;
  key: string;
  submenu?: Array<{ href: string; key: string }>;
}

const navLinks: NavLink[] = [
  { href: '/', key: 'navbar.home' },
  { 
    key: 'navbar.services',
    submenu: [
      { href: '/servicios/cirugia-plastica', key: 'navbar.services_submenu.plastic_surgery' },
      { href: '/servicios/celulas-madre', key: 'navbar.services_submenu.stem_cells' },
      { href: '/servicios/procedimientos-dentales', key: 'navbar.services_submenu.dental' },
      { href: '/servicios/diagnosticos', key: 'navbar.services_submenu.diagnostics' },
    ]
  },
  { href: '/experiencia', key: 'navbar.experience' },
  { href: '/equipo', key: 'navbar.team' },
  { href: '/blog', key: 'navbar.blog' },
  { href: '/contacto', key: 'navbar.contact' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');
  const { user } = useAuth();
  const { isAdmin } = useIsAdmin(user?.id);

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
        isScrolled || isBlogPage ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={medicolLogo}
              alt="Medicol Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-8">
            {navLinks.map((link) => {
              // Si es "Experiencia", mantener el estilo especial
              if (link.key === 'navbar.experience') {
                return (
                  <Link
                    key={link.key}
                    to={link.href!}
                    className="px-5 py-2 bg-accent text-primary font-bold rounded-full shadow-md shadow-accent/40 hover:shadow-lg hover:shadow-accent/60 hover:scale-105 transform transition-all duration-300"
                  >
                    {t(link.key)}
                  </Link>
                );
              }
              
              // Si tiene submenu (Servicios)
              if (link.submenu) {
                return (
                  <DropdownMenu key={link.key}>
                    <DropdownMenuTrigger className="text-white hover:text-accent transition-colors duration-200 font-medium flex items-center gap-1 outline-none">
                      {t(link.key)}
                      <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="start" 
                      className="w-[320px] bg-primary border border-primary shadow-xl z-[100]"
                    >
                      {link.submenu.map((subLink) => (
                        <DropdownMenuItem key={subLink.key} asChild>
                          <Link
                            to={subLink.href}
                            className="cursor-pointer text-white hover:bg-accent hover:text-primary px-4 py-3 text-sm font-medium transition-colors duration-200 border-b border-white/10"
                          >
                            {t(subLink.key)}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              
              // Links normales
              return (
                <Link
                  key={link.key}
                  to={link.href!}
                  className="text-white hover:text-accent transition-colors duration-200 font-medium"
                >
                  {t(link.key)}
                </Link>
              );
            })}
            {isAdmin && (
              <Link
                to="/admin"
                className="text-white hover:text-accent transition-colors duration-200 font-medium"
              >
                Admin
              </Link>
            )}
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
              {navLinks.map((link) => {
                // Si es "Experiencia", mantener el estilo especial
                if (link.key === 'navbar.experience') {
                  return (
                    <Link
                      key={link.key}
                      to={link.href!}
                      onClick={handleNavClick}
                      className="px-5 py-2 bg-accent text-primary font-bold rounded-full shadow-md shadow-accent/40 hover:shadow-lg hover:shadow-accent/60 text-left transform transition-all duration-300"
                    >
                      {t(link.key)}
                    </Link>
                  );
                }
                
                // Si tiene submenu (Servicios)
                if (link.submenu) {
                  return (
                    <div key={link.key} className="space-y-2">
                      <div className="text-white font-bold text-sm uppercase tracking-wide">
                        {t(link.key)}
                      </div>
                      <div className="pl-4 space-y-2 border-l-2 border-accent/30">
                        {link.submenu.map((subLink) => (
                          <Link
                            key={subLink.key}
                            to={subLink.href}
                            onClick={handleNavClick}
                            className="block text-white/90 hover:text-accent transition-colors duration-200 text-sm py-1"
                          >
                            {t(subLink.key)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                
                // Links normales
                return (
                  <Link
                    key={link.key}
                    to={link.href!}
                    onClick={handleNavClick}
                    className="text-white hover:text-accent transition-colors duration-200 font-medium py-2"
                  >
                    {t(link.key)}
                  </Link>
                );
              })}
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={handleNavClick}
                  className="text-white hover:text-accent transition-colors duration-200 font-medium py-2"
                >
                  Admin
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
