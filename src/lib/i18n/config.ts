import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en.json';
import esTranslations from './es.json';

// Language configuration

// Browser language detection with localStorage persistence
const getBrowserLanguage = (): string => {
  const stored = localStorage.getItem('i18nextLng');
  if (stored && ['es', 'en'].includes(stored)) return stored;
  
  const browserLang = navigator.language.split('-')[0];
  return ['es', 'en'].includes(browserLang) ? browserLang : 'en';
};

const defaultLng = getBrowserLanguage();

// Debug: Verify translations are loaded
console.log('🔍 i18n initializing with:', {
  defaultLng,
  esKeys: Object.keys(esTranslations).slice(0, 5),
  enKeys: Object.keys(enTranslations).slice(0, 5),
  teamPreviewDesc_es: (esTranslations as any).team?.preview_description,
  teamPreviewDesc_en: (enTranslations as any).team?.preview_description,
  teamSpecialtyLabel_es: (esTranslations as any).team?.specialty_label,
  teamSpecialtyLabel_en: (enTranslations as any).team?.specialty_label,
  teamExperienceLabel_es: (esTranslations as any).team?.experience_label,
  teamExperienceLabel_en: (enTranslations as any).team?.experience_label
});

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
    },
    lng: defaultLng,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
