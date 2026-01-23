import Layout from '@/components/Layout';
import { ServiceHeroSection } from '@/components/services/ServiceHeroSection';
import { ServicesGrid } from '@/components/services/ServicesGrid';
import { MedicolDifferentiators } from '@/components/services/MedicolDifferentiators';
import { PremiumServicesSection } from '@/components/sections/PremiumServicesSection';
import { ServiceTestimonialsSection } from '@/components/services/ServiceTestimonialsSection';
import { ServiceFAQSection } from '@/components/services/ServiceFAQSection';
import { dentalServices } from '@/data/services/dental-services';
import { dentalFAQs } from '@/data/faqs/dental-faqs';
import { Users, Sparkles, Zap, HeartPulse } from 'lucide-react';
import dentalHeroBg from '@/assets/plastic-surgery-hero-bg.jpg';
import patientImg1 from '@/assets/testimonial-woman-young.jpg';
import patientImg2 from '@/assets/testimonial-woman-elderly.jpg';
import patientImg3 from '@/assets/testimonial-woman-rhinoplasty.jpg';

const DentalPage = () => {
  const heroProps = {
    titleKey: 'dental.hero.title',
    subtitleKey: 'dental.hero.subtitle',
    highlightBadgeKey: 'dental.hero.badge',
    backgroundImage: dentalHeroBg,
    ctaPrimaryKey: 'dental.hero.cta_primary',
    ctaSecondaryKey: 'dental.hero.cta_secondary',
    ctaSecondaryTarget: '#services',
    whatsappNumber: '573052276747',
    whatsappMessageKey: 'dental.hero.whatsapp_message',
    trustBadges: [
      { icon: Sparkles, textKey: 'dental.hero.trust_badge_1' },
      { icon: Zap, textKey: 'dental.hero.trust_badge_2' },
      { icon: Users, textKey: 'dental.hero.trust_badge_3' },
    ],
  };

  const servicesProps = {
    titleKey: 'dental.services.title',
    subtitleKey: 'dental.services.subtitle',
    services: dentalServices,
    categories: [
      { id: 'design', labelKey: 'dental.services.category_design' },
      { id: 'cosmetic', labelKey: 'dental.services.category_cosmetic' },
      { id: 'restorative', labelKey: 'dental.services.category_restorative' },
      { id: 'orthodontics', labelKey: 'dental.services.category_orthodontics' },
      { id: 'technology', labelKey: 'dental.services.category_technology' },
    ],
    searchPlaceholderKey: 'dental.services.search_placeholder',
    noResultsKey: 'dental.services.no_results',
  };

  const testimonialsProps = {
    titleKey: 'dental.testimonials.title',
    subtitleKey: 'dental.testimonials.subtitle',
    testimonials: [
      {
        name: 'Jennifer Smith',
        location: 'Los Angeles, USA',
        procedure: 'Smile Design',
        image: patientImg1,
        rating: 5,
        text_es: 'El diseño de sonrisa con IA fue increíble. Pude ver mi nueva sonrisa antes del procedimiento. Los resultados superaron todas mis expectativas.',
        text_en: 'The AI smile design was incredible. I could see my new smile before the procedure. The results exceeded all my expectations.',
      },
      {
        name: 'Robert Johnson',
        location: 'Miami, USA',
        procedure: 'Dental Implants',
        image: patientImg2,
        rating: 5,
        text_es: 'Los implantes dentales cambiaron mi vida. Tecnología de punta y atención excepcional. No puedo creer el ahorro comparado con EE.UU.',
        text_en: 'Dental implants changed my life. Cutting-edge technology and exceptional care. I can\'t believe the savings compared to the US.',
      },
      {
        name: 'Michelle Davis',
        location: 'Toronto, Canada',
        procedure: 'Complete Smile Makeover',
        image: patientImg3,
        rating: 5,
        text_es: 'Mi transformación completa de sonrisa fue perfecta. Carillas, coronas y blanqueamiento, todo en una semana. Resultados profesionales y hermosos.',
        text_en: 'My complete smile transformation was perfect. Veneers, crowns, and whitening all in one week. Professional and beautiful results.',
      },
    ],
    googleReviewsUrl: 'https://www.google.com/maps',
  };

  const faqProps = {
    titleKey: 'dental.faq.title',
    subtitleKey: 'dental.faq.subtitle',
    faqs: dentalFAQs,
    ctaConfig: {
      titleKey: 'dental.faq.cta_title',
      subtitleKey: 'dental.faq.cta_subtitle',
      primaryButtonKey: 'dental.faq.cta_primary',
      secondaryButtonKey: 'dental.faq.cta_secondary',
      whatsappMessage: 'Hola, me gustaría agendar una consulta virtual sobre procedimientos dentales',
    },
  };

  return (
    <Layout>
      <ServiceHeroSection {...heroProps} />
      <MedicolDifferentiators 
        titleKey="dental.differentiators.cards.title"
        cards={[
          {
            icon: Sparkles,
            titleKey: 'dental.differentiators.cards.ai_precision_title',
            descriptionKey: 'dental.differentiators.cards.ai_precision_description'
          },
          {
            icon: Zap,
            titleKey: 'dental.differentiators.cards.same_day_title',
            descriptionKey: 'dental.differentiators.cards.same_day_description'
          },
          {
            icon: HeartPulse,
            titleKey: 'dental.differentiators.cards.luxury_care_title',
            descriptionKey: 'dental.differentiators.cards.luxury_care_description'
          }
        ]}
      />
      <div id="services">
        <ServicesGrid {...servicesProps} />
      </div>
      <PremiumServicesSection />
      <ServiceTestimonialsSection {...testimonialsProps} />
      <ServiceFAQSection {...faqProps} />
    </Layout>
  );
};

export default DentalPage;
