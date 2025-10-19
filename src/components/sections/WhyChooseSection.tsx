import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building2, Home, Award, Globe2, DollarSign, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhyChooseSection = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Building2,
      titleKey: 'why_choose.jci_hospitals',
      descKey: 'why_choose.jci_desc',
      color: 'accent'
    },
    {
      icon: Home,
      titleKey: 'why_choose.recovery_houses',
      descKey: 'why_choose.recovery_desc',
      color: 'primary'
    },
    {
      icon: Award,
      titleKey: 'why_choose.experience',
      descKey: 'why_choose.experience_desc',
      color: 'secondary'
    },
    {
      icon: Globe2,
      titleKey: 'why_choose.translator',
      descKey: 'why_choose.translator_desc',
      color: 'accent'
    },
    {
      icon: DollarSign,
      titleKey: 'why_choose.pricing',
      descKey: 'why_choose.pricing_desc',
      color: 'primary'
    },
    {
      icon: Heart,
      titleKey: 'why_choose.family',
      descKey: 'why_choose.family_desc',
      color: 'secondary'
    }
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(t('why_choose.whatsapp_message'));
    window.open(`https://wa.me/573322385474?text=${message}`, '_blank');
  };

  return (
    <section id="why-choose" className="py-20 sm:py-24 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl mb-4">
            {t('why_choose.section_title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('why_choose.section_subtitle')}
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl p-8 border border-border hover:border-accent/50 hover:shadow-medium transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(reason.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-2xl mx-auto bg-gradient-primary rounded-2xl p-8 md:p-12 shadow-medium"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            {t('why_choose.cta_title')}
          </h3>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            {t('why_choose.cta_subtitle')}
          </p>
          <Button
            onClick={handleWhatsAppContact}
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 h-auto font-semibold hover:scale-105 transition-transform"
          >
            {t('why_choose.cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
