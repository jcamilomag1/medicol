import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import danielRamirezImg from '@/assets/team/daniel-ramirez.png';
import felipeMuneraImg from '@/assets/team/felipe-munera.png';
import ismaelSalazarImg from '@/assets/team/ismael-salazar.png';
import linaJaramilloImg from '@/assets/team/lina-jaramillo.png';

const TeamAdminSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const adminTeam = [
    { key: 'daniel', image: danielRamirezImg },
    { key: 'felipe', image: felipeMuneraImg },
    { key: 'ismael', image: ismaelSalazarImg },
    { key: 'lina', image: linaJaramilloImg },
  ];

  return (
    <section ref={ref} className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            {t('team.admin.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('team.admin.intro')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mx-auto">
          {adminTeam.map((member, index) => (
            <motion.div
              key={member.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-4 md:p-6 border border-border shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={t(`team.admin.${member.key}.name`)}
                    loading="lazy"
                    decoding="async"
                    className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-2 md:border-3 border-primary/20"
                  />
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground">
                    {t(`team.admin.${member.key}.name`)}
                  </h3>
                  <p className="text-primary font-semibold mt-1 text-sm md:text-base">
                    {t(`team.admin.${member.key}.role`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAdminSection;
