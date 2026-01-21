import { useTranslation } from 'react-i18next';
import { ChevronRight, Sparkles } from 'lucide-react';
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
      className="group relative flex items-center gap-4 p-4 bg-card border-2 border-border rounded-xl hover:border-primary/60 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Image Thumbnail */}
      <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border border-border/50 shadow-sm group-hover:shadow-md transition-shadow duration-300">
        <img 
          src={procedure.image} 
          alt={isEnglish ? procedure.name_en : procedure.name_es}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Image overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0 relative z-10">
        <div className="flex items-start gap-2 mb-1.5">
          <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex-1">
            {isEnglish ? procedure.name_en : procedure.name_es}
          </h4>
          {procedure.savings_percentage !== null && (
            <Badge 
              variant="secondary" 
              className="flex-shrink-0 bg-accent/15 text-accent border-accent/30 font-bold group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-105 transition-all duration-300 animate-pulse group-hover:animate-none"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              {procedure.savings_percentage}%
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2 pr-2">
          {isEnglish ? procedure.description_en : procedure.description_es}
        </p>
        {procedure.price_usd !== null ? (
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {t('plastic_surgery.procedures.from_price')}
            </span>
            <span className="text-lg font-bold text-accent group-hover:text-primary transition-colors duration-300">
              ${procedure.price_usd.toLocaleString()}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-accent group-hover:text-primary transition-colors duration-300">
              {t('plastic_surgery.procedures.price_quote')}
            </span>
          </div>
        )}
      </div>
      
      {/* Action Button */}
      <Button 
        variant="ghost" 
        size="sm"
        className="flex-shrink-0 relative z-10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
      >
        <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
    </div>
  );
};
