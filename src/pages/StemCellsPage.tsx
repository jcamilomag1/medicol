import Layout from '@/components/Layout';
import { ServiceHeroSection } from '@/components/services/ServiceHeroSection';
import { ServicesGrid } from '@/components/services/ServicesGrid';
import { MedicolDifferentiators } from '@/components/services/MedicolDifferentiators';
import { PremiumServicesSection } from '@/components/sections/PremiumServicesSection';
import { ServiceTestimonialsSection } from '@/components/services/ServiceTestimonialsSection';
import { ServiceFAQSection } from '@/components/services/ServiceFAQSection';
import { stemCellServices } from '@/data/services/stem-cells';
import { stemCellsFAQs } from '@/data/faqs/stem-cells-faqs';
import { Shield, Award, Users, Star, Microscope, Brain, Zap } from 'lucide-react';
import stemCellsHeroBg from '@/assets/stem-cells/stem-cells-hero-bg.jpg';
import mariaGonzalezImg from '@/assets/stem-cells/testimonials/maria-gonzalez.jpg';
import jamesAndersonImg from '@/assets/stem-cells/testimonials/james-anderson.jpg';
import sofiaMartinezImg from '@/assets/stem-cells/testimonials/sofia-martinez.jpg';

const StemCellsPage = () => {
  const heroProps = {
    titleKey: 'stem_cells.hero.title',
    subtitleKey: 'stem_cells.hero.subtitle',
    highlightBadgeKey: 'stem_cells.hero.badge',
    backgroundImage: stemCellsHeroBg,
    ctaPrimaryKey: 'stem_cells.hero.cta_primary',
    ctaSecondaryKey: 'stem_cells.hero.cta_secondary',
    ctaSecondaryTarget: '#services',
    whatsappNumber: '573001234567',
    whatsappMessageKey: 'stem_cells.hero.whatsapp_message',
    trustBadges: [
      { icon: Shield, textKey: 'stem_cells.hero.trust_badge_1' },
      { icon: Award, textKey: 'stem_cells.hero.trust_badge_2' },
      { icon: Users, textKey: 'stem_cells.hero.trust_badge_3' },
    ],
  };

  const servicesProps = {
    titleKey: 'stem_cells.services.title',
    subtitleKey: 'stem_cells.services.subtitle',
    services: stemCellServices,
    categories: [
      { id: 'aesthetic', labelKey: 'stem_cells.services.category_aesthetic' },
      { id: 'orthopedic', labelKey: 'stem_cells.services.category_orthopedic' },
      { id: 'medical', labelKey: 'stem_cells.services.category_medical' },
      { id: 'technology', labelKey: 'stem_cells.services.category_technology' },
    ],
    searchPlaceholderKey: 'stem_cells.services.search_placeholder',
    noResultsKey: 'stem_cells.services.no_results',
  };

  const breakthroughsProps = {
    titleKey: 'stem_cells.breakthroughs.title',
    subtitleKey: 'stem_cells.breakthroughs.subtitle',
    breakthroughs: [
      { icon: Microscope, titleKey: 'stem_cells.breakthroughs.exosome_title', descriptionKey: 'stem_cells.breakthroughs.exosome_description' },
      { icon: Brain, titleKey: 'stem_cells.breakthroughs.personalized_title', descriptionKey: 'stem_cells.breakthroughs.personalized_description' },
      { icon: Zap, titleKey: 'stem_cells.breakthroughs.combined_title', descriptionKey: 'stem_cells.breakthroughs.combined_description' },
    ],
  };


  const testimonialsProps = {
    titleKey: 'stem_cells.testimonials.title',
    subtitleKey: 'stem_cells.testimonials.subtitle',
    testimonials: [
      {
        name: 'María González',
        location: 'Ciudad de México, México',
        procedure: 'Regeneración Articular',
        image: mariaGonzalezImg,
        rating: 5,
        text_es: 'El tratamiento de regeneración articular cambió mi vida. Después de años de dolor crónico, ahora puedo caminar sin molestias. El equipo es excepcional.',
        text_en: 'The joint regeneration treatment changed my life. After years of chronic pain, I can now walk without discomfort. The team is exceptional.',
      },
      {
        name: 'James Anderson',
        location: 'Miami, USA',
        procedure: 'Terapia Anti-Envejecimiento',
        image: jamesAndersonImg,
        rating: 5,
        text_es: 'Increíble experiencia con la terapia anti-envejecimiento. Los resultados superaron mis expectativas y el proceso fue muy profesional.',
        text_en: 'Amazing experience with anti-aging therapy. Results exceeded my expectations and the process was very professional.',
      },
      {
        name: 'Sofia Martínez',
        location: 'Bogotá, Colombia',
        procedure: 'Restauración Capilar',
        image: sofiaMartinezImg,
        rating: 5,
        text_es: 'La restauración capilar con exosomas funcionó mejor de lo que imaginaba. Mi cabello está más fuerte y saludable que nunca.',
        text_en: 'Hair restoration with exosomes worked better than I imagined. My hair is stronger and healthier than ever.',
      },
    ],
    googleReviewsUrl: 'https://www.google.com/maps',
  };

  const faqProps = {
    titleKey: 'stem_cells.faq.title',
    subtitleKey: 'stem_cells.faq.subtitle',
    faqs: stemCellsFAQs,
    ctaConfig: {
      titleKey: 'stem_cells.faq.cta_title',
      subtitleKey: 'stem_cells.faq.cta_subtitle',
      primaryButtonKey: 'stem_cells.faq.cta_primary',
      secondaryButtonKey: 'stem_cells.faq.cta_secondary',
      whatsappMessage: 'Hola, me gustaría agendar una consulta sobre terapia con células madre',
    },
  };

  return (
    <Layout>
      <ServiceHeroSection {...heroProps} />
      <MedicolDifferentiators />
      <ServicesGrid {...servicesProps} />
      <PremiumServicesSection />
      <ServiceTestimonialsSection {...testimonialsProps} />
      <ServiceFAQSection {...faqProps} />
    </Layout>
  );
};

export default StemCellsPage;
