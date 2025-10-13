import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        relative rounded-2xl p-8 transition-all duration-300
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
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-accent mb-1">
            {t('pricing.colombia.badge_savings')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('pricing.colombia.vs_others')}
          </p>
        </div>
      )}
    </motion.div>
  );
};

const BenefitsGrid = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      key: 'insurance',
      icon: '🛡️'
    },
    {
      key: 'transport',
      icon: '✈️'
    },
    {
      key: 'medications',
      icon: '💊'
    },
    {
      key: 'massage',
      icon: '💆'
    },
    {
      key: 'garments',
      icon: '👔'
    }
  ];

  return (
    <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border border-border">
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-primary mb-3">
          {t('pricing.benefits.title')}
        </h3>
        <p className="text-lg text-muted-foreground">
          {t('pricing.benefits.subtitle')}
        </p>
      </div>

      {/* Grid de beneficios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.key}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-2xl">
              {benefit.icon}
            </div>

            {/* Text */}
            <div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="font-semibold text-foreground">
                  {t(`pricing.benefits.${benefit.key}`)}
                </p>
              </div>
              {benefit.key === 'garments' && (
                <p className="text-sm text-muted-foreground mt-1 ml-7">
                  {t('pricing.benefits.garments_details')}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
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

        {/* Benefits Section */}
        <BenefitsGrid />

        {/* CTA */}
        <CTASection />
      </div>
    </section>
  );
};
