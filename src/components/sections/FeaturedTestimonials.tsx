import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PlayCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface FeaturedTestimonial {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  procedure: string;
  quote_es: string;
  quote_en: string;
  videoUrl: string;
  avatarUrl: string;
  rating: number;
}

const featuredTestimonials: FeaturedTestimonial[] = [
  {
    id: 'estefania',
    name: 'Estefanía',
    country: 'United States',
    countryFlag: '🇺🇸',
    procedure: 'Brazilian Butt Lift',
    quote_es: 'La mejor experiencia médica que he tenido. El equipo de Medicol superó todas mis expectativas.',
    quote_en: 'The best medical experience I\'ve ever had. The Medicol team exceeded all my expectations.',
    videoUrl: 'https://drive.google.com/file/d/1ptAJ-Ssy5ek7-oExyp_fINNbu_HD_yjq/preview',
    avatarUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=100&h=100&fit=crop',
    rating: 5
  },
  {
    id: 'janette',
    name: 'Janette',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    procedure: 'Breast Augmentation',
    quote_es: 'Desde el primer día me sentí segura y cuidada. Los resultados son increíbles y naturales.',
    quote_en: 'From day one I felt safe and cared for. The results are incredible and natural.',
    videoUrl: 'https://drive.google.com/file/d/16RIrS1-E6M7Av5Gs2D2RQBw0wsyU0RVc/preview',
    avatarUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=100&h=100&fit=crop',
    rating: 5
  },
  {
    id: 'evvete',
    name: 'Evvete',
    country: 'Canada',
    countryFlag: '🇨🇦',
    procedure: 'Mommy Makeover',
    quote_es: 'Una experiencia excepcional. Me sentí apoyada en cada paso y los resultados superaron mis expectativas.',
    quote_en: 'An exceptional experience. I felt supported every step of the way and the results exceeded my expectations.',
    videoUrl: 'https://drive.google.com/file/d/1QGbC7-SgrGPKgpfS8cBxKT9HBIWRa2Ed/preview',
    avatarUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=100&h=100&fit=crop',
    rating: 5
  }
];

export const FeaturedTestimonials = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlay = (id: string) => {
    setPlayingVideo(id);
  };

  return (
    <section className="py-8 lg:py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t('reviews_testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('reviews_testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Video Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  {/* Video */}
                  <div className="relative aspect-[9/16] bg-muted">
                    {playingVideo === testimonial.id ? (
                      <iframe
                        src={testimonial.videoUrl}
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay"
                        title={`${testimonial.name} testimonial video`}
                      />
                    ) : (
                      <div 
                        className="relative w-full h-full cursor-pointer group"
                        onClick={() => handlePlay(testimonial.id)}
                      >
                        {/* Degradado de azul a negro */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,100%,61%)] via-[hsl(200,80%,35%)] to-black" />
                        
                        {/* Overlay suave en hover */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xl">
                            <PlayCircle className="w-12 h-12 text-[hsl(200,100%,61%)]" />
                          </div>
                        </div>
                        
                        {/* Video Badge */}
                        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                          <div className="w-2 h-2 bg-[hsl(200,100%,61%)] rounded-full animate-pulse" />
                          VIDEO
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-sm text-muted-foreground mb-4 italic line-clamp-3">
                      "{isEnglish ? testimonial.quote_en : testimonial.quote_es}"
                    </p>

                    {/* User Info */}
                    <div className="flex items-center gap-3 border-t pt-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} loading="lazy" />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-sm truncate">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.countryFlag} {testimonial.country}
                        </p>
                        <p className="text-xs text-accent truncate">
                          {testimonial.procedure}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
