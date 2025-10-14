import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail } from 'lucide-react';

export const FinalCTASection = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const whatsappNumber = "573001234567"; // Replace with actual number
    const message = encodeURIComponent(
      "Hola! Me gustaría agendar una consulta virtual gratuita sobre cirugía plástica."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleContactClick = () => {
    window.location.href = '/contacto';
  };

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-primary via-primary-light to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-5" />
      
      <div className="container mx-auto max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('plastic_surgery.final_cta.title')}
          </h2>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            {t('plastic_surgery.final_cta.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 px-8 gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            {t('plastic_surgery.final_cta.cta_primary')}
          </Button>
          
          <Button
            onClick={handleContactClick}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold text-lg py-6 px-8 gap-2"
          >
            <Mail className="w-5 h-5" />
            {t('plastic_surgery.final_cta.cta_secondary')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
