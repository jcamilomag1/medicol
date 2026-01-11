import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCalendly } from '@/hooks/useCalendly';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { experienceFAQs } from '@/data/experience-faqs';
import { experienceTexts } from '@/data/experience-texts';

const ExperienceFAQWithCTA = () => {
  const { i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { openCalendlyPopup } = useCalendly();
  
  const isSpanish = i18n.language === 'es';

  const handleWhatsAppClick = () => {
    const message = isSpanish ? experienceTexts.whatsapp_message_es : experienceTexts.whatsapp_message_en;
    window.open(`https://wa.me/573001234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-start">
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {isSpanish ? experienceTexts.faq_title_es : experienceTexts.faq_title_en}
              </h2>
              <p className="text-lg text-muted-foreground">
                {isSpanish ? experienceTexts.faq_subtitle_es : experienceTexts.faq_subtitle_en}
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {experienceFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold text-foreground">
                      {i18n.language === 'es' ? faq.question_es : faq.question_en}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {i18n.language === 'es' ? faq.answer_es : faq.answer_en}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA Section - Sticky on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-accent p-8 md:p-10 shadow-lg">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
              
              <div className="relative z-10 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {isSpanish ? experienceTexts.cta_title_es : experienceTexts.cta_title_en}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {isSpanish ? experienceTexts.cta_subtitle_es : experienceTexts.cta_subtitle_en}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="w-full bg-white text-primary hover:bg-white/90 font-semibold shadow-md"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {isSpanish ? experienceTexts.whatsapp_button_es : experienceTexts.whatsapp_button_en}
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={openCalendlyPopup}
                    className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white font-semibold"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
                  </Button>
                </div>

                {/* Trust indicator */}
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm text-white/80 text-center">
                    {isSpanish ? experienceTexts.trust_indicator_es : experienceTexts.trust_indicator_en}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceFAQWithCTA;
