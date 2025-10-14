import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PiggyBank, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const valueProps = [
  {
    icon: PiggyBank,
    key: 'savings',
  },
  {
    icon: ShieldCheck,
    key: 'excellence',
  },
  {
    icon: HeartHandshake,
    key: 'experience',
  },
];

export const ValuePropositionSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('plastic_surgery.value_proposition.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="h-full border-none shadow-soft hover:shadow-medium transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {t(`plastic_surgery.value_proposition.${prop.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`plastic_surgery.value_proposition.${prop.key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};