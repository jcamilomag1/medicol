import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProcedureCard } from './ProcedureCard';
import { ProcedureModal } from './ProcedureModal';
import { procedures, Procedure } from '@/data/plastic-surgery-procedures';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';

export const ProceduresGrid = () => {
  const { t } = useTranslation();
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'all', label: t('plastic_surgery.categories.all') },
    { id: 'face', label: t('plastic_surgery.categories.face') },
    { id: 'body', label: t('plastic_surgery.categories.body') },
    { id: 'breast', label: t('plastic_surgery.categories.breast') },
    { id: 'buttocks', label: t('plastic_surgery.categories.buttocks') },
    { id: 'combined', label: t('plastic_surgery.categories.combined') },
    { id: 'specialized', label: t('plastic_surgery.categories.specialized') },
  ];

  const filteredProcedures = procedures.filter(procedure => {
    // Filter by category
    const matchesCategory = selectedCategory === 'all' || procedure.category === selectedCategory;
    
    // Filter by search (if there's a search term)
    if (!searchTerm.trim()) {
      return matchesCategory;
    }
    
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      procedure.name_es.toLowerCase().includes(searchLower) ||
      procedure.name_en.toLowerCase().includes(searchLower) ||
      procedure.description_es.toLowerCase().includes(searchLower) ||
      procedure.description_en.toLowerCase().includes(searchLower);
      
    return matchesCategory && matchesSearch;
  }).sort((a, b) => a.name_es.localeCompare(b.name_es, 'es'));

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

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder={t('plastic_surgery.procedures.search_placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 h-12 text-base"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

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
        {filteredProcedures.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {t('plastic_surgery.procedures.no_results')}
            </p>
          </div>
        ) : (
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
        )}

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