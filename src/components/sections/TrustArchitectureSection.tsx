import { Shield, Award, Users, CheckCircle } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Your data is protected with enterprise-grade security"
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in patient care"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Board-certified physicians and specialists"
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "Over 50,000 patients treated successfully"
  }
];

export const TrustArchitectureSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-muted/30 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Medicol
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on a foundation of trust, excellence, and patient-centered care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-muted-foreground">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
