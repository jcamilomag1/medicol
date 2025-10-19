import { useTranslation } from 'react-i18next';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Shield, GraduationCap, Award, FileCheck2, Lock, Clock, Users, Star, Stethoscope, Headphones, Quote } from 'lucide-react';
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
    },
    {
      icon: GraduationCap,
      title: t('about.acicme_title'),
      subtitle: t('about.acicme_subtitle'),
      tooltip: t('about.acicme_tooltip'),
    },
    {
      icon: Award,
      title: '15+',
      subtitle: t('about.years_title'),
      tooltip: t('about.years_tooltip'),
    },
    {
      icon: FileCheck2,
      title: t('about.tech_title'),
      subtitle: t('about.tech_subtitle'),
      tooltip: t('about.tech_tooltip'),
    },
    {
      icon: Lock,
      title: t('about.security_title'),
      subtitle: t('about.security_subtitle'),
      tooltip: t('about.security_tooltip'),
    },
    {
      icon: Clock,
      title: '24h',
      subtitle: t('about.response_title'),
      tooltip: t('about.response_tooltip'),
    }
  ];

  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: '+',
      title: t('about.stat_patients_title'),
      subtitle: t('about.stat_patients_subtitle'),
      extra: null
    },
    {
      icon: Star,
      value: 98.7,
      suffix: '%',
      title: t('about.stat_satisfaction_title'),
      subtitle: t('about.stat_satisfaction_subtitle'),
      extra: (
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>
      )
    },
    {
      icon: Stethoscope,
      value: 150,
      suffix: '+',
      title: t('about.stat_experience_title'),
      subtitle: t('about.stat_experience_subtitle'),
      extra: null
    },
    {
      icon: Headphones,
      number: '24/7',
      title: t('about.stat_support_title'),
      subtitle: t('about.stat_support_subtitle'),
      extra: (
        <span className="inline-block px-3 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
          {t('about.stat_support_badge')}
        </span>
      )
    }
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/20 overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        {/* Subsection A: Accreditations Bar - Floating Glass Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <TooltipProvider>
            <div className="relative bg-white/40 dark:bg-card/40 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_hsl(200_100%_61%_/_0.15)] border border-white/20 dark:border-accent/10 p-8 md:p-10 overflow-hidden">
              {/* Shimmer Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer-slow pointer-events-none" />
              
              <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                {accreditations.map((item, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.9, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
                        whileHover={{ y: -8, scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative flex flex-col items-center justify-center text-center group cursor-pointer"
                      >
                        {/* Pulsating Light Indicator */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50" />
                        
                        {/* Glass Card Container */}
                        <div className="relative w-full p-4 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 backdrop-blur-sm border border-white/10 group-hover:border-accent/30 transition-all duration-300 group-hover:shadow-[0_20px_48px_hsl(200_100%_61%_/_0.25)]">
                          <div className="relative mb-3">
                            {/* Icon Container with Animated Ring */}
                            <div className="relative mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center ring-4 ring-accent/10 group-hover:ring-accent/30 transition-all duration-300 shadow-lg group-hover:shadow-accent/20 animate-breathe">
                              <item.icon className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground" />
                              
                              {/* Pulse Ring Effect */}
                              <div className="absolute inset-0 rounded-full bg-accent/20 group-hover:animate-pulse-ring" />
                            </div>
                          </div>
                          
                          <h3 className="font-semibold text-sm md:text-base text-foreground mb-1 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {item.subtitle}
                          </p>
                        </div>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white/95 dark:bg-card/95 backdrop-blur-xl border-t-2 border-accent shadow-2xl shadow-primary/20 px-4 py-3">
                      <div className="flex items-start gap-2">
                        <item.icon className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <p className="max-w-xs text-sm">{item.tooltip}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </TooltipProvider>
        </motion.div>

        {/* Gradient Separator Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent my-12 md:my-16" />

        {/* Subsection B: Stats Grid - Premium Animated Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5, type: "spring" }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-gradient-to-br from-white to-muted/30 dark:from-card dark:to-card/50 rounded-2xl p-6 md:p-8 shadow-soft border-t-4 border-accent/60 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group overflow-hidden"
              >
                {/* Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/3 to-accent/5 pointer-events-none" />
                
                <div className="relative flex flex-col items-center text-center">
                  {/* Enhanced Icon Container */}
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center ring-4 ring-primary/20 group-hover:ring-accent/40 transition-all duration-300 shadow-lg group-hover:shadow-accent/30 animate-float">
                      <stat.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    {/* Pulse Ring for Icon */}
                    <div className="absolute inset-0 rounded-full bg-accent/20 group-hover:animate-pulse-ring" />
                  </div>
                  
                  {/* Animated Counter with Gradient Text */}
                  <div className="mb-2">
                    {stat.value ? (
                      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary via-primary-light to-accent bg-clip-text text-transparent drop-shadow-sm">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                    ) : (
                      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary via-primary-light to-accent bg-clip-text text-transparent drop-shadow-sm">
                        {stat.number}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {stat.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {stat.subtitle}
                  </p>
                  
                  {stat.extra && (
                    <div className="mt-auto pt-4 border-t border-accent/20 w-full flex justify-center">
                      {stat.extra}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Text - Signature Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-20"
        >
          <div className="relative bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30 rounded-2xl py-8 px-8 md:px-12 border-y border-accent/20 overflow-hidden">
            {/* Decorative Quotes */}
            <Quote className="absolute top-4 left-4 w-12 h-12 text-accent/30 transform -rotate-12" />
            <Quote className="absolute bottom-4 right-4 w-12 h-12 text-accent/30 transform rotate-12 scale-x-[-1]" />
            
            <p className="relative text-base md:text-lg text-foreground/90 italic text-center max-w-3xl mx-auto leading-relaxed">
              {t('about.closing_text')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};