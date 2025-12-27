import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MedicalServicesCarousel } from '@/components/ui/medical-services-carousel';
import cirugiaPlasticaImg from '@/assets/services/cirugia-plastica.jpg';
import medicalCheckupImg from '@/assets/services/medical-checkup.jpg';
import regenerativeMedicineImg from '@/assets/services/regenerative-medicine.png';

const servicesData = [
  {
    titleKey: 'main_services.plastic_surgery.title',
    categoryKey: 'main_services.plastic_surgery.category',
    href: '/servicios/cirugia-plastica',
    imageUrl: cirugiaPlasticaImg,
    themeColor: '210 100% 45%',
  },
  {
    titleKey: 'main_services.regenerative.title',
    categoryKey: 'main_services.regenerative.category',
    href: '/servicios/celulas-madre',
    imageUrl: regenerativeMedicineImg,
    themeColor: '280 70% 50%',
  },
  {
    titleKey: 'main_services.dental.title',
    categoryKey: 'main_services.dental.category',
    href: '/servicios/dental',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=800&fit=crop&q=80',
    themeColor: '180 60% 45%',
  },
  {
    titleKey: 'main_services.diagnostics.title',
    categoryKey: 'main_services.diagnostics.category',
    href: '/servicios/diagnosticos',
    imageUrl: medicalCheckupImg,
    themeColor: '150 50% 40%',
  },
];

export const MainServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden bg-background py-12">
      {/* Section Header - con padding horizontal */}
      <div className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t('main_services.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('main_services.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Carousel Component - edge-to-edge, sin márgenes */}
      <MedicalServicesCarousel services={servicesData} />
    </section>
  );
};
