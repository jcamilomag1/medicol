import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { procedures, Procedure } from '@/data/plastic-surgery-procedures';
import { ProcedureCard } from './ProcedureCard';
import { ProcedureModal } from './ProcedureModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type CategoryFilter = 'all' | Procedure['category'];

export const ProceduresGrid = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProcedures = selectedCategory === 'all'
    ? procedures
    : procedures.filter(p => p.category === selectedCategory);

  const handleProcedureClick = (procedure: Procedure) => {
    setSelectedProcedure(procedure);
    setModalOpen(true);
  };

  return (
    <section id="procedures" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('plastic_surgery.procedures.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('plastic_surgery.procedures.subtitle')}
          </p>
        </motion.div>

        <Tabs
          defaultValue="all"
          onValueChange={(value) => setSelectedCategory(value as CategoryFilter)}
          className="mb-12"
        >
          <TabsList className="grid w-full max-w-5xl mx-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto gap-2">
            <TabsTrigger value="all" className="text-xs md:text-sm py-2 md:py-3">
              {t('plastic_surgery.procedures.filter_all')}
            </TabsTrigger>
            <TabsTrigger value="face" className="text-xs md:text-sm py-2 md:py-3">
              {t('plastic_surgery.procedures.filter_face')}
            </TabsTrigger>
            <TabsTrigger value="body" className="text-xs md:text-sm py-2 md:py-3">
              {t('plastic_surgery.procedures.filter_body')}
            </TabsTrigger>
            <TabsTrigger value="breast" className="text-xs md:text-sm py-2 md:py-3">
              {t('plastic_surgery.procedures.filter_breast')}
            </TabsTrigger>
            <TabsTrigger value="buttocks" className="text-xs md:text-sm py-2 md:py-3">
              {t('plastic_surgery.procedures.filter_buttocks')}
            </TabsTrigger>
            <TabsTrigger value="combined" className="text-xs md:text-sm py-2 md:py-3">
              {t('plastic_surgery.procedures.filter_combined')}
            </TabsTrigger>
            <TabsTrigger value="specialized" className="text-xs md:text-sm py-2 md:py-3">
              {t('plastic_surgery.procedures.filter_specialized')}
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProcedures.map((procedure, index) => (
            <motion.div
              key={procedure.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              layout
            >
              <ProcedureCard
                procedure={procedure}
                onClick={() => handleProcedureClick(procedure)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProcedureModal
        procedure={selectedProcedure}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
};