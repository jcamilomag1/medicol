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
import { Award, Languages, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
                  
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6 pt-4">
                      {/* Philosophy */}
                      <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                        <p className="text-foreground font-medium italic">
                          {t(`team.medical.${doctor.key}.philosophy`)}
                        </p>
                      </div>

                      {/* Credentials */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-5 h-5 text-primary" />
                          <h4 className="font-semibold text-foreground">
                            {t('team.medical.credentials')}
                          </h4>
                        </div>
                        <div className="space-y-2 text-sm text-muted-foreground pl-7">
                          <p><strong>{t('team.medical.membership')}:</strong> {t(`team.medical.${doctor.key}.membership`)}</p>
                          <p><strong>{t('team.medical.education')}:</strong> {t(`team.medical.${doctor.key}.education`)}</p>
                          <p className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <strong>{t('team.medical.experienceLabel')}:</strong> {t(`team.medical.${doctor.key}.experience`)}
                          </p>
                        </div>
                      </div>

                      {/* Treatments */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          {t('team.medical.treatments')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(t(`team.medical.${doctor.key}.treatmentsList`, { returnObjects: true }) as string[]).map((treatment: string, i: number) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-slate-800 text-white rounded-full text-sm border border-slate-700"
                            >
                              {treatment}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Languages */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Languages className="w-5 h-5 text-primary" />
                        <span><strong>{t('team.medical.languages')}:</strong> {t(`team.medical.${doctor.key}.languages`)}</span>
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
