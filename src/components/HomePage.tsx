import { HeroSection } from './sections/HeroSection';
import { MainServicesGrid } from './sections/MainServicesGrid';
import { AboutMedicolSection } from './sections/AboutMedicolSection';
import { WhyChooseSection } from './sections/WhyChooseSection';
import { VideoTestimonials } from './sections/VideoTestimonials';
import { TeamSection } from './sections/TeamSection';
import { PriceSection } from './sections/PriceSection';
import { ReviewSection } from './sections/ReviewSection';
import { BlogPreview } from './sections/BlogPreview';

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-y-20">
      <HeroSection />
      <MainServicesGrid />
      <AboutMedicolSection />
      <WhyChooseSection />
      <VideoTestimonials />
      <TeamSection />
      <PriceSection />
      <ReviewSection />
      <BlogPreview />
    </main>
  );
};
