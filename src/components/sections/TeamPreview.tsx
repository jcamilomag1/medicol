import { useTranslation } from 'react-i18next';

export const TeamPreview = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold text-primary text-center mb-6">
        {t('team.preview_title')}
      </h3>
      <p className="text-gray-600 text-center">
        {t('team.preview_description')}
      </p>
      {/* Team content will be added here */}
    </div>
  );
};
