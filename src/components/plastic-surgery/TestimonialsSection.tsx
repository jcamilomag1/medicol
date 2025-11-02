import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import testimonialRhinoplasty from '@/assets/testimonial-woman-rhinoplasty.jpg';
import testimonialYoung from '@/assets/testimonial-woman-young.jpg';
import testimonialElderly from '@/assets/testimonial-woman-elderly.jpg';

const testimonials = [
  {
    name: 'María González',
    location: 'Miami, USA',
    procedure: 'Rinoplastia',
    image: testimonialRhinoplasty,
    rating: 5,
    text_es: 'La mejor decisión que pude haber tomado. El equipo de Medicol me acompañó en todo momento y los resultados superaron mis expectativas. Me sentí segura y bien cuidada durante todo el proceso.',
    text_en: 'The best decision I could have made. The Medicol team supported me every step of the way and the results exceeded my expectations. I felt safe and well cared for throughout the entire process.',
  },
  {
    name: 'John Smith',
    location: 'Toronto, Canada',
    procedure: 'Liposucción',
    image: testimonialYoung,
    rating: 5,
    text_es: 'Profesionalismo y calidez humana. Los cirujanos son de clase mundial y las instalaciones son de primer nivel. Definitivamente vale cada centavo.',
    text_en: 'Professionalism and human warmth. The surgeons are world-class and the facilities are top-notch. Definitely worth every penny.',
  },
  {
    name: 'Sophie Martin',
    location: 'Paris, France',
    procedure: 'Aumento de Senos',
    image: testimonialElderly,
    rating: 5,
    text_es: 'Increíble experiencia de principio a fin. Me sentí segura y bien cuidada. Los resultados son naturales y hermosos. ¡100% recomendado!',
    text_en: 'Incredible experience from start to finish. I felt safe and well cared for. The results are natural and beautiful. 100% recommended!',
  },
];

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

export const TestimonialsSection = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  
  const autoplayPlugin = Autoplay({
    delay: 4000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('plastic_surgery.testimonials.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('plastic_surgery.testimonials.subtitle')}
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: true,
          }}
          plugins={[autoplayPlugin]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 h-[320px] flex flex-col"
                >
                  <div className="flex items-center gap-3">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div>
                      <p className="font-semibold text-xl text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mt-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} filled={testimonial.rating > i} />
                      ))}
                  </div>
                  
                  <p className="text-muted-foreground mt-4 leading-relaxed flex-grow line-clamp-4">
                    "{isEnglish ? testimonial.text_en : testimonial.text_es}"
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: testimonials.length * 0.1, duration: 0.4 }}
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
                  {isEnglish 
                    ? "See what our patients say about their experience"
                    : "Ve lo que dicen nuestros pacientes sobre su experiencia"
                  }
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
      </div>
    </section>
  );
};