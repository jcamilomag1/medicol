import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface Testimonial {
  name: string;
  location: string;
  procedure: string;
  image: string;
  rating: number;
  text_es: string;
  text_en: string;
}

interface ServiceTestimonialsSectionProps {
  titleKey: string;
  subtitleKey: string;
  testimonials: Testimonial[];
  googleReviewsUrl?: string;
}

export const ServiceTestimonialsSection = ({
  titleKey,
  subtitleKey,
  testimonials,
  googleReviewsUrl = 'https://www.google.com/maps',
}: ServiceTestimonialsSectionProps) => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t(titleKey)}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(subtitleKey)}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {/* Testimonial Cards */}
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-primary/20 mb-4" />

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                      {isSpanish ? testimonial.text_es : testimonial.text_en}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        <p className="text-xs text-primary font-medium">{testimonial.procedure}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}

            {/* Google Reviews CTA Card */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Star className="w-8 h-8 text-primary fill-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {isSpanish ? '500+ Reseñas' : '500+ Reviews'}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {isSpanish 
                      ? 'Lee más historias de éxito en Google' 
                      : 'Read more success stories on Google'}
                  </p>
                  <a
                    href={googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    {isSpanish ? 'Ver Todas las Reseñas' : 'View All Reviews'}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};
