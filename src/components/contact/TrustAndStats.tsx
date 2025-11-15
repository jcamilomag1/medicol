import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Star, Clock, Award } from 'lucide-react';
import { StatCounter } from '@/components/ui/stat-counter';
import accreditationsImage from '@/assets/accreditations.png';

export const TrustAndStats = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Users,
      value: 200,
      suffix: '+',
      label: t('contact.stats.patients_year'),
      color: 'text-accent',
    },
    {
      icon: Star,
      value: 98,
      suffix: '%',
      label: t('contact.stats.satisfaction'),
      color: 'text-accent',
    },
    {
      icon: Clock,
      value: 4,
      label: t('contact.stats.response_time'),
      color: 'text-accent',
      customValue: t('contact.stats.response_time_value'),
    },
  ];

  const testimonials = [
    {
      quote: t('contact.stats.testimonial_1'),
      author: t('contact.stats.testimonial_1_author'),
    },
    {
      quote: t('contact.stats.testimonial_2'),
      author: t('contact.stats.testimonial_2_author'),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('contact.stats.title')}
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.customValue ? (
                  stat.customValue
                ) : (
                  <>
                    <StatCounter value={stat.value} suffix={stat.suffix || ''} />
                  </>
                )}
              </div>
              <p className="text-muted-foreground text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Award className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold text-primary">
                {t('contact.stats.certifications_title')}
              </h3>
            </div>
            <div className="flex justify-center">
              <img
                src={accreditationsImage}
                alt="Accreditations"
                className="max-w-full h-auto max-h-24 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground italic mb-4 leading-relaxed">
                {testimonial.quote}
              </p>
              <p className="text-sm font-semibold text-primary">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
