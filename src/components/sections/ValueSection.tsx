import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Languages, TrendingDown, Star } from 'lucide-react';
import testimonialYoung from '@/assets/testimonial-woman-young.jpg';
import testimonialElderly from '@/assets/testimonial-woman-elderly.jpg';
import testimonialRhinoplasty from '@/assets/testimonial-woman-rhinoplasty.jpg';

export const ValueSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-5xl px-6 lg:max-w-7xl">
        <div className="mb-6 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">{t('value_proposition.section_title')}</h1>
        </div>
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-2 md:gap-3">
            {/* Slot 1: 100% Confiable */}
            <Card className="relative col-span-full flex overflow-hidden lg:col-span-2 backdrop-blur-md bg-gray-50/90 border border-gray-200/40 shadow-lg shadow-gray-200/50 ring-1 ring-gray-200/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-300/50 hover:-translate-y-1 hover:scale-[1.02] hover:ring-2 hover:ring-accent/20 hover:border-accent/30">
              <CardContent className="relative m-auto size-fit pt-4 md:pt-6">
                <div className="relative flex h-20 md:h-24 w-48 md:w-56 items-center">
                  <svg className="text-accent/30 absolute inset-0 size-full" viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="mx-auto block w-fit text-4xl md:text-5xl font-semibold">{t('value_proposition.reliable.percentage')}</span>
                </div>
                <h2 className="mt-4 md:mt-6 text-center text-2xl md:text-3xl font-semibold text-primary">{t('value_proposition.reliable.title')}</h2>
                <p className="mt-2 text-center text-sm text-muted-foreground">{t('value_proposition.reliable.subtitle')}</p>
              </CardContent>
            </Card>

            {/* Slot 2: Calidad Certificada */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 backdrop-blur-md bg-gray-50/90 border border-gray-200/40 shadow-lg shadow-gray-200/50 ring-1 ring-gray-200/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-300/50 hover:-translate-y-1 hover:scale-[1.02] hover:ring-2 hover:ring-accent/20 hover:border-accent/30">
              <CardContent className="pt-4 md:pt-6">
                <div className="relative mx-auto flex aspect-square size-24 md:size-32 rounded-full border-blue-900 before:absolute before:-inset-2 before:rounded-full before:border-blue-800">
                  <ShieldCheck className="m-auto size-12 md:size-16 text-accent" strokeWidth={1.5} />
                </div>
                <div className="relative z-10 mt-4 md:mt-6 space-y-2 text-center">
                  <h2 className="text-lg font-medium text-primary transition">{t('value_proposition.certified_quality.title')}</h2>
                  <p className="text-foreground text-sm">{t('value_proposition.certified_quality.description')}</p>
                </div>
              </CardContent>
            </Card>

            {/* Slot 3: Comunicación Sin Barreras */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 backdrop-blur-md bg-gray-50/90 border border-gray-200/40 shadow-lg shadow-gray-200/50 ring-1 ring-gray-200/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-300/50 hover:-translate-y-1 hover:scale-[1.02] hover:ring-2 hover:ring-accent/20 hover:border-accent/30">
              <CardContent className="pt-4 md:pt-6">
                <div className="relative mx-auto flex aspect-square size-24 md:size-32 rounded-full border-blue-900 before:absolute before:-inset-2 before:rounded-full before:border-blue-800">
                  <Languages className="m-auto size-12 md:size-16 text-accent" strokeWidth={1.5} />
                </div>
                <div className="relative z-10 mt-4 md:mt-6 space-y-2 text-center">
                  <h2 className="text-lg font-medium text-primary transition">{t('value_proposition.no_barriers.title')}</h2>
                  <p className="text-foreground text-sm">{t('value_proposition.no_barriers.description')}</p>
                </div>
              </CardContent>
            </Card>

            {/* Slot 4: Ahorro Inteligente */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-3 backdrop-blur-md bg-gray-50/90 border border-gray-200/40 shadow-lg shadow-gray-200/50 ring-1 ring-gray-200/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-300/50 hover:-translate-y-1 hover:scale-[1.02] hover:ring-2 hover:ring-accent/20 hover:border-accent/30">
              <CardContent className="grid pt-4 md:pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-8 md:space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border-blue-900 before:absolute before:-inset-2 before:rounded-full before:border-blue-800">
                    <TrendingDown className="m-auto size-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-medium text-primary transition">{t('value_proposition.smart_savings.title')}</h2>
                    <p className="text-foreground text-sm">
                      {t('value_proposition.smart_savings.description').split(/(50%|70%)/).map((part, index) => 
                        part === '50%' || part === '70%' ? (
                          <span key={index} className="font-semibold text-green-600">{part}</span>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  </div>
                </div>
                <div className="relative mt-6 sm:ml-6 flex items-center justify-center">
              <svg className="w-full h-40 md:h-48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Círculo principal de la moneda */}
                <circle cx="100" cy="100" r="50" stroke="hsl(200 100% 61%)" strokeWidth="2" />
                
                {/* Círculo interior decorativo */}
                <circle cx="100" cy="100" r="42" stroke="hsl(200 100% 61%)" strokeWidth="1.5" opacity="0.4" />
                
                {/* Símbolo de dólar */}
                <text 
                  x="100" 
                  y="115" 
                  textAnchor="middle" 
                  fill="hsl(200 100% 61%)" 
                  style={{ fontSize: '48px', fontWeight: 'bold' }}
                >
                  $
                </text>
                
                {/* Líneas radiantes (efecto de valor/brillo) */}
                <line x1="100" y1="30" x2="100" y2="20" stroke="hsl(200 100% 61%)" strokeWidth="2" strokeLinecap="round" />
                <line x1="135" y1="45" x2="142" y2="38" stroke="hsl(200 100% 61%)" strokeWidth="2" strokeLinecap="round" />
                <line x1="155" y1="100" x2="165" y2="100" stroke="hsl(200 100% 61%)" strokeWidth="2" strokeLinecap="round" />
                <line x1="135" y1="155" x2="142" y2="162" stroke="hsl(200 100% 61%)" strokeWidth="2" strokeLinecap="round" />
                <line x1="100" y1="170" x2="100" y2="180" stroke="hsl(200 100% 61%)" strokeWidth="2" strokeLinecap="round" />
                <line x1="65" y1="155" x2="58" y2="162" stroke="hsl(200 100% 61%)" strokeWidth="2" strokeLinecap="round" />
                <line x1="45" y1="100" x2="35" y2="100" stroke="hsl(200 100% 61%)" strokeWidth="2" strokeLinecap="round" />
                <line x1="65" y1="45" x2="58" y2="38" stroke="hsl(200 100% 61%)" strokeWidth="2" strokeLinecap="round" />
              </svg>
                </div>
              </CardContent>
            </Card>

            {/* Slot 5: Satisfacción Excepcional */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-3 backdrop-blur-md bg-gray-50/90 border border-gray-200/40 shadow-lg shadow-gray-200/50 ring-1 ring-gray-200/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-300/50 hover:-translate-y-1 hover:scale-[1.02] hover:ring-2 hover:ring-accent/20 hover:border-accent/30">
              <CardContent className="grid h-full pt-4 md:pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-8 md:space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                    <Star className="m-auto size-6 fill-accent text-accent" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-medium text-primary transition">{t('value_proposition.satisfaction.title')}</h2>
                    <p className="text-foreground text-sm">{t('value_proposition.satisfaction.description')}</p>
                  </div>
                </div>
                  <div className="before:bg-(--color-border) relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
                    <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                      <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                        <div className="flex items-center gap-0.5">
                          <Star className="size-3 fill-accent text-accent" />
                          <Star className="size-3 fill-accent text-accent" />
                          <Star className="size-3 fill-accent text-accent" />
                          <Star className="size-3 fill-accent text-accent" />
                          <Star className="size-3 fill-accent text-accent" />
                        </div>
                        <img src={testimonialYoung} alt="Paciente satisfecha" className="ring-background size-7 ring-4 rounded-full object-cover" />
                      </div>
                      <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                        <img src={testimonialElderly} alt="Paciente satisfecha" className="ring-background size-8 ring-4 rounded-full object-cover" />
                        <div className="flex items-center gap-0.5">
                          <Star className="size-3 fill-accent text-accent" />
                          <Star className="size-3 fill-accent text-accent" />
                          <Star className="size-3 fill-accent text-accent" />
                          <Star className="size-3 fill-accent text-accent" />
                          <Star className="size-3 fill-accent text-accent" />
                        </div>
                      </div>
                      <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                        <div className="flex items-center gap-0.5">
                          <Star className="size-3 fill-accent text-accent" />
                          <Star className="size-3 fill-accent text-accent" />
                          <Star className="size-3 fill-accent text-accent" />
                          <Star className="size-3 fill-accent text-accent" />
                          <Star className="size-3 fill-accent text-accent" />
                        </div>
                        <img src={testimonialRhinoplasty} alt="Paciente satisfecha" className="ring-background size-7 ring-4 rounded-full object-cover" />
                      </div>
                    </div>
                  </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
