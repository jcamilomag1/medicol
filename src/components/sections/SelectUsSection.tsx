import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Users, Award, ShieldCheck } from 'lucide-react';
import AboutHeroSection from './AboutHeroSection';

export const SelectUsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const aboutData = {
    title: (
      <>
        {t('about.main_title')} <br className="hidden sm:block" />
      </>
    ),
    subtitle: t('about.hero_description'),
    
    actions: [
      {
        text: t('about.cta_consult'),
        onClick: () => window.open(
          'https://wa.me/573001234567?text=' + 
          encodeURIComponent(t('why_choose.whatsapp_message')), 
          '_blank'
        ),
        variant: 'default' as const,
        className: 'bg-accent text-accent-foreground hover:bg-accent/90',
      },
      {
        text: t('about.cta_team'),
        onClick: () => navigate('/equipo'),
        variant: 'outline' as const,
      },
    ],
    
    stats: [
      {
        value: '200+',
        label: t('about.stats.patients'),
        icon: <Users className="h-5 w-5 text-primary" />,
      },
      {
        value: '15+',
        label: t('about.stats.years'),
        icon: <Award className="h-5 w-5 text-primary" />,
      },
      {
        value: 'JCI',
        label: t('about.stats.jci_accredited'),
        icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      },
    ],
    
    images: [
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=800&fit=crop',
    ],
  };

  return <AboutHeroSection {...aboutData} className="bg-white" />;
};
