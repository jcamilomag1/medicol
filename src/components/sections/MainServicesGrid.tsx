import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Smile, Activity } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { MedicalServiceCard } from '@/components/ui/medical-service-card';

interface ServiceCardData {
  titleKey: string;
  descriptionKey: string;
  ctaKey: string;
  icon: LucideIcon;
  href: string;
  imageUrl: string;
  themeColor: string;
}

const servicesData: ServiceCardData[] = [
  {
    titleKey: 'main_services.plastic_surgery.title',
    descriptionKey: 'main_services.plastic_surgery.benefit',
    ctaKey: 'main_services.plastic_surgery.cta',
    icon: Scissors,
    href: '/servicios/cirugia-plastica',
    imageUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=800&fit=crop&q=80',
    themeColor: '210 100% 45%',
  },
  {
    titleKey: 'main_services.regenerative.title',
    descriptionKey: 'main_services.regenerative.benefit',
    ctaKey: 'main_services.regenerative.cta',
    icon: Sparkles,
    href: '/servicios/celulas-madre',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=800&fit=crop&q=80',
    themeColor: '280 70% 50%',
  },
  {
    titleKey: 'main_services.dental.title',
    descriptionKey: 'main_services.dental.benefit',
    ctaKey: 'main_services.dental.cta',
    icon: Smile,
    href: '/servicios/dental',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=800&fit=crop&q=80',
    themeColor: '180 60% 45%',
  },
  {
    titleKey: 'main_services.diagnostics.title',
    descriptionKey: 'main_services.diagnostics.benefit',
    ctaKey: 'main_services.diagnostics.cta',
    icon: Activity,
    href: '/servicios/diagnosticos',
    imageUrl: 'https://images.unsplash.com/photo-1581595220975-119360b2c23f?w=600&h=800&fit=crop&q=80',
    themeColor: '150 50% 40%',
  },
];


export const MainServicesGrid = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 px-6 bg-muted/30 overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('main_services.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('main_services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid - 4 Equal Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <MedicalServiceCard
              key={service.href}
              index={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
