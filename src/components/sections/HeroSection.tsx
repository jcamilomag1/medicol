import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content Container */}
      <div className="relative flex flex-col justify-center items-center h-full max-w-4xl mx-auto px-4 md:px-6 text-center">
        {/* Textual Elements */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          {t('hero.title')}
        </h1>

        <p className="mt-4 text-lg md:text-xl text-neutral-200">
          {t('hero.subtitle')}
        </p>

        {/* Call to Action */}
        <Button variant="default" size="lg" className="mt-8 bg-accent text-primary hover:bg-accent/90 transition-all duration-300 hover:scale-105">
          {t('hero.cta')}
        </Button>

        {/* Social Proof Logos */}
        <div className="mt-12 flex items-center justify-center gap-x-8">
          <img 
            src="/logos/jci-logo-white.svg" 
            alt={t('hero.jci_alt')}
            className="h-10"
          />
          <img 
            src="/logos/medellin-health-city-logo-white.svg" 
            alt={t('hero.mhc_alt')}
            className="h-12"
          />
          <img 
            src="/logos/iso-9001-logo-white.svg" 
            alt={t('hero.iso_alt')}
            className="h-10"
          />
        </div>
      </div>
    </section>
  );
};
