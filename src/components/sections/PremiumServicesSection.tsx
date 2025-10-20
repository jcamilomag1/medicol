import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Home, Heart, Languages, Headphones, Car, Utensils, Shield, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PremiumService {
  icon: React.ElementType;
  titleKey: string;
  descriptionKey: string;
  featured?: boolean;
}

const premiumServices: PremiumService[] = [
  {
    icon: Home,
    titleKey: 'premium_services.recovery_house.title',
    descriptionKey: 'premium_services.recovery_house.description',
    featured: true
  },
  {
    icon: Heart,
    titleKey: 'premium_services.nursing.title',
    descriptionKey: 'premium_services.nursing.description',
    featured: true
  },
  {
    icon: Languages,
    titleKey: 'premium_services.translator.title',
    descriptionKey: 'premium_services.translator.description'
  },
  {
    icon: Headphones,
    titleKey: 'premium_services.concierge.title',
    descriptionKey: 'premium_services.concierge.description'
  },
  {
    icon: Car,
    titleKey: 'premium_services.transportation.title',
    descriptionKey: 'premium_services.transportation.description'
  },
  {
    icon: Utensils,
    titleKey: 'premium_services.nutrition.title',
    descriptionKey: 'premium_services.nutrition.description'
  },
  {
    icon: Shield,
    titleKey: 'premium_services.insurance.title',
    descriptionKey: 'premium_services.insurance.description'
  },
  {
    icon: Clock,
    titleKey: 'premium_services.followup.title',
    descriptionKey: 'premium_services.followup.description'
  }
];

export const PremiumServicesSection = () => {
  const { t } = useTranslation();

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(t('premium_services.whatsapp_message'));
    window.open(`https://wa.me/573104459819?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            {t('premium_services.badge')}
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t('premium_services.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            {t('premium_services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {premiumServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                  service.featured
                    ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 hover:border-primary hover:shadow-2xl'
                    : 'bg-card border-border hover:border-primary/50 hover:shadow-lg'
                }`}
              >
                {service.featured && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                    {t('premium_services.featured')}
                  </Badge>
                )}
                
                <div className={`mb-4 ${service.featured ? 'text-primary' : 'text-accent'}`}>
                  <Icon className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t(service.titleKey)}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(service.descriptionKey)}
                </p>
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
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/90 to-accent p-12 text-center"
        >
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('premium_services.cta.title')}
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {t('premium_services.cta.description')}
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleWhatsAppContact}
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg px-8"
            >
              {t('premium_services.cta.button')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
