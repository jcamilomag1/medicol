import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const TrustArchitectureSection = () => {
  const { t } = useTranslation();

  const trustPoints = [
    'trust.point_1',
    'trust.point_2',
    'trust.point_3',
    'trust.point_4'
  ];

  return (
    <section id="trust-simple" className="py-20 sm:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-8">
            {t('trust.section_title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 text-left"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">{t(point)}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};