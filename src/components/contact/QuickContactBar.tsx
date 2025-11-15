import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const QuickContactBar = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('contact.methods.whatsapp_message'));
    window.open(`https://wa.me/573043218900?text=${message}`, '_blank');
  };

  const handlePhone = () => {
    window.location.href = 'tel:+573043218900';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10 shadow-lg"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              {/* Contact Info */}
              <div className="flex items-center gap-6 text-white text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">{t('contact.quick_bar.phone')}</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{t('contact.quick_bar.hours')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Button
                  onClick={handleWhatsApp}
                  size="sm"
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t('contact.quick_bar.whatsapp')}
                </Button>
                <Button
                  onClick={handlePhone}
                  size="sm"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t('contact.quick_bar.phone').split(' ')[0]}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
