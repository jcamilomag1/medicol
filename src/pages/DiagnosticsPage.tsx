import Layout from '@/components/Layout';
import { ServiceHeroSection } from '@/components/services/ServiceHeroSection';
import { ServicesGrid } from '@/components/services/ServicesGrid';
import { MedicolDifferentiators } from '@/components/services/MedicolDifferentiators';
import { ServiceTestimonialsSection } from '@/components/services/ServiceTestimonialsSection';
import { ServiceFAQSection } from '@/components/services/ServiceFAQSection';
import { diagnosticPrograms } from '@/data/services/diagnostics-services';
import { diagnosticsFAQs } from '@/data/faqs/diagnostics-faqs';
import { Brain, FileSearch, Zap, Shield, Users, Activity, Clock, FileText } from 'lucide-react';
import diagnosticsHeroBg from '@/assets/diagnostics/diagnostics-hero-bg.jpg';
import patientImg1 from '@/assets/testimonial-woman-young.jpg';
import patientImg2 from '@/assets/testimonial-woman-elderly.jpg';
import patientImg3 from '@/assets/testimonial-woman-rhinoplasty.jpg';

const DiagnosticsPage = () => {
  // Props para ServiceHeroSection
  const heroProps = {
    titleKey: 'diagnostics.hero.title',
    subtitleKey: 'diagnostics.hero.subtitle',
    highlightBadgeKey: 'diagnostics.hero.badge',
    backgroundImage: diagnosticsHeroBg,
    ctaPrimaryKey: 'diagnostics.hero.cta_primary',
    ctaSecondaryKey: 'diagnostics.hero.cta_secondary',
    ctaSecondaryTarget: '#programs',
    whatsappNumber: '573001234567',
    whatsappMessageKey: 'diagnostics.hero.whatsapp_message',
    trustBadges: [
      { icon: Brain, textKey: 'diagnostics.hero.trust_badge_1' },
      { icon: Zap, textKey: 'diagnostics.hero.trust_badge_2' },
      { icon: Shield, textKey: 'diagnostics.hero.trust_badge_3' },
    ],
  };

  // Props para ServicesGrid (Programas)
  const programsProps = {
    titleKey: 'diagnostics.programs.title',
    subtitleKey: 'diagnostics.programs.subtitle',
    services: diagnosticPrograms,
    categories: [
      { id: 'executive', labelKey: 'diagnostics.programs.category_executive' },
      { id: 'second-opinion', labelKey: 'diagnostics.programs.category_second_opinion' },
      { id: 'proactive', labelKey: 'diagnostics.programs.category_proactive' },
      { id: 'genetic', labelKey: 'diagnostics.programs.category_genetic' },
    ],
    searchPlaceholderKey: 'diagnostics.programs.search_placeholder',
    noResultsKey: 'diagnostics.programs.no_results',
  };

  // Cards para "La Diferencia MediCol: Datos → Acción"
  const differenceCards = [
    {
      icon: Brain,
      titleKey: 'diagnostics.difference.ai_analysis_title',
      descriptionKey: 'diagnostics.difference.ai_analysis_description'
    },
    {
      icon: FileText,
      titleKey: 'diagnostics.difference.smart_report_title',
      descriptionKey: 'diagnostics.difference.smart_report_description'
    },
    {
      icon: Users,
      titleKey: 'diagnostics.difference.specialists_panel_title',
      descriptionKey: 'diagnostics.difference.specialists_panel_description'
    }
  ];

  // Cards para "Tu Experiencia de Diagnóstico"
  const experienceCards = [
    {
      icon: Activity,
      titleKey: 'diagnostics.experience.concierge_title',
      descriptionKey: 'diagnostics.experience.concierge_description'
    },
    {
      icon: Clock,
      titleKey: 'diagnostics.experience.efficiency_title',
      descriptionKey: 'diagnostics.experience.efficiency_description'
    },
    {
      icon: FileSearch,
      titleKey: 'diagnostics.experience.results_title',
      descriptionKey: 'diagnostics.experience.results_description'
    }
  ];

  // Testimonials
  const testimonialsProps = {
    titleKey: 'diagnostics.testimonials.title',
    subtitleKey: 'diagnostics.testimonials.subtitle',
    testimonials: [
      {
        name: 'Michael Thompson',
        location: 'New York, USA',
        procedure: 'Chequeo Ejecutivo Integral',
        image: patientImg1,
        rating: 5,
        text_es: 'En 2 días obtuve un chequeo completo que en NY me hubiera tomado 3 meses. Los resultados guiados por IA detectaron algo que otros médicos pasaron por alto.',
        text_en: 'In 2 days I got a complete check-up that would have taken me 3 months in NY. The AI-guided results detected something other doctors missed.',
      },
      {
        name: 'Patricia Reynolds',
        location: 'Toronto, Canada',
        procedure: 'Segunda Opinión',
        image: patientImg2,
        rating: 5,
        text_es: 'El panel de especialistas me dio la claridad que necesitaba. La tecnología 3-Tesla MRI reveló detalles cruciales que cambiaron mi plan de tratamiento.',
        text_en: 'The specialist panel gave me the clarity I needed. The 3-Tesla MRI technology revealed crucial details that changed my treatment plan.',
      },
      {
        name: 'David Martinez',
        location: 'Miami, USA',
        procedure: 'Diagnóstico Genético',
        image: patientImg3,
        rating: 5,
        text_es: 'El análisis genómico completo me dio un mapa personalizado de mi salud futura. Ahora tengo un plan proactivo basado en mi ADN.',
        text_en: 'The complete genomic analysis gave me a personalized map of my future health. Now I have a proactive plan based on my DNA.',
      }
    ],
    googleReviewsUrl: 'https://www.google.com/maps',
  };

  // FAQs
  const faqProps = {
    titleKey: 'diagnostics.faq.title',
    subtitleKey: 'diagnostics.faq.subtitle',
    faqs: diagnosticsFAQs,
    ctaConfig: {
      titleKey: 'diagnostics.faq.cta_title',
      subtitleKey: 'diagnostics.faq.cta_subtitle',
      primaryButtonKey: 'diagnostics.faq.cta_primary',
      secondaryButtonKey: 'diagnostics.faq.cta_secondary',
      whatsappMessage: 'Hola, me gustaría agendar una consulta sobre diagnósticos médicos preventivos',
    },
  };

  return (
    <Layout>
      <ServiceHeroSection {...heroProps} />
      
      {/* La Diferencia MediCol: Datos → Acción */}
      <MedicolDifferentiators 
        titleKey="diagnostics.difference.title"
        cards={differenceCards}
      />
      
      {/* Programas de Diagnóstico */}
      <div id="programs">
        <ServicesGrid {...programsProps} />
      </div>
      
      {/* Tu Experiencia de Diagnóstico */}
      <MedicolDifferentiators 
        titleKey="diagnostics.experience.title"
        cards={experienceCards}
      />
      
      <ServiceTestimonialsSection {...testimonialsProps} />
      <ServiceFAQSection {...faqProps} />
    </Layout>
  );
};

export default DiagnosticsPage;
