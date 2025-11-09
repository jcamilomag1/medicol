import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Dynamic translation loading function
const loadTranslations = async (lng: string) => {
  if (lng === 'es') {
    return (await import('./es.json')).default;
  } else {
    return (await import('./en.json')).default;
  }
};

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
    resources: {}, // Start empty, load dynamically
    lng: defaultLng,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // Prevent unnecessary suspense
    },
  });

// Load initial language immediately
loadTranslations(defaultLng).then((translations) => {
  i18n.addResourceBundle(defaultLng, 'translation', translations, true, true);
});

// Pre-load secondary language on first user interaction (optimized)
const loadSecondaryLanguage = () => {
  const secondaryLng = defaultLng === 'es' ? 'en' : 'es';
  if (!i18n.hasResourceBundle(secondaryLng, 'translation')) {
    loadTranslations(secondaryLng).then((translations) => {
      i18n.addResourceBundle(secondaryLng, 'translation', translations, true, true);
    });
  }
};

// Listen for first user interaction
const interactionEvents = ['mousemove', 'scroll', 'touchstart', 'click'];
interactionEvents.forEach(event => {
  document.addEventListener(event, loadSecondaryLanguage, { once: true, passive: true });
});

export default i18n;
