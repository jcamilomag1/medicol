"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Stethoscope, Heart, Shield, CheckCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0");
  const { t } = useTranslation();

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-background border border-border p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit sm:h-12 cursor-pointer h-10  rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm border-accent/30 bg-accent/10"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">{t('pricing.new_section.monthly')}</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer sm:h-12 h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10  w-full  rounded-full border-4 shadow-sm border-accent/30 bg-accent/10"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            {t('pricing.new_section.yearly')}
            <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent-foreground">
              {t('pricing.new_section.save_badge')}
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const plans = [
    {
      id: "basic",
      name: t('pricing.plans.basic.name'),
      description: t('pricing.plans.basic.description'),
      price: 150,
      yearlyPrice: 1500,
      buttonText: t('pricing.plans.basic.button'),
      buttonVariant: "outline" as const,
      icon: Stethoscope,
      features: t('pricing.plans.basic.features', { returnObjects: true }) as string[],
      includesTitle: t('pricing.plans.basic.includes_title'),
    },
    {
      id: "standard",
      name: t('pricing.plans.standard.name'),
      description: t('pricing.plans.standard.description'),
      price: 3500,
      yearlyPrice: 35000,
      buttonText: t('pricing.plans.standard.button'),
      buttonVariant: "outline" as const,
      icon: Heart,
      features: t('pricing.plans.standard.features', { returnObjects: true }) as string[],
      includesTitle: t('pricing.plans.standard.includes_title'),
    },
    {
      id: "premium",
      name: t('pricing.plans.premium.name'),
      description: t('pricing.plans.premium.description'),
      price: 8500,
      yearlyPrice: 85000,
      popular: true,
      buttonText: t('pricing.plans.premium.button'),
      buttonVariant: "default" as const,
      icon: Shield,
      features: t('pricing.plans.premium.features', { returnObjects: true }) as string[],
      includesTitle: t('pricing.plans.premium.includes_title'),
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

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="px-4 pt-20 pb-20 max-w-7xl mx-auto relative"
      ref={pricingRef}
    >
      <article className="flex sm:flex-row flex-col sm:pb-0 pb-4 sm:items-center items-start justify-between">
        <div className="text-left mb-6">
          <h2 className="text-4xl font-medium leading-[130%] text-foreground mb-4">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-start"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0,
              }}
            >
              {t('pricing.new_section.title')}
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            as="p"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="text-muted-foreground w-[80%]"
          >
            {t('pricing.new_section.subtitle')}
          </TimelineContent>
        </div>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} className="shrink-0" />
        </TimelineContent>
      </article>

      <TimelineContent
        as="div"
        animationNum={2}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="grid md:grid-cols-3 gap-4 mx-auto bg-accent/5 sm:p-3 rounded-lg mt-12"
      >
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <TimelineContent
              as="div"
              key={plan.id}
              animationNum={index + 3}
              timelineRef={pricingRef}
              customVariants={revealVariants}
            >
              <Card
                className={`relative flex-col flex justify-between ${
                  plan.popular
                    ? "scale-110 ring-2 ring-accent bg-gradient-to-t from-accent/90 to-accent text-accent-foreground"
                    : "border-none shadow-none bg-transparent pt-4"
                }`}
              >
                <CardContent className="pt-0">
                  <div className="space-y-2 pb-3">
                    {plan.popular && (
                      <div className="pt-4">
                        <span className="bg-accent-foreground/20 text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {t('pricing.new_section.popular_badge')}
                        </span>
                      </div>
                    )}

                    <div className="flex items-baseline">
                      <span className="text-4xl font-semibold">
                        $
                        <NumberFlow
                          value={isYearly ? plan.yearlyPrice : plan.price}
                          className="text-4xl font-semibold"
                        />
                      </span>
                      <span
                        className={
                          plan.popular
                            ? "text-accent-foreground/80 ml-1"
                            : "text-muted-foreground ml-1"
                        }
                      >
                        /{isYearly ? t('pricing.new_section.year') : t('pricing.new_section.month')}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-semibold mb-2">{plan.name}</h3>
                    <Icon className="h-8 w-8 opacity-50" />
                  </div>
                  <p
                    className={
                      plan.popular
                        ? "text-sm text-accent-foreground/80 mb-4"
                        : "text-sm text-muted-foreground mb-4"
                    }
                  >
                    {plan.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <h4 className="font-medium text-base mb-3">
                      {plan.includesTitle}
                    </h4>
                    <ul className="space-y-2 font-semibold">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span
                            className={
                              plan.popular
                                ? "text-accent-foreground h-6 w-6 bg-accent-foreground/20 border border-accent-foreground/30 rounded-full grid place-content-center mt-0.5 mr-3"
                                : "text-foreground h-6 w-6 bg-accent/10 border border-accent/30 rounded-full grid place-content-center mt-0.5 mr-3"
                            }
                          >
                            <CheckCheck className="h-4 w-4" />
                          </span>
                          <span
                            className={
                              plan.popular
                                ? "text-sm text-accent-foreground/90"
                                : "text-sm text-muted-foreground"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <button
                    className={`w-full mb-6 p-4 text-xl rounded-xl transition-all ${
                      plan.popular
                        ? "bg-accent-foreground font-semibold shadow-lg text-accent hover:opacity-90"
                        : "bg-accent text-accent-foreground shadow-lg hover:bg-accent/90"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </CardFooter>
              </Card>
            </TimelineContent>
          );
        })}
      </TimelineContent>
    </div>
  );
}
