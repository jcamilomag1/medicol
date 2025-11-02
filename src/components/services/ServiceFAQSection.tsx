import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail } from 'lucide-react';

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

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(ctaConfig.whatsappMessage);
    window.open(`https://wa.me/573001234567?text=${message}`, '_blank');
  };

  const handleContactClick = () => {
    window.location.href = '/contacto';
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQs Column - 2/3 width */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">
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
                    className="border rounded-lg px-6 bg-muted/30"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                      {isSpanish ? faq.question_es : faq.question_en}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {isSpanish ? faq.answer_es : faq.answer_en}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>

          {/* CTA Card Column - 1/3 width, sticky */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24"
            >
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {t(ctaConfig.titleKey)}
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    {t(ctaConfig.subtitleKey)}
                  </p>

                  <div className="space-y-4">
                    <Button
                      onClick={handleWhatsAppContact}
                      size="lg"
                      className="w-full"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {t(ctaConfig.primaryButtonKey)}
                    </Button>

                    <Button
                      onClick={handleContactClick}
                      variant="outline"
                      size="lg"
                      className="w-full"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      {t(ctaConfig.secondaryButtonKey)}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
