import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComparisonItem {
  aspect: string;
  others: {
    icon: LucideIcon;
    text: string;
    negative?: boolean;
  };
  medicol: {
    icon: LucideIcon;
    text: string;
  };
}

interface ComparisonTableProps {
  data: ComparisonItem[];
}

export const ComparisonTable = ({ data }: ComparisonTableProps) => {
  const { t } = useTranslation();

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-2xl border border-border bg-background shadow-lg"
      >
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-border">
          <div className="p-6 bg-muted/30">
            <h3 className="text-lg font-bold text-muted-foreground text-center">
              {t('stem_cells.differentiators.comparison.header_aspect')}
            </h3>
          </div>
          <div className="p-6 bg-muted/50 border-t md:border-t-0 md:border-l border-border">
            <h3 className="text-lg font-bold text-muted-foreground text-center">
              {t('stem_cells.differentiators.comparison.header_others')}
            </h3>
          </div>
          <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-t md:border-t-0 md:border-l border-border">
            <h3 className="text-lg font-bold text-primary text-center">
              {t('stem_cells.differentiators.comparison.header_medicol')}
            </h3>
          </div>
        </div>

        {/* Rows */}
        {data.map((row, index) => {
          const OthersIcon = row.others.icon;
          const MedicolIcon = row.medicol.icon;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-border last:border-b-0 hover:bg-muted/20 transition-colors"
            >
              {/* Aspect */}
              <div className="p-6 flex items-center justify-center md:justify-start">
                <span className="font-semibold text-foreground text-center md:text-left">
                  {row.aspect}
                </span>
              </div>

              {/* Others */}
              <div className="p-6 flex items-center gap-3 bg-muted/30 border-t md:border-t-0 md:border-l border-border">
                <OthersIcon 
                  className={cn(
                    "w-5 h-5 flex-shrink-0",
                    row.others.negative ? "text-destructive" : "text-muted-foreground"
                  )} 
                />
                <span className={cn(
                  "text-sm",
                  row.others.negative ? "text-muted-foreground" : "text-foreground"
                )}>
                  {row.others.text}
                </span>
              </div>

              {/* Medicol */}
              <div className="p-6 flex items-center gap-3 bg-gradient-to-r from-primary/5 to-transparent border-t md:border-t-0 md:border-l border-border">
                <MedicolIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {row.medicol.text}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
