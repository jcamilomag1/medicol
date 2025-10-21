import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import doctorAlejandroImage from '@/assets/doctor-alejandro-guerra.jpg';

interface Doctor {
  name: string;
  specialtyKey: string;
  experienceKey: string;
  bioKey: string;
  imageUrl: string;
  profileUrl: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

const teamMembers: Doctor[] = [
  {
    name: 'Dr. Alejandro Guerra Ruiz',
    specialtyKey: 'team.doctors.alejandro.specialty',
    experienceKey: 'team.doctors.alejandro.experience',
    bioKey: 'team.doctors.alejandro.bio',
    imageUrl: doctorAlejandroImage,
    profileUrl: '/nuestro-equipo/alejandro-guerra',
    linkedinUrl: '#',
    instagramUrl: '#'
  },
  {
    name: 'Dra. Carolina Botero Vélez',
    specialtyKey: 'team.doctors.carolina.specialty',
    experienceKey: 'team.doctors.carolina.experience',
    bioKey: 'team.doctors.carolina.bio',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
    profileUrl: '/nuestro-equipo/carolina-botero',
    linkedinUrl: '#',
    instagramUrl: '#'
  },
  {
    name: 'Dr. Juan Vélez Martínez',
    specialtyKey: 'team.doctors.juan.specialty',
    experienceKey: 'team.doctors.juan.experience',
    bioKey: 'team.doctors.juan.bio',
    imageUrl: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=600&auto=format&fit=crop',
    profileUrl: '/nuestro-equipo/juan-velez',
    linkedinUrl: '#',
    instagramUrl: '#'
  },
  {
    name: 'Dra. María Fernández López',
    specialtyKey: 'team.doctors.maria.specialty',
    experienceKey: 'team.doctors.maria.experience',
    bioKey: 'team.doctors.maria.bio',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop',
    profileUrl: '/nuestro-equipo/maria-fernandez',
    linkedinUrl: '#',
    instagramUrl: '#'
  }
];

export const TeamPreview = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % teamMembers.length);
  
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + teamMembers.length) % teamMembers.length
    );

  const currentDoctor = teamMembers[currentIndex];

  return (
    <section className="py-8 md:py-12 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Estarás en las mejores manos
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('team.preview_description')}
          </p>
        </div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        >
      {/* Desktop Layout */}
      <div className="hidden md:flex relative items-center gap-8">
        {/* Doctor Image */}
        <motion.div 
          className="w-[470px] h-[470px] rounded-3xl overflow-hidden flex-shrink-0 shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentDoctor.imageUrl}
              src={currentDoctor.imageUrl}
              alt={currentDoctor.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </motion.div>

        {/* Card with Glassmorphism */}
        <motion.div 
          className="
            relative ml-[-80px] z-10 max-w-xl flex-1 p-8 rounded-3xl
            bg-gradient-to-br from-white/90 via-white/80 to-background/90
            backdrop-blur-xl
            border border-border/50
            shadow-2xl shadow-primary/10
          "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDoctor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Name */}
              <h3 className="text-3xl font-bold text-primary mb-2">
                {currentDoctor.name}
              </h3>
              
              {/* Specialty */}
              <p className="text-lg font-semibold text-accent mb-1">
                {t(currentDoctor.specialtyKey)}
              </p>
              
              {/* Experience */}
              <p className="text-sm text-muted-foreground mb-4">
                {t(currentDoctor.experienceKey)}
              </p>
              
              {/* Bio */}
              <p className="text-foreground leading-relaxed mb-6">
                {t(currentDoctor.bioKey)}
              </p>
              
              {/* View Profile Button */}
              <motion.a
                href={currentDoctor.profileUrl}
                className="
                  block w-full px-6 py-3 bg-accent hover:bg-accent/90 
                  text-white font-semibold rounded-full text-center
                  transition-all
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('common.view_profile')} →
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden max-w-sm mx-auto">
        {/* Doctor Image */}
        <motion.div 
          className="w-full aspect-square rounded-3xl overflow-hidden mb-6 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentDoctor.imageUrl}
              src={currentDoctor.imageUrl}
              alt={currentDoctor.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
        </motion.div>

        {/* Card Content */}
        <div className="px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDoctor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-primary text-center mb-2">
                {currentDoctor.name}
              </h3>
              <p className="text-lg font-semibold text-accent text-center mb-1">
                {t(currentDoctor.specialtyKey)}
              </p>
              <p className="text-sm text-muted-foreground text-center mb-4">
                {t(currentDoctor.experienceKey)}
              </p>
              <p className="text-foreground text-center leading-relaxed mb-6">
                {t(currentDoctor.bioKey)}
              </p>
              
              {/* View Profile Button */}
              <motion.a
                href={currentDoctor.profileUrl}
                className="
                  block w-full px-6 py-3 bg-accent hover:bg-accent/90 
                  text-white font-semibold rounded-full text-center
                  transition-all
                "
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('common.view_profile')} →
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-6 mt-8">
        {/* Previous Button */}
        <motion.button
          onClick={handlePrevious}
          className="
            w-12 h-12 rounded-full 
            bg-white/80 backdrop-blur-md
            border border-border/50
            shadow-md hover:shadow-xl
            flex items-center justify-center
            hover:bg-white transition-all
          "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous doctor"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </motion.button>

        {/* Dots */}
        <div className="flex gap-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-3 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-accent w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3"
              )}
              aria-label={`Go to doctor ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          onClick={handleNext}
          className="
            w-12 h-12 rounded-full 
            bg-white/80 backdrop-blur-md
            border border-border/50
            shadow-md hover:shadow-xl
            flex items-center justify-center
            hover:bg-white transition-all
          "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next doctor"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </motion.button>
      </div>
    </motion.div>
      </div>
    </section>
  );
};
