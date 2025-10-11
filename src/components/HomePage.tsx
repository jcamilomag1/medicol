import { HeroSection } from './sections/HeroSection';
import { ServicesHighlight } from './sections/ServicesHighlight';
import { TrustArchitectureSection } from './sections/TrustArchitectureSection';
import { MedicolExperienceSection } from './sections/MedicolExperienceSection';
import { BlogPreview } from './sections/BlogPreview';

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-y-32">
      <HeroSection />
      <ServicesHighlight />
      <TrustArchitectureSection />
      <MedicolExperienceSection />
      <BlogPreview />
    </main>
  );
};
