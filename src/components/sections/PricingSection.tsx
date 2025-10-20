"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export const PricingSection = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  
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

  const usaCanadaFeatures = [
    { text: t('pricing.comparison.qualified_surgeons'), included: true },
    { text: t('pricing.comparison.local_standards'), included: true },
    { text: t('pricing.comparison.extras_not_included'), included: false },
    { text: t('pricing.comparison.extra_costs'), included: false },
  ];

  const colombiaFeatures = [
    { text: t('pricing.colombia_detail.expert_surgeons'), included: true },
    { text: t('pricing.colombia_detail.jci_hospitals'), included: true },
  ];

  const colombiaInclusions = [
    t('pricing.colombia_detail.surgical_insurance'),
    t('pricing.colombia_detail.complete_transport'),
    t('pricing.colombia_detail.postop_meds'),
    t('pricing.colombia_detail.massage_drainage'),
    t('pricing.colombia_detail.postop_garments'),
    t('pricing.colombia_detail.bilingual_assistance'),
  ];

  const europeFeatures = [
    { text: t('pricing.comparison.certified_surgeons_eu'), included: true },
    { text: t('pricing.comparison.eu_standards'), included: true },
    { text: t('pricing.comparison.eu_extras_not_included'), included: false },
    { text: t('pricing.comparison.eu_extra_costs'), included: false },
  ];

  const whatsappMessage = encodeURIComponent(t('pricing.cta.button'));

  return (
    <section
      className="py-16 px-4 bg-background w-full relative min-h-screen"
      ref={pricingRef}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_40%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <article className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-foreground mb-4">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-center"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0,
              }}
            >
              {t('pricing.section.title')}
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            as="p"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="text-muted-foreground"
          >
            {t('pricing.section.subtitle')}
          </TimelineContent>
        </article>

        <div className="grid md:grid-cols-3 md:gap-8 gap-3 items-end">
          {/* USA/Canada Plan */}
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card className="bg-card p-0 h-fit border-border">
              <CardHeader className="text-left py-4 border-b bg-muted border-border rounded-t-xl">
                <h3 className="text-xl text-foreground mb-4">{t('pricing.usa_canada.country')}</h3>
                <div className="flex justify-start items-end">
                  <span className="text-4xl font-semibold text-foreground">
                    {t('pricing.usa_canada.price_range').split(' ')[0]}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    {t('pricing.usa_canada.price_range').split(' ').slice(1).join(' ')}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {t('pricing.comparison.estimate_note')}
                </p>
              </CardHeader>
              <CardContent className="pb-6 pt-6">
                <ul className="space-y-3 mb-6">
                  {usaCanadaFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TimelineContent>

          {/* Medicol Colombia Plan - DESTACADA */}
          <TimelineContent
            as="div"
            animationNum={2}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card className="bg-accent p-0 rounded-lg shadow-lg relative h-fit border-accent">
              {/* Badge verde posicionado absolutamente en la parte superior */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 px-4 py-2 text-base font-bold shadow-lg hover:shadow-xl transition-all animate-pulse">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  {t('pricing.comparison.colombia.badge_savings')}
                </Badge>
              </div>
              
              <CardHeader className="pb-6 bg-white rounded-t-lg py-6 border-b border-border text-center">
                <h3 className="text-xl text-primary mb-4">
                  {t('pricing.colombia_detail.country')}
                </h3>
                <div className="w-full justify-center flex items-end">
                  <span className="text-4xl font-semibold text-primary">
                    {t('pricing.colombia_detail.price_range').split(' ')[0]}
                  </span>
                  <span className="text-primary/80 ml-1">
                    {t('pricing.colombia_detail.price_range').split(' ').slice(1).join(' ')}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pb-6 pt-6 bg-accent">
                <ul className="space-y-3 mb-6">
                  {colombiaFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-accent-foreground font-medium">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                  <li className="pt-2">
                    <p className="text-sm font-bold text-accent-foreground mb-2">
                      {t('pricing.colombia_detail.all_inclusive_title')}
                    </p>
                    <ul className="space-y-2 ml-4">
                      {colombiaInclusions.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-accent-foreground">•</span>
                          <span className="text-accent-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg font-semibold rounded-xl"
                  asChild
                >
                  <a 
                    href={`https://wa.me/573053333333?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('pricing.cta.button')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </TimelineContent>

          {/* Europe Plan */}
          <TimelineContent
            as="div"
            animationNum={3}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card className="bg-card p-0 border-border">
              <CardHeader className="text-left py-4 border-b bg-muted rounded-t-xl border-border">
                <h3 className="text-xl text-foreground mb-4">{t('pricing.europe.country')}</h3>
                <div className="flex justify-start items-end">
                  <span className="text-4xl font-semibold text-foreground">
                    {t('pricing.europe.price_range').split(' ')[0]}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    {t('pricing.europe.price_range').split(' ').slice(1).join(' ')}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {t('pricing.comparison.estimate_note')}
                </p>
              </CardHeader>
              <CardContent className="pb-6 pt-6">
                <ul className="space-y-3 mb-6">
                  {europeFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TimelineContent>
        </div>
      </div>
    </section>
  );
};
