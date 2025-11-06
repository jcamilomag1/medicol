import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
interface Review {
  id: string;
  nameKey: string;
  countryKey: string;
  countryFlag: string;
  rating: number;
  commentKey: string;
  procedureKey: string;
  date: string;
  verified: boolean;
}
const reviews: Review[] = [{
  id: '1',
  nameKey: 'reviews.review1.name',
  countryKey: 'countries.colombia',
  countryFlag: '🇨🇴',
  rating: 5,
  commentKey: 'reviews.review1.comment',
  procedureKey: 'reviews.review1.procedure',
  date: 'Marzo 2024',
  verified: true
}, {
  id: '2',
  nameKey: 'reviews.review2.name',
  countryKey: 'countries.usa',
  countryFlag: '🇺🇸',
  rating: 5,
  commentKey: 'reviews.review2.comment',
  procedureKey: 'reviews.review2.procedure',
  date: 'Febrero 2024',
  verified: true
}, {
  id: '3',
  nameKey: 'reviews.review3.name',
  countryKey: 'reviews.review3.country',
  countryFlag: '🇪🇸',
  rating: 5,
  commentKey: 'reviews.review3.comment',
  procedureKey: 'reviews.review3.procedure',
  date: 'Enero 2024',
  verified: true
}, {
  id: '4',
  nameKey: 'reviews.review4.name',
  countryKey: 'countries.usa',
  countryFlag: '🇺🇸',
  rating: 5,
  commentKey: 'reviews.review4.comment',
  procedureKey: 'reviews.review4.procedure',
  date: 'Abril 2024',
  verified: true
}];

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    className="w-4 h-4 text-yellow-400"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"
    />
  </svg>
);
export const ReviewSection = () => {
  const { t } = useTranslation();
  
  const autoplayPlugin = Autoplay({
    delay: 4000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });
  return <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="text-4xl font-bold tracking-tight text-primary mb-6">
            {t('reviews.section_title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('reviews.section_subtitle')}
          </p>
        </motion.div>

        {/* Review Cards Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: true,
          }}
          plugins={[autoplayPlugin]}
          className="w-full max-w-7xl mx-auto mb-16"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 h-[320px] flex flex-col"
                >
                  {/* Header with Avatar and Name */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg shrink-0">
                      {t(review.nameKey)[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-xl text-foreground">{t(review.nameKey)}</p>
                      <p className="text-sm text-muted-foreground">
                        {review.countryFlag} {t(review.countryKey)}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mt-4">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} filled={review.rating > i} />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-muted-foreground mt-4 leading-relaxed flex-grow line-clamp-4">
                    "{t(review.commentKey)}"
                  </p>
                </motion.div>
              </CarouselItem>
            ))}

            {/* Google Reviews CTA Card */}
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
              <motion.a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reviews.length * 0.15, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 h-[320px] flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                {/* Google Reviews Logo */}
                <div className="mb-4">
                  <img
                    src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                    alt="Google Reviews"
                    className="h-8 mb-2"
                  />
                  <p className="text-sm font-semibold text-foreground">Reviews</p>
                </div>
                
                {/* Decorative Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} filled={true} />
                  ))}
                </div>
                
                {/* Descriptive Text */}
                <p className="text-muted-foreground text-sm mb-6 px-2">
                  {t('reviews.cta_google_text', 'Ve lo que dicen nuestros pacientes')}
                </p>
                
                {/* CTA Button */}
                <Button 
                  variant="default" 
                  className="group-hover:scale-105 transition-transform"
                >
                  {t('common.learn_more')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.a>
            </CarouselItem>
          </CarouselContent>
          
          {/* Navigation Buttons */}
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        {/* Call to Action - Two Column Layout */}
        <motion.div className="mt-10" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.6
      }}>
          <div className="relative mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-6 sm:p-10 md:p-12 border border-primary/10 shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Columna izquierda - Texto */}
              <div>
                {/* Badge superior decorativo */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-6">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium text-accent">Tu transformación comienza aquí</span>
                </div>
                
                {/* Título principal */}
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                  {t('reviews.cta_title')}
                </h3>
              </div>

              {/* Columna derecha - Botón */}
              <div className="flex items-center justify-center md:justify-end">
                <motion.a 
                  href="/experiencia"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full text-base shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('reviews.cta_button')}
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};