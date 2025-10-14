import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, Check, Play, ArrowRight } from 'lucide-react';
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
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};
export const ReviewSection = () => {
  const {
    t
  } = useTranslation();
  return <section className="py-20 sm:py-24 bg-gradient-to-b from-background to-secondary/20">
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
          <h2 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl mb-6">
            {t('reviews.section_title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('reviews.section_subtitle')}
          </p>
        </motion.div>

        {/* Review Cards Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={containerVariants}>
          {reviews.map(review => <motion.div key={review.id} className="relative p-6 rounded-2xl bg-gradient-to-br from-card/80 via-card/60 to-background/80 backdrop-blur-xl border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300" variants={cardVariants} whileHover={{
          y: -8,
          scale: 1.02
        }}>
              {/* Header with Avatar and Name */}
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg shrink-0">
                  {t(review.nameKey)[0]}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-foreground text-base truncate">
                    {t(review.nameKey)}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {review.countryFlag} {t(review.countryKey)}
                  </p>
                </div>

                {/* Verified Badge */}
                {review.verified && <div className="flex items-center gap-1 text-xs bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full shrink-0">
                    <Check className="w-3 h-3" />
                  </div>}
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => <motion.div key={i} initial={{
              opacity: 0,
              scale: 0
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5 + i * 0.05
            }}>
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>)}
              </div>

              {/* Comment */}
              <p className="text-foreground/90 leading-relaxed mb-4 text-sm">
                "{t(review.commentKey)}"
              </p>

              {/* Footer with Procedure and Date */}
              <div className="pt-4 border-t border-border/50 space-y-1 text-xs text-muted-foreground">
                <p>
                  <span className="font-semibold">{t('reviews.procedure_label')}:</span> {t(review.procedureKey)}
                </p>
                <p>
                  <span className="font-semibold">{t('reviews.date_label')}:</span> {review.date}
                </p>
              </div>
            </motion.div>)}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-16 text-center" initial={{
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
          {/* Badge superior */}
          <motion.div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-accent/10 border border-accent/30 rounded-full" animate={{
          scale: [1, 1.05, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
            <Play className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold text-sm">
              {t('reviews.cta_badge')}
            </span>
          </motion.div>

          {/* Título CTA */}
          <h3 className="text-3xl font-bold text-primary mb-4">
            {t('reviews.cta_title')}
          </h3>

          {/* Descripción */}
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {t('reviews.cta_description')}
          </p>

          {/* Botón Principal */}
          <motion.a href="/experiencia" className="inline-flex items-center gap-3 px-10 py-5 bg-accent hover:bg-accent/90 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }}>
            <Play className="w-6 h-6" />
            {t('reviews.cta_button')}
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          {/* Trust badge */}
          
        </motion.div>
      </div>
    </section>;
};