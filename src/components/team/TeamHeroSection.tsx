import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const TeamHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/team-hero-bg.jpg')"
        }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/85" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-block">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30">
              {t('team.hero.badge')}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto">
            {t('team.hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('team.hero.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default TeamHeroSection;
