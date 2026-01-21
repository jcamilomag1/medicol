import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingDown } from 'lucide-react';

interface PricingComparisonProps {
  medicolPrice: number | null;
  usPrice: number | null;
  savingsPercentage: number | null;
}

export const PricingComparison = ({ medicolPrice, usPrice, savingsPercentage }: PricingComparisonProps) => {
  const { t } = useTranslation();
  
  // Si no hay precio, no renderizar el componente
  if (medicolPrice === null || usPrice === null || savingsPercentage === null) {
    return null;
  }
  
  const savings = usPrice - medicolPrice;

  return (
    <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              {t('plastic_surgery.modal.price_in_medicol')}
            </span>
            <span className="text-2xl font-bold text-accent">
              ${medicolPrice.toLocaleString()} USD
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              {t('plastic_surgery.modal.price_in_us')}
            </span>
            <span className="text-lg text-muted-foreground line-through">
              ${usPrice.toLocaleString()} USD
            </span>
          </div>

          <div className="pt-4 border-t border-accent/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">
                  {t('plastic_surgery.modal.your_savings')}
                </span>
              </div>
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-1">
                ${savings.toLocaleString()} USD ({savingsPercentage}%)
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};