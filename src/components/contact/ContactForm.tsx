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

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('contact.form.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('contact.form.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl border border-border">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-foreground">
                  {t('contact.form.name_label')}
                </Label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder={t('contact.form.name_placeholder')}
                  className="mt-2"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-foreground">
                  {t('contact.form.email_label')}
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder={t('contact.form.email_placeholder')}
                  className="mt-2"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-foreground">
                  {t('contact.form.phone_label')}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  placeholder={t('contact.form.phone_placeholder')}
                  className="mt-2"
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <Label htmlFor="service" className="text-foreground">
                  {t('contact.form.service_label')}
                </Label>
                <Select onValueChange={(value) => setValue('service', value)}>
                  <SelectTrigger className="mt-2">
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
                <Label htmlFor="message" className="text-foreground">
                  {t('contact.form.message_label')}
                </Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder={t('contact.form.message_placeholder')}
                  className="mt-2 min-h-[120px]"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit_button')}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
