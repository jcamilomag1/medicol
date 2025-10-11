import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';

interface Testimonial {
  name: string;
  countryKey: string;
  thumbnailUrl: string;
  videoUrl: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Janette Snyder',
    countryKey: 'countries.usa',
    thumbnailUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    name: 'Estefania Snyder',
    countryKey: 'countries.usa',
    thumbnailUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
];

export const VideoTestimonials = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-primary">
          {t('trust.testimonials_title')}
        </h3>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.name}>
            <button
              className="relative block w-full rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => window.open(testimonial.videoUrl, '_blank')}
            >
              <img
                src={testimonial.thumbnailUrl}
                alt={testimonial.name}
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/30" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors">
                  <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                </div>
              </div>
            </button>
            <div className="mt-4 text-center">
              <p className="text-lg font-bold text-primary">{testimonial.name}</p>
              <p className="text-base text-gray-600">{t(testimonial.countryKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
