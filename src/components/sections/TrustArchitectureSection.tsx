import { useTranslation } from 'react-i18next';
import { TeamPreview } from '@/components/sections/TeamPreview';
import { VideoTestimonials } from '@/components/sections/VideoTestimonials';
export const TrustArchitectureSection = () => {
  const {
    t
  } = useTranslation();
  return <section id="equipo" className="py-20 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {t('trust.section_title')}
          </h2>
          
        </div>

        {/* Team Preview */}
        <div className="mt-16">
          <TeamPreview />
        </div>

        {/* Video Testimonials */}
        
      </div>
    </section>;
};