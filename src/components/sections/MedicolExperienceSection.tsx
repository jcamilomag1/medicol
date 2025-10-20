import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar } from "lucide-react";

const features = [
  "24/7 Telemedicine consultations",
  "Same-day appointment availability",
  "Electronic health records access",
  "Prescription refills online",
  "Multi-language support",
  "Insurance verification assistance"
];

export const MedicolExperienceSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              The Medicol Experience
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We've reimagined healthcare to be more accessible, efficient, and patient-friendly. 
              From booking appointments to accessing your medical records, everything is designed 
              with your convenience in mind.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-gradient-primary shadow-medium hover:shadow-soft transition-all duration-300">
              <Calendar className="mr-2 w-5 h-5" />
              Book an Appointment
            </Button>
          </div>
          
          <div className="relative animate-fade-in-scale">
            <div className="aspect-square bg-gradient-primary rounded-3xl shadow-medium flex items-center justify-center text-white">
              <div className="text-center p-8">
                <p className="text-6xl font-bold mb-4">50K+</p>
                <p className="text-xl">Patients Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
