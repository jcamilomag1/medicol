import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, GraduationCap, Briefcase, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  education: string;
  certifications: string[];
  bio: string;
  imageUrl: string;
  profileUrl: string;
  instagram?: string;
  linkedin?: string;
}

const teamMembers: Doctor[] = [
  {
    name: 'Dr. Juan Pérez',
    specialty: 'Cirugía Plástica y Reconstructiva',
    experience: '15+ años',
    education: 'Universidad de Antioquia',
    certifications: ['SCCP', 'ISAPS'],
    bio: 'Especialista en cirugía estética facial y corporal con enfoque en resultados naturales. Pionero en técnicas mínimamente invasivas.',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    profileUrl: '/team',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Dra. María González',
    specialty: 'Cirugía Plástica Estética',
    experience: '18+ años',
    education: 'Universidad Nacional de Colombia',
    certifications: ['SCCP', 'ASPS'],
    bio: 'Experta en contorno corporal y rejuvenecimiento facial. Certificada en las últimas tecnologías de lipoescultura.',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
    profileUrl: '/team',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Dr. Carlos Ramírez',
    specialty: 'Medicina Regenerativa',
    experience: '20+ años',
    education: 'Universidad CES',
    certifications: ['ISSCR', 'AATB'],
    bio: 'Líder en terapias con células madre y medicina anti-aging. Investigador activo en regeneración tisular.',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
    profileUrl: '/team',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Dr. Andrés Martínez',
    specialty: 'Odontología Estética',
    experience: '12+ años',
    education: 'Universidad Javeriana',
    certifications: ['ADA', 'AACD'],
    bio: 'Especialista en diseño de sonrisa y implantes dentales. Certificado en odontología digital y estética avanzada.',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop',
    profileUrl: '/team',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  }
];

export const TeamSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentDoctor = teamMembers[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section id="team" className="py-20 sm:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl mb-4">
            {t('team.section_title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('team.section_subtitle')}
          </p>
        </motion.div>

        {/* Team Member Card - Desktop */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative h-[500px] overflow-hidden">
                  <img
                    src={currentDoctor.imageUrl}
                    alt={currentDoctor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {currentDoctor.experience}
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    {currentDoctor.name}
                  </h3>
                  <p className="text-xl text-accent font-semibold mb-6">
                    {currentDoctor.specialty}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">{t('team.education')}</p>
                        <p className="text-muted-foreground">{currentDoctor.education}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">{t('team.certifications')}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {currentDoctor.certifications.map((cert) => (
                            <span
                              key={cert}
                              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">{t('team.bio')}</p>
                        <p className="text-muted-foreground">{currentDoctor.bio}</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 mb-6">
                    {currentDoctor.instagram && (
                      <a
                        href={currentDoctor.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {currentDoctor.linkedin && (
                      <a
                        href={currentDoctor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <Button
                    onClick={() => navigate(currentDoctor.profileUrl)}
                    variant="default"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    {t('team.view_profile')}
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Team Member Card - Mobile */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden"
            >
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={currentDoctor.imageUrl}
                  alt={currentDoctor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  {currentDoctor.experience}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {currentDoctor.name}
                </h3>
                <p className="text-lg text-accent font-semibold mb-6">
                  {currentDoctor.specialty}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t('team.education')}</p>
                      <p className="text-muted-foreground text-sm">{currentDoctor.education}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t('team.certifications')}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {currentDoctor.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm">{currentDoctor.bio}</p>
                </div>

                <div className="flex gap-4 mb-6">
                  {currentDoctor.instagram && (
                    <a
                      href={currentDoctor.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {currentDoctor.linkedin && (
                    <a
                      href={currentDoctor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <Button
                  onClick={() => navigate(currentDoctor.profileUrl)}
                  variant="default"
                  size="lg"
                  className="w-full"
                >
                  {t('team.view_profile')}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <Button
            onClick={handlePrevious}
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-border hover:bg-primary/50'
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
