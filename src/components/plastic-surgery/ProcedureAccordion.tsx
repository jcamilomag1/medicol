import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { User, Activity, Heart, Sparkles, Combine, Zap } from 'lucide-react';
import { procedures, Procedure } from '@/data/plastic-surgery-procedures';
import { ProcedureListItem } from './ProcedureListItem';
import { ProcedureModal } from './ProcedureModal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface CategoryInfo {
  id: Procedure['category'];
  icon: React.ElementType;
  count: number;
}

export const ProcedureAccordion = () => {
  const { t } = useTranslation();
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories: CategoryInfo[] = [
    {
      id: 'face',
      icon: User,
      count: procedures.filter(p => p.category === 'face').length,
    },
    {
      id: 'body',
      icon: Activity,
      count: procedures.filter(p => p.category === 'body').length,
    },
    {
      id: 'breast',
      icon: Heart,
      count: procedures.filter(p => p.category === 'breast').length,
    },
    {
      id: 'buttocks',
      icon: Sparkles,
      count: procedures.filter(p => p.category === 'buttocks').length,
    },
    {
      id: 'combined',
      icon: Combine,
      count: procedures.filter(p => p.category === 'combined').length,
    },
    {
      id: 'specialized',
      icon: Zap,
      count: procedures.filter(p => p.category === 'specialized').length,
    },
  ];

  const handleProcedureClick = (procedure: Procedure) => {
    setSelectedProcedure(procedure);
    setModalOpen(true);
  };

  return (
    <>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {categories.map((category, index) => {
          const categoryProcedures = procedures.filter(p => p.category === category.id);
          const Icon = category.icon;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <AccordionItem 
                value={category.id}
                className="border border-border rounded-lg overflow-hidden bg-card shadow-soft hover:shadow-medium transition-shadow"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-foreground">
                        {t(`plastic_surgery.procedures.category_${category.id}`)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.count} {t('plastic_surgery.procedures.procedures_count')}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3 pt-2">
                    {categoryProcedures.map((procedure) => (
                      <ProcedureListItem
                        key={procedure.id}
                        procedure={procedure}
                        onClick={() => handleProcedureClick(procedure)}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          );
        })}
      </Accordion>

      <ProcedureModal
        procedure={selectedProcedure}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
};
