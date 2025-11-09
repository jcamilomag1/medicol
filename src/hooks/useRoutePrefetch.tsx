import { useEffect } from 'react';

export const useRoutePrefetch = () => {
  useEffect(() => {
    // Prefetch common routes after 1 second of inactivity
    const timer = setTimeout(() => {
      // Preload most visited routes
      import('../pages/ContactPage');
      import('../pages/PlasticSurgeryPage');
      import('../pages/StemCellsPage');
      import('../pages/DentalPage');
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
};
