import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en.json';
import esTranslations from './es.json';

// Clear all i18n cache
if (typeof window !== 'undefined') {
  // Force clear localStorage cache
  const keys = Object.keys(localStorage);
  keys.forEach(key => {
    if (key.startsWith('i18next')) {
      localStorage.removeItem(key);
    }
  });
}

// Browser language detection with localStorage persistence
const getBrowserLanguage = (): string => {
  const stored = localStorage.getItem('i18nextLng');
  if (stored && ['es', 'en'].includes(stored)) return stored;
  
  const browserLang = navigator.language.split('-')[0];
  return ['es', 'en'].includes(browserLang) ? browserLang : 'en';
};

const defaultLng = getBrowserLanguage();

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
    load: 'languageOnly',
    debug: false,
    // Force reload resources
    returnEmptyString: false,
    returnNull: false,
  });

export default i18n;
