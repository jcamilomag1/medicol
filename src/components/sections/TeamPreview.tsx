import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

interface Doctor {
  name: string;
  specialtyKey: string;
  imageUrl: string;
  profileUrl: string;
}

const teamData: Doctor[] = [
  {
    name: 'Dr. Alejandro Guerra',
    specialtyKey: 'team.specialty.plastic_surgeon',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-33352da55e0d?q=80&w=200&auto=format&fit=crop',
    profileUrl: '/nuestro-equipo/alejandro-guerra'
  },
  {
    name: 'Dra. Carolina Botero',
    specialtyKey: 'team.specialty.regenerative_medicine',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop',
    profileUrl: '/nuestro-equipo/carolina-botero'
  },
  {
    name: 'Dr. Juan Vélez',
    specialtyKey: 'team.specialty.dental_design',
    imageUrl: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=200&auto=format&fit=crop',
    profileUrl: '/nuestro-equipo/juan-velez'
  }
];

export const TeamPreview = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold text-primary text-center mb-6">
        {t('team.preview_title')}
      </h3>
      <p className="text-gray-600 text-center mb-12">
        {t('team.preview_description')}
      </p>

      <div className="grid grid-cols-1 gap-y-16 text-center sm:grid-cols-2 md:grid-cols-3">
        {teamData.map((doctor) => (
          <div key={doctor.name}>
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="h-48 w-48 rounded-full object-cover mx-auto"
            />
            <h3 className="mt-6 text-xl font-bold tracking-tight text-primary">
              {doctor.name}
            </h3>
            <p className="text-accent font-semibold">
              {t(doctor.specialtyKey)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Button variant="outline">
          {t('trust.view_full_team')}
        </Button>
      </div>
    </div>
  );
};
