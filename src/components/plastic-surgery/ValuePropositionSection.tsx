import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PiggyBank, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const valueProps = [{
  icon: PiggyBank,
  key: 'savings'
}, {
  icon: ShieldCheck,
  key: 'excellence'
}, {
  icon: HeartHandshake,
  key: 'experience'
}];
export const ValuePropositionSection = () => {
  const {
    t
  } = useTranslation();
  
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('plastic_surgery.value_props.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('plastic_surgery.value_props.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {t(`plastic_surgery.value_props.${prop.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`plastic_surgery.value_props.${prop.key}.description`)}
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