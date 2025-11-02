import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Sparkles, LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface DifferentiatorCard {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
}

interface MedicolDifferentiatorsProps {
  titleKey?: string;
  cards?: DifferentiatorCard[];
}

export const MedicolDifferentiators = ({ 
  titleKey = 'stem_cells.differentiators.cards.title',
  cards = [
    {
      icon: ShieldCheck,
      titleKey: "stem_cells.differentiators.cards.worry_free_title",
      descriptionKey: "stem_cells.differentiators.cards.worry_free_description"
    },
    {
      icon: HeartHandshake,
      titleKey: "stem_cells.differentiators.cards.followup_title",
      descriptionKey: "stem_cells.differentiators.cards.followup_description"
    },
    {
      icon: Sparkles,
      titleKey: "stem_cells.differentiators.cards.innovation_title",
      descriptionKey: "stem_cells.differentiators.cards.innovation_description"
    }
  ]
}: MedicolDifferentiatorsProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-background">
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
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border hover:border-blue-200">
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-200">
                    <IconComponent className="w-8 h-8 text-blue-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors">
                    {t(item.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {t(item.descriptionKey)}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
