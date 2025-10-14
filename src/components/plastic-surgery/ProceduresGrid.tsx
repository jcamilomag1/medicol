import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ProcedureAccordion } from './ProcedureAccordion';

export const ProceduresGrid = () => {
  const { t } = useTranslation();

  return (
    <section id="procedures" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('plastic_surgery.procedures.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('plastic_surgery.procedures.subtitle')}
          </p>
        </motion.div>

        <ProcedureAccordion />
      </div>
    </section>
  );
};