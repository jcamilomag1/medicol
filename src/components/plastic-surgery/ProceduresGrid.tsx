import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProcedureCard } from './ProcedureCard';
import { ProcedureModal } from './ProcedureModal';
import { procedures, Procedure } from '@/data/plastic-surgery-procedures';
import { Button } from '@/components/ui/button';

export const ProceduresGrid = () => {
  const { t } = useTranslation();
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t('plastic_surgery.categories.all') },
    { id: 'face', label: t('plastic_surgery.categories.face') },
    { id: 'body', label: t('plastic_surgery.categories.body') },
    { id: 'breast', label: t('plastic_surgery.categories.breast') },
    { id: 'buttocks', label: t('plastic_surgery.categories.buttocks') },
    { id: 'combined', label: t('plastic_surgery.categories.combined') },
    { id: 'specialized', label: t('plastic_surgery.categories.specialized') },
  ];

  const filteredProcedures = selectedCategory === 'all' 
    ? procedures 
    : procedures.filter(p => p.category === selectedCategory);

  const handleProcedureClick = (procedure: Procedure) => {
    setSelectedProcedure(procedure);
    setModalOpen(true);
  };

  return (
    <section id="procedures" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
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

        {/* Category Filters */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-4 justify-center flex-wrap">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className="whitespace-nowrap"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Procedures Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProcedures.map((procedure, index) => (
            <motion.div
              key={procedure.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProcedureCard
                procedure={procedure}
                onClick={() => handleProcedureClick(procedure)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Procedure Modal */}
        <ProcedureModal
          procedure={selectedProcedure}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      </div>
    </section>
  );
};