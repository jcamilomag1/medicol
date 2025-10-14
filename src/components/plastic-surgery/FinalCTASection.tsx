import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { procedures } from '@/data/plastic-surgery-procedures';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  contact: z.string().min(5, 'Please provide a valid email or WhatsApp').max(255),
  procedure: z.string().min(1, 'Please select a procedure'),
  message: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

export const FinalCTASection = () => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEnglish = i18n.language === 'en';

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      contact: '',
      procedure: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual implementation
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Redirect to WhatsApp with pre-filled message
      const whatsappNumber = "573001234567"; // Replace with actual number
      const message = encodeURIComponent(
        `Hola! Me gustaría solicitar una consulta gratuita.\n\nNombre: ${data.name}\nContacto: ${data.contact}\nProcedimiento: ${data.procedure}\n${data.message ? `Mensaje: ${data.message}` : ''}`
      );
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

      toast({
        title: t('plastic_surgery.final_cta.form_success'),
        description: t('plastic_surgery.final_cta.form_success'),
      });

      form.reset();
    } catch (error) {
      toast({
        title: t('plastic_surgery.final_cta.form_error'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary via-primary-light to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-5" />
      
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t('plastic_surgery.final_cta.title')}
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            {t('plastic_surgery.final_cta.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('plastic_surgery.final_cta.form_name')}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t('plastic_surgery.final_cta.form_name_placeholder')}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('plastic_surgery.final_cta.form_email')}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t('plastic_surgery.final_cta.form_email_placeholder')}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="procedure"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('plastic_surgery.final_cta.form_procedure')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={t('plastic_surgery.final_cta.form_procedure_placeholder')}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-[300px] bg-popover">
                        {procedures.map((procedure) => (
                          <SelectItem key={procedure.id} value={procedure.id}>
                            {isEnglish ? procedure.name_en : procedure.name_es}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('plastic_surgery.final_cta.form_message')}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t('plastic_surgery.final_cta.form_message_placeholder')}
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? t('plastic_surgery.final_cta.form_submitting')
                  : t('plastic_surgery.final_cta.form_submit')}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};