import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import accreditationsImage from '@/assets/accreditations.png';

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

const stats = [
  { icon: Users, value: '5,000+', labelKey: 'accreditations.stats.patients' },
  { icon: Clock, value: '15+', labelKey: 'accreditations.stats.years' },
  { icon: Star, value: '4.9/5', labelKey: 'accreditations.stats.rating' },
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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Accreditations Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={accreditationsImage}
                alt="Medical Accreditations"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>

          {/* Accreditations Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
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

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-center font-medium">
                  {t(stat.labelKey)}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
