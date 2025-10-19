import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MedicalServiceCardProps {
  imageUrl: string;
  titleKey: string;
  descriptionKey: string;
  ctaKey: string;
  icon: LucideIcon;
  href: string;
  themeColor: string;
  index: number;
  className?: string;
}

export const MedicalServiceCard: React.FC<MedicalServiceCardProps> = ({
  className,
  imageUrl,
  titleKey,
  descriptionKey,
  ctaKey,
  icon: Icon,
  href,
  themeColor,
  index,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        // @ts-ignore - CSS custom properties are valid
        '--theme-color': themeColor,
      } as React.CSSProperties}
      className={cn('group h-[380px] sm:h-[400px] lg:h-[420px] w-full', className)}
    >
        <Link
          to={href}
          className="relative block w-full h-full rounded-2xl overflow-hidden shadow-lg 
                     transition-all duration-500 ease-in-out 
                     group-hover:scale-105 group-hover:shadow-[0_0_60px_-15px_hsl(var(--theme-color)/0.6)]"
          aria-label={`${t(titleKey)} - ${t(descriptionKey)}`}
          style={{
            boxShadow: '0 0 40px -15px hsl(var(--theme-color) / 0.5)',
          }}
        >
          {/* Background Image with Parallax Zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center 
                       transition-transform duration-500 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          {/* Themed Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.95), hsl(var(--theme-color) / 0.7) 30%, transparent 70%)`,
            }}
          />

          {/* Floating Icon (top right corner) */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full 
                       bg-white/20 backdrop-blur-md border border-white/30
                       flex items-center justify-center
                       transition-all duration-300
                       group-hover:scale-110 group-hover:bg-white/30
                       shadow-lg shadow-black/10"
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
          </motion.div>

          {/* Content */}
          <div className="relative flex flex-col justify-end h-full p-5 sm:p-6 text-white">
            <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-2">
              {t(titleKey)}
            </h3>
            <p className="text-sm text-white/90 mb-4 sm:mb-6 line-clamp-2 leading-relaxed">
              {t(descriptionKey)}
            </p>

            {/* CTA Button */}
            <div
              className="flex items-center justify-between 
                         bg-[hsl(var(--theme-color)/0.25)] backdrop-blur-md 
                         border border-[hsl(var(--theme-color)/0.4)] 
                         rounded-xl px-4 py-3 
                         transition-all duration-300 
                         group-hover:bg-[hsl(var(--theme-color)/0.4)] 
                         group-hover:border-white/50"
            >
              <span className="text-sm font-semibold tracking-wide">{t(ctaKey)}</span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </motion.div>
  );
};
