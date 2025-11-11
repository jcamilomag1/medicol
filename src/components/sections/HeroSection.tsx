import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import accreditationsImage from "@/assets/accreditations.png";

export const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Animation */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <img
          src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Medical facility background"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
          style={{ 
            objectFit: 'cover',
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        />
      </motion.div>

      {/* Enhanced Overlays */}
      <div 
        className="absolute inset-0 z-[1] bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50" 
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
      <div 
        className="absolute inset-0 z-[2] bg-gradient-to-t from-black/40 via-transparent to-transparent" 
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6 md:gap-8 lg:gap-8 items-center">
          
          {/* LEFT COLUMN - Main Content (70%) */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 lg:pr-4">
            {/* Main Title with Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-2xl text-center lg:text-left"
            >
              {t('hero.title')}
            </motion.h1>
            
            {/* Subtitle with Animation */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-sm sm:text-base md:text-lg lg:text-2xl text-white/90 tracking-wide max-w-3xl leading-relaxed text-center lg:text-left"
            >
              {t('hero.subtitle')}
            </motion.p>
            
            {/* Trust Logos - Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="hidden md:flex flex-wrap items-center pt-4"
            >
              <motion.img 
                src={accreditationsImage} 
                alt={t('hero.jci_alt')}
                loading="lazy"
                decoding="async"
                className="h-12 md:h-14 lg:h-16 w-auto max-w-full opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.9, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
            </motion.div>
          </div>
          
          {/* RIGHT COLUMN - CTA Card (30%) */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            className="lg:self-center px-4 lg:px-0 lg:pr-6 overflow-visible"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 md:p-8 lg:p-10 shadow-2xl shadow-black/50 hover:shadow-black/70 transition-all duration-300 hover:-translate-y-2 mx-auto lg:mx-0 lg:mr-6 overflow-visible max-w-md lg:max-w-none">
              
              {/* Card Headline */}
              <motion.h3 
                className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {t('hero.cta_card_headline')}
              </motion.h3>
              
              {/* CTA Button with Pulse Animation */}
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2, 
                  ease: "easeInOut" 
                }}
              >
                <Button 
                  size="lg"
                  className="w-full h-12 sm:h-14 md:h-16 lg:h-20 px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base lg:text-lg font-bold bg-accent text-primary hover:bg-accent/90 shadow-lg shadow-accent/50 hover:shadow-xl hover:shadow-accent/60 transition-all duration-300 hover:scale-105 group flex items-center justify-center text-center leading-tight"
                >
                  <span className="flex-1 text-center px-1">
                    {t('hero.cta')}
                  </span>
                  <ArrowRight className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" size={18} />
                </Button>
              </motion.div>
              
              {/* Trust Badges */}
              <motion.div 
                className="mt-4 space-y-2 md:mt-6 md:space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                  <Check className="text-accent flex-shrink-0" size={16} />
                  <span>{t('hero.cta_benefit_1')}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                  <Check className="text-accent flex-shrink-0" size={16} />
                  <span>{t('hero.cta_benefit_2')}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                  <Check className="text-accent flex-shrink-0" size={16} />
                  <span>{t('hero.cta_benefit_3')}</span>
                </div>
              </motion.div>
              
              {/* Social Proof */}
              <motion.p 
                className="text-center text-white/70 text-xs md:text-sm mt-4 pt-4 md:mt-6 md:pt-6 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                ⭐⭐⭐⭐⭐ {t('hero.social_proof')}
              </motion.p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
