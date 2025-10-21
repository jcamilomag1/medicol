import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Procedure } from '@/data/plastic-surgery-procedures';

interface ProcedureCardProps {
  procedure: Procedure;
  onClick: () => void;
}

export const ProcedureCard = ({ procedure, onClick }: ProcedureCardProps) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden cursor-pointer group shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col min-h-[480px]">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={procedure.image}
            alt={isEnglish ? procedure.name_en : procedure.name_es}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-bold shadow-lg">
            {t('plastic_surgery.procedures.save_up_to')} {procedure.savings_percentage}%
          </Badge>
        </div>
        
        <CardContent className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2 min-h-[56px]">
            {isEnglish ? procedure.name_en : procedure.name_es}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 min-h-[60px]">
            {isEnglish ? procedure.description_en : procedure.description_es}
          </p>
          <div className="flex items-baseline gap-2 mt-auto">
            <span className="text-sm text-muted-foreground">
              {t('plastic_surgery.procedures.from_price')}
            </span>
            <span className="text-2xl font-bold text-accent">
              ${procedure.price_usd.toLocaleString()} USD
            </span>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Button
            onClick={onClick}
            className="w-full bg-primary hover:bg-primary-light text-primary-foreground"
          >
            {t('plastic_surgery.procedures.view_details')}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};