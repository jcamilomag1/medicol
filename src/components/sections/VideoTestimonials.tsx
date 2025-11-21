import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Testimonial {
  name: string;
  quoteKey: string;
  driveId: string;
  thumbnailUrl?: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Estefania Snyder',
    quoteKey: 'video_testimonials.testimonials.estefania.quote',
    driveId: '1ptAJ-Ssy5ek7-oExyp_fINNbu_HD_yjq',
    thumbnailUrl: '/testimonials/estefania.jpg'
  },
  {
    name: 'Evvete',
    quoteKey: 'video_testimonials.testimonials.evvete.quote',
    driveId: '1SMzUAliaarWoHuTvUBNc0i8F_SKHEwNN',
    thumbnailUrl: '/testimonials/evvete.jpg'
  },
  {
    name: 'Janeth',
    quoteKey: 'video_testimonials.testimonials.janeth.quote',
    driveId: '10PEt3O_m8_vBTVNQR9TiY-b5sKFQj6_Q',
    thumbnailUrl: '/testimonials/janeth.jpg'
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
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t('video_testimonials.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('video_testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedVideo(testimonial)}
            >
              {testimonial.thumbnailUrl ? (
                <div className="relative aspect-[3/4]">
                  {/* Image */}
                  <img 
                    src={testimonial.thumbnailUrl} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Play Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 text-accent-foreground ml-1" fill="currentColor" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-xl mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm italic opacity-90">
                      "{t(testimonial.quoteKey)}"
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center gap-6 aspect-square">
                  {/* Play Icon */}
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 text-accent-foreground ml-1" fill="currentColor" />
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-bold text-xl text-foreground">
                    {testimonial.name}
                  </h3>
                  
                  {/* Quote */}
                  <p className="text-muted-foreground italic">
                    "{t(testimonial.quoteKey)}"
                  </p>
                </div>
              )}
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
                    src={`https://drive.google.com/file/d/${selectedVideo.driveId}/preview`}
                    title={selectedVideo.name}
                    allow="autoplay"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Video Info */}
                <div className="p-6 border-t border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {selectedVideo.name}
                  </h3>
                  <p className="text-muted-foreground italic">
                    "{t(selectedVideo.quoteKey)}"
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