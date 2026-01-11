import { useCallback, useEffect, useState } from 'react';

const CALENDLY_URL = 'https://calendly.com/medicol-mde/30min';
const CALENDLY_SCRIPT_URL = 'https://assets.calendly.com/assets/external/widget.js';

// Variable global para rastrear si ya se inicio la carga
let scriptLoadingInitiated = false;

// Funcion para cargar el script (se puede llamar desde cualquier lugar)
const loadCalendlyScript = (): Promise<void> => {
  return new Promise((resolve) => {
    if (window.Calendly) {
      resolve();
      return;
    }

    const existingScript = document.querySelector(`script[src="${CALENDLY_SCRIPT_URL}"]`);
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve());
      if (window.Calendly) resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = CALENDLY_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
};

// Iniciar carga del script cuando el navegador este libre
if (typeof window !== 'undefined' && !scriptLoadingInitiated) {
  scriptLoadingInitiated = true;
  
  // Usar requestIdleCallback para cargar cuando el navegador este libre
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => loadCalendlyScript(), { timeout: 3000 });
  } else {
    // Fallback: cargar despues de 1 segundo
    setTimeout(() => loadCalendlyScript(), 1000);
  }
}

export const useCalendly = () => {
  const [isLoaded, setIsLoaded] = useState(typeof window !== 'undefined' && !!window.Calendly);

  useEffect(() => {
    if (window.Calendly) {
      setIsLoaded(true);
      return;
    }

    loadCalendlyScript().then(() => setIsLoaded(true));
  }, []);

  const openCalendlyPopup = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Fallback mientras carga (muy raro que pase)
      window.open(CALENDLY_URL, '_blank');
    }
  }, []);

  return { openCalendlyPopup, isLoaded };
};
