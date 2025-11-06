import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactInfoGrid = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.info.phone_title'),
      primary: t('contact.info.phone_number'),
      secondary: t('contact.info.phone_hours'),
      color: 'text-accent'
    },
    {
      icon: Mail,
      title: t('contact.info.email_title'),
      primary: t('contact.info.email_address'),
      secondary: t('contact.info.email_response'),
      color: 'text-accent'
    },
    {
      icon: MapPin,
      title: t('contact.info.location_title'),
      primary: t('contact.info.location_address'),
      secondary: t('contact.info.location_city'),
      color: 'text-accent'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 ${item.color}`}>
                <item.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3">
                {item.title}
              </h3>
              
              <p className="text-lg font-semibold text-foreground mb-2">
                {item.primary}
              </p>
              
              <p className="text-sm text-muted-foreground">
                {item.secondary}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
