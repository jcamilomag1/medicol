import { HeroSection } from './sections/HeroSection';
import { MainServicesSection } from './sections/MainServicesSection';
import { TeamPreview } from './sections/TeamPreview';
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
      <PriceSection />
      <TeamPreview />
      <ReviewSection />
      <BlogPreview />
    </main>
  );
};
