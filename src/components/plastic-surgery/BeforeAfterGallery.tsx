import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BeforeAfterImage {
  id: string;
  procedure: string;
  procedureKey: string;
  beforeImage: string;
  afterImage: string;
  timeframe: string;
}

const galleryData: BeforeAfterImage[] = [
  {
    id: '1',
    procedure: 'Breast Augmentation',
    procedureKey: 'breast_augmentation',
    beforeImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop',
    timeframe: '6 months'
  },
  {
    id: '2',
    procedure: 'Rhinoplasty',
    procedureKey: 'rhinoplasty',
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop',
    timeframe: '3 months'
  },
  {
    id: '3',
    procedure: 'Liposuction',
    procedureKey: 'liposuction',
    beforeImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=600&fit=crop',
    timeframe: '4 months'
  },
  {
    id: '4',
    procedure: 'BBL',
    procedureKey: 'bbl',
    beforeImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop',
    timeframe: '5 months'
  },
  {
    id: '5',
    procedure: 'Tummy Tuck',
    procedureKey: 'tummy_tuck',
    beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop',
    timeframe: '6 months'
  },
  {
    id: '6',
    procedure: 'Facelift',
    procedureKey: 'facelift',
    beforeImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop',
    timeframe: '4 months'
  }
];

export const BeforeAfterGallery = () => {
  const { t, i18n } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<BeforeAfterImage | null>(null);
  const [showBefore, setShowBefore] = useState(true);

  const filters = ['all', ...Array.from(new Set(galleryData.map(item => item.procedureKey)))];

  const filteredGallery = selectedFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.procedureKey === selectedFilter);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            {t('gallery.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter)}
              className="capitalize"
            >
              {filter === 'all' ? t('gallery.filter_all') : t(`plastic_surgery.procedures.${filter}.name`)}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setLightboxImage(item)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.beforeImage}
                    alt={`Before ${item.procedure}`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                    style={{ opacity: showBefore ? 1 : 0 }}
                  />
                  <img
                    src={item.afterImage}
                    alt={`After ${item.procedure}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Before/After Labels */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between pointer-events-none">
                    <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                      {t('gallery.before')}
                    </Badge>
                    <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                      {t('gallery.after')}
                    </Badge>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2 items-center text-foreground">
                      <ZoomIn className="w-6 h-6" />
                      <span className="font-semibold">{t('gallery.view_details')}</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-1">{item.procedure}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('gallery.timeframe')}: {item.timeframe}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-5xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={() => setLightboxImage(null)}
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* Image Comparison */}
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] bg-muted">
                    <img
                      src={lightboxImage.beforeImage}
                      alt={`Before ${lightboxImage.procedure}`}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm">
                      {t('gallery.before')}
                    </Badge>
                  </div>
                  <div className="relative aspect-[4/3] bg-muted">
                    <img
                      src={lightboxImage.afterImage}
                      alt={`After ${lightboxImage.procedure}`}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground backdrop-blur-sm">
                      {t('gallery.after')}
                    </Badge>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 border-t border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {lightboxImage.procedure}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('gallery.timeframe')}: {lightboxImage.timeframe}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
