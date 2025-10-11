import { useTranslation } from 'react-i18next';

export const VideoTestimonials = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold text-primary text-center mb-6">
        {t('testimonials.video_title')}
      </h3>
      <p className="text-gray-600 text-center">
        {t('testimonials.video_description')}
      </p>
      {/* Video testimonials content will be added here */}
    </div>
  );
};
