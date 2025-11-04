import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const TeamAdminSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const adminTeam = [
    { key: 'daniel', image: '/placeholder.svg' },
    { key: 'felipe', image: '/placeholder.svg' },
    { key: 'ismael', image: '/placeholder.svg' },
    { key: 'lina', image: '/placeholder.svg' },
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            {t('team.admin.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('team.admin.intro')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {adminTeam.map((member, index) => (
            <motion.div
              key={member.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={t(`team.admin.${member.key}.name`)}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {t(`team.admin.${member.key}.name`)}
                  </h3>
                  <p className="text-primary font-semibold mt-1">
                    {t(`team.admin.${member.key}.role`)}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`team.admin.${member.key}.bio`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAdminSection;
