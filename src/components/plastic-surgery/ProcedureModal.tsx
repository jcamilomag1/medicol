import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Procedure } from '@/data/plastic-surgery-procedures';
import { PricingComparison } from './PricingComparison';
import { Clock, Syringe, Calendar, Eye, CheckCircle2, MessageCircle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ProcedureModalProps {
  procedure: Procedure | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProcedureModal = ({ procedure, open, onOpenChange }: ProcedureModalProps) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  if (!procedure) return null;

  const handleWhatsAppClick = () => {
    const whatsappNumber = "573052276747";
    const message = encodeURIComponent(
      `${t('plastic_surgery.modal.cta_button')}: ${isEnglish ? procedure.name_en : procedure.name_es}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const infoItems = [
    {
      icon: Clock,
      label: t('plastic_surgery.modal.surgery_time'),
      value: isEnglish ? procedure.surgery_time_en : procedure.surgery_time_es,
    },
    {
      icon: Syringe,
      label: t('plastic_surgery.modal.anesthesia'),
      value: isEnglish ? procedure.anesthesia_en : procedure.anesthesia_es,
    },
    {
      icon: Calendar,
      label: t('plastic_surgery.modal.recovery'),
      value: isEnglish ? procedure.recovery_days_en : procedure.recovery_days_es,
    },
    {
      icon: Eye,
      label: t('plastic_surgery.modal.final_results'),
      value: isEnglish ? procedure.final_results_timeline_en : procedure.final_results_timeline_es,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-3xl font-bold text-foreground">
                {isEnglish ? procedure.name_en : procedure.name_es}
              </DialogTitle>
              <p className="text-muted-foreground mt-2">
                {isEnglish ? procedure.description_en : procedure.description_es}
              </p>
            </DialogHeader>

            {/* Image Gallery Placeholder */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={procedure.image}
                alt={isEnglish ? procedure.name_en : procedure.name_es}
                className="w-full aspect-video object-cover"
              />
            </div>

            {/* Key Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {infoItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <div className="p-2 rounded-full bg-accent/10">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                      <p className="text-base font-semibold text-foreground">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ideal Candidates */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('plastic_surgery.modal.ideal_for')}
              </h3>
              <div className="space-y-2">
                {(isEnglish ? procedure.ideal_candidates_en : procedure.ideal_candidates_es).map((candidate, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{candidate}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Package Includes */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('plastic_surgery.modal.package_includes')}
              </h3>
              <div className="space-y-2">
                {(isEnglish ? procedure.package_includes_en : procedure.package_includes_es).map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Comparison - Solo si hay precio */}
            {procedure.price_usd !== null && (
              <div className="mb-8">
                <PricingComparison
                  medicolPrice={procedure.price_usd}
                  usPrice={procedure.price_comparison_us}
                  savingsPercentage={procedure.savings_percentage}
                />
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('plastic_surgery.modal.cta_whatsapp')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppClick}
                className="flex-1"
              >
                {t('plastic_surgery.modal.cta_button')}
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};