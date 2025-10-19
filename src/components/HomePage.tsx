import { HeroSection } from './sections/HeroSection';
import { MainServicesGrid } from './sections/MainServicesGrid';
import { FeaturedTestimonials } from './sections/FeaturedTestimonials';
import { TeamPreview } from './sections/TeamPreview';
import { AboutMedicolSection } from './sections/AboutMedicolSection';
import { PriceSection } from './sections/PriceSection';
import { ReviewSection } from './sections/ReviewSection';
import { BlogPreview } from './sections/BlogPreview';

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-y-20">
      <HeroSection />
      <AboutMedicolSection />
      <MainServicesGrid />
      <FeaturedTestimonials />
      <TeamPreview />
      <PriceSection />
      <ReviewSection />
      <BlogPreview />
    </main>
  );
};
