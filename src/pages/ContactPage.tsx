import Layout from '@/components/Layout';
import { ContactHeroSection } from '@/components/contact/ContactHeroSection';
import { QuickContactBar } from '@/components/contact/QuickContactBar';
import { ContactMethodsSection } from '@/components/contact/ContactMethodsSection';
import { ContactInfoAndMap } from '@/components/contact/ContactInfoAndMap';
import { ContactFormSimplified } from '@/components/contact/ContactFormSimplified';
import { ContactFAQ } from '@/components/contact/ContactFAQ';
import { TrustAndStats } from '@/components/contact/TrustAndStats';
import { EmergencyContact } from '@/components/contact/EmergencyContact';

const ContactPage = () => {
  return (
    <Layout>
      <ContactHeroSection />
      <QuickContactBar />
      <ContactMethodsSection />
      <ContactInfoAndMap />
      <ContactFormSimplified />
      <ContactFAQ />
      <TrustAndStats />
      <EmergencyContact />
    </Layout>
  );
};

export default ContactPage;
