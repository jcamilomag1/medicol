import { HeroSection } from './sections/HeroSection';
import { MainServicesSection } from './sections/MainServicesSection';
import { FeaturedTestimonials } from './sections/FeaturedTestimonials';
import { TeamPreview } from './sections/TeamPreview';
import { ValueSection } from './sections/ValueSection';
import { PriceSection } from './sections/PriceSection';
import { ReviewSection } from './sections/ReviewSection';
import { TransformationCTASection } from './sections/TransformationCTASection';
import { BlogPreview } from './sections/BlogPreview';

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-y-12">
      <HeroSection />
      <MainServicesSection />
      <ValueSection />
      <PriceSection />
      <TeamPreview />
      <ReviewSection />
      <FeaturedTestimonials />
      <TransformationCTASection />
      <BlogPreview />
    </main>
  );
};
