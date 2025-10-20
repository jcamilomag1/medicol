import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ServiceCard {
  imageUrl: string;
  titleKey: string;
  categoryKey: string;
  href: string;
  themeColor: string;
}

interface MedicalServicesCarouselProps {
  services: ServiceCard[];
}

export function MedicalServicesCarousel({ services }: MedicalServicesCarouselProps) {
  const { t } = useTranslation();

  return (
    <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full overflow-hidden"
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          {/* Gradient Overlays */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: "150px",
              background: "linear-gradient(90deg, hsl(var(--background)) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: "150px",
              background: "linear-gradient(270deg, hsl(var(--background)) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />

          {/* Scrolling Container */}
          <motion.div
            className="flex items-center"
            animate={{
              x: [0, -(services.length * 380)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: services.length * 4.5,
                ease: "linear",
              },
            }}
            style={{
              gap: "24px",
              paddingLeft: "24px",
            }}
          >
            {/* Triple services for seamless infinite loop */}
            {[...services, ...services, ...services].map((service, index) => (
              <Link
                key={index}
                to={service.href}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 cursor-pointer relative overflow-hidden"
                  style={{
                    width: "356px",
                    height: "480px",
                    borderRadius: "24px",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  {/* Image */}
                  <img
                    src={service.imageUrl}
                    alt={t(service.titleKey)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
                    }}
                  />

                  {/* Text Content */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: `hsl(${service.themeColor})`,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {t(service.categoryKey)}
                    </span>
                    <h3
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "24px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        lineHeight: "1.3",
                      }}
                    >
                      {t(service.titleKey)}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
  );
}
