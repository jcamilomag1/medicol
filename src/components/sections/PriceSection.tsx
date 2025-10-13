import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Sparkles, X } from 'lucide-react';

interface PriceCardProps {
  country: 'spain' | 'usa' | 'colombia';
  featured?: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({ country, featured = false }) => {
  const { t } = useTranslation();
  
  const countryFlags = {
    spain: '🇪🇸',
    usa: '🇺🇸',
    colombia: '🇨🇴'
  };

  const includesBenefits = country === 'colombia';

  const benefits = [
    { key: 'insurance', icon: '🛡️' },
    { key: 'transport', icon: '✈️' },
    { key: 'medications', icon: '💊' },
    { key: 'massage', icon: '💆' },
    { key: 'garments', icon: '👔' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        relative rounded-2xl p-8 pb-6 transition-all duration-300 h-full flex flex-col
        ${featured 
          ? 'bg-background border-2 border-accent shadow-xl scale-105 ring-4 ring-accent/10' 
          : 'bg-background border border-border shadow-md hover:shadow-lg'
        }
      `}
    >
      {/* Badge "Mejor Valor" solo para Colombia */}
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {t('pricing.colombia.badge_best_value')}
          </span>
        </div>
      )}

      {/* Country Flag & Name */}
      <div className="text-center mb-6">
        <div className="text-5xl mb-3">{countryFlags[country]}</div>
        <h3 className="text-2xl font-bold text-foreground">
          {t(`pricing.${country}.country`)}
        </h3>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <p className="text-4xl font-extrabold text-primary mb-2">
          {t(`pricing.${country}.price_range`)}
        </p>
        <p className="text-sm text-muted-foreground">
          {t(`pricing.${country}.note`)}
        </p>
      </div>

      {/* Badge Ahorro para Colombia */}
      {featured && (
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 text-center mb-6">
          <p className="text-2xl font-bold text-accent mb-1">
            {t('pricing.colombia.badge_savings')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('pricing.colombia.vs_others')}
          </p>
        </div>
      )}

      {/* Separador */}
      <div className="border-t border-border/50 my-6" />

      {/* Benefits List - Flex grow para empujar el botón hacia abajo */}
      <div className="flex-grow space-y-3 mb-6">
        {benefits.map((benefit) => (
          <div key={benefit.key} className="flex items-start gap-3">
            {/* Checkmark o X */}
            {includesBenefits ? (
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
            )}
            
            {/* Texto del beneficio */}
            <p className={`text-sm ${
              includesBenefits 
                ? 'text-foreground font-medium' 
                : 'text-muted-foreground/60 line-through'
            }`}>
              {t(`pricing.benefits.${benefit.key}`)}
            </p>
          </div>
        ))}
      </div>

      {/* Separador */}
      <div className="border-t border-border/50 my-6" />

      {/* CTA Button */}
      <a
        href="/contacto"
        className={`
          w-full inline-flex items-center justify-center 
          px-6 py-3 rounded-lg font-semibold 
          transition-all duration-300 hover:scale-105
          ${featured
            ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg'
            : 'bg-background border border-border hover:bg-accent/5 text-foreground'
          }
        `}
      >
        {featured ? t('pricing.cta.button') : t('pricing.view_details')}
        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  );
};

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 text-center"
    >
      {/* CTA Button */}
      <a
        href="/contacto"
        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-accent-foreground bg-accent rounded-full shadow-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300"
      >
        {t('pricing.cta.button')}
        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>

      {/* Subtitle */}
      <p className="mt-4 text-base text-muted-foreground">
        {t('pricing.cta.subtitle')}
      </p>

      {/* Disclaimer */}
      <p className="mt-8 text-xs text-muted-foreground/60 max-w-2xl mx-auto">
        {t('pricing.disclaimer')}
      </p>
    </motion.div>
  );
};

export const PriceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {t('pricing.section_title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            {t('pricing.section_subtitle')}
          </p>
        </div>

        {/* Price Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PriceCard country="spain" />
          <PriceCard country="usa" />
          <PriceCard country="colombia" featured={true} />
        </div>

        {/* CTA */}
        <CTASection />
      </div>
    </section>
  );
};
