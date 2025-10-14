import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';
import { PlasticHeroSection } from '@/components/plastic-surgery/PlasticHeroSection';
import { ValuePropositionSection } from '@/components/plastic-surgery/ValuePropositionSection';
import { ProceduresGrid } from '@/components/plastic-surgery/ProceduresGrid';
import { TestimonialsSection } from '@/components/plastic-surgery/TestimonialsSection';
import { FAQWithCTASection } from '@/components/plastic-surgery/FAQWithCTASection';

const PlasticSurgeryPage = () => {
  return (
    <Layout>
      <PlasticHeroSection />
      <ValuePropositionSection />
      <ProceduresGrid />
      <TestimonialsSection />
      <FAQWithCTASection />
    </Layout>
  );
};

export default PlasticSurgeryPage;
