import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const ContactFAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('contact.faq.q1_question'),
      answer: t('contact.faq.q1_answer'),
    },
    {
      question: t('contact.faq.q2_question'),
      answer: t('contact.faq.q2_answer'),
    },
    {
      question: t('contact.faq.q3_question'),
      answer: t('contact.faq.q3_answer'),
    },
    {
      question: t('contact.faq.q4_question'),
      answer: t('contact.faq.q4_answer'),
    },
    {
      question: t('contact.faq.q5_question'),
      answer: t('contact.faq.q5_answer'),
    },
  ];

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
            {t('contact.faq.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('contact.faq.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
