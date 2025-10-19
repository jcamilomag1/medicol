"use client";
import { Card, CardContent } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { CheckCheck, X, DollarSign } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function PricingSection() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const countries = [
    {
      id: "usa",
      name: t('pricing.comparison.usa.country'),
      flag: t('pricing.comparison.usa.flag'),
      priceRange: t('pricing.comparison.usa.price_range'),
      description: t('pricing.comparison.usa.description'),
      noBenefits: t('pricing.comparison.usa.no_benefits'),
      additionalCostsTitle: t('pricing.comparison.usa.additional_costs_title'),
      additionalCosts: t('pricing.comparison.usa.additional_costs', { returnObjects: true }) as string[],
      totalExtra: t('pricing.comparison.usa.total_extra'),
      isHighlighted: false,
    },
    {
      id: "uk",
      name: t('pricing.comparison.uk.country'),
      flag: t('pricing.comparison.uk.flag'),
      priceRange: t('pricing.comparison.uk.price_range'),
      description: t('pricing.comparison.uk.description'),
      noBenefits: t('pricing.comparison.uk.no_benefits'),
      additionalCostsTitle: t('pricing.comparison.uk.additional_costs_title'),
      additionalCosts: t('pricing.comparison.uk.additional_costs', { returnObjects: true }) as string[],
      totalExtra: t('pricing.comparison.uk.total_extra'),
      isHighlighted: false,
    },
    {
      id: "colombia",
      name: t('pricing.comparison.colombia.country'),
      flag: t('pricing.comparison.colombia.flag'),
      priceRange: t('pricing.comparison.colombia.price_range'),
      description: t('pricing.comparison.colombia.description'),
      title: t('pricing.comparison.colombia.title'),
      benefits: t('pricing.comparison.colombia.benefits', { returnObjects: true }) as string[],
      includesTitle: t('pricing.comparison.colombia.all_inclusive_title'),
      badgeValue: t('pricing.comparison.colombia.badge_value'),
      badgeSavings: t('pricing.comparison.colombia.badge_savings'),
      isHighlighted: true,
    },
  ];

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div
      className="px-4 pt-20 pb-20 max-w-7xl mx-auto relative"
      ref={pricingRef}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          {t('pricing.comparison.main_title')}
        </h2>
      </div>

      <TimelineContent
        as="div"
        animationNum={2}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="grid md:grid-cols-3 gap-8 mx-auto mt-12"
      >
        {countries.map((country, index) => {
          const isHighlighted = country.isHighlighted;
          return (
            <TimelineContent
              as="div"
              key={country.id}
              animationNum={index + 2}
              timelineRef={pricingRef}
              customVariants={revealVariants}
            >
              <Card
                className={`relative flex-col flex justify-between h-full ${
                  isHighlighted
                    ? "md:scale-110 ring-2 ring-accent bg-gradient-to-br from-[hsl(45,100%,51%)] via-[hsl(195,100%,39%)] to-[hsl(354,100%,38%)] text-white shadow-2xl"
                    : "border-2 border-muted bg-muted/20"
                }`}
              >
                <CardContent className={isHighlighted ? "pt-0" : "pt-4"}>
                  {isHighlighted && (
                    <div className="pt-4 flex gap-2 flex-wrap justify-center mb-3">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                        {country.badgeValue}
                      </span>
                      <span className="bg-green-500/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                        {country.badgeSavings}
                      </span>
                    </div>
                  )}

                  {/* Bandera */}
                  <div
                    className={`mb-4 text-center ${
                      isHighlighted
                        ? "text-8xl animate-pulse"
                        : "text-6xl"
                    }`}
                  >
                    {country.flag}
                  </div>

                  {/* Nombre del país / Título */}
                  <h3
                    className={`font-bold text-center mb-3 ${
                      isHighlighted
                        ? "text-3xl"
                        : "text-2xl text-foreground"
                    }`}
                  >
                    {isHighlighted ? country.title : country.name}
                  </h3>

                  {/* Precio */}
                  <div
                    className={`font-bold text-center mb-2 ${
                      isHighlighted
                        ? "text-4xl"
                        : "text-3xl text-muted-foreground"
                    }`}
                  >
                    {country.priceRange}
                  </div>

                  {/* Descripción */}
                  <p
                    className={`text-sm text-center mb-4 ${
                      isHighlighted
                        ? "text-white/90"
                        : "text-muted-foreground"
                    }`}
                  >
                    {country.description}
                  </p>

                  {/* Contenido según el país */}
                  <div
                    className={`pt-4 ${
                      isHighlighted
                        ? "border-t border-white/20"
                        : "border-t border-muted"
                    }`}
                  >
                    {isHighlighted ? (
                      <>
                        <h4 className="font-semibold text-center mb-3 text-lg">
                          {country.includesTitle}
                        </h4>
                        <ul className="space-y-2">
                          {country.benefits.map((benefit: string, benefitIndex: number) => (
                            <li key={benefitIndex} className="flex items-start gap-2">
                              <CheckCheck className="h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-center text-destructive mb-3">
                          {country.additionalCostsTitle}
                        </h4>
                        <ul className="space-y-2">
                          {country.additionalCosts.map((cost: string, costIndex: number) => (
                            <li key={costIndex} className="flex items-start gap-2">
                              <DollarSign className="h-4 w-4 mt-0.5 flex-shrink-0 text-destructive" />
                              <span className="text-xs text-muted-foreground">{cost}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="pt-3 mt-3 border-t border-destructive/20">
                          <p className="text-sm font-bold text-center text-destructive">
                            {country.totalExtra}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TimelineContent>
          );
        })}
      </TimelineContent>

      {/* Info text */}
      <TimelineContent
        as="p"
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="text-center text-sm text-muted-foreground mt-8"
      >
        {t('pricing.comparison.info_text')}
      </TimelineContent>
    </div>
  );
}
