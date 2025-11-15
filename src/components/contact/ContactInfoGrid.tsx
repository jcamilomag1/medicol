import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactInfoGrid = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.info.phone_title'),
      description: t('contact.info.phone_hours'),
      contactData: t('contact.info.phone_number'),
    },
    {
      icon: Mail,
      title: t('contact.info.email_title'),
      description: t('contact.info.email_response'),
      contactData: t('contact.info.email_address'),
    },
    {
      icon: MapPin,
      title: t('contact.info.location_title'),
      description: t('contact.info.location_city'),
      contactData: t('contact.info.location_address'),
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-4">
          <span className="px-3 py-1.5 text-xs border border-primary/30 rounded-full text-primary font-medium bg-primary/5">
            {t('contact.info.badge', 'Contáctanos')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 text-primary">
            {t('contact.info.header_title', 'Nos Encantaría Escucharte')}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t('contact.info.header_subtitle', 'O contáctanos directamente a')}{' '}
            <span className="text-primary font-medium">{t('contact.info.email_address')}</span>
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-12 mt-16 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold mt-4 text-primary">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground mt-2 mb-4">
                {item.description}
              </p>
              
              {/* Contact Data - Plain Text */}
              <span className="text-primary font-semibold">
                {item.contactData}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
