import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, GraduationCap } from 'lucide-react';

interface BadgeCardProps {
  icon: React.ElementType;
  text: string;
}

const BadgeCard = ({ icon: Icon, text }: BadgeCardProps) => (
  <div className="flex flex-col items-center justify-center p-4 bg-card border border-border rounded-xl hover:shadow-md transition-all duration-300">
    <Icon className="w-8 h-8 text-primary mb-2" />
    <p className="text-xs md:text-sm font-semibold text-center text-foreground">{text}</p>
  </div>
);

export const AboutMedicolSection = () => {
  const { t } = useTranslation();

  const badges = [
    { icon: ShieldCheck, textKey: 'about.badge_jci' },
    { icon: Award, textKey: 'about.badge_sccp' },
    { icon: GraduationCap, textKey: 'about.badge_acicme' }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text + Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Título tipo subtítulo */}
            <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
              {t('about.hero_title')}
            </h2>
            
            {/* Párrafo descriptivo */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t('about.hero_description')}
            </p>
            
            {/* 3 cards pequeñas horizontales */}
            <div className="grid grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.textKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <BadgeCard icon={badge.icon} text={t(badge.textKey)} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Circular Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] flex items-center justify-center"
          >
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
              {/* Overlay circular con gradiente */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/80 to-primary/60 z-10 translate-x-8 translate-y-8" />
              
              {/* Imagen del equipo médico */}
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=800&fit=crop" 
                  alt={t('about.team_image_alt')}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
