import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoTestimonialCardProps {
  videoUrl: string;
  thumbnailUrl: string;
  nameKey: string;
  countryKey: string;
  countryFlag: string;
  quoteKey: string;
  procedureKey: string;
}

export const VideoTestimonialCard: React.FC<VideoTestimonialCardProps> = ({
  videoUrl,
  thumbnailUrl,
  nameKey,
  countryKey,
  countryFlag,
  quoteKey,
  procedureKey,
}) => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
  };

  return (
    <div 
      className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group"
      onClick={!isPlaying ? handleClick : undefined}
    >
      {/* Video Iframe - siempre presente */}
      <iframe
        src={videoUrl}
        className={cn(
          "absolute inset-0 w-full h-full z-10",
          !isPlaying && "pointer-events-none opacity-0"
        )}
        allow="autoplay"
        allowFullScreen
        title={`${t(nameKey)} testimonial video`}
      />

      {/* Thumbnail + Overlay - solo visible cuando NO está reproduciendo */}
      {!isPlaying && (
        <>
          {/* Background Thumbnail */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-30">
            <Quote className="mb-4 h-8 w-8 text-white/40" aria-hidden="true" />
            
            <blockquote className="text-base font-medium leading-relaxed mb-4 line-clamp-3">
              "{t(quoteKey)}"
            </blockquote>
            
            <div className="space-y-1">
              <p className="font-bold text-lg flex items-center gap-2">
                {t(nameKey)}
                <span className="text-xl">{countryFlag}</span>
              </p>
              <p className="text-sm text-white/70">
                {t(countryKey)}
              </p>
              <p className="text-sm text-white/90 font-medium">
                {t(procedureKey)}
              </p>
            </div>
          </div>
          
          {/* Play indicator on hover */}
          <div className="absolute inset-0 flex items-center justify-center z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
