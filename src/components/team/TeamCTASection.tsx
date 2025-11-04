import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle } from 'lucide-react';

const TeamCTASection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappMessage = encodeURIComponent(t('team.cta.whatsapp_message'));
  const whatsappUrl = `https://wa.me/573137371978?text=${whatsappMessage}`;

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t('team.cta.title')}
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            {t('team.cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              variant="secondary"
              className="min-h-12 text-base md:text-lg px-8"
            >
              <a 
                href="https://calendly.com/medicol/consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                {t('team.cta.button_calendly')}
              </a>
            </Button>

            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="min-h-12 text-base md:text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {t('team.cta.button_whatsapp')}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamCTASection;
