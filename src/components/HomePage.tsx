import { HeroSection } from './sections/HeroSection';
import { MedicalServicesCarousel } from '@/components/ui/medical-services-carousel';
import { FeaturedTestimonials } from './sections/FeaturedTestimonials';
import { TeamPreview } from './sections/TeamPreview';
import { AboutMedicolSectionNew } from './sections/AboutMedicolSectionNew';
import { PriceSection } from './sections/PriceSection';
import { ReviewSection } from './sections/ReviewSection';
import { BlogPreview } from './sections/BlogPreview';

const servicesData = [
  {
    titleKey: 'main_services.plastic_surgery.title',
    categoryKey: 'main_services.plastic_surgery.category',
    href: '/servicios/cirugia-plastica',
    imageUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=800&fit=crop&q=80',
    themeColor: '210 100% 45%',
  },
  {
    titleKey: 'main_services.regenerative.title',
    categoryKey: 'main_services.regenerative.category',
    href: '/servicios/celulas-madre',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=800&fit=crop&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=800&fit=crop&q=80',
    themeColor: '150 50% 40%',
  },
];

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-y-20">
      <HeroSection />
      <MedicalServicesCarousel services={servicesData} />
      <AboutMedicolSectionNew />
      <FeaturedTestimonials />
      <TeamPreview />
      <PriceSection />
      <ReviewSection />
      <BlogPreview />
    </main>
  );
};
