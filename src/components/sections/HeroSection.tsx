import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen">
      {/* Background Video */}
      <video
        className="absolute w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/medicol-hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="relative flex flex-col justify-center items-center h-full max-w-4xl mx-auto px-4 md:px-6 text-center">
        {/* Textual Elements */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Resultados que transforman. Cuidado que te acompaña en cada paso.
        </h1>

        <p className="mt-4 text-lg md:text-xl text-neutral-200">
          Cirugía cosmética de clase mundial, medicina regenerativa de vanguardia y tratamientos dentales premium en Medellín.
        </p>

        {/* Call to Action */}
        <Button variant="default" size="lg" className="mt-8 bg-gradient-primary shadow-medium hover:shadow-soft transition-all duration-300 hover:scale-105">
          Agenda tu Consulta Virtual Gratuita
        </Button>

        {/* Social Proof Logos */}
        <div className="mt-12 flex items-center justify-center gap-x-8">
          <img 
            src="/logos/jci-logo-white.svg" 
            alt="Joint Commission International Accreditation" 
            className="h-10"
          />
          <img 
            src="/logos/medellin-health-city-logo-white.svg" 
            alt="Cluster Medellín Health City" 
            className="h-12"
          />
          <img 
            src="/logos/iso-9001-logo-white.svg" 
            alt="ISO 9001 Certified" 
            className="h-10"
          />
        </div>
      </div>
    </section>
  );
};
