import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  email: z.string().email('Email inválido').max(255),
  phone: z.string().min(7, 'Teléfono inválido').max(20),
  service: z.string().min(1, 'Por favor selecciona un servicio'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(1000)
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const { t } = useTranslation();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    // Mockup: Log to console (will be replaced with real backend)
    console.log('Form submitted:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(t('contact.form.success_message'));
    reset();
  };

  const services = [
    'Cirugía Plástica',
    'Células Madre',
    'Procedimientos Dentales',
    'Diagnósticos',
    'Consulta General'
  ];

  const contactMethods = [
    {
      icon: Mail,
      contact: t('contact.info.email_address'),
    },
    {
      icon: Phone,
      contact: t('contact.info.phone_number'),
    },
    {
      icon: MapPin,
      contact: t('contact.info.location_address'),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          
          {/* COLUMNA IZQUIERDA - Información */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg space-y-3"
          >
            {/* Badge */}
            <span className="inline-block px-3 py-1.5 text-xs border border-primary/30 rounded-full text-primary font-medium bg-primary/5">
              {t('contact.form.badge', 'Contacto')}
            </span>
            
            {/* Título */}
            <h3 className="text-primary text-3xl font-semibold sm:text-4xl">
              {t('contact.form.title')}
            </h3>
            
            {/* Subtítulo */}
            <p className="text-muted-foreground">
              {t('contact.form.subtitle')}
            </p>
            
            {/* Lista de métodos de contacto */}
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <p className="text-foreground">{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA - Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 mt-12 sm:max-w-lg lg:max-w-md"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="font-medium">
                  {t('contact.form.name_label')}
                </Label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder={t('contact.form.name_placeholder')}
                  className="w-full mt-2 px-3 py-2 bg-background border border-input focus:border-primary shadow-sm rounded-lg"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="font-medium">
                  {t('contact.form.email_label')}
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder={t('contact.form.email_placeholder')}
                  className="w-full mt-2 px-3 py-2 bg-background border border-input focus:border-primary shadow-sm rounded-lg"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="font-medium">
                  {t('contact.form.phone_label')}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  placeholder={t('contact.form.phone_placeholder')}
                  className="w-full mt-2 px-3 py-2 bg-background border border-input focus:border-primary shadow-sm rounded-lg"
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <Label htmlFor="service" className="font-medium">
                  {t('contact.form.service_label')}
                </Label>
                <Select onValueChange={(value) => setValue('service', value)}>
                  <SelectTrigger className="w-full mt-2 px-3 py-2 bg-background border border-input focus:border-primary shadow-sm rounded-lg">
                    <SelectValue placeholder={t('contact.form.service_placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-destructive text-sm mt-1">{errors.service.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="font-medium">
                  {t('contact.form.message_label')}
                </Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder={t('contact.form.message_placeholder')}
                  className="w-full mt-2 h-36 px-3 py-2 resize-none bg-background border border-input focus:border-primary shadow-sm rounded-lg"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg"
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit_button')}
              </Button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
