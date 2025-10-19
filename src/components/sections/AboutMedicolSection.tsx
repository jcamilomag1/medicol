import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import accreditationsImage from '@/assets/accreditations.png';

export const AboutMedicolSection = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, value: '5,000+', labelKey: 'about.stats_patients' },
    { icon: Award, value: '15+', labelKey: 'about.stats_experience' },
    { icon: Sparkles, value: '4', labelKey: 'about.stats_specialties' },
    { icon: CheckCircle2, value: '100%', labelKey: 'about.stats_satisfaction' }
  ];

  const accreditations = [
    {
      titleKey: 'about.jci_title',
      descKey: 'about.jci_desc',
      color: 'accent'
    },
    {
      titleKey: 'about.sccp_title',
      descKey: 'about.sccp_desc',
      color: 'primary'
    },
    {
      titleKey: 'about.acicme_title',
      descKey: 'about.acicme_desc',
      color: 'secondary'
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl mb-6">
            {t('about.section_title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.story')}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Story + Accreditations Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src={accreditationsImage}
                alt="Medicol Accreditations - JCI, SCCP, ACICME"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right: Accreditations Cards */}
          <div className="space-y-6">
            {accreditations.map((accreditation, index) => (
              <motion.div
                key={accreditation.titleKey}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-medium transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-${accreditation.color}/10 flex items-center justify-center flex-shrink-0`}>
                    <Award className={`w-6 h-6 text-${accreditation.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {t(accreditation.titleKey)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(accreditation.descKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
