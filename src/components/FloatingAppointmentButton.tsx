import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const FloatingAppointmentButton = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link to="/contacto">
        <motion.button
          className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all px-6 py-4 md:px-8 md:py-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={t('floating_appointment.button_text')}
        >
          <Calendar className="w-5 h-5 md:w-6 md:h-6" />
          {/* Full text on desktop, short text on mobile */}
          <span className="hidden md:inline text-base">
            {t('floating_appointment.button_text')}
          </span>
          <span className="md:hidden text-sm font-medium">
            {t('floating_appointment.button_text_short')}
          </span>
        </motion.button>
      </Link>
    </motion.div>
  );
};
