import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { faqs } from '@/data/plastic-surgery-faqs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQSection = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('plastic_surgery.faq.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('plastic_surgery.faq.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-background shadow-soft"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">
                    {isEnglish ? faq.question_en : faq.question_es}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {isEnglish ? faq.answer_en : faq.answer_es}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};