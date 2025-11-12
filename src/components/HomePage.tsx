import { HeroSection } from './sections/HeroSection';
import { MainServicesSection } from './sections/MainServicesSection';
import { ValueSection } from './sections/ValueSection';
import { PriceSection } from './sections/PriceSection';
import { InformationSection } from './sections/InformationSection';
import { ReviewSection } from './sections/ReviewSection';
import { BlogPreview } from './sections/BlogPreview';

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-y-12">
      <HeroSection />
      <MainServicesSection />
      <ValueSection />
      <PriceSection />
      <InformationSection />
      <ReviewSection />
      <BlogPreview />
    </main>
  );
};
