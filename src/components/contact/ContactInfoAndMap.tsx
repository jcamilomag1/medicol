import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Clock, Globe, Train, Car, Plane, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactInfoAndMap = () => {
  const { t } = useTranslation();

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Calle+10+43B-30+El+Poblado+Medellin', '_blank');
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('contact.info.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('contact.info.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Contact Information Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Location */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {t('contact.info.location_title')}
                  </h3>
                  <p className="text-foreground font-medium">
                    {t('contact.info.location_address')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('contact.info.location_city')}
                  </p>
                </div>
              </div>
              <Button
                onClick={openGoogleMaps}
                variant="outline"
                className="w-full"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t('contact.map.view_google_maps')}
              </Button>
            </div>

            {/* Business Hours */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {t('contact.info.hours_title')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="font-medium text-foreground">
                        {t('contact.info.hours_weekdays')}
                      </span>
                      <span className="text-muted-foreground">
                        {t('contact.info.hours_weekdays_time')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="font-medium text-foreground">
                        {t('contact.info.hours_saturday')}
                      </span>
                      <span className="text-muted-foreground">
                        {t('contact.info.hours_saturday_time')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-foreground">
                        {t('contact.info.hours_sunday')}
                      </span>
                      <span className="text-muted-foreground">
                        {t('contact.info.hours_sunday_time')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages & Transport */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <Globe className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">
                      {t('contact.info.languages_title')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t('contact.info.languages_list')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <Car className="w-5 h-5 text-accent" />
                  {t('contact.info.transport_title')}
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Train className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{t('contact.info.transport_metro')}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Car className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{t('contact.info.transport_parking')}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Plane className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{t('contact.info.transport_airport')}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-card rounded-2xl p-4 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-4 px-2">
                {t('contact.map.title')}
              </h3>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0987654321!2d-75.5636!3d6.2077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc079e6a6!2sEl%20Poblado%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890"
                  className="w-full h-[500px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('contact.map.title')}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4 px-2">
                {t('contact.map.subtitle')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
