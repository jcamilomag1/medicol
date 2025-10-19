import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Users, Sparkles, CheckCircle2, ShieldCheck, GraduationCap, BookOpen, Check } from 'lucide-react';

export const AboutMedicolSection = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, value: '5,000+', labelKey: 'about.stats_patients' },
    { icon: Award, value: '15+', labelKey: 'about.stats_experience' },
    { icon: Sparkles, value: '4', labelKey: 'about.stats_specialties' },
    { icon: CheckCircle2, value: '100%', labelKey: 'about.stats_satisfaction' }
  ];

  const features = [
    { textKey: 'about.feature_packages' },
    { textKey: 'about.feature_experience' },
    { textKey: 'about.feature_care' },
    { textKey: 'about.feature_family' }
  ];

  const accreditations = [
    {
      icon: ShieldCheck,
      titleKey: 'about.jci_title',
      descKey: 'about.jci_desc',
      badgeKey: 'about.jci_badge',
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      icon: GraduationCap,
      titleKey: 'about.sccp_title',
      descKey: 'about.sccp_desc',
      badgeKey: 'about.sccp_badge',
      gradient: 'from-primary to-accent'
    },
    {
      icon: BookOpen,
      titleKey: 'about.acicme_title',
      descKey: 'about.acicme_desc',
      badgeKey: 'about.acicme_badge',
      gradient: 'from-secondary to-primary'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {t('about.section_title')}
          </h2>
        </motion.div>

        {/* Main Content Grid: 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column: Narrative Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                {t('about.main_story')}
              </p>
            </div>

            {/* Feature Checkmarks */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.textKey}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-base text-muted-foreground font-medium">
                    {t(feature.textKey)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Accreditation Cards */}
          <div className="space-y-8">
            {accreditations.map((accreditation, index) => {
              const IconComponent = accreditation.icon;
              return (
                <motion.div
                  key={accreditation.titleKey}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative group bg-gradient-to-br from-card/50 via-card to-card/80 rounded-2xl p-8 
                             border-2 border-primary/20 hover:border-primary/60 
                             shadow-soft hover:shadow-medium
                             transition-all duration-300 hover:scale-[1.03]"
                >
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/5 to-transparent 
                                  opacity-0 group-hover:opacity-100 group-hover:animate-shimmer pointer-events-none" />
                  
                  {/* Icon Container with gradient */}
                  <div className={`relative mb-6 w-16 h-16 rounded-2xl 
                                  bg-gradient-to-br ${accreditation.gradient}
                                  flex items-center justify-center 
                                  shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Badge */}
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold 
                                   bg-primary/10 text-primary rounded-full">
                    {t(accreditation.badgeKey)}
                  </span>
                  
                  {/* Title with gradient */}
                  <h3 className="text-2xl font-bold mb-3 
                                 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t(accreditation.titleKey)}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {t(accreditation.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-extrabold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {t(stat.labelKey)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
