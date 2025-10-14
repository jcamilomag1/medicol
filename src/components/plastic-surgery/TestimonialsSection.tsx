import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    location: 'Miami, USA',
    procedure: 'Rinoplastia',
    image: '/placeholder.svg',
    rating: 5,
    text_es: 'La mejor decisión que pude haber tomado. El equipo de Medicol me acompañó en todo momento y los resultados superaron mis expectativas. Me sentí segura y bien cuidada durante todo el proceso.',
    text_en: 'The best decision I could have made. The Medicol team supported me every step of the way and the results exceeded my expectations. I felt safe and well cared for throughout the entire process.',
  },
  {
    name: 'John Smith',
    location: 'Toronto, Canada',
    procedure: 'Liposucción',
    image: '/placeholder.svg',
    rating: 5,
    text_es: 'Profesionalismo y calidez humana. Los cirujanos son de clase mundial y las instalaciones son de primer nivel. Definitivamente vale cada centavo.',
    text_en: 'Professionalism and human warmth. The surgeons are world-class and the facilities are top-notch. Definitely worth every penny.',
  },
  {
    name: 'Sophie Martin',
    location: 'Paris, France',
    procedure: 'Aumento de Senos',
    image: '/placeholder.svg',
    rating: 5,
    text_es: 'Increíble experiencia de principio a fin. Me sentí segura y bien cuidada. Los resultados son naturales y hermosos. ¡100% recomendado!',
    text_en: 'Incredible experience from start to finish. I felt safe and well cared for. The results are natural and beautiful. 100% recommended!',
  },
];

export const TestimonialsSection = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="py-20 px-6 bg-background">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="h-full shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-accent/30 mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 italic">
                    "{isEnglish ? testimonial.text_en : testimonial.text_es}"
                  </p>

                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <p className="text-sm text-accent">{testimonial.procedure}</p>
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