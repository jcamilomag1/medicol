import { HeroSection } from './sections/HeroSection';
import { ServicesHighlight } from './sections/ServicesHighlight';
import { PriceSection } from './sections/PriceSection';
import { TrustArchitectureSection } from './sections/TrustArchitectureSection';
import { ReviewSection } from './sections/ReviewSection';
import { BlogPreview } from './sections/BlogPreview';

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-y-20">
      <HeroSection />
      <ServicesHighlight />
      <PriceSection />
      <TrustArchitectureSection />
      <ReviewSection />
      <BlogPreview />
    </main>
  );
};
