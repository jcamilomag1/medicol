export interface Procedure {
  id: string;
  category: 'face' | 'body' | 'breast' | 'reconstructive';
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  price_usd: number;
  price_comparison_us: number;
  savings_percentage: number;
  image: string;
  surgery_time: string;
  anesthesia_es: string;
  anesthesia_en: string;
  recovery_days: string;
  final_results_timeline_es: string;
  final_results_timeline_en: string;
  ideal_candidates_es: string[];
  ideal_candidates_en: string[];
  package_includes_es: string[];
  package_includes_en: string[];
}

export const procedures: Procedure[] = [
  // Face & Neck
  {
    id: 'rhinoplasty',
    category: 'face',
    name_es: 'Rinoplastia',
    name_en: 'Rhinoplasty',
    description_es: 'Remodelación de la nariz para mejorar su apariencia y función respiratoria.',
    description_en: 'Nose reshaping to improve appearance and breathing function.',
    price_usd: 2500,
    price_comparison_us: 8000,
    savings_percentage: 69,
    image: '/placeholder.svg',
    surgery_time: '2-3 horas',
    anesthesia_es: 'General o Local con Sedación',
    anesthesia_en: 'General or Local with Sedation',
    recovery_days: '7-10 días',
    final_results_timeline_es: '6-12 meses',
    final_results_timeline_en: '6-12 months',
    ideal_candidates_es: [
      'Desean mejorar la forma de su nariz',
      'Buscan corregir problemas respiratorios',
      'Tienen expectativas realistas',
      'Gozan de buena salud general'
    ],
    ideal_candidates_en: [
      'Want to improve their nose shape',
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
    id: 'blepharoplasty',
    category: 'face',
    name_es: 'Blefaroplastia',
    name_en: 'Blepharoplasty',
    description_es: 'Cirugía de párpados para rejuvenecer la mirada eliminando exceso de piel y grasa.',
    description_en: 'Eyelid surgery to rejuvenate the look by removing excess skin and fat.',
    price_usd: 2200,
    price_comparison_us: 6500,
    savings_percentage: 66,
    image: '/placeholder.svg',
    surgery_time: '1-2 horas',
    anesthesia_es: 'Local con Sedación',
    anesthesia_en: 'Local with Sedation',
    recovery_days: '5-7 días',
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
    name_es: 'Lifting Facial',
    name_en: 'Facelift',
    description_es: 'Rejuvenecimiento facial completo para reducir arrugas y tensar la piel.',
    description_en: 'Complete facial rejuvenation to reduce wrinkles and tighten skin.',
    price_usd: 4500,
    price_comparison_us: 15000,
    savings_percentage: 70,
    image: '/placeholder.svg',
    surgery_time: '3-4 horas',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days: '14-21 días',
    final_results_timeline_es: '6-12 meses',
    final_results_timeline_en: '6-12 months',
    ideal_candidates_es: [
      'Tienen flacidez en rostro y cuello',
      'Presentan arrugas profundas',
      'Desean un rejuvenecimiento facial significativo',
      'Están en buenas condiciones de salud'
    ],
    ideal_candidates_en: [
      'Have sagging in face and neck',
      'Present deep wrinkles',
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
  // Body Contouring
  {
    id: 'liposuction',
    category: 'body',
    name_es: 'Liposucción',
    name_en: 'Liposuction',
    description_es: 'Eliminación de grasa localizada para esculpir y definir el contorno corporal.',
    description_en: 'Removal of localized fat to sculpt and define body contour.',
    price_usd: 2800,
    price_comparison_us: 7500,
    savings_percentage: 63,
    image: '/placeholder.svg',
    surgery_time: '2-4 horas',
    anesthesia_es: 'General o Epidural',
    anesthesia_en: 'General or Epidural',
    recovery_days: '7-14 días',
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
    name_en: 'Tummy Tuck',
    description_es: 'Eliminación de piel y grasa excedente del abdomen para un vientre plano y firme.',
    description_en: 'Removal of excess skin and fat from abdomen for a flat, firm belly.',
    price_usd: 3800,
    price_comparison_us: 12000,
    savings_percentage: 68,
    image: '/placeholder.svg',
    surgery_time: '2-4 horas',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days: '14-21 días',
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
    id: 'arm-lift',
    category: 'body',
    name_es: 'Lifting de Brazos',
    name_en: 'Arm Lift',
    description_es: 'Eliminación de piel flácida en brazos para lucir contornos definidos.',
    description_en: 'Removal of sagging skin on arms for defined contours.',
    price_usd: 3200,
    price_comparison_us: 9500,
    savings_percentage: 66,
    image: '/placeholder.svg',
    surgery_time: '2-3 horas',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days: '10-14 días',
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
  // Breast
  {
    id: 'breast-augmentation',
    category: 'breast',
    name_es: 'Aumento de Senos',
    name_en: 'Breast Augmentation',
    description_es: 'Aumento del tamaño y mejora de la forma de los senos con implantes.',
    description_en: 'Increase breast size and improve shape with implants.',
    price_usd: 3500,
    price_comparison_us: 10000,
    savings_percentage: 65,
    image: '/placeholder.svg',
    surgery_time: '1-2 horas',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days: '7-10 días',
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
    id: 'breast-reduction',
    category: 'breast',
    name_es: 'Reducción de Senos',
    name_en: 'Breast Reduction',
    description_es: 'Reducción del tamaño de los senos para aliviar molestias y mejorar proporción.',
    description_en: 'Reduce breast size to relieve discomfort and improve proportion.',
    price_usd: 3800,
    price_comparison_us: 11000,
    savings_percentage: 65,
    image: '/placeholder.svg',
    surgery_time: '2-4 horas',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days: '14-21 días',
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
    id: 'breast-lift',
    category: 'breast',
    name_es: 'Levantamiento de Senos',
    name_en: 'Breast Lift',
    description_es: 'Elevación y remodelación de senos caídos para una apariencia más juvenil.',
    description_en: 'Lift and reshape sagging breasts for a more youthful appearance.',
    price_usd: 3300,
    price_comparison_us: 9500,
    savings_percentage: 65,
    image: '/placeholder.svg',
    surgery_time: '2-3 horas',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days: '10-14 días',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Tienen senos caídos o con pérdida de firmeza',
      'Los pezones apuntan hacia abajo',
      'Buscan una apariencia más juvenil',
      'No planean embarazos futuros'
    ],
    ideal_candidates_en: [
      'Have sagging breasts or loss of firmness',
      'Nipples point downward',
      'Seek a more youthful appearance',
      'Do not plan future pregnancies'
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
  // Reconstructive
  {
    id: 'post-bariatric',
    category: 'reconstructive',
    name_es: 'Cirugía Post-Bariátrica',
    name_en: 'Post-Bariatric Surgery',
    description_es: 'Eliminación de exceso de piel después de pérdida masiva de peso.',
    description_en: 'Removal of excess skin after massive weight loss.',
    price_usd: 6500,
    price_comparison_us: 20000,
    savings_percentage: 68,
    image: '/placeholder.svg',
    surgery_time: '4-6 horas',
    anesthesia_es: 'General',
    anesthesia_en: 'General',
    recovery_days: '21-30 días',
    final_results_timeline_es: '12-18 meses',
    final_results_timeline_en: '12-18 months',
    ideal_candidates_es: [
      'Han perdido peso significativo',
      'Tienen peso estable por al menos 6 meses',
      'Presentan exceso de piel colgante',
      'Están comprometidos con mantener peso saludable'
    ],
    ideal_candidates_en: [
      'Have lost significant weight',
      'Have stable weight for at least 6 months',
      'Present excess hanging skin',
      'Are committed to maintaining healthy weight'
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
  }
];

export const getCategoryProcedures = (category: Procedure['category']) => {
  return procedures.filter(p => p.category === category);
};

export const getProcedureById = (id: string) => {
  return procedures.find(p => p.id === id);
};