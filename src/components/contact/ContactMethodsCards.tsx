import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Bot, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const ContactMethodsCards = () => {
  const { t } = useTranslation();

  const handleWhatsApp = () => {
    const phone = '13054290812';
    const message = encodeURIComponent(t('contact.methods.whatsapp_message'));
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleSchedule = () => {
    // Mockup URL - will be replaced with real Calendly link
    window.open('https://calendly.com/medicol-ejemplo', '_blank');
  };

  const cards = [
    {
      icon: Bot,
      title: t('contact.methods.ai_title'),
      description: t('contact.methods.ai_description'),
      badge: t('contact.methods.ai_badge'),
      gradient: 'from-gray-400 to-gray-500',
      disabled: true,
      action: () => {},
      buttonText: t('contact.methods.ai_button'),
      iconColor: 'text-muted-foreground'
    },
    {
      icon: MessageCircle,
      title: t('contact.methods.whatsapp_title'),
      description: t('contact.methods.whatsapp_description'),
      gradient: 'from-[#25D366] to-[#22c55e]',
      disabled: false,
      action: handleWhatsApp,
      buttonText: t('contact.methods.whatsapp_button'),
      iconColor: 'text-[#25D366]'
    },
    {
      icon: Calendar,
      title: t('contact.methods.schedule_title'),
      description: t('contact.methods.schedule_description'),
      gradient: 'from-accent to-accent/80',
      disabled: false,
      action: handleSchedule,
      buttonText: t('contact.methods.schedule_button'),
      iconColor: 'text-blue-400'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('contact.methods.section_title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('contact.methods.section_subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: card.disabled ? 1 : 1.05 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg p-8 h-full flex flex-col border-2 border-foreground/20">
                {/* Badge for AI Agent */}
                {card.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {card.badge}
                    </Badge>
                  </div>
                )}

                {/* Content wrapper with flex-1 to push button down */}
                <div className="flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                      <card.icon className={`w-8 h-8 ${card.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {card.title}
                  </h3>
                  <p className="text-foreground/80 mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Button - stays at bottom */}
                <Button
                  onClick={card.action}
                  disabled={card.disabled}
                  size="lg"
                  className="w-full bg-muted hover:bg-muted/80 text-foreground font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {card.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
