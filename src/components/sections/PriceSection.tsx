import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Sparkles, X } from 'lucide-react';

interface PriceCardProps {
  country: 'spain' | 'usa' | 'colombia';
  featured?: boolean;
  index: number;
}

const PriceCard: React.FC<PriceCardProps> = ({ country, featured = false, index }) => {
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
    <div
      className={`
        relative rounded-3xl p-8 pb-6 h-full flex flex-col
        ${featured 
          ? 'bg-gradient-to-br from-accent/5 via-white/70 to-accent/10 backdrop-blur-2xl border-2 border-accent/30 shadow-2xl shadow-accent/20 hover:shadow-[0_20px_80px_-15px] hover:shadow-accent/40 ring-4 ring-accent/10 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] scale-105' 
          : 'bg-gradient-to-br from-gray-100/80 via-white/60 to-gray-50/80 backdrop-blur-xl border border-gray-200/50 shadow-xl shadow-gray-300/40 hover:shadow-2xl hover:shadow-gray-400/50 transition-all duration-500 hover:-translate-y-1'
        }
      `}
    >
      {/* Noise/Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none rounded-3xl mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Badge "Mejor Valor" solo para Colombia */}
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
            <div>
              <Sparkles className="w-4 h-4" />
            </div>
            {t('pricing.colombia.badge_best_value')}
          </span>
        </div>
      )}

      {/* Country Flag & Name */}
      <div className="text-center mb-6">
        <div className="text-5xl mb-3">
          {countryFlags[country]}
        </div>
        
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
          <div>
            <p className="text-2xl font-bold text-accent mb-1">
              {t('pricing.colombia.badge_savings')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('pricing.colombia.vs_others')}
            </p>
          </div>
        </div>
      )}

      {/* Separador */}
      <div className="border-t border-border/50 my-6" />

      {/* Benefits List - Flex grow para empujar el botón hacia abajo */}
      <div className="flex-grow space-y-3 mb-6">
        {benefits.map((benefit, idx) => (
          <div key={benefit.key} className="flex items-start gap-3">
            {/* Checkmark o X */}
            <div>
              {includesBenefits ? (
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              ) : (
                <X className="w-5 h-5 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
              )}
            </div>
            
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
          transition-all duration-300
          ${featured
            ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg'
            : 'bg-background border border-border hover:bg-accent/5 text-foreground'
          }
        `}
      >
        {featured ? t('pricing.cta.button') : t('pricing.view_details')}
        <svg 
          className="ml-2 w-4 h-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

export const PriceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      {/* Contenedor relativo para que el contenido esté encima */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PriceCard country="spain" index={0} />
          <PriceCard country="usa" index={1} />
          <PriceCard country="colombia" featured={true} index={2} />
        </div>
      </div>
    </section>
  );
};
