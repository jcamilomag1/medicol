import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';
import drGuerraImg from '@/assets/team/dr-guerra.png';
import draDiazImg from '@/assets/team/dra-diaz.png';
import draBoteroImg from '@/assets/team/dra-botero.png';
import drDazaImg from '@/assets/team/dr-daza.png';
import drArangoImg from '@/assets/team/dr-arango.png';
import drGarciaImg from '@/assets/team/dr-garcia.png';
import rnJaramilloImg from '@/assets/team/rn-jaramillo.png';
import drOchoaImg from '@/assets/team/dr-ochoa.png';

interface Doctor {
  key: string;
  imageUrl: string;
}

const teamMembers: Doctor[] = [
  { key: 'guerra', imageUrl: drGuerraImg },
  { key: 'diaz', imageUrl: draDiazImg },
  { key: 'botero', imageUrl: draBoteroImg },
  { key: 'daza', imageUrl: drDazaImg },
  { key: 'arango', imageUrl: drArangoImg },
  { key: 'garcia', imageUrl: drGarciaImg },
  { key: 'lina', imageUrl: rnJaramilloImg },
  { key: 'ochoa', imageUrl: drOchoaImg }
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
    <section id="doctores" className="py-12 md:py-20 bg-accent/5 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            {t('team.medical.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('team.medical.intro')}
          </p>
        </motion.div>

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
              alt={t(`team.medical.${currentDoctor.key}.name`)}
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

        {/* Card with Glassmorphism - Split Design */}
        <motion.div 
          className="
            relative ml-[-80px] z-10 max-w-xl flex-1 rounded-3xl overflow-hidden
            bg-gradient-to-br from-white/95 via-white/90 to-background/95
            backdrop-blur-2xl
            border border-border/50
            shadow-2xl shadow-primary/10
          "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDoctor.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-6 overflow-y-auto max-h-[470px]"
            >
              <div>
                {/* Name */}
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {t(`team.medical.${currentDoctor.key}.name`)}
                </h3>
                
                {/* Specialty */}
                <p className="text-sm font-semibold text-accent mb-4">
                  {t(`team.medical.${currentDoctor.key}.specialty`)}
                </p>
                
                {/* Philosophy Quote */}
                <div className="mb-4 pl-3 border-l-2 border-accent/40">
                  <p className="text-sm italic text-muted-foreground leading-relaxed">
                    "{t(`team.medical.${currentDoctor.key}.philosophy`)}"
                  </p>
                </div>
                
                {/* Credentials */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-foreground">{t('team.medical.membership')}</p>
                      <p className="text-muted-foreground">{t(`team.medical.${currentDoctor.key}.membership`)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-foreground">{t('team.medical.education')}</p>
                      <p className="text-muted-foreground">{t(`team.medical.${currentDoctor.key}.education`)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-foreground">{t('team.medical.experienceLabel')}</p>
                      <p className="text-muted-foreground">{t(`team.medical.${currentDoctor.key}.experience`)}</p>
                    </div>
                  </div>
                </div>
                
                {/* Treatments */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground mb-2">{t('team.medical.treatments')}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {(t(`team.medical.${currentDoctor.key}.treatmentsList`, { returnObjects: true }) as string[]).join(' • ')}
                  </p>
                </div>
                
                {/* Languages */}
                <div className="flex items-center gap-2 text-xs">
                  <Languages className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-foreground">{t('team.medical.languages')}:</span>
                  <span className="text-muted-foreground">{t(`team.medical.${currentDoctor.key}.languages`)}</span>
                </div>
              </div>
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
              alt={t(`team.medical.${currentDoctor.key}.name`)}
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

        {/* Card Content - Split Design Mobile */}
        <div className="px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDoctor.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl overflow-hidden bg-gradient-to-br from-white/95 via-white/90 to-background/95 backdrop-blur-2xl border border-border/50 shadow-xl p-5 overflow-y-auto max-h-[600px]"
            >
              <div>
                {/* Name */}
                <h3 className="text-xl font-bold text-center mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {t(`team.medical.${currentDoctor.key}.name`)}
                </h3>
                
                {/* Specialty */}
                <p className="text-sm font-semibold text-accent text-center mb-4">
                  {t(`team.medical.${currentDoctor.key}.specialty`)}
                </p>
                
                {/* Philosophy Quote */}
                <div className="mb-4 pl-3 border-l-2 border-accent/40">
                  <p className="text-xs italic text-muted-foreground leading-relaxed">
                    "{t(`team.medical.${currentDoctor.key}.philosophy`)}"
                  </p>
                </div>
                
                {/* Credentials */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-foreground">{t('team.medical.membership')}</p>
                      <p className="text-muted-foreground">{t(`team.medical.${currentDoctor.key}.membership`)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-foreground">{t('team.medical.education')}</p>
                      <p className="text-muted-foreground">{t(`team.medical.${currentDoctor.key}.education`)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div className="text-xs">
                      <p className="font-semibold text-foreground">{t('team.medical.experienceLabel')}</p>
                      <p className="text-muted-foreground">{t(`team.medical.${currentDoctor.key}.experience`)}</p>
                    </div>
                  </div>
                </div>
                
                {/* Treatments */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground mb-2">{t('team.medical.treatments')}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {(t(`team.medical.${currentDoctor.key}.treatmentsList`, { returnObjects: true }) as string[]).join(' • ')}
                  </p>
                </div>
                
                {/* Languages */}
                <div className="flex items-center gap-2 text-xs">
                  <Languages className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-foreground">{t('team.medical.languages')}:</span>
                  <span className="text-muted-foreground">{t(`team.medical.${currentDoctor.key}.languages`)}</span>
                </div>
              </div>
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
