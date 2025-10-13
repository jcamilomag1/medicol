import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';
interface Testimonial {
  name: string;
  countryKey: string;
  thumbnailUrl: string;
  videoUrl: string;
}
const testimonialsData: Testimonial[] = [{
  name: 'Janette Snyder',
  countryKey: 'countries.usa',
  thumbnailUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}, {
  name: 'Estefania Snyder',
  countryKey: 'countries.usa',
  thumbnailUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}];
export const VideoTestimonials = () => {
  const {
    t
  } = useTranslation();
  return;
};