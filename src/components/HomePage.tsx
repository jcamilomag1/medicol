import { HeroSection } from './sections/HeroSection';
import { AboutMedicolSection } from './sections/AboutMedicolSection';
import { WhyChooseSection } from './sections/WhyChooseSection';
import { ServicesHighlight } from './sections/ServicesHighlight';
import { VideoTestimonials } from './sections/VideoTestimonials';
import { TeamSection } from './sections/TeamSection';
import { PriceSection } from './sections/PriceSection';
import { ReviewSection } from './sections/ReviewSection';
import { BlogPreview } from './sections/BlogPreview';

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-y-20">
      <HeroSection />
      <AboutMedicolSection />
      <WhyChooseSection />
      <ServicesHighlight />
      <VideoTestimonials />
      <TeamSection />
      <PriceSection />
      <ReviewSection />
      <BlogPreview />
    </main>
  );
};
