import { useTranslation } from 'react-i18next';
import { Users, Star, Award, Globe } from 'lucide-react';
import { StatCounter } from '@/components/ui/stat-counter';
import { Card, CardContent } from '@/components/ui/card';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TeamSocialProof = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, value: 500, suffix: '+', label: t('team.socialProof.patients') },
    { icon: Star, value: 4.9, suffix: '/5', label: t('team.socialProof.rating') },
    { icon: Award, value: 15, suffix: '+', label: t('team.socialProof.experience') },
    { icon: Globe, value: 20, suffix: '+', label: t('team.socialProof.countries') },
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-5xl px-6 lg:max-w-7xl">
        <div className="grid grid-cols-6 gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col-span-full sm:col-span-3 lg:col-span-3"
            >
              <Card className="relative overflow-hidden h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                    <stat.icon className="m-auto size-16 text-accent" strokeWidth={1.5} />
                  </div>
                  
                  <div className="relative z-10 mt-6 space-y-2 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-foreground">
                      <StatCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    
                    <h2 className="text-lg font-medium text-primary">
                      {stat.label}
                    </h2>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSocialProof;
