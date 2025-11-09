import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface TrustBadge {
  icon: LucideIcon;
  textKey: string;
}

interface ServiceHeroSectionProps {
  titleKey: string;
  subtitleKey: string;
  highlightBadgeKey: string;
  backgroundImage: string;
  ctaPrimaryKey: string;
  ctaSecondaryKey: string;
  ctaSecondaryTarget?: string;
  whatsappNumber: string;
  whatsappMessageKey: string;
  trustBadges: TrustBadge[];
}

export const ServiceHeroSection = ({
  titleKey,
  subtitleKey,
  highlightBadgeKey,
  backgroundImage,
  ctaPrimaryKey,
  ctaSecondaryKey,
  ctaSecondaryTarget = '#services',
  whatsappNumber,
  whatsappMessageKey,
  trustBadges,
}: ServiceHeroSectionProps) => {
  const { t } = useTranslation();

  const scrollToSection = (target: string) => {
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t(whatsappMessageKey));
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Scale Animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src={backgroundImage}
          alt="Service hero background"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Primary Color Overlay - Same as Homepage/Plastic Surgery */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50" />
      
      {/* Bottom Darkening Overlay - Same as Homepage/Plastic Surgery */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* Highlight Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/90 border border-accent backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm font-medium text-accent-foreground">
                {t(highlightBadgeKey)}
              </span>
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
          >
            {t(titleKey)}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl"
          >
            {t(subtitleKey)}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t(ctaPrimaryKey)}
            </Button>
            <Button
              onClick={() => scrollToSection(ctaSecondaryTarget)}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              {t(ctaSecondaryKey)}
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <IconComponent className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-white/90">{t(badge.textKey)}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
