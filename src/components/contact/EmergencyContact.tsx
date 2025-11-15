import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AlertCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const EmergencyContact = () => {
  const { t } = useTranslation();

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+573009999999';
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-orange-200 dark:border-orange-800">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                {t('contact.emergency.title')}
              </h2>
            </div>

            <p className="text-center text-muted-foreground mb-6">
              {t('contact.emergency.subtitle')}
            </p>

            <div className="bg-muted/50 rounded-2xl p-6 mb-6">
              <p className="text-sm font-semibold text-primary mb-2 text-center">
                {t('contact.emergency.phone_label')}
              </p>
              <p className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                {t('contact.emergency.phone_number')}
              </p>
              <Button
                onClick={handleEmergencyCall}
                size="lg"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('contact.methods.phone_button')}
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              {t('contact.emergency.note')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
