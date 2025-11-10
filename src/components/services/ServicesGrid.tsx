import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { ServiceModal } from './ServiceModal';

interface Category {
  id: string;
  labelKey: string;
}

interface ServiceItem {
  id: string;
  category: string;
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  price_usd: number;
  price_comparison_us: number;
  savings_percentage: number;
  image: string;
  treatment_time_es: string;
  treatment_time_en: string;
  anesthesia_es: string;
  anesthesia_en: string;
  recovery_days_es: string;
  recovery_days_en: string;
  final_results_timeline_es: string;
  final_results_timeline_en: string;
  ideal_candidates_es: string[];
  ideal_candidates_en: string[];
  package_includes_es: string[];
  package_includes_en: string[];
}

interface ServicesGridProps {
  titleKey: string;
  subtitleKey: string;
  services: ServiceItem[];
  categories: Category[];
  searchPlaceholderKey: string;
  noResultsKey: string;
}

export const ServicesGrid = ({
  titleKey,
  subtitleKey,
  services,
  categories,
  searchPlaceholderKey,
  noResultsKey,
}: ServicesGridProps) => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredServices = services.filter((service) => {
    const matchesSearch = isSpanish
      ? service.name_es.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description_es.toLowerCase().includes(searchTerm.toLowerCase())
      : service.name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description_en.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleViewDetails = (service: ServiceItem) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t(titleKey)}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t(subtitleKey)}
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t(searchPlaceholderKey)}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-6 text-lg"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {isSpanish ? 'Todos' : 'All'}
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {t(category.labelKey)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                {...service}
                onViewDetails={() => handleViewDetails(service)}
                index={index}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-xl">{t(noResultsKey)}</p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
