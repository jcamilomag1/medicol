import Layout from '@/components/Layout';
import TimeLine_01, { TimeLine_01Entry } from '@/components/ui/release-time-line';
import ExperienceFAQWithCTA from '@/components/experience/ExperienceFAQWithCTA';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Package, 
  Plane, 
  Stethoscope, 
  Sparkles, 
  Home, 
  UserCheck, 
  CheckCircle2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExperiencePage = () => {
  const { t } = useTranslation();

  // Hero scroll handler
  const scrollToTimeline = () => {
    const timelineElement = document.getElementById('patient-journey');
    if (timelineElement) {
      timelineElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Timeline entries with translations
  const medicolJourneyEntries: TimeLine_01Entry[] = [
    {
      icon: MessageCircle,
      title: t('experience.timeline.steps.step1.title'),
      subtitle: t('experience.timeline.steps.step1.subtitle'),
      description: t('experience.timeline.steps.step1.description'),
      items: t('experience.timeline.steps.step1.items', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1260&q=80"
    },
    {
      icon: Package,
      title: t('experience.timeline.steps.step2.title'),
      subtitle: t('experience.timeline.steps.step2.subtitle'),
      description: t('experience.timeline.steps.step2.description'),
      items: t('experience.timeline.steps.step2.items', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=1260&q=80"
    },
    {
      icon: Plane,
      title: t('experience.timeline.steps.step3.title'),
      subtitle: t('experience.timeline.steps.step3.subtitle'),
      description: t('experience.timeline.steps.step3.description'),
      items: t('experience.timeline.steps.step3.items', { returnObjects: true }) as string[],
      image: "/assets/medellin.webp"
    },
    {
      icon: Stethoscope,
      title: t('experience.timeline.steps.step4.title'),
      subtitle: t('experience.timeline.steps.step4.subtitle'),
      description: t('experience.timeline.steps.step4.description'),
      items: t('experience.timeline.steps.step4.items', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1260&q=80"
    },
    {
      icon: Sparkles,
      title: t('experience.timeline.steps.step5.title'),
      subtitle: t('experience.timeline.steps.step5.subtitle'),
      description: t('experience.timeline.steps.step5.description'),
      items: t('experience.timeline.steps.step5.items', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1260&q=80"
    },
    {
      icon: Home,
      title: t('experience.timeline.steps.step6.title'),
      subtitle: t('experience.timeline.steps.step6.subtitle'),
      description: t('experience.timeline.steps.step6.description'),
      items: t('experience.timeline.steps.step6.items', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1260&q=80"
    },
    {
      icon: UserCheck,
      title: t('experience.timeline.steps.step7.title'),
      subtitle: t('experience.timeline.steps.step7.subtitle'),
      description: t('experience.timeline.steps.step7.description'),
      items: t('experience.timeline.steps.step7.items', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1260&q=80"
    },
    {
      icon: CheckCircle2,
      title: t('experience.timeline.steps.step8.title'),
      subtitle: t('experience.timeline.steps.step8.subtitle'),
      description: t('experience.timeline.steps.step8.description'),
      items: t('experience.timeline.steps.step8.items', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1260&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/85" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center pt-24 md:pt-28 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto">
              {t('experience.hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('experience.hero.subtitle')}
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                onClick={scrollToTimeline}
                className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
              >
                {t('experience.hero.cta')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <div className="bg-background">
        <TimeLine_01 
          title={t('experience.timeline.title')} 
          description={t('experience.timeline.description')} 
          entries={medicolJourneyEntries} 
        />
      </div>

      {/* FAQ + CTA Section */}
      <ExperienceFAQWithCTA />
    </Layout>
  );
};

export default ExperiencePage;
