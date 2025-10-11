import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />

      {/* Content Container */}
      <div className="relative flex flex-col justify-center items-center h-full max-w-4xl mx-auto px-4 md:px-6 text-center">
        {/* Textual Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter">
            {t('hero.title')}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="mt-4 text-lg md:text-xl text-neutral-200 tracking-wide">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Button variant="default" size="lg" className="mt-8 bg-accent text-primary hover:bg-accent/90 transition-all duration-300 hover:scale-105">
            {t('hero.cta')}
          </Button>
        </motion.div>

        {/* Social Proof Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-x-8"
        >
          <img 
            src="/logos/jci-logo-white.svg" 
            alt={t('hero.jci_alt')}
            className="h-10 opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="/logos/medellin-health-city-logo-white.svg" 
            alt={t('hero.mhc_alt')}
            className="h-12 opacity-80 hover:opacity-100 transition-opacity"
          />
          <img 
            src="/logos/iso-9001-logo-white.svg" 
            alt={t('hero.iso_alt')}
            className="h-10 opacity-80 hover:opacity-100 transition-opacity"
          />
        </motion.div>
      </div>
    </section>
  );
};
