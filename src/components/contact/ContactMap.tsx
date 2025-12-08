import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const ContactMap = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('contact.map.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('contact.map.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2774559583715!2d-75.56714492414!3d6.207888993780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428c49ab8d823%3A0x8e4f28d6b2e1b9c5!2sCalle%2010%20%2343B-30%2C%20El%20Poblado%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1699999999999"
            className="w-full h-[400px] md:h-[500px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('contact.map.title')}
          />
        </motion.div>
      </div>
    </section>
  );
};
