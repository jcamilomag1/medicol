import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface Accreditation {
  icon: React.ElementType;
  titleKey: string;
  descriptionKey: string;
}

const accreditations: Accreditation[] = [
  {
    icon: Shield,
    titleKey: 'accreditations.jci.title',
    descriptionKey: 'accreditations.jci.description'
  },
  {
    icon: Award,
    titleKey: 'accreditations.sccp.title',
    descriptionKey: 'accreditations.sccp.description'
  },
  {
    icon: CheckCircle,
    titleKey: 'accreditations.acicme.title',
    descriptionKey: 'accreditations.acicme.description'
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
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
                className="group"
              >
                <Card className="h-full p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border hover:border-blue-200">
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-200">
                    <Icon className="w-8 h-8 text-blue-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors">
                    {t(accreditation.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {t(accreditation.descriptionKey)}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
