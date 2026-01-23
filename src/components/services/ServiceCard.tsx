import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  image: string;
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  price_usd: number | null;
  onViewDetails: () => void;
  index: number;
}

export const ServiceCard = ({
  image,
  name_es,
  name_en,
  description_es,
  description_en,
  price_usd,
  onViewDetails,
  index,
}: ServiceCardProps) => {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  const name = isSpanish ? name_es : name_en;
  const description = isSpanish ? description_es : description_en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
            {description}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t">
            <div className="flex items-center gap-2">
              {price_usd !== null ? (
                <>
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">
                    {price_usd.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">USD</span>
                </>
              ) : (
                <span className="text-2xl font-bold text-primary">
                  {isSpanish ? 'Cotizar' : 'Quote'}
                </span>
              )}
            </div>

            <Button
              onClick={onViewDetails}
              variant="outline"
              className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              {isSpanish ? 'Ver Detalles' : 'View Details'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
