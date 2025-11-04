import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Award, Languages, Calendar, GraduationCap, Briefcase, Stethoscope } from 'lucide-react';
import { StatCounter } from '@/components/ui/stat-counter';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TeamMedicalSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const doctors = [
    { key: 'guerra', image: '/placeholder.svg' },
    { key: 'diaz', image: '/placeholder.svg' },
    { key: 'botero', image: '/placeholder.svg' },
    { key: 'daza', image: '/placeholder.svg' },
    { key: 'arango', image: '/placeholder.svg' },
    { key: 'garcia', image: '/placeholder.svg' },
    { key: 'lina', image: '/placeholder.svg' },
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-accent/5">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={doctor.key} 
                  className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-4 text-left w-full">
                      <img
                        src={doctor.image}
                        alt={t(`team.medical.${doctor.key}.name`)}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-primary/20 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold text-foreground truncate">
                          {t(`team.medical.${doctor.key}.name`)}
                        </h3>
                        <p className="text-sm md:text-base text-primary font-medium">
                          {t(`team.medical.${doctor.key}.specialty`)}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-4 pb-4 md:px-6 md:pb-6">
                    <div className="space-y-4 pt-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                      
                      {/* Columna Izquierda */}
                      <div className="space-y-4">
                        {/* Philosophy Card */}
                        <Card className="bg-primary/10 border-l-4 border-primary shadow-none">
                          <div className="p-4">
                            <p className="text-sm md:text-base text-foreground font-medium italic leading-relaxed">
                              "{t(`team.medical.${doctor.key}.philosophy`)}"
                            </p>
                          </div>
                        </Card>

                        {/* Statistics Card */}
                        <Card className="bg-sky-50 border-sky-200 shadow-none">
                          <div className="p-4 text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
                              <h4 className="font-semibold text-sky-900 text-sm md:text-base">
                                {t('team.medical.experienceLabel')}
                              </h4>
                            </div>
                            <div className="text-sky-600">
                              <StatCounter 
                                value={parseInt(t(`team.medical.${doctor.key}.experience`)) || 15} 
                                suffix="+" 
                                className="text-3xl md:text-4xl font-bold"
                              />
                              <p className="text-xs md:text-sm text-sky-700 mt-1">Años de experiencia</p>
                            </div>
                          </div>
                        </Card>

                        {/* Languages Card */}
                        <Card className="bg-emerald-50 border-emerald-200 shadow-none">
                          <div className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Languages className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                              <h4 className="font-semibold text-emerald-900 text-sm md:text-base">
                                {t('team.medical.languages')}
                              </h4>
                            </div>
                            <p className="text-sm text-emerald-800">
                              {t(`team.medical.${doctor.key}.languages`)}
                            </p>
                          </div>
                        </Card>
                      </div>

                      {/* Columna Derecha */}
                      <div className="space-y-4">
                        {/* Credentials Card */}
                        <Card className="bg-slate-50 border-slate-200 shadow-none">
                          <div className="p-4">
                            <div className="flex items-center gap-2 mb-4">
                              <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                              <h4 className="font-semibold text-foreground text-sm md:text-base">
                                {t('team.medical.credentials')}
                              </h4>
                            </div>
                            <div className="space-y-3">
                              <div className="flex gap-2 items-start">
                                <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                    {t('team.medical.membership')}
                                  </p>
                                  <p className="text-sm text-foreground mt-0.5">
                                    {t(`team.medical.${doctor.key}.membership`)}
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex gap-2 items-start">
                                <Stethoscope className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                    {t('team.medical.education')}
                                  </p>
                                  <p className="text-sm text-foreground mt-0.5">
                                    {t(`team.medical.${doctor.key}.education`)}
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex gap-2 items-start">
                                <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                    {t('team.medical.experienceLabel')}
                                  </p>
                                  <p className="text-sm text-foreground mt-0.5">
                                    {t(`team.medical.${doctor.key}.experience`)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>

                        {/* Treatments Card */}
                        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-none">
                          <div className="p-4">
                            <div className="flex items-center gap-2 mb-3">
                              <Stethoscope className="w-5 h-5 md:w-6 md:h-6 text-sky-400" />
                              <h4 className="font-semibold text-white text-sm md:text-base">
                                {t('team.medical.treatments')}
                              </h4>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {(t(`team.medical.${doctor.key}.treatmentsList`, { returnObjects: true }) as string[]).map((treatment: string, i: number) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="justify-center text-center bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors text-xs py-1.5"
                                >
                                  {treatment}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TeamMedicalSection;
