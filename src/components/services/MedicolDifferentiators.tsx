import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Award, TrendingDown, Heart, Check, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ComparisonTable } from '@/components/ui/comparison-table';
import { StatCounter } from '@/components/ui/stat-counter';

export const MedicolDifferentiators = () => {
  const { t } = useTranslation();

  const comparisonData = [
    {
      aspect: t('stem_cells.differentiators.comparison.hospital'),
      others: { icon: X, text: t('stem_cells.differentiators.comparison.hospital_others'), negative: true },
      medicol: { icon: Check, text: t('stem_cells.differentiators.comparison.hospital_medicol') }
    },
    {
      aspect: t('stem_cells.differentiators.comparison.recovery'),
      others: { icon: X, text: t('stem_cells.differentiators.comparison.recovery_others'), negative: true },
      medicol: { icon: Check, text: t('stem_cells.differentiators.comparison.recovery_medicol') }
    },
    {
      aspect: t('stem_cells.differentiators.comparison.translator'),
      others: { icon: X, text: t('stem_cells.differentiators.comparison.translator_others'), negative: true },
      medicol: { icon: Check, text: t('stem_cells.differentiators.comparison.translator_medicol') }
    },
    {
      aspect: t('stem_cells.differentiators.comparison.pricing'),
      others: { icon: X, text: t('stem_cells.differentiators.comparison.pricing_others'), negative: true },
      medicol: { icon: Check, text: t('stem_cells.differentiators.comparison.pricing_medicol') }
    },
    {
      aspect: t('stem_cells.differentiators.comparison.followup'),
      others: { icon: X, text: t('stem_cells.differentiators.comparison.followup_others'), negative: true },
      medicol: { icon: Check, text: t('stem_cells.differentiators.comparison.followup_medicol') }
    }
  ];

  const trustElements = [
    {
      icon: Shield,
      stat: "100%",
      suffix: "",
      title: t('stem_cells.differentiators.trust.certification_title'),
      description: t('stem_cells.differentiators.trust.certification_desc')
    },
    {
      icon: Award,
      stat: "5000",
      suffix: "+",
      title: t('stem_cells.differentiators.trust.experience_title'),
      description: t('stem_cells.differentiators.trust.experience_desc')
    },
    {
      icon: TrendingDown,
      stat: "70",
      suffix: "%",
      title: t('stem_cells.differentiators.trust.savings_title'),
      description: t('stem_cells.differentiators.trust.savings_desc')
    },
    {
      icon: Heart,
      stat: "24",
      suffix: "/7",
      title: t('stem_cells.differentiators.trust.care_title'),
      description: t('stem_cells.differentiators.trust.care_desc')
    }
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('stem_cells.differentiators.cta.whatsapp_message'));
    window.open(`https://wa.me/573206853945?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t('stem_cells.differentiators.badge')}
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('stem_cells.differentiators.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('stem_cells.differentiators.subtitle')}
          </p>
        </motion.div>

        {/* Comparison Table */}
        <ComparisonTable data={comparisonData} />

        {/* Trust Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustElements.map((element, index) => {
            const IconComponent = element.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>

                  {/* Animated Stat */}
                  <div className="mb-3">
                    <StatCounter 
                      value={parseInt(element.stat)} 
                      suffix={element.suffix}
                      className="text-4xl font-bold text-primary"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {element.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {element.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 via-primary to-primary/80 p-12 text-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t('stem_cells.differentiators.cta.title')}
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              {t('stem_cells.differentiators.cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleWhatsApp}
                className="text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-shadow"
              >
                {t('stem_cells.differentiators.cta.primary')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 h-auto bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
              >
                {t('stem_cells.differentiators.cta.secondary')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
