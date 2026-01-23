import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Star } from 'lucide-react';
import plasticSurgeryHeroBg from '@/assets/plastic-surgery-hero-bg.jpg';
export const PlasticHeroSection = () => {
  const {
    t
  } = useTranslation();
  const scrollToProcedures = () => {
    document.getElementById('procedures')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const handleCTAClick = () => {
    const whatsappNumber = "573052276747";
    const message = encodeURIComponent(t('plastic_surgery.hero.cta_button'));
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-accent">
      {/* Background image with animation */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={plasticSurgeryHeroBg}
          alt="Plastic surgery hero background"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
          style={{ 
            objectFit: 'cover',
            willChange: 'transform'
          }}
        />
      </motion.div>
      
      {/* Primera capa de overlay - Color primario con gradiente */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50" />
      
      {/* Segunda capa de overlay - Oscurecimiento inferior */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="container relative z-10 px-6 py-20">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="max-w-2xl text-left">
          {/* Title */}
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.8
        }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('plastic_surgery.hero.title')}
          </motion.h1>

          {/* Highlight Badge */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="mb-6">
            <Badge className="bg-accent text-accent-foreground text-lg px-6 py-2 font-bold">
              {t('plastic_surgery.hero.subtitle_highlight')}
            </Badge>
          </motion.div>

          {/* Subtitle */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl">
            {t('plastic_surgery.hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.8
        }} className="flex flex-col sm:flex-row gap-4 justify-start mb-12">
            <Button size="lg" onClick={handleCTAClick} className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              {t('plastic_surgery.hero.cta_button')}
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToProcedures} className="bg-blue-900 border-blue-900 text-white hover:bg-white hover:text-blue-900 hover:border-white font-bold text-lg px-8 py-6 transition-all">
              {t('plastic_surgery.hero.cta_secondary')}
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1,
          duration: 0.8
        }} className="flex flex-wrap items-center justify-start gap-6 md:gap-8">
            <div className="flex items-center gap-2 text-white/90">
              <Star className="w-5 h-5 fill-accent text-accent" />
              <span className="text-sm md:text-base font-medium">
                {t('plastic_surgery.hero.trust_badge_reviews')}
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm md:text-base font-medium">
                {t('plastic_surgery.hero.trust_badge_certified')}
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm md:text-base font-medium">
                {t('plastic_surgery.hero.trust_badge_surgeons')}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      
    </section>;
};