import { useTranslation } from 'react-i18next';
import { Users, Star, Award, Globe } from 'lucide-react';
import { StatCounter } from '@/components/ui/stat-counter';
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
    <section ref={ref} className="py-12 md:py-16 bg-accent/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
              </div>
              
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSocialProof;
