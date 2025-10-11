import { useTranslation } from "react-i18next";

export const ServicesHighlight = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      icon: '/icons/cosmetic-surgery.svg',
      titleKey: 'services.cosmetic.title',
      descriptionKey: 'services.cosmetic.description',
      href: '/procedimientos/cirugia-cosmetica'
    },
    {
      icon: '/icons/regenerative-medicine.svg',
      titleKey: 'services.regenerative.title',
      descriptionKey: 'services.regenerative.description',
      href: '/procedimientos/medicina-regenerativa'
    },
    {
      icon: '/icons/smile-design.svg',
      titleKey: 'services.dental.title',
      descriptionKey: 'services.dental.description',
      href: '/procedimientos/diseno-de-sonrisa'
    },
    {
      icon: '/icons/advanced-diagnostics.svg',
      titleKey: 'services.diagnostics.title',
      descriptionKey: 'services.diagnostics.description',
      href: '/procedimientos/chequeos-avanzados'
    }
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('services.section_title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {t('services.section_subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <div key={service.titleKey} className="text-center">
              {/* Icon */}
              <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-indigo-600 mx-auto">
                <img 
                  src={service.icon} 
                  alt={t(service.titleKey)} 
                  className="h-8 w-8 text-white"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                {t(service.titleKey)}
              </h3>

              {/* Description */}
              <p className="mt-2 text-base leading-7 text-gray-600">
                {t(service.descriptionKey)}
              </p>

              {/* Link */}
              <a 
                href={service.href} 
                className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800"
              >
                {t('common.learn_more')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
