import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Home, Plane, BadgeCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import recoveryImage from '@/assets/medical-tourism-recovery.jpg';

export const InformationSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Home,
      title: t('medical_tourism.recovery_title'),
      description: t('medical_tourism.recovery_description'),
    },
    {
      icon: Plane,
      title: t('medical_tourism.logistics_title'),
      description: t('medical_tourism.logistics_description'),
    },
    {
      icon: BadgeCheck,
      title: t('medical_tourism.pricing_title'),
      description: t('medical_tourism.pricing_description'),
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white relative">
      {/* Decorative Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary/50 rounded-full" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              {t('medical_tourism.title')}
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('medical_tourism.description')}
            </p>

            {/* Features List */}
            <div className="space-y-6 pt-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Image + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center justify-start max-h-[600px]"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-md w-full">
              <img
                src={recoveryImage}
                alt="Premium Recovery House"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* CTA Button */}
            <Link 
              to="/experiencia"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 group mt-6"
            >
              {t('medical_tourism.cta_text')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
