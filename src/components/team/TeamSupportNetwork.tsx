import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Building2, Microscope, Home } from 'lucide-react';

const TeamSupportNetwork = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { key: 'facilities', icon: Building2 },
    { key: 'labs', icon: Microscope },
    { key: 'hospitality', icon: Home },
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-accent/5">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            {t('team.support.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('team.support.intro')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all text-center group"
            >
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-12 h-12 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4">
                {t(`team.support.${feature.key}.title`)}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {t(`team.support.${feature.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSupportNetwork;
