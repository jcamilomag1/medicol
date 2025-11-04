import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const TeamMissionSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
              {t('team.mission.title')}
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground">
              <p className="leading-relaxed">
                {t('team.mission.paragraph1')}
              </p>
              
              <p className="leading-relaxed">
                {t('team.mission.paragraph2')}
              </p>
              
              <p className="leading-relaxed font-medium text-foreground">
                {t('team.mission.paragraph3')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamMissionSection;
