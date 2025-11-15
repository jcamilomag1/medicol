import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import contactHeroBg from '@/assets/contact-hero-bg.jpg';

export const ContactHeroSection = () => {
  const { t } = useTranslation();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('contact.methods.whatsapp_message'));
    window.open(`https://wa.me/573043218900?text=${message}`, '_blank');
  };

  const handlePhone = () => {
    window.location.href = 'tel:+573043218900';
  };

  const trustBadges = [
    { icon: Award, text: t('contact.hero.trust_badge_1') },
    { icon: TrendingUp, text: t('contact.hero.trust_badge_2') },
    { icon: Users, text: t('contact.hero.trust_badge_3') },
  ];

  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactHeroBg}
          alt="Medicol Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-accent/75" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-16 md:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight"
          >
            {t('contact.hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-white/95 max-w-2xl mx-auto mb-8 font-medium"
          >
            {t('contact.hero.subtitle')}
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {trustBadges.map((badge, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white px-4 py-2 text-sm"
              >
                <badge.icon className="w-4 h-4 mr-2" />
                {badge.text}
              </Badge>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 h-14 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('contact.hero.cta_whatsapp')}
            </Button>
            <Button
              onClick={handlePhone}
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 px-8 h-14 text-base font-semibold backdrop-blur-sm w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('contact.hero.cta_phone')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
