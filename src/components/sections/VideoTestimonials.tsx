import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Testimonial {
  name: string;
  procedure: string;
  countryKey: string;
  thumbnailUrl: string;
  videoUrl: string;
  youtubeId: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Jennifer Martinez',
    procedure: 'Breast Augmentation',
    countryKey: 'countries.usa',
    thumbnailUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    name: 'Sarah Williams',
    procedure: 'Rhinoplasty',
    countryKey: 'countries.canada',
    thumbnailUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    name: 'Maria Rodriguez',
    procedure: 'BBL',
    countryKey: 'countries.spain',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    name: 'Emma Thompson',
    procedure: 'Tummy Tuck',
    countryKey: 'countries.uk',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ'
  }
];

export const VideoTestimonials = () => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);

  return (
    <section className="py-20 px-6 bg-muted/30">
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
            {t('video_testimonials.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('video_testimonials.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('video_testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedVideo(testimonial)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  src={testimonial.thumbnailUrl}
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-accent transition-all duration-300 shadow-xl">
                    <Play className="w-7 h-7 text-accent-foreground ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-white/80">{testimonial.procedure}</p>
                  <p className="text-xs text-white/60 mt-1">{t(testimonial.countryKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-4xl bg-card rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background flex items-center justify-center transition-colors"
                  onClick={() => setSelectedVideo(null)}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Video Embed */}
                <div className="relative aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                    title={selectedVideo.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Video Info */}
                <div className="p-6 border-t border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {selectedVideo.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedVideo.procedure} • {t(selectedVideo.countryKey)}
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