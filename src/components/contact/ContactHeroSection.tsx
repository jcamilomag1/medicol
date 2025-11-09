import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import contactHeroBg from '@/assets/contact-hero-bg.jpg';

export const ContactHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactHeroBg}
          alt="Medicol Contact"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight"
          >
            {t('contact.hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            {t('contact.hero.subtitle')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
