import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Star, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface FeaturedTestimonial {
  id: string;
  nameKey: string;
  countryKey: string;
  countryFlag: string;
  procedureKey: string;
  quoteKey: string;
  videoUrl: string;
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
    rating: 5
  }
];

export const FeaturedTestimonials = () => {
  const { t } = useTranslation();

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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 max-w-5xl mx-auto">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border/50"
            >
              {/* Video Container */}
              <div className="relative w-full aspect-[9/16] bg-muted">
                <iframe
                  src={testimonial.videoUrl}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  loading="lazy"
                  title={`${t(testimonial.nameKey)} testimonial video`}
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Verified Badge & Info */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {t(testimonial.nameKey)}
                      </h3>
                      <span className="text-xl">{testimonial.countryFlag}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t(testimonial.countryKey)}
                    </p>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800 flex items-center gap-1 shrink-0">
                    <CheckCircle className="w-3 h-3" />
                    <span className="text-xs whitespace-nowrap">{t('featured_testimonials.verified_badge')}</span>
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {testimonial.rating}.0
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-base lg:text-lg italic text-muted-foreground border-l-4 border-primary pl-4 py-2">
                  "{t(testimonial.quoteKey)}"
                </blockquote>

                {/* Procedure */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-1">
                    Procedimiento:
                  </p>
                  <p className="text-base font-semibold text-primary">
                    {t(testimonial.procedureKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
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
