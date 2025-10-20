import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Accreditation {
  icon: React.ElementType;
  titleKey: string;
  descriptionKey: string;
  color: string;
}

const accreditations: Accreditation[] = [
  {
    icon: Shield,
    titleKey: 'accreditations.jci.title',
    descriptionKey: 'accreditations.jci.description',
    color: 'text-blue-500'
  },
  {
    icon: Award,
    titleKey: 'accreditations.sccp.title',
    descriptionKey: 'accreditations.sccp.description',
    color: 'text-amber-500'
  },
  {
    icon: CheckCircle,
    titleKey: 'accreditations.acicme.title',
    descriptionKey: 'accreditations.acicme.description',
    color: 'text-green-500'
  }
];

export const AccreditationsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            {t('accreditations.badge')}
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t('accreditations.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('accreditations.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {accreditations.map((accreditation, index) => {
            const Icon = accreditation.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-card border-2 border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className={`flex-shrink-0 ${accreditation.color}`}>
                  <Icon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {t(accreditation.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(accreditation.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
