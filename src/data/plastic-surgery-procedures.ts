// Image imports
import rhinoplastyImg from '@/assets/procedures/rhinoplasty.jpg';
import blepharoplastyImg from '@/assets/procedures/blepharoplasty.jpg';
import faceliftImg from '@/assets/procedures/facelift.jpg';
import browLiftImg from '@/assets/procedures/brow-lift.jpg';
import otoplastyImg from '@/assets/procedures/otoplasty.jpg';
import neckLiftImg from '@/assets/procedures/neck-lift.jpg';
import liposuctionImg from '@/assets/procedures/liposuction.jpg';
import tummyTuckImg from '@/assets/procedures/tummy-tuck.jpg';
import armLiftImg from '@/assets/procedures/arm-lift.jpg';
import thighLiftImg from '@/assets/procedures/thigh-lift.jpg';
import breastAugmentationImg from '@/assets/procedures/breast-augmentation.jpg';
import breastLiftImg from '@/assets/procedures/breast-lift.jpg';
import breastReductionImg from '@/assets/procedures/breast-reduction.jpg';
import bblImg from '@/assets/procedures/bbl.jpg';
import mommyMakeoverImg from '@/assets/procedures/mommy-makeover.jpg';
import facialRejuvenationImg from '@/assets/procedures/facial-rejuvenation.jpg';

export interface Procedure {
  id: string;
  category: 'face' | 'body' | 'breast' | 'buttocks' | 'combined' | 'specialized';
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  price_usd: number;
  price_comparison_us: number;
  savings_percentage: number;
  image: string;
  surgery_time_es: string;
  surgery_time_en: string;
  anesthesia_es: string;
  anesthesia_en: string;
  recovery_days_es: string;
  recovery_days_en: string;
  final_results_timeline_es: string;
  final_results_timeline_en: string;
  ideal_candidates_es: string[];
  ideal_candidates_en: string[];
  package_includes_es: string[];
  package_includes_en: string[];
}

export const procedures: Procedure[] = [
  // Face & Neck (6 procedures)
  {
    id: 'rhinoplasty',
    category: 'face',
    name_es: 'Rinoplastia',
    name_en: 'Rhinoplasty',
    description_es: 'Mejora la armonía facial con una remodelación precisa de la nariz.',
    description_en: 'Enhance facial harmony with precise nose reshaping.',
    price_usd: 2500,
    price_comparison_us: 8333,
    savings_percentage: 70,
    image: rhinoplastyImg,
    surgery_time_es: '2-3 horas',
    surgery_time_en: '2-3 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '7-10 días',
    recovery_days_en: '7-10 days',
    final_results_timeline_es: '6-12 meses',
    final_results_timeline_en: '6-12 months',
    ideal_candidates_es: [
      'Desean mejorar la forma o tamaño de su nariz',
      'Buscan corregir problemas respiratorios',
      'Tienen expectativas realistas',
      'Gozan de buena salud general'
    ],
    ideal_candidates_en: [
      'Want to improve the shape or size of their nose',
      'Seek to correct breathing problems',
      'Have realistic expectations',
      'Enjoy good general health'
    ],
    package_includes_es: [
      'Honorarios del Cirujano Certificado',
      'Costos de la Clínica Acreditada',
      'Anestesia y medicamentos',
      'Citas de seguimiento post-operatorias',
      'Insumos médicos iniciales'
    ],
    package_includes_en: [
      'Certified Surgeon Fees',
      'Accredited Clinic Costs',
      'Anesthesia and medications',
      'Post-operative follow-up appointments',
      'Initial medical supplies'
    ]
  },
  {
    id: 'tip-rhinoplasty',
    category: 'face',
    name_es: 'Rinoplastia de Punta',
    name_en: 'Tip Rhinoplasty',
    description_es: 'Refina la punta nasal para un mejor equilibrio facial.',
    description_en: 'Refine the nasal tip for better facial balance.',
    price_usd: 1650,
    price_comparison_us: 4714,
    savings_percentage: 65,
    image: rhinoplastyImg,
    surgery_time_es: '1-2 horas',
    surgery_time_en: '1-2 hours',
    anesthesia_es: 'General o Local con Sedación',
    anesthesia_en: 'General or Local with Sedation',
    recovery_days_es: '5-7 días',
    recovery_days_en: '5-7 days',
    final_results_timeline_es: '6-12 meses',
    final_results_timeline_en: '6-12 months',
    ideal_candidates_es: [
      'Desean mejorar solo la punta de la nariz',
      'Tienen buena estructura nasal en general',
      'Buscan resultados naturales',
      'No requieren corrección del puente nasal'
    ],
    ideal_candidates_en: [
      'Want to improve only the nose tip',
      'Have good overall nasal structure',
      'Seek natural results',
      'Do not require nasal bridge correction'
    ],
    package_includes_es: [
      'Honorarios del Cirujano Especialista',
      'Costos de la Clínica',
      'Anestesia y medicamentos',
      'Seguimiento post-operatorio',
      'Kit de cuidados iniciales'
    ],
    package_includes_en: [
      'Specialist Surgeon Fees',
      'Clinic Costs',
      'Anesthesia and medications',
      'Post-operative follow-up',
      'Initial care kit'
    ]
  },
  {
    id: 'blepharoplasty',
    category: 'face',
    name_es: 'Blefaroplastia',
    name_en: 'Blepharoplasty',
    description_es: 'Rejuvenece los ojos para una apariencia más alerta y juvenil.',
    description_en: 'Rejuvenate the eyes for a more alert and youthful appearance.',
    price_usd: 1500,
    price_comparison_us: 3750,
    savings_percentage: 60,
    image: blepharoplastyImg,
    surgery_time_es: '1-2 horas',
    surgery_time_en: '1-2 hours',
    anesthesia_es: 'Local con Sedación',
    anesthesia_en: 'Local with Sedation',
    recovery_days_es: '5-7 días',
    recovery_days_en: '5-7 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Tienen bolsas o hinchazón en los párpados',
      'Presentan exceso de piel en párpados superiores',
      'Desean una mirada más joven y descansada',
      'No tienen problemas oculares graves'
    ],
    ideal_candidates_en: [
      'Have bags or swelling in eyelids',
      'Present excess skin in upper eyelids',
      'Want a younger, rested look',
      'Have no serious eye problems'
    ],
    package_includes_es: [
      'Honorarios del Cirujano Especialista',
      'Uso de instalaciones quirúrgicas',
      'Anestesia y medicamentos',
      'Consultas de seguimiento',
      'Kit de cuidados post-operatorios'
    ],
    package_includes_en: [
      'Specialist Surgeon Fees',
      'Surgical facility use',
      'Anesthesia and medications',
      'Follow-up consultations',
      'Post-operative care kit'
    ]
  },
  {
    id: 'facelift',
    category: 'face',
    name_es: 'Estiramiento Facial (Ritidectomía)',
    name_en: 'Facelift (Rhytidectomy)',
    description_es: 'Rejuvenecimiento facial completo para resultados duraderos.',
    description_en: 'Complete facial rejuvenation for long-lasting results.',
    price_usd: 9500,
    price_comparison_us: 21111,
    savings_percentage: 55,
    image: faceliftImg,
    surgery_time_es: '3-5 horas',
    surgery_time_en: '3-5 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '14-21 días',
    recovery_days_en: '14-21 days',
    final_results_timeline_es: '6-12 meses',
    final_results_timeline_en: '6-12 months',
    ideal_candidates_es: [
      'Tienen flacidez en rostro y cuello',
      'Presentan arrugas profundas y surcos',
      'Desean un rejuvenecimiento facial significativo',
      'Están en buenas condiciones de salud'
    ],
    ideal_candidates_en: [
      'Have sagging in face and neck',
      'Present deep wrinkles and folds',
      'Want significant facial rejuvenation',
      'Are in good health'
    ],
    package_includes_es: [
      'Cirujano Plástico Certificado',
      'Clínica de Primer Nivel',
      'Anestesia general y medicamentos',
      'Seguimiento post-operatorio completo',
      'Fajas y vendajes especializados'
    ],
    package_includes_en: [
      'Board Certified Plastic Surgeon',
      'Top-tier Clinic',
      'General anesthesia and medications',
      'Complete post-operative follow-up',
      'Specialized garments and bandages'
    ]
  },
  {
    id: 'lateral-brow-lift',
    category: 'face',
    name_es: 'Levantamiento de Cejas Lateral',
    name_en: 'Lateral Brow Lift',
    description_es: 'Levanta y rejuvenece el área de las cejas para una apariencia más juvenil.',
    description_en: 'Lifts and rejuvenates the brow area for a more youthful appearance.',
    price_usd: 2050,
    price_comparison_us: 5125,
    savings_percentage: 60,
    image: browLiftImg,
    surgery_time_es: '1-2 horas',
    surgery_time_en: '1-2 hours',
    anesthesia_es: 'Local con Sedación',
    anesthesia_en: 'Local with Sedation',
    recovery_days_es: '5-7 días',
    recovery_days_en: '5-7 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Tienen cejas caídas o asimétricas',
      'Presentan arrugas en la frente',
      'Desean una mirada más abierta y juvenil',
      'Buscan procedimiento menos invasivo'
    ],
    ideal_candidates_en: [
      'Have drooping or asymmetric eyebrows',
      'Present forehead wrinkles',
      'Want a more open and youthful look',
      'Seek less invasive procedure'
    ],
    package_includes_es: [
      'Procedimiento quirúrgico completo',
      'Honorarios del cirujano',
      'Anestesia y medicamentos',
      'Seguimiento post-operatorio',
      'Kit de recuperación'
    ],
    package_includes_en: [
      'Complete surgical procedure',
      'Surgeon fees',
      'Anesthesia and medications',
      'Post-operative follow-up',
      'Recovery kit'
    ]
  },
  {
    id: 'otoplasty',
    category: 'face',
    name_es: 'Otoplastia',
    name_en: 'Otoplasty',
    description_es: 'Corrige la forma y posición de las orejas para una mejor armonía facial.',
    description_en: 'Correct the shape and position of ears for better facial harmony.',
    price_usd: 1900,
    price_comparison_us: 5429,
    savings_percentage: 65,
    image: otoplastyImg,
    surgery_time_es: '1-2 horas',
    surgery_time_en: '1-2 hours',
    anesthesia_es: 'General o Local con Sedación',
    anesthesia_en: 'General or Local with Sedation',
    recovery_days_es: '7-10 días',
    recovery_days_en: '7-10 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Tienen orejas prominentes o asimétricas',
      'Desean mejorar la forma de sus orejas',
      'Buscan mayor confianza personal',
      'Son adultos o niños mayores de 5 años'
    ],
    ideal_candidates_en: [
      'Have prominent or asymmetric ears',
      'Want to improve ear shape',
      'Seek greater personal confidence',
      'Are adults or children over 5 years old'
    ],
    package_includes_es: [
      'Cirugía completa con especialista',
      'Costos de clínica y anestesia',
      'Medicamentos post-operatorios',
      'Banda de compresión',
      'Seguimiento médico'
    ],
    package_includes_en: [
      'Complete surgery with specialist',
      'Clinic and anesthesia costs',
      'Post-operative medications',
      'Compression headband',
      'Medical follow-up'
    ]
  },
  // Body Contouring (6 procedures)
  {
    id: 'liposuction',
    category: 'body',
    name_es: 'Liposucción 360°',
    name_en: '360° Liposuction',
    description_es: 'Eliminación de grasa localizada para esculpir y definir el contorno corporal.',
    description_en: 'Removal of localized fat to sculpt and define body contour.',
    price_usd: 2800,
    price_comparison_us: 7500,
    savings_percentage: 63,
    image: liposuctionImg,
    surgery_time_es: '2-4 horas',
    surgery_time_en: '2-4 hours',
    anesthesia_es: 'General o Epidural',
    anesthesia_en: 'General or Epidural',
    recovery_days_es: '7-14 días',
    recovery_days_en: '7-14 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Tienen depósitos de grasa resistentes a dieta y ejercicio',
      'Buscan mejorar su silueta',
      'Están cerca de su peso ideal',
      'Tienen buena elasticidad en la piel'
    ],
    ideal_candidates_en: [
      'Have fat deposits resistant to diet and exercise',
      'Seek to improve their silhouette',
      'Are close to their ideal weight',
      'Have good skin elasticity'
    ],
    package_includes_es: [
      'Cirugía con técnica avanzada',
      'Honorarios médicos completos',
      'Costos de clínica y anestesia',
      'Faja post-operatoria de compresión',
      'Seguimiento médico personalizado'
    ],
    package_includes_en: [
      'Surgery with advanced technique',
      'Complete medical fees',
      'Clinic and anesthesia costs',
      'Post-operative compression garment',
      'Personalized medical follow-up'
    ]
  },
  {
    id: 'tummy-tuck',
    category: 'body',
    name_es: 'Abdominoplastia',
    name_en: 'Abdominoplasty (Tummy Tuck)',
    description_es: 'Logra un perfil abdominal más plano y tonificado.',
    description_en: 'Achieve a flatter and more toned abdominal profile.',
    price_usd: 5500,
    price_comparison_us: 15714,
    savings_percentage: 65,
    image: tummyTuckImg,
    surgery_time_es: '2-4 horas',
    surgery_time_en: '2-4 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '14-21 días',
    recovery_days_en: '14-21 days',
    final_results_timeline_es: '6-12 meses',
    final_results_timeline_en: '6-12 months',
    ideal_candidates_es: [
      'Tienen exceso de piel en el abdomen',
      'Presentan músculos abdominales separados',
      'Han completado su planificación familiar',
      'No planean perder peso significativo'
    ],
    ideal_candidates_en: [
      'Have excess skin on abdomen',
      'Present separated abdominal muscles',
      'Have completed family planning',
      'Do not plan significant weight loss'
    ],
    package_includes_es: [
      'Cirujano Plástico Especializado',
      'Clínica con Quirófano Certificado',
      'Anestesia general segura',
      'Faja abdominal de compresión',
      'Citas de control post-quirúrgicas'
    ],
    package_includes_en: [
      'Specialized Plastic Surgeon',
      'Clinic with Certified Operating Room',
      'Safe general anesthesia',
      'Abdominal compression garment',
      'Post-surgical control appointments'
    ]
  },
  {
    id: 'mini-tummy-tuck',
    category: 'body',
    name_es: 'Mini Abdominoplastia',
    name_en: 'Mini Abdominoplasty',
    description_es: 'Contorno abdominal dirigido a preocupaciones moderadas.',
    description_en: 'Targeted abdominal contouring for moderate concerns.',
    price_usd: 3500,
    price_comparison_us: 8750,
    savings_percentage: 60,
    image: tummyTuckImg,
    surgery_time_es: '1.5-2.5 horas',
    surgery_time_en: '1.5-2.5 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '7-14 días',
    recovery_days_en: '7-14 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Tienen exceso de piel moderado en abdomen bajo',
      'No requieren reparación muscular extensa',
      'Buscan recuperación más rápida',
      'Tienen buena salud general'
    ],
    ideal_candidates_en: [
      'Have moderate excess skin in lower abdomen',
      'Do not require extensive muscle repair',
      'Seek faster recovery',
      'Have good general health'
    ],
    package_includes_es: [
      'Cirugía con cirujano certificado',
      'Costos de clínica y anestesia',
      'Medicamentos post-operatorios',
      'Faja de compresión',
      'Seguimiento médico'
    ],
    package_includes_en: [
      'Surgery with certified surgeon',
      'Clinic and anesthesia costs',
      'Post-operative medications',
      'Compression garment',
      'Medical follow-up'
    ]
  },
  {
    id: 'thigh-lift',
    category: 'body',
    name_es: 'Estiramiento de Muslos (Cruroplastia)',
    name_en: 'Thigh Lift (Cruroplasty)',
    description_es: 'Esculpe y levanta los muslos para mejorar los contornos.',
    description_en: 'Sculpt and lift thighs to improve contours.',
    price_usd: 2800,
    price_comparison_us: 6222,
    savings_percentage: 55,
    image: thighLiftImg,
    surgery_time_es: '2-3 horas',
    surgery_time_en: '2-3 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '14-21 días',
    recovery_days_en: '14-21 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Tienen exceso de piel en los muslos',
      'Han perdido peso significativo',
      'Buscan muslos más firmes y tonificados',
      'Tienen peso estable'
    ],
    ideal_candidates_en: [
      'Have excess skin on thighs',
      'Have lost significant weight',
      'Seek firmer and more toned thighs',
      'Have stable weight'
    ],
    package_includes_es: [
      'Procedimiento quirúrgico completo',
      'Honorarios del cirujano plástico',
      'Instalaciones y anestesia',
      'Prendas de compresión',
      'Seguimiento post-operatorio'
    ],
    package_includes_en: [
      'Complete surgical procedure',
      'Plastic surgeon fees',
      'Facilities and anesthesia',
      'Compression garments',
      'Post-operative follow-up'
    ]
  },
  {
    id: 'arm-lift',
    category: 'body',
    name_es: 'Braquioplastia',
    name_en: 'Brachioplasty (Arm Lift)',
    description_es: 'Elimina el exceso de piel en los brazos para lograr brazos tonificados y definidos.',
    description_en: 'Remove excess skin on arms to achieve toned and defined arms.',
    price_usd: 3500,
    price_comparison_us: 8750,
    savings_percentage: 60,
    image: armLiftImg,
    surgery_time_es: '2-3 horas',
    surgery_time_en: '2-3 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '10-14 días',
    recovery_days_en: '10-14 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Tienen exceso de piel en la parte superior de los brazos',
      'Han perdido peso significativo',
      'Buscan brazos más tonificados',
      'Tienen peso estable'
    ],
    ideal_candidates_en: [
      'Have excess skin on upper arms',
      'Have lost significant weight',
      'Seek more toned arms',
      'Have stable weight'
    ],
    package_includes_es: [
      'Procedimiento quirúrgico completo',
      'Honorarios del cirujano',
      'Instalaciones y anestesia',
      'Manga de compresión',
      'Seguimiento post-operatorio'
    ],
    package_includes_en: [
      'Complete surgical procedure',
      'Surgeon fees',
      'Facilities and anesthesia',
      'Compression sleeve',
      'Post-operative follow-up'
    ]
  },
  {
    id: 'body-lift',
    category: 'body',
    name_es: 'Celuloplastia',
    name_en: 'Body Lift (Celluloplasty)',
    description_es: 'Contorno corporal completo y estiramiento de la piel.',
    description_en: 'Complete body contouring and skin tightening.',
    price_usd: 4400,
    price_comparison_us: 9778,
    savings_percentage: 55,
    image: liposuctionImg,
    surgery_time_es: '4-6 horas',
    surgery_time_en: '4-6 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '21-30 días',
    recovery_days_en: '21-30 days',
    final_results_timeline_es: '6-12 meses',
    final_results_timeline_en: '6-12 months',
    ideal_candidates_es: [
      'Han perdido peso significativo',
      'Tienen exceso de piel colgante en múltiples áreas',
      'Peso estable por al menos 6 meses',
      'Comprometidos con mantener peso saludable'
    ],
    ideal_candidates_en: [
      'Have lost significant weight',
      'Have excess hanging skin in multiple areas',
      'Stable weight for at least 6 months',
      'Committed to maintaining healthy weight'
    ],
    package_includes_es: [
      'Cirugía completa de contorno corporal',
      'Equipo quirúrgico especializado',
      'Estancia en clínica',
      'Fajas de compresión especializadas',
      'Seguimiento prolongado'
    ],
    package_includes_en: [
      'Complete body contouring surgery',
      'Specialized surgical team',
      'Clinic stay',
      'Specialized compression garments',
      'Extended follow-up'
    ]
  },
  // Breast (4 procedures)
  {
    id: 'breast-augmentation',
    category: 'breast',
    name_es: 'Implantes de Senos',
    name_en: 'Breast Implants',
    description_es: 'Mejora las curvas naturales con implantes de primera calidad.',
    description_en: 'Enhance natural curves with premium implants.',
    price_usd: 4000,
    price_comparison_us: 10000,
    savings_percentage: 60,
    image: breastAugmentationImg,
    surgery_time_es: '1-2 horas',
    surgery_time_en: '1-2 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '7-10 días',
    recovery_days_en: '7-10 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Desean aumentar el tamaño de sus senos',
      'Buscan mejorar la simetría mamaria',
      'Tienen expectativas realistas',
      'Gozan de buena salud'
    ],
    ideal_candidates_en: [
      'Want to increase breast size',
      'Seek to improve breast symmetry',
      'Have realistic expectations',
      'Enjoy good health'
    ],
    package_includes_es: [
      'Implantes de alta calidad (incluidos)',
      'Cirugía con cirujano certificado',
      'Costos de clínica y anestesia',
      'Sostén post-operatorio',
      'Seguimiento completo'
    ],
    package_includes_en: [
      'High-quality implants (included)',
      'Surgery with certified surgeon',
      'Clinic and anesthesia costs',
      'Post-operative bra',
      'Complete follow-up'
    ]
  },
  {
    id: 'breast-lift',
    category: 'breast',
    name_es: 'Mastopexia (con/sin implantes)',
    name_en: 'Mastopexy (with/without implants)',
    description_es: 'Levanta y remodela los senos para mejorar su posición.',
    description_en: 'Lift and reshape breasts to improve their position.',
    price_usd: 4300,
    price_comparison_us: 9556,
    savings_percentage: 55,
    image: breastLiftImg,
    surgery_time_es: '2-3 horas',
    surgery_time_en: '2-3 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '10-14 días',
    recovery_days_en: '10-14 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Tienen senos caídos o con pérdida de firmeza',
      'Los pezones apuntan hacia abajo',
      'Buscan una apariencia más juvenil',
      'No planean embarazos futuros cercanos'
    ],
    ideal_candidates_en: [
      'Have sagging breasts or loss of firmness',
      'Nipples point downward',
      'Seek a more youthful appearance',
      'Do not plan future pregnancies soon'
    ],
    package_includes_es: [
      'Procedimiento de lifting completo',
      'Cirujano certificado',
      'Instalaciones acreditadas',
      'Sostén post-quirúrgico',
      'Seguimiento médico'
    ],
    package_includes_en: [
      'Complete lifting procedure',
      'Certified surgeon',
      'Accredited facilities',
      'Post-surgical bra',
      'Medical follow-up'
    ]
  },
  {
    id: 'breast-reduction',
    category: 'breast',
    name_es: 'Reducción de Senos',
    name_en: 'Breast Reduction',
    description_es: 'Encuentra alivio y logra proporciones equilibradas.',
    description_en: 'Find relief and achieve balanced proportions.',
    price_usd: 4300,
    price_comparison_us: 10750,
    savings_percentage: 60,
    image: breastReductionImg,
    surgery_time_es: '2-4 horas',
    surgery_time_en: '2-4 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '14-21 días',
    recovery_days_en: '14-21 days',
    final_results_timeline_es: '6-12 meses',
    final_results_timeline_en: '6-12 months',
    ideal_candidates_es: [
      'Experimentan dolor de espalda o cuello por senos grandes',
      'Tienen dificultad para hacer ejercicio',
      'Buscan mejorar su calidad de vida',
      'Desean una proporción más equilibrada'
    ],
    ideal_candidates_en: [
      'Experience back or neck pain from large breasts',
      'Have difficulty exercising',
      'Seek to improve quality of life',
      'Want a more balanced proportion'
    ],
    package_includes_es: [
      'Cirugía completa con especialista',
      'Honorarios médicos',
      'Clínica y anestesia',
      'Sostén de soporte especial',
      'Control post-operatorio'
    ],
    package_includes_en: [
      'Complete surgery with specialist',
      'Medical fees',
      'Clinic and anesthesia',
      'Special support bra',
      'Post-operative control'
    ]
  },
  {
    id: 'breast-implant-replacement',
    category: 'breast',
    name_es: 'Reemplazo de Implantes de Senos',
    name_en: 'Breast Implant Replacement',
    description_es: 'Actualiza o reemplaza los implantes existentes para obtener mejores resultados.',
    description_en: 'Update or replace existing implants for better results.',
    price_usd: 3800,
    price_comparison_us: 8444,
    savings_percentage: 55,
    image: breastAugmentationImg,
    surgery_time_es: '1-2 horas',
    surgery_time_en: '1-2 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '7-10 días',
    recovery_days_en: '7-10 days',
    final_results_timeline_es: '2-3 meses',
    final_results_timeline_en: '2-3 months',
    ideal_candidates_es: [
      'Tienen implantes antiguos que necesitan reemplazo',
      'Desean cambiar tamaño o tipo de implante',
      'Experimentan complicaciones con implantes actuales',
      'Buscan actualizar sus implantes'
    ],
    ideal_candidates_en: [
      'Have old implants that need replacement',
      'Want to change implant size or type',
      'Experience complications with current implants',
      'Seek to update their implants'
    ],
    package_includes_es: [
      'Nuevos implantes de alta calidad',
      'Remoción de implantes anteriores',
      'Cirugía con cirujano certificado',
      'Costos de clínica y anestesia',
      'Seguimiento post-operatorio'
    ],
    package_includes_en: [
      'New high-quality implants',
      'Removal of previous implants',
      'Surgery with certified surgeon',
      'Clinic and anesthesia costs',
      'Post-operative follow-up'
    ]
  },
  // Buttocks (3 procedures)
  {
    id: 'butt-implants',
    category: 'buttocks',
    name_es: 'Implantes de Glúteos',
    name_en: 'Butt Implants',
    description_es: 'Logra curvas mejoradas con implantes de primera calidad.',
    description_en: 'Achieve enhanced curves with premium implants.',
    price_usd: 5800,
    price_comparison_us: 16571,
    savings_percentage: 65,
    image: bblImg,
    surgery_time_es: '2-3 horas',
    surgery_time_en: '2-3 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '14-21 días',
    recovery_days_en: '14-21 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Desean aumentar el volumen de los glúteos',
      'No tienen suficiente grasa para lipoescultura',
      'Buscan resultados permanentes',
      'Gozan de buena salud general'
    ],
    ideal_candidates_en: [
      'Want to increase buttock volume',
      'Do not have enough fat for fat transfer',
      'Seek permanent results',
      'Enjoy good general health'
    ],
    package_includes_es: [
      'Implantes de silicona de alta calidad',
      'Cirugía con cirujano certificado',
      'Costos de clínica y anestesia',
      'Faja de compresión especializada',
      'Seguimiento post-operatorio completo'
    ],
    package_includes_en: [
      'High-quality silicone implants',
      'Surgery with certified surgeon',
      'Clinic and anesthesia costs',
      'Specialized compression garment',
      'Complete post-operative follow-up'
    ]
  },
  {
    id: 'gluteoplasty',
    category: 'buttocks',
    name_es: 'Gluteoplastia',
    name_en: 'Gluteoplasty',
    description_es: 'Mejora y moldea integralmente los glúteos.',
    description_en: 'Comprehensively enhance and shape the buttocks.',
    price_usd: 5999,
    price_comparison_us: 14998,
    savings_percentage: 60,
    image: bblImg,
    surgery_time_es: '2-4 horas',
    surgery_time_en: '2-4 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '14-21 días',
    recovery_days_en: '14-21 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Buscan remodelación completa de glúteos',
      'Desean mejorar forma y proyección',
      'Tienen exceso de piel o flacidez',
      'Quieren resultados naturales y duraderos'
    ],
    ideal_candidates_en: [
      'Seek complete buttock reshaping',
      'Want to improve shape and projection',
      'Have excess skin or sagging',
      'Want natural and lasting results'
    ],
    package_includes_es: [
      'Procedimiento completo de remodelación',
      'Cirujano plástico certificado',
      'Costos de clínica y anestesia',
      'Fajas post-operatorias',
      'Seguimiento médico especializado'
    ],
    package_includes_en: [
      'Complete reshaping procedure',
      'Board certified plastic surgeon',
      'Clinic and anesthesia costs',
      'Post-operative garments',
      'Specialized medical follow-up'
    ]
  },
  {
    id: 'biopolymer-removal-buttocks',
    category: 'buttocks',
    name_es: 'Eliminación de Biopolímeros de Glúteos',
    name_en: 'Buttock Biopolymer Removal',
    description_es: 'Eliminación segura de rellenos de biopolímeros con reconstrucción.',
    description_en: 'Safe removal of biopolymer fillers with reconstruction.',
    price_usd: 1200,
    price_comparison_us: 4000,
    savings_percentage: 70,
    image: bblImg,
    surgery_time_es: '2-3 horas',
    surgery_time_en: '2-3 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '10-14 días',
    recovery_days_en: '10-14 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Tienen biopolímeros inyectados previamente',
      'Experimentan complicaciones o malestar',
      'Buscan eliminar sustancias peligrosas',
      'Desean reconstrucción segura'
    ],
    ideal_candidates_en: [
      'Have previously injected biopolymers',
      'Experience complications or discomfort',
      'Seek to remove dangerous substances',
      'Want safe reconstruction'
    ],
    package_includes_es: [
      'Procedimiento de eliminación completo',
      'Cirujano especialista en reconstrucción',
      'Costos de clínica y anestesia',
      'Seguimiento post-operatorio',
      'Valoración de reconstrucción'
    ],
    package_includes_en: [
      'Complete removal procedure',
      'Reconstruction specialist surgeon',
      'Clinic and anesthesia costs',
      'Post-operative follow-up',
      'Reconstruction assessment'
    ]
  },
  // Combined Procedures (3 procedures)
  {
    id: 'lipo-breast-implants',
    category: 'combined',
    name_es: 'Liposucción + Implantes de Senos',
    name_en: 'Liposuction + Breast Implants',
    description_es: 'Mejora completa del cuerpo y los senos.',
    description_en: 'Complete body and breast enhancement.',
    price_usd: 8800,
    price_comparison_us: 25143,
    savings_percentage: 65,
    image: mommyMakeoverImg,
    surgery_time_es: '3-5 horas',
    surgery_time_en: '3-5 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '14-21 días',
    recovery_days_en: '14-21 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Desean mejorar cuerpo y senos simultáneamente',
      'Buscan transformación completa',
      'Tienen buena salud general',
      'Están dispuestos a recuperación prolongada'
    ],
    ideal_candidates_en: [
      'Want to improve body and breasts simultaneously',
      'Seek complete transformation',
      'Have good general health',
      'Are willing to extended recovery'
    ],
    package_includes_es: [
      'Liposucción de áreas múltiples',
      'Implantes de senos de alta calidad',
      'Cirugía con cirujano certificado',
      'Costos de clínica y anestesia',
      'Fajas y sostenes post-operatorios',
      'Seguimiento médico completo'
    ],
    package_includes_en: [
      'Multiple area liposuction',
      'High-quality breast implants',
      'Surgery with certified surgeon',
      'Clinic and anesthesia costs',
      'Post-operative garments and bras',
      'Complete medical follow-up'
    ]
  },
  {
    id: 'lipo-rhinoplasty',
    category: 'combined',
    name_es: 'Liposucción + Rinoplastia',
    name_en: 'Liposuction + Rhinoplasty',
    description_es: 'Contorno facial y corporal combinado.',
    description_en: 'Combined facial and body contouring.',
    price_usd: 7500,
    price_comparison_us: 18750,
    savings_percentage: 60,
    image: facialRejuvenationImg,
    surgery_time_es: '4-6 horas',
    surgery_time_en: '4-6 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '10-14 días',
    recovery_days_en: '10-14 days',
    final_results_timeline_es: '6-12 meses',
    final_results_timeline_en: '6-12 months',
    ideal_candidates_es: [
      'Buscan mejorar rostro y cuerpo a la vez',
      'Desean una transformación integral',
      'Tienen expectativas realistas',
      'Gozan de buena salud'
    ],
    ideal_candidates_en: [
      'Seek to improve face and body at once',
      'Want comprehensive transformation',
      'Have realistic expectations',
      'Enjoy good health'
    ],
    package_includes_es: [
      'Rinoplastia completa',
      'Liposucción de áreas seleccionadas',
      'Cirujano plástico certificado',
      'Costos de clínica y anestesia',
      'Faja de compresión',
      'Seguimiento post-operatorio'
    ],
    package_includes_en: [
      'Complete rhinoplasty',
      'Liposuction of selected areas',
      'Board certified plastic surgeon',
      'Clinic and anesthesia costs',
      'Compression garment',
      'Post-operative follow-up'
    ]
  },
  {
    id: 'mommy-makeover',
    category: 'combined',
    name_es: 'Abdominoplastia + Mastopexia + Liposucción',
    name_en: 'Abdominoplasty + Mastopexy + Liposuction',
    description_es: 'Paquete completo de transformación corporal.',
    description_en: 'Complete body transformation package.',
    price_usd: 11500,
    price_comparison_us: 38333,
    savings_percentage: 70,
    image: mommyMakeoverImg,
    surgery_time_es: '5-7 horas',
    surgery_time_en: '5-7 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '21-30 días',
    recovery_days_en: '21-30 days',
    final_results_timeline_es: '6-12 meses',
    final_results_timeline_en: '6-12 months',
    ideal_candidates_es: [
      'Han completado su planificación familiar',
      'Buscan transformación post-embarazo completa',
      'Tienen buena salud general',
      'Están comprometidas con el proceso de recuperación'
    ],
    ideal_candidates_en: [
      'Have completed family planning',
      'Seek complete post-pregnancy transformation',
      'Have good general health',
      'Are committed to recovery process'
    ],
    package_includes_es: [
      'Abdominoplastia completa',
      'Levantamiento de senos',
      'Liposucción de áreas múltiples',
      'Cirujano plástico certificado',
      'Costos de clínica y anestesia',
      'Fajas y sostenes post-operatorios',
      'Seguimiento médico prolongado'
    ],
    package_includes_en: [
      'Complete abdominoplasty',
      'Breast lift',
      'Multiple area liposuction',
      'Board certified plastic surgeon',
      'Clinic and anesthesia costs',
      'Post-operative garments and bras',
      'Extended medical follow-up'
    ]
  },
  // Specialized (5 procedures)
  {
    id: 'gynecomastia',
    category: 'specialized',
    name_es: 'Cirugía de Ginecomastia',
    name_en: 'Gynecomastia Surgery',
    description_es: 'Elimina el exceso de tejido mamario en hombres.',
    description_en: 'Remove excess breast tissue in men.',
    price_usd: 3100,
    price_comparison_us: 7750,
    savings_percentage: 60,
    image: breastReductionImg,
    surgery_time_es: '1.5-2.5 horas',
    surgery_time_en: '1.5-2.5 hours',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days_es: '7-10 días',
    recovery_days_en: '7-10 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Tienen agrandamiento del tejido mamario masculino',
      'Buscan un pecho más masculino y plano',
      'No responden a dieta y ejercicio',
      'Tienen buena salud general'
    ],
    ideal_candidates_en: [
      'Have male breast tissue enlargement',
      'Seek a more masculine, flat chest',
      'Do not respond to diet and exercise',
      'Have good general health'
    ],
    package_includes_es: [
      'Cirugía completa con especialista',
      'Costos de clínica y anestesia',
      'Medicamentos post-operatorios',
      'Faja de compresión masculina',
      'Seguimiento médico'
    ],
    package_includes_en: [
      'Complete surgery with specialist',
      'Clinic and anesthesia costs',
      'Post-operative medications',
      'Male compression garment',
      'Medical follow-up'
    ]
  },
  {
    id: 'bichectomy',
    category: 'specialized',
    name_es: 'Bichectomía',
    name_en: 'Bichectomy',
    description_es: 'Adelgaza el rostro con la eliminación de la grasa bucal.',
    description_en: 'Slim the face with buccal fat removal.',
    price_usd: 1300,
    price_comparison_us: 3714,
    savings_percentage: 65,
    image: faceliftImg,
    surgery_time_es: '30-60 minutos',
    surgery_time_en: '30-60 minutes',
    anesthesia_es: 'Local con Sedación',
    anesthesia_en: 'Local with Sedation',
    recovery_days_es: '3-5 días',
    recovery_days_en: '3-5 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Desean un rostro más delgado y definido',
      'Tienen mejillas prominentes',
      'Buscan contornos faciales más marcados',
      'Son mayores de 25 años'
    ],
    ideal_candidates_en: [
      'Want a slimmer and more defined face',
      'Have prominent cheeks',
      'Seek more defined facial contours',
      'Are over 25 years old'
    ],
    package_includes_es: [
      'Procedimiento completo',
      'Honorarios del cirujano',
      'Anestesia y medicamentos',
      'Seguimiento post-operatorio',
      'Instrucciones de cuidado'
    ],
    package_includes_en: [
      'Complete procedure',
      'Surgeon fees',
      'Anesthesia and medications',
      'Post-operative follow-up',
      'Care instructions'
    ]
  },
  {
    id: 'cheek-surgery',
    category: 'specialized',
    name_es: 'Cirugía de Mejillas (Meloplastia)',
    name_en: 'Cheek Surgery (Meloplasty)',
    description_es: 'Mejora los contornos faciales con el aumento de mejillas.',
    description_en: 'Enhance facial contours with cheek augmentation.',
    price_usd: 5600,
    price_comparison_us: 12444,
    savings_percentage: 55,
    image: faceliftImg,
    surgery_time_es: '1.5-2.5 horas',
    surgery_time_en: '1.5-2.5 hours',
    anesthesia_es: 'General o Local con Sedación',
    anesthesia_en: 'General or Local with Sedation',
    recovery_days_es: '7-10 días',
    recovery_days_en: '7-10 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Desean mejillas más prominentes o definidas',
      'Tienen pérdida de volumen facial',
      'Buscan mejorar armonía facial',
      'Gozan de buena salud'
    ],
    ideal_candidates_en: [
      'Want more prominent or defined cheeks',
      'Have facial volume loss',
      'Seek to improve facial harmony',
      'Enjoy good health'
    ],
    package_includes_es: [
      'Implantes de mejilla o grasa autóloga',
      'Cirugía con cirujano certificado',
      'Costos de clínica y anestesia',
      'Medicamentos post-operatorios',
      'Seguimiento médico'
    ],
    package_includes_en: [
      'Cheek implants or autologous fat',
      'Surgery with certified surgeon',
      'Clinic and anesthesia costs',
      'Post-operative medications',
      'Medical follow-up'
    ]
  },
  {
    id: 'scar-revision',
    category: 'specialized',
    name_es: 'Cirugía de Revisión de Cicatrices',
    name_en: 'Scar Revision Surgery',
    description_es: 'Mejora la apariencia de las cicatrices.',
    description_en: 'Improve the appearance of scars.',
    price_usd: 1600,
    price_comparison_us: 4000,
    savings_percentage: 60,
    image: facialRejuvenationImg,
    surgery_time_es: '1-2 horas',
    surgery_time_en: '1-2 hours',
    anesthesia_es: 'Local con Sedación',
    anesthesia_en: 'Local with Sedation',
    recovery_days_es: '7-10 días',
    recovery_days_en: '7-10 days',
    final_results_timeline_es: '6-12 meses',
    final_results_timeline_en: '6-12 months',
    ideal_candidates_es: [
      'Tienen cicatrices visibles o molestas',
      'Desean mejorar apariencia de cicatrices',
      'Cicatrices han madurado (más de 1 año)',
      'Tienen expectativas realistas'
    ],
    ideal_candidates_en: [
      'Have visible or bothersome scars',
      'Want to improve scar appearance',
      'Scars have matured (over 1 year)',
      'Have realistic expectations'
    ],
    package_includes_es: [
      'Evaluación completa de cicatrices',
      'Procedimiento de revisión',
      'Costos de clínica y anestesia',
      'Tratamientos post-operatorios',
      'Seguimiento hasta resultados finales'
    ],
    package_includes_en: [
      'Complete scar evaluation',
      'Revision procedure',
      'Clinic and anesthesia costs',
      'Post-operative treatments',
      'Follow-up until final results'
    ]
  },
  {
    id: 'biopolymer-removal',
    category: 'specialized',
    name_es: 'Cirugía de Eliminación de Biopolímeros',
    name_en: 'Biopolymer Removal Surgery',
    description_es: 'Eliminación segura de rellenos de biopolímeros.',
    description_en: 'Safe removal of biopolymer fillers.',
    price_usd: 1500,
    price_comparison_us: 5000,
    savings_percentage: 70,
    image: facialRejuvenationImg,
    surgery_time_es: '1-3 horas',
    surgery_time_en: '1-3 hours',
    anesthesia_es: 'General o Local con Sedación',
    anesthesia_en: 'General or Local with Sedation',
    recovery_days_es: '7-14 días',
    recovery_days_en: '7-14 days',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Tienen biopolímeros inyectados previamente',
      'Experimentan complicaciones',
      'Buscan eliminar sustancias peligrosas',
      'Desean reconstrucción segura'
    ],
    ideal_candidates_en: [
      'Have previously injected biopolymers',
      'Experience complications',
      'Seek to remove dangerous substances',
      'Want safe reconstruction'
    ],
    package_includes_es: [
      'Procedimiento de eliminación completo',
      'Cirujano especialista',
      'Costos de clínica y anestesia',
      'Seguimiento post-operatorio',
      'Valoración de reconstrucción'
    ],
    package_includes_en: [
      'Complete removal procedure',
      'Specialist surgeon',
      'Clinic and anesthesia costs',
      'Post-operative follow-up',
      'Reconstruction assessment'
    ]
  }
];

export const getCategoryProcedures = (category: Procedure['category']) => {
  return procedures.filter(p => p.category === category);
};

export const getProcedureById = (id: string) => {
  return procedures.find(p => p.id === id);
};