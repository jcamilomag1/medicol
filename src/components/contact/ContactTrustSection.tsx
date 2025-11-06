import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Star, MapPin, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const ContactTrustSection = () => {
  const { t } = useTranslation();

  const trustBadges = [
    {
      icon: Shield,
      text: t('contact.trust.badge_1'),
      color: 'text-accent'
    },
    {
      icon: Star,
      text: t('contact.trust.badge_2'),
      color: 'text-accent'
    },
    {
      icon: MapPin,
      text: t('contact.trust.badge_3'),
      color: 'text-accent'
    },
    {
      icon: Award,
      text: t('contact.trust.badge_4'),
      color: 'text-accent'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Badge
                variant="outline"
                className="px-6 py-3 text-base font-semibold border-primary/20 bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all"
              >
                <badge.icon className={`w-5 h-5 mr-2 ${badge.color}`} />
                {badge.text}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
