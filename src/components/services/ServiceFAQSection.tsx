import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar } from 'lucide-react';
import { useCalendly } from '@/hooks/useCalendly';

interface FAQ {
  question_es: string;
  question_en: string;
  answer_es: string;
  answer_en: string;
}

interface CTAConfig {
  titleKey: string;
  subtitleKey: string;
  primaryButtonKey: string;
  secondaryButtonKey: string;
  whatsappMessage: string;
}

interface ServiceFAQSectionProps {
  titleKey: string;
  subtitleKey: string;
  faqs: FAQ[];
  ctaConfig: CTAConfig;
}

export const ServiceFAQSection = ({
  titleKey,
  subtitleKey,
  faqs,
  ctaConfig,
}: ServiceFAQSectionProps) => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';
  const { openCalendlyPopup } = useCalendly();

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(ctaConfig.whatsappMessage);
    window.open(`https://wa.me/573052276747?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12">
          {/* FAQ Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {t(titleKey)}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t(subtitleKey)}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-lg px-6 bg-background shadow-soft"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold text-foreground">
                        {isSpanish ? faq.question_es : faq.question_en}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {isSpanish ? faq.answer_es : faq.answer_en}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>

          {/* CTA Column - Sticky on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="bg-gradient-to-br from-primary via-primary-light to-accent rounded-xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-5" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {t(ctaConfig.titleKey)}
                </h3>
                <p className="text-white/90 text-base mb-6">
                  {t(ctaConfig.subtitleKey)}
                </p>

                <div className="flex flex-col gap-3">
                  <Button
                    onClick={handleWhatsAppContact}
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t(ctaConfig.primaryButtonKey)}
                  </Button>
                  
                  <Button
                    onClick={openCalendlyPopup}
                    size="lg"
                    variant="outline"
                    className="w-full bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold py-6 gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    {isSpanish ? 'Agendar Cita' : 'Schedule Appointment'}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
