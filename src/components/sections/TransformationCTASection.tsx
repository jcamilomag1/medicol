import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';

export const TransformationCTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="mt-10" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-6 sm:p-10 md:p-12 border border-primary/10 shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Columna izquierda - Texto */}
              <div>
                {/* Badge superior decorativo */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-6">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium text-accent">{t('reviews.badge_text')}</span>
                </div>
                
                {/* Título principal */}
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                  {t('reviews.cta_title')}
                </h3>
              </div>

              {/* Columna derecha - Botón */}
              <div className="flex items-center justify-center md:justify-end">
                <motion.a 
                  href="/experiencia"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full text-base shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('reviews.cta_button')}
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
