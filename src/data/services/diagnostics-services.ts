export interface DiagnosticProgram {
  id: string;
  category: 'executive' | 'second-opinion' | 'proactive' | 'genetic';
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  price_usd: number;
  price_comparison_us: number;
  savings_percentage: number;
  image: string;
  treatment_time: string;
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

export const diagnosticPrograms: DiagnosticProgram[] = [
  {
    id: 'executive-checkup',
    category: 'executive',
    name_es: 'Chequeo Ejecutivo Integral',
    name_en: 'Comprehensive Executive Checkup',
    description_es: 'Optimizado para el líder ocupado. Un día de evaluaciones integrales (cardíacas, metabólicas, oncológicas y físicas) para un panorama completo de tu salud en 24-48 horas.',
    description_en: 'Optimized for busy leaders. One day of comprehensive evaluations (cardiac, metabolic, oncological, and physical) for a complete health overview in 24-48 hours.',
    price_usd: 2500,
    price_comparison_us: 8000,
    savings_percentage: 69,
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    treatment_time: '1-2 días',
    anesthesia_es: 'No requerida',
    anesthesia_en: 'Not required',
    recovery_days: 'Inmediato',
    final_results_timeline_es: '24-48 horas',
    final_results_timeline_en: '24-48 hours',
    ideal_candidates_es: [
      'Ejecutivos con agenda ocupada',
      'Personas que buscan prevención proactiva',
      'Mayores de 35 años sin chequeo reciente',
      'Quienes desean un panorama completo de salud'
    ],
    ideal_candidates_en: [
      'Executives with busy schedules',
      'People seeking proactive prevention',
      'Over 35 without recent checkup',
      'Those wanting complete health overview'
    ],
    package_includes_es: [
      'Panel de marcadores tumorales completo',
      'Prueba de esfuerzo cardíaco con monitoreo',
      'Resonancia magnética (MRI) si necesario',
      'Panel metabólico completo y hemograma',
      'Consulta cardiológica especializada',
      'Evaluación de riesgo cardiovascular',
      'Reporte consolidado bilingüe',
      'Consulta de resultados con especialista'
    ],
    package_includes_en: [
      'Complete tumor marker panel',
      'Cardiac stress test with monitoring',
      'Magnetic Resonance Imaging (MRI) if needed',
      'Complete metabolic panel and blood count',
      'Specialized cardiology consultation',
      'Cardiovascular risk assessment',
      'Bilingual consolidated report',
      'Results consultation with specialist'
    ]
  },
  {
    id: 'second-opinion',
    category: 'second-opinion',
    name_es: 'Evaluación de Segunda Opinión',
    name_en: 'Second Opinion Evaluation',
    description_es: '¿Dudas de un diagnóstico actual? Nuestro panel de especialistas en Medellín utiliza la última tecnología en imagenología (PET-CT, MRI 3-Tesla) para darte claridad y certeza.',
    description_en: 'Doubts about a current diagnosis? Our panel of specialists in Medellín uses the latest imaging technology (PET-CT, 3-Tesla MRI) to give you clarity and certainty.',
    price_usd: 1800,
    price_comparison_us: 6000,
    savings_percentage: 70,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    treatment_time: '2-3 días',
    anesthesia_es: 'No requerida',
    anesthesia_en: 'Not required',
    recovery_days: 'Inmediato',
    final_results_timeline_es: '3-5 días laborables',
    final_results_timeline_en: '3-5 business days',
    ideal_candidates_es: [
      'Diagnóstico médico que requiere confirmación',
      'Tratamientos propuestos con alta complejidad',
      'Deseo de segunda opinión especializada',
      'Casos médicos difíciles o atípicos'
    ],
    ideal_candidates_en: [
      'Medical diagnosis requiring confirmation',
      'Proposed treatments with high complexity',
      'Desire for specialized second opinion',
      'Difficult or atypical medical cases'
    ],
    package_includes_es: [
      'Revisión por panel multidisciplinario de especialistas',
      'PET-CT de cuerpo completo con contraste',
      'Resonancia magnética 3-Tesla de alta resolución',
      'Análisis comparativo con estudios previos',
      'Reporte médico consolidado bilingüe',
      'Consulta presencial con especialista líder',
      'Plan de tratamiento alternativo si aplica',
      'Coordina citas virtuales de seguimiento'
    ],
    package_includes_en: [
      'Review by multidisciplinary panel of specialists',
      'Full-body PET-CT with contrast',
      'High-resolution 3-Tesla MRI',
      'Comparative analysis with previous studies',
      'Bilingual consolidated medical report',
      'In-person consultation with lead specialist',
      'Alternative treatment plan if applicable',
      'Virtual follow-up appointment coordination'
    ]
  },
  {
    id: 'proactive-screening',
    category: 'proactive',
    name_es: 'Screening Proactivo',
    name_en: 'Proactive Screening',
    description_es: 'Programas enfocados para la detección temprana de condiciones de alto riesgo (Cardíaco, Oncológico, Neurológico). Medicina de precisión para adelantarse a la enfermedad.',
    description_en: 'Focused programs for early detection of high-risk conditions (Cardiac, Oncological, Neurological). Precision medicine to stay ahead of disease.',
    price_usd: 1500,
    price_comparison_us: 5500,
    savings_percentage: 73,
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80',
    treatment_time: '1 día',
    anesthesia_es: 'No requerida',
    anesthesia_en: 'Not required',
    recovery_days: 'Inmediato',
    final_results_timeline_es: '48 horas',
    final_results_timeline_en: '48 hours',
    ideal_candidates_es: [
      'Historial familiar de enfermedades cardíacas o cáncer',
      'Personas entre 40-65 años sin síntomas',
      'Estilo de vida de alto estrés',
      'Búsqueda de detección temprana preventiva'
    ],
    ideal_candidates_en: [
      'Family history of heart disease or cancer',
      'People aged 40-65 without symptoms',
      'High-stress lifestyle',
      'Seeking preventive early detection'
    ],
    package_includes_es: [
      'Screening cardíaco completo con ecocardiograma',
      'Panel de marcadores oncológicos específicos',
      'Evaluación neurológica con pruebas cognitivas',
      'Análisis de riesgo genético básico',
      'Tomografía computarizada de tórax baja dosis',
      'Perfil lipídico avanzado',
      'Análisis de biomarcadores inflamatorios',
      'Plan personalizado de prevención'
    ],
    package_includes_en: [
      'Complete cardiac screening with echocardiogram',
      'Specific oncological marker panel',
      'Neurological evaluation with cognitive tests',
      'Basic genetic risk analysis',
      'Low-dose chest CT scan',
      'Advanced lipid profile',
      'Inflammatory biomarker analysis',
      'Personalized prevention plan'
    ]
  },
  {
    id: 'genetic-longevity',
    category: 'genetic',
    name_es: 'Diagnóstico Genético y Longevidad',
    name_en: 'Genetic Diagnosis and Longevity',
    description_es: 'Mapea tu perfil genético y marcadores biológicos. Creamos un plan proactivo de longevidad y anti-envejecimiento basado en tu ADN.',
    description_en: 'Map your genetic profile and biological markers. We create a proactive longevity and anti-aging plan based on your DNA.',
    price_usd: 3200,
    price_comparison_us: 10000,
    savings_percentage: 68,
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
    treatment_time: '1 día',
    anesthesia_es: 'No requerida',
    anesthesia_en: 'Not required',
    recovery_days: 'Inmediato',
    final_results_timeline_es: '2-3 semanas',
    final_results_timeline_en: '2-3 weeks',
    ideal_candidates_es: [
      'Interesados en medicina de precisión personalizada',
      'Búsqueda de optimización de longevidad',
      'Historial familiar de enfermedades genéticas',
      'Deseo de plan de salud basado en genética'
    ],
    ideal_candidates_en: [
      'Interested in personalized precision medicine',
      'Seeking longevity optimization',
      'Family history of genetic diseases',
      'Desire for genetics-based health plan'
    ],
    package_includes_es: [
      'Secuenciación genómica completa (whole genome)',
      'Análisis de marcadores de longevidad (telómeros)',
      'Panel de farmacogenética (respuesta a medicamentos)',
      'Evaluación de riesgo de enfermedades hereditarias',
      'Análisis epigenético (edad biológica vs cronológica)',
      'Plan personalizado de nutrición genética',
      'Protocolo de suplementación personalizado',
      'Consulta con especialista en medicina de precisión',
      'Informe completo con interpretación genética',
      'Seguimiento anual de marcadores biológicos'
    ],
    package_includes_en: [
      'Complete genomic sequencing (whole genome)',
      'Longevity marker analysis (telomeres)',
      'Pharmacogenetics panel (drug response)',
      'Hereditary disease risk assessment',
      'Epigenetic analysis (biological vs chronological age)',
      'Personalized genetic nutrition plan',
      'Personalized supplementation protocol',
      'Consultation with precision medicine specialist',
      'Complete report with genetic interpretation',
      'Annual biological marker monitoring'
    ]
  }
];
