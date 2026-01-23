import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Syringe, Calendar, Target, Package, X } from 'lucide-react';
import { PricingComparison } from '@/components/plastic-surgery/PricingComparison';

interface ServiceItem {
  id: string;
  category: string;
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  price_usd: number;
  price_comparison_us: number;
  savings_percentage: number;
  image: string;
  treatment_time_es: string;
  treatment_time_en: string;
  anesthesia_es: string;
  anesthesia_en: string;
  recovery_days_es: string;
  recovery_days_en: string;
  final_results_timeline_es: string;
  final_results_timeline_en: string;
  ideal_candidates_es: string[];
  ideal_candidates_en: string[];
  package_includes_es: string[];
  package_includes_en: string[];
}

interface ServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  if (!service) return null;

  const name = isSpanish ? service.name_es : service.name_en;
  const description = isSpanish ? service.description_es : service.description_en;
  const anesthesia = isSpanish ? service.anesthesia_es : service.anesthesia_en;
  const finalResults = isSpanish ? service.final_results_timeline_es : service.final_results_timeline_en;
  const idealCandidates = isSpanish ? service.ideal_candidates_es : service.ideal_candidates_en;
  const packageIncludes = isSpanish ? service.package_includes_es : service.package_includes_en;

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hola, me interesa el tratamiento: ${name}`
    );
    window.open(`https://wa.me/573052276747?text=${message}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold pr-8">{name}</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        {/* Image */}
        <div className="relative h-64 rounded-lg overflow-hidden">
          <img
            src={service.image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-4 right-4 bg-primary">
            {isSpanish ? `Ahorra ${service.savings_percentage}%` : `Save ${service.savings_percentage}%`}
          </Badge>
        </div>

        {/* Overview */}
        <div className="space-y-4">
          <p className="text-muted-foreground text-lg">{description}</p>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-center">{isSpanish ? service.treatment_time_es : service.treatment_time_en}</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
              <Syringe className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-center">{anesthesia}</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
              <Calendar className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-center">{isSpanish ? service.recovery_days_es : service.recovery_days_en}</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
              <Target className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-center">{finalResults}</span>
            </div>
          </div>

          {/* Pricing Comparison */}
          <PricingComparison
            medicolPrice={service.price_usd}
            usPrice={service.price_comparison_us}
            savingsPercentage={service.savings_percentage}
          />

          {/* Ideal Candidates */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              {isSpanish ? 'Candidatos Ideales' : 'Ideal Candidates'}
            </h3>
            <ul className="space-y-2">
              {idealCandidates.map((candidate, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{candidate}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Package Includes */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              {isSpanish ? 'El Paquete Incluye' : 'Package Includes'}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {packageIncludes.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleWhatsAppContact}
            size="lg"
            className="w-full"
          >
            {isSpanish ? 'Consulta Gratuita por WhatsApp' : 'Free WhatsApp Consultation'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
