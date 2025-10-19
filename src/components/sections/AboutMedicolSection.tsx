import { useTranslation } from 'react-i18next';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Shield, GraduationCap, Award, FileCheck2, Lock, Clock, Users, Star, Stethoscope, Headphones } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Counter animation component
const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

export const AboutMedicolSection = () => {
  const { t } = useTranslation();

  const accreditations = [
    {
      icon: Shield,
      title: t('about.jci_title'),
      subtitle: t('about.jci_subtitle'),
      tooltip: t('about.jci_tooltip'),
      gradient: 'from-blue-600 to-blue-400',
      size: 'lg'
    },
    {
      icon: GraduationCap,
      title: t('about.acicme_title'),
      subtitle: t('about.acicme_subtitle'),
      tooltip: t('about.acicme_tooltip'),
      gradient: 'from-primary to-accent',
      size: 'md'
    },
    {
      icon: Award,
      title: '15+',
      subtitle: t('about.years_title'),
      tooltip: t('about.years_tooltip'),
      gradient: 'from-yellow-500 to-yellow-600',
      size: 'md'
    },
    {
      icon: FileCheck2,
      title: t('about.tech_title'),
      subtitle: t('about.tech_subtitle'),
      tooltip: t('about.tech_tooltip'),
      gradient: 'from-secondary to-primary',
      size: 'md'
    },
    {
      icon: Lock,
      title: t('about.security_title'),
      subtitle: t('about.security_subtitle'),
      tooltip: t('about.security_tooltip'),
      gradient: 'from-green-600 to-green-500',
      size: 'md'
    },
    {
      icon: Clock,
      title: '24h',
      subtitle: t('about.response_title'),
      tooltip: t('about.response_tooltip'),
      gradient: 'from-emerald-600 to-emerald-500',
      size: 'md'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: '+',
      title: t('about.stat_patients_title'),
      subtitle: t('about.stat_patients_subtitle'),
      color: 'text-primary'
    },
    {
      icon: Star,
      value: 98.7,
      suffix: '%',
      title: t('about.stat_satisfaction_title'),
      subtitle: t('about.stat_satisfaction_subtitle'),
      color: 'text-yellow-500',
      showStars: true
    },
    {
      icon: Stethoscope,
      value: 150,
      suffix: '+',
      title: t('about.stat_experience_title'),
      subtitle: t('about.stat_experience_subtitle'),
      color: 'text-green-600'
    },
    {
      icon: Headphones,
      value: 24,
      suffix: '/7',
      title: t('about.stat_support_title'),
      subtitle: t('about.stat_support_subtitle'),
      color: 'text-teal-600',
      badge: t('about.stat_support_badge')
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Subsection A: Accreditations Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl shadow-lg border border-border/50 p-8 mb-16"
        >
          <TooltipProvider>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {accreditations.map((accreditation, index) => {
                const IconComponent = accreditation.icon;
                const isLarge = accreditation.size === 'lg';
                
                return (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex flex-col items-center text-center group cursor-help"
                      >
                        {/* Icon Container */}
                        <div className={`
                          ${isLarge ? 'w-20 h-20 mb-3' : 'w-16 h-16 mb-2'}
                          rounded-2xl bg-gradient-to-br ${accreditation.gradient}
                          flex items-center justify-center
                          shadow-md group-hover:shadow-xl
                          transition-all duration-300 group-hover:scale-110
                        `}>
                          <IconComponent className={`${isLarge ? 'w-10 h-10' : 'w-8 h-8'} text-white`} />
                        </div>
                        
                        {/* Title */}
                        <div className={`${isLarge ? 'text-lg' : 'text-base'} font-bold text-foreground mb-1`}>
                          {accreditation.title}
                        </div>
                        
                        {/* Subtitle */}
                        <div className="text-xs text-muted-foreground leading-tight">
                          {accreditation.subtitle}
                        </div>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>{accreditation.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </TooltipProvider>
        </motion.div>

        {/* Subsection B: Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 border border-border/50"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                
                {/* Counter */}
                <div className={`text-5xl font-extrabold ${stat.color} mb-2 text-center`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Stars for satisfaction stat */}
                {stat.showStars && (
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                )}
                
                {/* Title */}
                <div className="text-lg font-semibold text-foreground mb-2 text-center">
                  {stat.title}
                </div>
                
                {/* Subtitle */}
                <div className="text-sm text-muted-foreground text-center leading-relaxed">
                  {stat.subtitle}
                </div>
                
                {/* Badge for 24/7 support */}
                {stat.badge && (
                  <div className="mt-3 text-center">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {stat.badge}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Closing Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-base italic text-muted-foreground max-w-4xl mx-auto"
        >
          {t('about.closing_text')}
        </motion.p>
      </div>
    </section>
  );
};
