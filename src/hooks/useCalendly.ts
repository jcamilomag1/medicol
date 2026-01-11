import { useCallback, useEffect, useState } from 'react';

const CALENDLY_URL = 'https://calendly.com/medicol-mde/30min';
const CALENDLY_SCRIPT_URL = 'https://assets.calendly.com/assets/external/widget.js';

export const useCalendly = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if script is already loaded
    if (window.Calendly) {
      setIsLoaded(true);
      return;
    }

    // Check if script tag already exists
    const existingScript = document.querySelector(`script[src="${CALENDLY_SCRIPT_URL}"]`);
    if (existingScript) {
      existingScript.addEventListener('load', () => setIsLoaded(true));
      return;
    }

    // Load the script dynamically
    const script = document.createElement('script');
    script.src = CALENDLY_SCRIPT_URL;
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Cleanup is not needed as we want to keep the script loaded
    };
  }, []);

  const openCalendlyPopup = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Fallback: open in new tab if script hasn't loaded
      window.open(CALENDLY_URL, '_blank');
    }
  }, []);

  return { openCalendlyPopup, isLoaded };
};
