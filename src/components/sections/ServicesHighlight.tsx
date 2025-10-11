import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Activity, Pill, Users } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Primary Care",
    description: "Comprehensive health assessments and preventive care for all ages."
  },
  {
    icon: Activity,
    title: "Specialist Care",
    description: "Expert treatment from board-certified specialists across all medical fields."
  },
  {
    icon: Pill,
    title: "Pharmacy Services",
    description: "Convenient prescription management and medication counseling."
  },
  {
    icon: Users,
    title: "Family Medicine",
    description: "Holistic care for your entire family under one trusted roof."
  }
];

export const ServicesHighlight = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering exceptional healthcare through comprehensive services tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border animate-fade-in-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
