import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export const ServicesHighlight = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  
  // Scroll tracking para la línea animada
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });
  
  // Transform scroll progress a altura de línea (0% -> 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const servicesData = [
    {
      procedureKey: 'services.cosmetic.procedure_name',
      titleKey: 'services.cosmetic.title',
      descriptionKey: 'services.cosmetic.description',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
      href: '/procedimientos/cirugia-cosmetica'
    },
    {
      procedureKey: 'services.regenerative.procedure_name',
      titleKey: 'services.regenerative.title',
      descriptionKey: 'services.regenerative.description',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80',
      href: '/procedimientos/medicina-regenerativa'
    },
    {
      procedureKey: 'services.dental.procedure_name',
      titleKey: 'services.dental.title',
      descriptionKey: 'services.dental.description',
      imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
      href: '/procedimientos/diseno-de-sonrisa'
    },
    {
      procedureKey: 'services.diagnostics.procedure_name',
      titleKey: 'services.diagnostics.title',
      descriptionKey: 'services.diagnostics.description',
      imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1200&q=80',
      href: '/procedimientos/chequeos-avanzados'
    }
  ];

  return (
    <section ref={sectionRef} className="pt-12 sm:pt-16 pb-20 sm:pb-24 bg-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t('services.section_title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {t('services.section_subtitle')}
          </p>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Sticky Procedure Names + Timeline Line */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-24 h-screen">
              {/* Animated Vertical Timeline Line */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gray-200">
                <motion.div 
                  className="w-full bg-accent origin-top"
                  style={{ 
                    height: lineHeight,
                    willChange: 'height',
                    transform: 'translateZ(0)'
                  }}
                />
              </div>
              
              {/* Sticky Procedure Names */}
              <div className="pl-8 space-y-64">
                {servicesData.map((service, index) => (
                  <motion.h3
                    key={service.procedureKey}
                    className="text-6xl font-extrabold text-gray-300 tracking-tight"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {t(service.procedureKey)}
                  </motion.h3>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Content Cards */}
          <div className="lg:col-span-7 space-y-32">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={service.titleKey}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    procedureKey: string;
    titleKey: string;
    descriptionKey: string;
    imageUrl: string;
    href: string;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="group"
    >
      {/* Image Container con Aspect Ratio */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100">
        <img 
          src={service.imageUrl}
          alt={t(service.titleKey)}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay con gradient sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-primary mb-3">
          {t(service.titleKey)}
        </h3>
        <p className="text-base text-gray-600 leading-relaxed mb-4">
          {t(service.descriptionKey)}
        </p>
        <a 
          href={service.href}
          className="inline-flex items-center text-accent font-semibold hover:opacity-80 transition-opacity"
        >
          {t('common.learn_more')}
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};
