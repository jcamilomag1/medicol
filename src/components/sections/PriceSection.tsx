import { useTranslation } from 'react-i18next';
import { 
  Check, 
  Award,
  Globe,
  Flag,
  MapPin,
  Shield,
  Plane,
  Pill,
  Hand,
  Shirt,
  DollarSign
} from 'lucide-react';

interface PriceCardProps {
  country: 'spain' | 'usa' | 'colombia';
  featured?: boolean;
  variant?: 'hero' | 'standard';
}

const PriceCard: React.FC<PriceCardProps> = ({ country, featured = false, variant = 'standard' }) => {
  const { t } = useTranslation();
  
  const countryIcons = {
    spain: Globe,
    usa: Flag,
    colombia: MapPin
  };
  
  const CountryIcon = countryIcons[country];

  const includesBenefits = country === 'colombia';

  const benefits = [
    { key: 'insurance', Icon: Shield },
    { key: 'transport', Icon: Plane },
    { key: 'medications', Icon: Pill },
    { key: 'massage', Icon: Hand },
    { key: 'garments', Icon: Shirt }
  ];

  // Hero variant para móvil - Colombia destacado
  if (variant === 'hero') {
    return (
      <div className="relative rounded-3xl p-8 bg-gradient-to-br from-accent/10 via-white to-accent/15 backdrop-blur-xl border-2 border-accent/40 shadow-2xl shadow-accent/30 overflow-hidden">
        {/* Glow effect decorativo */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
        
        {/* Badge Mejor Valor */}
        <div className="relative flex justify-center mb-4">
          <span className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
            <Award className="w-4 h-4" />
            {t('pricing.colombia.badge_best_value')}
          </span>
        </div>

        {/* Flag y Título */}
        <div className="text-center mb-6 relative">
          <div className="flex justify-center mb-3">
            <div className="bg-accent/10 p-6 rounded-full">
              <CountryIcon className="w-16 h-16 text-accent" strokeWidth={1.5} />
            </div>
          </div>
          <h3 className="text-3xl font-black text-foreground mb-2">
            {t(`pricing.${country}.country`)}
          </h3>
          <p className="text-lg font-semibold text-accent">
            {t('pricing.colombia.hero_title')}
          </p>
        </div>

        {/* Precio más grande */}
        <div className="text-center mb-6 relative">
          <p className="text-5xl font-black text-accent mb-2">
            {t(`pricing.${country}.price_range`)}
          </p>
          <p className="text-sm text-muted-foreground">
            {t(`pricing.${country}.note`)}
          </p>
        </div>

        {/* Badge Ahorro prominente */}
        <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-6 text-center mb-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative">
            <p className="text-3xl font-black text-accent-foreground mb-1">
              {t('pricing.colombia.badge_savings')}
            </p>
            <p className="text-sm font-semibold text-accent-foreground/90">
              {t('pricing.colombia.vs_others')}
            </p>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-accent/20 my-6" />

        {/* Benefits visibles completos */}
        <div className="space-y-4 mb-6">
          <h4 className="font-bold text-lg text-center text-accent mb-4 flex items-center justify-center gap-2">
            <Award className="w-5 h-5" />
            {t('pricing.colombia.all_inclusive')}
          </h4>
          {benefits.map((benefit) => {
            const BenefitIcon = benefit.Icon;
            return (
              <div key={benefit.key} className="flex items-start gap-3 bg-white/50 rounded-xl p-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <BenefitIcon className="w-5 h-5 text-accent flex-shrink-0" />
                </div>
                <p className="text-sm font-medium text-foreground">
                  {t(`pricing.benefits.${benefit.key}`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Separador */}
        <div className="border-t border-accent/20 my-6" />

        {/* CTA prominente */}
        <a
          href="/contacto"
          className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl transition-all duration-300 hover:scale-105"
        >
          {t('pricing.cta.button')}
          <svg 
            className="ml-2 w-5 h-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    );
  }

  // Standard variant para desktop
  return (
    <div
      className={`
        relative rounded-3xl p-8 h-full flex flex-col
        ${featured 
          ? 'bg-gradient-to-br from-accent/10 via-white to-accent/15 backdrop-blur-xl border-2 border-accent/40 shadow-2xl shadow-accent/30 ring-4 ring-accent/10' 
          : 'bg-gradient-to-br from-gray-100/80 via-white/60 to-gray-50/80 backdrop-blur-xl border border-gray-200/50 shadow-lg'
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
          <Award className="w-4 h-4" />
          {t('pricing.colombia.badge_best_value')}
        </span>
        </div>
      )}

      {/* Country Flag & Name */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-3">
          <div className={`p-5 rounded-full ${featured ? 'bg-accent/10' : 'bg-gray-100'}`}>
            <CountryIcon 
              className={`w-12 h-12 ${featured ? 'text-accent' : 'text-gray-600'}`} 
              strokeWidth={1.5} 
            />
          </div>
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

      {/* Benefits List */}
      <div className="flex-grow mb-6">
        {includesBenefits ? (
        <div className="space-y-3">
          {benefits.map((benefit) => {
            const BenefitIcon = benefit.Icon;
            return (
              <div key={benefit.key} className="flex items-start gap-3">
                <div className="bg-accent/10 p-1.5 rounded-lg">
                  <BenefitIcon className="w-4 h-4 text-accent flex-shrink-0" />
                </div>
                <p className="text-sm font-medium text-foreground">
                  {t(`pricing.benefits.${benefit.key}`)}
                </p>
              </div>
            );
          })}
        </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-sm text-muted-foreground/60 italic">
              {t('pricing.comparison.no_extras')}
            </p>
          </div>
        )}
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
            ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:scale-105'
            : 'bg-background border border-border hover:bg-accent/5 text-foreground hover:scale-105'
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

// Tabla de comparación compacta para móvil
const PriceComparisonTable: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="md:hidden bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
      <h3 className="text-xl font-bold text-center mb-5 text-foreground flex items-center justify-center gap-2">
        <DollarSign className="w-5 h-5 text-accent" />
        {t('pricing.comparison.title')}
      </h3>
      
      <div className="space-y-4">
        {/* España */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-3 rounded-full">
              <Globe className="w-7 h-7 text-gray-600" strokeWidth={1.5} />
            </div>
            <span className="font-semibold text-lg">{t('pricing.spain.country')}</span>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg text-primary">{t('pricing.spain.price_range')}</p>
            <p className="text-xs text-red-600 font-medium mt-1">{t('pricing.comparison.no_extras')}</p>
          </div>
        </div>
        
        {/* USA */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-3 rounded-full">
              <Flag className="w-7 h-7 text-gray-600" strokeWidth={1.5} />
            </div>
            <span className="font-semibold text-lg">{t('pricing.usa.country')}</span>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg text-primary">{t('pricing.usa.price_range')}</p>
            <p className="text-xs text-red-600 font-medium mt-1">{t('pricing.comparison.no_extras')}</p>
          </div>
        </div>
      </div>
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
      
      {/* Contenedor relativo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {t('pricing.section_title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            {t('pricing.section_subtitle')}
          </p>
        </div>

        {/* MÓVIL: Hero Card Colombia + Tabla Comparación */}
      <div className="md:hidden space-y-6 mt-16">
        <PriceCard country="colombia" featured={true} variant="hero" />
        <PriceComparisonTable />
      </div>

        {/* DESKTOP: 3 Cards con Colombia destacado */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 items-center mt-12">
          {/* España - Opaco y escala normal */}
          <div className="opacity-75 hover:opacity-100 transition-opacity duration-300">
            <PriceCard country="spain" variant="standard" />
          </div>
          
          {/* Colombia - Destacado con scale y z-index */}
          <div className="scale-105 z-10">
            <PriceCard country="colombia" featured={true} variant="standard" />
          </div>
          
          {/* USA - Opaco y escala normal */}
          <div className="opacity-75 hover:opacity-100 transition-opacity duration-300">
            <PriceCard country="usa" variant="standard" />
          </div>
        </div>
      </div>
    </section>
  );
};
