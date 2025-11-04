import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { MessageCircle, Calendar, Plane, Heart, CheckCircle } from 'lucide-react';

const TeamProcessTimeline = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { key: 'step1', icon: MessageCircle, number: '01' },
    { key: 'step2', icon: Calendar, number: '02' },
    { key: 'step3', icon: Plane, number: '03' },
    { key: 'step4', icon: Heart, number: '04' },
    { key: 'step5', icon: CheckCircle, number: '05' },
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            {t('team.process.title')}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-primary/20 -z-10" />
                )}

                {/* Icon Circle */}
                <div className="absolute left-0 top-0 w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <div className="text-4xl font-bold text-primary/20 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {t(`team.process.${step.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`team.process.${step.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connector Line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-primary/20" />

              <div className="grid grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative"
                  >
                    {/* Icon Circle */}
                    <div className="relative z-10 w-24 h-24 mx-auto bg-sky-400 rounded-full flex items-center justify-center shadow-lg mb-6">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary/20 mb-2">
                        {step.number}
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-2">
                        {t(`team.process.${step.key}.title`)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t(`team.process.${step.key}.description`)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamProcessTimeline;
