import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Procedure } from '@/data/plastic-surgery-procedures';

interface ProcedureListItemProps {
  procedure: Procedure;
  onClick: () => void;
}

export const ProcedureListItem = ({ procedure, onClick }: ProcedureListItemProps) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <div 
      className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {isEnglish ? procedure.name_en : procedure.name_es}
          </h4>
          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
            {t('plastic_surgery.procedures.save_badge')} {procedure.savings_percentage}%
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-1">
          {isEnglish ? procedure.description_en : procedure.description_es}
        </p>
      </div>
      
      <div className="flex items-center gap-4 ml-4">
        <div className="text-right">
          <p className="text-xs text-muted-foreground mb-1">
            {t('plastic_surgery.procedures.from_price')}
          </p>
          <p className="text-xl font-bold text-accent">
            ${procedure.price_usd.toLocaleString()}
          </p>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
