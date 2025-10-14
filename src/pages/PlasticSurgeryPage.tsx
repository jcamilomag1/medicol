import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';
import { PlasticHeroSection } from '@/components/plastic-surgery/PlasticHeroSection';
import { ValuePropositionSection } from '@/components/plastic-surgery/ValuePropositionSection';
import { ProceduresGrid } from '@/components/plastic-surgery/ProceduresGrid';
import { TestimonialsSection } from '@/components/plastic-surgery/TestimonialsSection';
import { FAQSection } from '@/components/plastic-surgery/FAQSection';
import { FinalCTASection } from '@/components/plastic-surgery/FinalCTASection';

const PlasticSurgeryPage = () => {
  return (
    <Layout>
      <PlasticHeroSection />
      <ValuePropositionSection />
      <ProceduresGrid />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </Layout>
  );
};

export default PlasticSurgeryPage;
