import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsAppButton = () => {
  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=13054290812&text=Hello,%20I%20would%20like%20to%20know%20more%20information', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      className="fixed bottom-24 right-6 z-50"
    >
      <motion.button
        onClick={handleWhatsApp}
        className="flex items-center justify-center bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all w-14 h-14"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
};
