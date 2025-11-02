import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ExcellenceItem {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
}

interface ScientificExcellenceSectionProps {
  titleKey: string;
  items: ExcellenceItem[];
}

export const ScientificExcellenceSection = ({
  titleKey,
  items,
}: ScientificExcellenceSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 px-6 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
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
        </motion.div>

        {/* Excellence Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border hover:border-primary/30 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
