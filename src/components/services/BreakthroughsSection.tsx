import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Breakthrough {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
}

interface BreakthroughsSectionProps {
  titleKey: string;
  subtitleKey: string;
  breakthroughs: Breakthrough[];
}

export const BreakthroughsSection = ({
  titleKey,
  subtitleKey,
  breakthroughs,
}: BreakthroughsSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t(titleKey)}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t(subtitleKey)}
          </p>
        </motion.div>

        {/* Breakthroughs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {breakthroughs.map((breakthrough, index) => {
            const IconComponent = breakthrough.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {t(breakthrough.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(breakthrough.descriptionKey)}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
