import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { VideoTestimonialCard } from '@/components/ui/video-testimonial-card';

interface FeaturedTestimonial {
  id: string;
  nameKey: string;
  countryKey: string;
  countryFlag: string;
  procedureKey: string;
  quoteKey: string;
  videoUrl: string;
  thumbnailUrl: string;
  rating: number;
}

const featuredTestimonials: FeaturedTestimonial[] = [
  {
    id: 'estefania',
    nameKey: 'featured_testimonials.estefania.name',
    countryKey: 'featured_testimonials.estefania.country',
    countryFlag: '🇺🇸',
    procedureKey: 'featured_testimonials.estefania.procedure',
    quoteKey: 'featured_testimonials.estefania.quote',
    videoUrl: 'https://drive.google.com/file/d/1ptAJ-Ssy5ek7-oExyp_fINNbu_HD_yjq/preview',
    thumbnailUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=800&fit=crop',
    rating: 5
  },
  {
    id: 'janette',
    nameKey: 'featured_testimonials.janette.name',
    countryKey: 'featured_testimonials.janette.country',
    countryFlag: '🇬🇧',
    procedureKey: 'featured_testimonials.janette.procedure',
    quoteKey: 'featured_testimonials.janette.quote',
    videoUrl: 'https://drive.google.com/file/d/16RIrS1-E6M7Av5Gs2D2RQBw0wsyU0RVc/preview',
    thumbnailUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=800&fit=crop',
    rating: 5
  },
  {
    id: 'maria',
    nameKey: 'featured_testimonials.maria.name',
    countryKey: 'featured_testimonials.maria.country',
    countryFlag: '🇨🇦',
    procedureKey: 'featured_testimonials.maria.procedure',
    quoteKey: 'featured_testimonials.maria.quote',
    videoUrl: 'https://drive.google.com/file/d/1ptAJ-Ssy5ek7-oExyp_fINNbu_HD_yjq/preview',
    thumbnailUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=800&fit=crop',
    rating: 5
  },
  {
    id: 'carlos',
    nameKey: 'featured_testimonials.carlos.name',
    countryKey: 'featured_testimonials.carlos.country',
    countryFlag: '🇲🇽',
    procedureKey: 'featured_testimonials.carlos.procedure',
    quoteKey: 'featured_testimonials.carlos.quote',
    videoUrl: 'https://drive.google.com/file/d/16RIrS1-E6M7Av5Gs2D2RQBw0wsyU0RVc/preview',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581595220975-119360b2c23f?w=600&h=800&fit=crop',
    rating: 5
  }
];

export const FeaturedTestimonials = () => {
  const { t } = useTranslation();
  
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1.5">
            {t('featured_testimonials.badge')}
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            {t('featured_testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('featured_testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredTestimonials.map((testimonial) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <VideoTestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation buttons - only desktop */}
            <CarouselPrevious className="hidden lg:flex -left-12" />
            <CarouselNext className="hidden lg:flex -right-12" />
          </Carousel>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <Link to="/experiencia">
              <PlayCircle className="w-5 h-5" />
              {t('featured_testimonials.view_all_cta')}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
