import { HeroSection } from './sections/HeroSection';
import { MainServicesSection } from './sections/MainServicesSection';
import { FeaturedTestimonials } from './sections/FeaturedTestimonials';
import { TeamPreview } from './sections/TeamPreview';
import { AboutMedicolSectionNew } from './sections/AboutMedicolSectionNew';
import { ValueSection } from './sections/ValueSection';
import { PriceSection } from './sections/PriceSection';
import { ReviewSection } from './sections/ReviewSection';
import { BlogPreview } from './sections/BlogPreview';

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-y-12">
      <HeroSection />
      <MainServicesSection />
      <AboutMedicolSectionNew />
      <ValueSection />
      <FeaturedTestimonials />
      <TeamPreview />
      <PriceSection />
      <ReviewSection />
      <BlogPreview />
    </main>
  );
};
