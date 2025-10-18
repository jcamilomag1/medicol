import Layout from '@/components/Layout';
import { PlasticHeroSection } from '@/components/plastic-surgery/PlasticHeroSection';
import { AccreditationsSection } from '@/components/sections/AccreditationsSection';
import { ProceduresGrid } from '@/components/plastic-surgery/ProceduresGrid';
import { BeforeAfterGallery } from '@/components/plastic-surgery/BeforeAfterGallery';
import { PremiumServicesSection } from '@/components/sections/PremiumServicesSection';
import { VideoTestimonials } from '@/components/sections/VideoTestimonials';
import { TestimonialsSection } from '@/components/plastic-surgery/TestimonialsSection';
import { FAQWithCTASection } from '@/components/plastic-surgery/FAQWithCTASection';

const PlasticSurgeryPage = () => {
  return (
    <Layout>
      <PlasticHeroSection />
      <AccreditationsSection />
      <ProceduresGrid />
      <BeforeAfterGallery />
      <PremiumServicesSection />
      <VideoTestimonials />
      <TestimonialsSection />
      <FAQWithCTASection />
    </Layout>
  );
};

export default PlasticSurgeryPage;
