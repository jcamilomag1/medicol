import { Shield, Award, Users, Clock } from 'lucide-react';

interface TrustBadge {
  icon: React.ElementType;
  text: string;
}

const badges: TrustBadge[] = [
  { icon: Shield, text: 'Acreditación JCI' },
  { icon: Award, text: 'Certificados SCCP' },
  { icon: Users, text: '+5,000 Pacientes' },
  { icon: Clock, text: '15+ Años Experiencia' },
];

export const TrustBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 py-4">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent"
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{badge.text}</span>
          </div>
        );
      })}
    </div>
  );
};