import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Doctor {
  name: string;
  specialtyKey: string;
  experienceKey: string;
  imageUrl: string;
  profileUrl: string;
}

const teamData: Doctor[] = [
  {
    name: 'Dr. Alejandro Guerra',
    specialtyKey: 'team.specialty.plastic_surgeon',
    experienceKey: 'team.experience.15_years',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-33352da55e0d?q=80&w=300&auto=format&fit=crop',
    profileUrl: '/nuestro-equipo/alejandro-guerra'
  },
  {
    name: 'Dra. Carolina Botero',
    specialtyKey: 'team.specialty.regenerative_medicine',
    experienceKey: 'team.experience.12_years',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop',
    profileUrl: '/nuestro-equipo/carolina-botero'
  },
  {
    name: 'Dr. Juan Vélez',
    specialtyKey: 'team.specialty.dental_design',
    experienceKey: 'team.experience.18_years',
    imageUrl: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=300&auto=format&fit=crop',
    profileUrl: '/nuestro-equipo/juan-velez'
  },
  {
    name: 'Dra. María Fernández',
    specialtyKey: 'team.specialty.dermatology',
    experienceKey: 'team.experience.20_years',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=300&auto=format&fit=crop',
    profileUrl: '/nuestro-equipo/maria-fernandez'
  }
];

export const TeamPreview = () => {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', updateButtons);
    emblaApi.on('reInit', updateButtons);
    updateButtons();

    return () => {
      emblaApi.off('select', updateButtons);
      emblaApi.off('reInit', updateButtons);
    };
  }, [emblaApi]);

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold text-primary">
          {t('trust.our_team')}
        </h3>
        <div className="flex gap-x-4">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {teamData.map((doctor) => (
            <div
              key={doctor.name}
              className="flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 md:basis-1/3 p-4"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-xl transition-shadow">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-primary">
                    {doctor.name}
                  </h4>
                  <p className="text-accent font-semibold mt-1">
                    {t(doctor.specialtyKey)}
                  </p>
                  <p className="text-gray-600 mt-2">
                    {t(doctor.experienceKey)}
                  </p>
                  <a
                    href={doctor.profileUrl}
                    className="mt-4 inline-block font-semibold text-primary hover:text-accent transition-colors"
                  >
                    {t('common.view_profile')} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline">
          {t('trust.view_full_team')}
        </Button>
      </div>
    </div>
  );
};
