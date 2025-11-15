import Layout from '@/components/Layout';
import { ContactHeroSection } from '@/components/contact/ContactHeroSection';
import { ContactMethodsCards } from '@/components/contact/ContactMethodsCards';
import { ContactInfoGrid } from '@/components/contact/ContactInfoGrid';
import { ContactMap } from '@/components/contact/ContactMap';
import { ContactForm } from '@/components/contact/ContactForm';

const ContactPage = () => {
  return (
    <Layout>
      <ContactHeroSection />
      <ContactMethodsCards />
      <ContactInfoGrid />
      <ContactMap />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
