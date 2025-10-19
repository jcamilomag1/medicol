import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Scissors, Sparkles, Smile, Activity } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardData {
  titleKey: string;
  benefitKey: string;
  ctaKey: string;
  icon: LucideIcon;
  href: string;
  gradientFrom: string;
  gradientTo: string;
}

const servicesData: ServiceCardData[] = [
  {
    titleKey: 'main_services.plastic_surgery.title',
    benefitKey: 'main_services.plastic_surgery.benefit',
    ctaKey: 'main_services.plastic_surgery.cta',
    icon: Scissors,
    href: '/servicios/cirugia-plastica',
    gradientFrom: 'from-primary/10',
    gradientTo: 'to-accent/10',
  },
  {
    titleKey: 'main_services.regenerative.title',
    benefitKey: 'main_services.regenerative.benefit',
    ctaKey: 'main_services.regenerative.cta',
    icon: Sparkles,
    href: '/servicios/celulas-madre',
    gradientFrom: 'from-accent/10',
    gradientTo: 'to-primary/10',
  },
  {
    titleKey: 'main_services.dental.title',
    benefitKey: 'main_services.dental.benefit',
    ctaKey: 'main_services.dental.cta',
    icon: Smile,
    href: '/servicios/dental',
    gradientFrom: 'from-primary/10',
    gradientTo: 'to-accent/10',
  },
  {
    titleKey: 'main_services.diagnostics.title',
    benefitKey: 'main_services.diagnostics.benefit',
    ctaKey: 'main_services.diagnostics.cta',
    icon: Activity,
    href: '/servicios/diagnosticos',
    gradientFrom: 'from-accent/10',
    gradientTo: 'to-primary/10',
  },
];

const ServiceCard = ({ service, index }: { service: ServiceCardData; index: number }) => {
  const { t } = useTranslation();
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative"
    >
      {/* Card Container with Glassmorphism */}
      <div className="relative h-full bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
        
        {/* Gradient Background Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon Container */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center ring-4 ring-primary/10 group-hover:ring-accent/30 transition-all duration-500 shadow-lg shadow-primary/20"
          >
            <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {t(service.titleKey)}
          </h3>

          {/* Benefit Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
            {t(service.benefitKey)}
          </p>

          {/* CTA Button */}
          <Link to={service.href}>
            <Button 
              variant="default" 
              className="w-full group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300"
            >
              {t(service.ctaKey)}
            </Button>
          </Link>
        </div>

        {/* Decorative Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.href} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
