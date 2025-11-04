import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TeamTestimonialBanner = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-gradient-to-r from-primary to-accent overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
              <Quote className="w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>

          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-300 text-yellow-300" />
            ))}
          </div>

          <blockquote className="text-base md:text-2xl font-medium leading-relaxed mb-6">
            "{t('team.testimonial.text')}"
          </blockquote>

          <p className="text-white/90 font-semibold text-lg">
            {t('team.testimonial.author')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamTestimonialBanner;
