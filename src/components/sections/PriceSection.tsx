import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface PriceCardProps {
  country: 'spain' | 'usa' | 'colombia';
  featured?: boolean;
  index: number;
  variant?: 'hero' | 'standard' | 'compact';
}

const PriceCard: React.FC<PriceCardProps> = ({ country, featured = false, index, variant = 'standard' }) => {
  const { t } = useTranslation();
  
  const countryFlags = {
    spain: '🇪🇸',
    usa: '🇺🇸',
    colombia: '🇨🇴'
  };

  const includesBenefits = country === 'colombia';
  const isHero = variant === 'hero';
  const isCompact = variant === 'compact';

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
        relative rounded-3xl ${isHero ? 'p-6' : 'p-8'} pb-6 h-full flex flex-col
        ${featured 
          ? `
            bg-gradient-to-br from-accent/10 via-background/80 to-accent/5
            backdrop-blur-3xl 
            border-2 border-accent/40 
            shadow-2xl shadow-accent/30
            hover:shadow-[0_20px_80px_-15px] hover:shadow-accent/50
            ring-4 ring-accent/15
            transition-all duration-500
            before:absolute before:inset-0 before:rounded-3xl 
            before:bg-gradient-to-r before:from-transparent before:via-accent/10 before:to-transparent
            before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
          ` 
          : 'bg-gradient-to-br from-muted/50 via-background/60 to-muted/30 backdrop-blur-xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500'
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

      {/* Efecto Glow Animado para Colombia */}
      {featured && (
        <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3), transparent 70%)',
              filter: 'blur(30px)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}

      {/* Badge "Mejor Valor" solo para Colombia */}
      {featured && (
        <motion.div 
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3 + (index * 0.15),
            type: "spring" as const,
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
        className="text-center mb-6 relative z-10"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3 + (index * 0.15),
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        <p className={`font-extrabold text-primary mb-2 ${isHero ? 'text-5xl' : 'text-4xl'}`}>
          {t(`pricing.${country}.price_range`)}
        </p>
        <p className="text-sm text-muted-foreground">
          {t(`pricing.${country}.note`)}
        </p>
      </motion.div>

      {/* Badge Ahorro para Colombia */}
      {featured && (
        <motion.div 
          className={`
            bg-gradient-to-r from-accent to-accent/80 
            border-2 border-background/50
            rounded-xl text-center mb-6 relative z-10
            ${isHero ? 'p-5' : 'p-4'}
          `}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4 + (index * 0.15),
            type: "spring" as const,
            stiffness: 150,
            damping: 10
          }}
          animate={isHero ? {
            scale: [1, 1.03, 1],
            boxShadow: [
              '0 10px 30px -10px rgba(59, 130, 246, 0.3)',
              '0 15px 50px -10px rgba(59, 130, 246, 0.5)',
              '0 10px 30px -10px rgba(59, 130, 246, 0.3)'
            ],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          } : undefined}
        >
          <p className={`font-black text-accent-foreground ${isHero ? 'text-3xl' : 'text-2xl'} mb-1`}>
            🎉 {t('pricing.colombia.badge_savings')}
          </p>
          <p className="text-accent-foreground/90 text-sm font-semibold">
            {t('pricing.colombia.vs_others')}
          </p>
        </motion.div>
      )}

      {/* Separador */}
      <div className="border-t border-border/50 my-6" />

      {/* Benefits List - Flex grow para empujar el botón hacia abajo */}
      <motion.div 
        className="flex-grow space-y-3 mb-6 relative z-10"
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
        {includesBenefits ? (
          // Colombia: Mostrar todos los beneficios
          benefits.map((benefit, idx) => (
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
                    type: "spring" as const,
                    stiffness: 200,
                    damping: 15
                  }
                }
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5 + (index * 0.15) + (idx * 0.08),
                  type: "spring" as const,
                  stiffness: 300,
                  damping: 12
                }}
              >
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              </motion.div>
              
              <p className="text-sm text-foreground font-medium">
                {benefit.icon} {t(`pricing.benefits.${benefit.key}`)}
              </p>
            </motion.div>
          ))
        ) : (
          // España/USA: Versión simplificada
          <div className="bg-muted/50 rounded-lg p-4 text-center border border-border/50">
            <p className="text-sm text-muted-foreground font-medium mb-2">
              {t('pricing.benefits.not_included')}
            </p>
            <p className="text-xs text-muted-foreground/70">
              {t('pricing.comparison.extras_note')}
            </p>
          </div>
        )}
      </motion.div>

      {/* Separador */}
      <div className="border-t border-border/50 my-6" />

      {/* CTA Button */}
      <motion.a
        href="/contacto"
        className={`
          w-full inline-flex items-center justify-center relative z-10
          px-6 py-3 rounded-lg font-semibold 
          transition-all duration-300
          ${featured
            ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl'
            : 'bg-card border border-border hover:bg-muted text-foreground'
          }
        `}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.8 + (index * 0.15),
          type: "spring" as const,
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
        <ArrowRight className="ml-2 w-4 h-4" />
      </motion.a>
    </motion.div>
  );
};

// Tabla comparativa compacta para móvil
const PriceComparisonTable = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      className="md:hidden bg-card/60 backdrop-blur-lg rounded-2xl p-6 border border-border/50 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="text-xl font-bold text-primary mb-4 text-center">
        💰 {t('pricing.comparison.title')}
      </h3>
      
      <div className="space-y-3">
        {/* España - Compacto */}
        <div className="flex justify-between items-center py-3 border-b border-border/50">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🇪🇸</span>
            <span className="font-medium text-foreground">España</span>
          </div>
          <div className="text-right">
            <p className="font-semibold text-muted-foreground">€8k-€12k</p>
            <p className="text-xs text-destructive">{t('pricing.comparison.no_extras')}</p>
          </div>
        </div>
        
        {/* USA - Compacto */}
        <div className="flex justify-between items-center py-3 border-b border-border/50">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🇺🇸</span>
            <span className="font-medium text-foreground">USA</span>
          </div>
          <div className="text-right">
            <p className="font-semibold text-muted-foreground">$10k-$15k</p>
            <p className="text-xs text-destructive">{t('pricing.comparison.no_extras')}</p>
          </div>
        </div>
        
        {/* Colombia - Destacado */}
        <div className="bg-accent/10 rounded-xl p-4 border-2 border-accent/50">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🇨🇴</span>
              <span className="font-bold text-accent">Colombia</span>
            </div>
            <div className="text-right">
              <p className="font-bold text-accent text-xl">$4k-$6k</p>
              <p className="text-sm text-accent font-semibold">
                ✓ {t('pricing.comparison.with_extras')}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-xs text-center text-muted-foreground mt-4">
        {t('pricing.disclaimer')}
      </p>
    </motion.div>
  );
};

export const PriceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
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

        {/* MÓVIL: Colombia Hero primero, luego tabla comparativa */}
        <div className="md:hidden space-y-8">
          <PriceCard 
            country="colombia" 
            featured={true} 
            index={0} 
            variant="hero"
          />
          <PriceComparisonTable />
        </div>

        {/* DESKTOP: Grid con Colombia destacado en el centro */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 items-center">
          {/* España - Más pequeña */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 0.9 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="transform origin-top"
          >
            <PriceCard country="spain" index={0} variant="standard" />
          </motion.div>
          
          {/* Colombia - Más grande y elevada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1.15, y: -10 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" as const, stiffness: 100 }}
            className="transform origin-center relative z-20"
          >
            <PriceCard 
              country="colombia" 
              featured={true} 
              index={1} 
              variant="hero"
            />
          </motion.div>
          
          {/* USA - Más pequeña */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 0.9 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="transform origin-top"
          >
            <PriceCard country="usa" index={2} variant="standard" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
