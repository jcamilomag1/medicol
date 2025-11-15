import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const ContactMethodsSection = () => {
  const { t } = useTranslation();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('contact.methods.whatsapp_message'));
    window.open(`https://wa.me/573043218900?text=${message}`, '_blank');
  };

  const handlePhone = () => {
    window.location.href = 'tel:+573043218900';
  };

  const handleEmail = () => {
    window.location.href = `mailto:${t('contact.methods.email_address')}`;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
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

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* WhatsApp - Featured (larger) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 bg-gradient-to-br from-[#25D366] to-[#20BA5A] rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30">
                  {t('contact.quick_bar.available_now')}
                </Badge>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {t('contact.methods.whatsapp_title')}
              </h3>
              <p className="text-white/90 mb-2 text-lg">
                {t('contact.methods.whatsapp_description')}
              </p>
              <p className="text-white/80 text-sm mb-6">
                {t('contact.methods.whatsapp_status')}
              </p>
              
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="w-full bg-white text-[#25D366] hover:bg-white/90 font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('contact.methods.whatsapp_button')}
              </Button>
            </div>
          </motion.div>

          {/* Phone & Email Stack */}
          <div className="flex flex-col gap-6">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {t('contact.methods.phone_title')}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {t('contact.methods.phone_description')}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {t('contact.methods.phone_status')}
                  </p>
                  <p className="text-lg font-semibold text-foreground mb-3">
                    {t('contact.methods.phone_number')}
                  </p>
                  <Button
                    onClick={handlePhone}
                    className="w-full"
                    variant="outline"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {t('contact.methods.phone_button')}
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {t('contact.methods.email_title')}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {t('contact.methods.email_description')}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {t('contact.methods.email_status')}
                  </p>
                  <p className="text-lg font-semibold text-foreground mb-3">
                    {t('contact.methods.email_address')}
                  </p>
                  <Button
                    onClick={handleEmail}
                    className="w-full"
                    variant="outline"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {t('contact.methods.email_button')}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
