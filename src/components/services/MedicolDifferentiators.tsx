import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const MedicolDifferentiators = () => {
  const { t } = useTranslation();

  const differentiators = [
    {
      icon: ShieldCheck,
      title: "Sin Preocupaciones",
      description: "Nosotros nos encargamos de todo. Desde tu llegada hasta tu recuperación, cada detalle está cubierto."
    },
    {
      icon: HeartHandshake,
      title: "Seguimiento Incluido",
      description: "Seguimiento post-operación completo sin costo adicional. Tu salud es nuestra prioridad antes, durante y después."
    },
    {
      icon: Sparkles,
      title: "Innovación de Punta",
      description: "Tecnología y equipamiento de última generación. Herramientas que marcan la diferencia en tus resultados."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Por qué elegir Medicol?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experiencia que marca la diferencia
          </p>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border">
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
