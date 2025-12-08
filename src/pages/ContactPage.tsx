import Layout from '@/components/Layout';
import { ContactHeroSection } from '@/components/contact/ContactHeroSection';
import { ContactMethodsCards } from '@/components/contact/ContactMethodsCards';
import { ContactInfoGrid } from '@/components/contact/ContactInfoGrid';
import { ContactMap } from '@/components/contact/ContactMap';

const ContactPage = () => {
  return (
    <Layout>
      <ContactHeroSection />
      <ContactMethodsCards />
      <ContactInfoGrid />
      <ContactMap />
    </Layout>
  );
};

export default ContactPage;
