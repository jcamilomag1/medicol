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
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 40,
        scale: 0.95,
        rotateX: 10
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateX: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
        delay: index * 0.15
      }}
      whileHover={{
        y: featured ? -8 : -4,
        scale: featured ? 1.03 : 1.01,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
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
        <motion.div 
          className="absolute -top-4 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3 + (index * 0.15),
            type: "spring",
            stiffness: 300,
            damping: 10
          }}
        >
          <span className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            {t('pricing.colombia.badge_best_value')}
          </span>
        </motion.div>
      )}

      {/* Country Flag & Name */}
      <div className="text-center mb-6">
        <motion.div 
          className="text-5xl mb-3"
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.15 + (index * 0.15),
            type: "spring",
            stiffness: 200,
            damping: 12
          }}
        >
          {countryFlags[country]}
        </motion.div>
        
        <motion.h3 
          className="text-2xl font-bold text-foreground"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            delay: 0.25 + (index * 0.15),
            duration: 0.4 
          }}
        >
          {t(`pricing.${country}.country`)}
        </motion.h3>
      </div>

      {/* Price */}
      <motion.div 
        className="text-center mb-6"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3 + (index * 0.15),
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        <p className="text-4xl font-extrabold text-primary mb-2">
          {t(`pricing.${country}.price_range`)}
        </p>
        <p className="text-sm text-muted-foreground">
          {t(`pricing.${country}.note`)}
        </p>
      </motion.div>

      {/* Badge Ahorro para Colombia */}
      {featured && (
        <motion.div 
          className="bg-accent/10 border border-accent/30 rounded-xl p-4 text-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4 + (index * 0.15),
            type: "spring",
            stiffness: 150,
            damping: 10
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <p className="text-2xl font-bold text-accent mb-1">
              {t('pricing.colombia.badge_savings')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('pricing.colombia.vs_others')}
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Separador */}
      <div className="border-t border-border/50 my-6" />

      {/* Benefits List - Flex grow para empujar el botón hacia abajo */}
      <motion.div 
        className="flex-grow space-y-3 mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.5 + (index * 0.15),
              staggerChildren: 0.08
            }
          }
        }}
      >
        {benefits.map((benefit, idx) => (
          <motion.div 
            key={benefit.key} 
            className="flex items-start gap-3"
            variants={{
              hidden: { 
                opacity: 0, 
                x: -20,
                scale: 0.9
              },
              visible: { 
                opacity: 1, 
                x: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }
              }
            }}
          >
            {/* Checkmark o X con animación */}
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5 + (index * 0.15) + (idx * 0.08),
                type: "spring",
                stiffness: 300,
                damping: 12
              }}
            >
              {includesBenefits ? (
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              ) : (
                <X className="w-5 h-5 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
              )}
            </motion.div>
            
            {/* Texto del beneficio */}
            <p className={`text-sm ${
              includesBenefits 
                ? 'text-foreground font-medium' 
                : 'text-muted-foreground/60 line-through'
            }`}>
              {t(`pricing.benefits.${benefit.key}`)}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Separador */}
      <div className="border-t border-border/50 my-6" />

      {/* CTA Button */}
      <motion.a
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
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.8 + (index * 0.15),
          type: "spring",
          stiffness: 150,
          damping: 12
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        {featured ? t('pricing.cta.button') : t('pricing.view_details')}
        <motion.svg 
          className="ml-2 w-4 h-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          animate={{ x: [0, 4, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </motion.svg>
      </motion.a>
    </motion.div>
  );
};

export const PriceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 -left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      {/* Contenedor relativo para que el contenido esté encima */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <motion.h2 
            className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {t('pricing.section_title')}
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {t('pricing.section_subtitle')}
          </motion.p>
        </motion.div>

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
