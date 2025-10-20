import { HeroSection } from './sections/HeroSection';
import { MainServicesSection } from './sections/MainServicesSection';
import { FeaturedTestimonials } from './sections/FeaturedTestimonials';
import { TeamPreview } from './sections/TeamPreview';
import { SelectUsSection } from './sections/SelectUsSection';
import { ValueSection } from './sections/ValueSection';
import { PriceSection } from './sections/PriceSection';
import { ReviewSection } from './sections/ReviewSection';
import { BlogPreview } from './sections/BlogPreview';

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-y-12">
      <HeroSection />
      <MainServicesSection />
      <ValueSection />
      <SelectUsSection />
      <FeaturedTestimonials />
      <TeamPreview />
      <PriceSection />
      <ReviewSection />
      <BlogPreview />
    </main>
  );
};
