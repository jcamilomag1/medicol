import hairRestorationImg from '@/assets/stem-cells/treatments/hair-restoration.jpg';
import jointRegenerationImg from '@/assets/stem-cells/treatments/joint-regeneration.jpg';
import antiAgingImg from '@/assets/stem-cells/treatments/anti-aging.jpg';
import sportsInjuryImg from '@/assets/stem-cells/treatments/sports-injury.jpg';
import autoimmuneImg from '@/assets/stem-cells/treatments/autoimmune.jpg';
import facialRejuvenationImg from '@/assets/stem-cells/treatments/facial-rejuvenation.jpg';
import skinRegenerationImg from '@/assets/stem-cells/treatments/skin-regeneration.jpg';
import inflammagingImg from '@/assets/stem-cells/treatments/inflammaging.jpg';
import redLightImg from '@/assets/stem-cells/treatments/red-light.jpg';
import defensinImg from '@/assets/stem-cells/treatments/defensin.jpg';

export interface StemCellService {
  id: string;
  category: 'aesthetic' | 'orthopedic' | 'medical' | 'technology';
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

export const stemCellServices: StemCellService[] = [
  {
    id: 'exosome-hair-restoration',
    category: 'aesthetic',
    name_es: 'Restauración Capilar con Exosomas',
    name_en: 'Exosome Hair Restoration',
    description_es: 'Recrecimiento capilar revolucionario que combina exosomas con terapia de luz roja para resultados mejorados.',
    description_en: 'Revolutionary hair regrowth combining exosomes with red light therapy for enhanced results.',
    price_usd: 6500,
    price_comparison_us: 18000,
    savings_percentage: 64,
    image: hairRestorationImg,
    treatment_time: '2-3 horas',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: '1-2 días',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Personas con adelgazamiento capilar o calvicie',
      'Buscando soluciones no quirúrgicas',
      'Con expectativas realistas sobre el recrecimiento',
      'Sin condiciones médicas que afecten el crecimiento capilar'
    ],
    ideal_candidates_en: [
      'Individuals with hair thinning or baldness',
      'Seeking non-surgical solutions',
      'With realistic expectations about regrowth',
      'Without medical conditions affecting hair growth'
    ],
    package_includes_es: [
      'Consulta médica completa y análisis capilar',
      'Extracción y procesamiento de exosomas',
      'Sesiones de terapia de luz roja',
      'Procedimiento completo de aplicación',
      'Seguimiento post-tratamiento (6 meses)',
      'Productos de cuidado capilar especializados'
    ],
    package_includes_en: [
      'Complete medical consultation and hair analysis',
      'Exosome extraction and processing',
      'Red light therapy sessions',
      'Complete application procedure',
      'Post-treatment follow-up (6 months)',
      'Specialized hair care products'
    ]
  },
  {
    id: 'joint-regeneration',
    category: 'orthopedic',
    name_es: 'Regeneración Articular',
    name_en: 'Joint Regeneration',
    description_es: 'Terapia avanzada de células madre para reparación articular y reducción de la inflamación.',
    description_en: 'Advanced stem cell therapy for joint repair and inflammation reduction.',
    price_usd: 8000,
    price_comparison_us: 22000,
    savings_percentage: 64,
    image: jointRegenerationImg,
    treatment_time: '2-4 horas',
    anesthesia_es: 'Local con sedación',
    anesthesia_en: 'Local with sedation',
    recovery_days: '2-3 días',
    final_results_timeline_es: '4-8 meses',
    final_results_timeline_en: '4-8 months',
    ideal_candidates_es: [
      'Personas con osteoartritis o desgaste articular',
      'Dolor crónico en rodillas, caderas o hombros',
      'Buscando evitar cirugía de reemplazo articular',
      'Con buen estado de salud general'
    ],
    ideal_candidates_en: [
      'Individuals with osteoarthritis or joint wear',
      'Chronic pain in knees, hips, or shoulders',
      'Seeking to avoid joint replacement surgery',
      'In good overall health'
    ],
    package_includes_es: [
      'Evaluación ortopédica completa con imágenes',
      'Extracción y procesamiento de células madre',
      'Inyección guiada por ultrasonido',
      'Protocolo de rehabilitación personalizado',
      'Seguimiento médico durante 8 meses',
      'Terapia física complementaria'
    ],
    package_includes_en: [
      'Complete orthopedic evaluation with imaging',
      'Stem cell extraction and processing',
      'Ultrasound-guided injection',
      'Personalized rehabilitation protocol',
      'Medical follow-up for 8 months',
      'Complementary physical therapy'
    ]
  },
  {
    id: 'anti-aging-therapy',
    category: 'medical',
    name_es: 'Terapia Anti-Envejecimiento con Células Madre',
    name_en: 'Anti-Aging Stem Cell Therapy',
    description_es: 'Rejuvenecimiento integral usando tus propias células madre para la reversión natural del envejecimiento.',
    description_en: 'Comprehensive rejuvenation using your own stem cells for natural aging reversal.',
    price_usd: 12000,
    price_comparison_us: 35000,
    savings_percentage: 66,
    image: antiAgingImg,
    treatment_time: '3-5 horas',
    anesthesia_es: 'Sedación consciente',
    anesthesia_en: 'Conscious sedation',
    recovery_days: '2-4 días',
    final_results_timeline_es: '6-12 meses',
    final_results_timeline_en: '6-12 months',
    ideal_candidates_es: [
      'Adultos buscando rejuvenecimiento sistémico',
      'Signos visibles de envejecimiento',
      'Interesados en medicina regenerativa',
      'Con expectativas realistas sobre resultados graduales'
    ],
    ideal_candidates_en: [
      'Adults seeking systemic rejuvenation',
      'Visible signs of aging',
      'Interested in regenerative medicine',
      'With realistic expectations about gradual results'
    ],
    package_includes_es: [
      'Evaluación médica integral y análisis de laboratorio',
      'Extracción de células madre autólogas',
      'Procesamiento en laboratorio certificado',
      'Infusión intravenosa de células madre',
      'Protocolo de suplementación personalizado',
      'Seguimiento médico anual completo'
    ],
    package_includes_en: [
      'Comprehensive medical evaluation and lab analysis',
      'Autologous stem cell extraction',
      'Processing in certified laboratory',
      'Intravenous stem cell infusion',
      'Personalized supplementation protocol',
      'Complete annual medical follow-up'
    ]
  },
  {
    id: 'sports-injury-recovery',
    category: 'orthopedic',
    name_es: 'Recuperación de Lesiones Deportivas',
    name_en: 'Sports Injury Recovery',
    description_es: 'Curación acelerada usando terapia dirigida de células madre y factores de crecimiento.',
    description_en: 'Accelerated healing using targeted stem cell therapy and growth factors.',
    price_usd: 7500,
    price_comparison_us: 20000,
    savings_percentage: 63,
    image: sportsInjuryImg,
    treatment_time: '2-3 horas',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: '1-3 días',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Atletas con lesiones de tejidos blandos',
      'Lesiones de ligamentos, tendones o músculos',
      'Buscando recuperación más rápida',
      'Comprometidos con protocolo de rehabilitación'
    ],
    ideal_candidates_en: [
      'Athletes with soft tissue injuries',
      'Ligament, tendon, or muscle injuries',
      'Seeking faster recovery',
      'Committed to rehabilitation protocol'
    ],
    package_includes_es: [
      'Evaluación deportiva especializada',
      'Resonancia magnética si es necesaria',
      'Extracción y procesamiento de células madre',
      'Inyección en zona de lesión',
      'Plan de rehabilitación deportiva',
      'Seguimiento con medicina deportiva'
    ],
    package_includes_en: [
      'Specialized sports evaluation',
      'MRI if necessary',
      'Stem cell extraction and processing',
      'Injection at injury site',
      'Sports rehabilitation plan',
      'Sports medicine follow-up'
    ]
  },
  {
    id: 'autoimmune-treatment',
    category: 'medical',
    name_es: 'Tratamiento Autoinmune',
    name_en: 'Autoimmune Treatment',
    description_es: 'Protocolos innovadores de células madre para modular la respuesta inmune y reducir la inflamación.',
    description_en: 'Innovative stem cell protocols to modulate immune response and reduce inflammation.',
    price_usd: 15000,
    price_comparison_us: 45000,
    savings_percentage: 67,
    image: autoimmuneImg,
    treatment_time: '4-6 horas',
    anesthesia_es: 'Sedación',
    anesthesia_en: 'Sedation',
    recovery_days: '3-5 días',
    final_results_timeline_es: '6-12 meses',
    final_results_timeline_en: '6-12 months',
    ideal_candidates_es: [
      'Diagnóstico confirmado de enfermedad autoinmune',
      'Síntomas persistentes a pesar de tratamiento convencional',
      'Buscando alternativas a inmunosupresores',
      'Evaluación médica previa favorable'
    ],
    ideal_candidates_en: [
      'Confirmed diagnosis of autoimmune disease',
      'Persistent symptoms despite conventional treatment',
      'Seeking alternatives to immunosuppressants',
      'Favorable prior medical evaluation'
    ],
    package_includes_es: [
      'Evaluación inmunológica completa',
      'Análisis de laboratorio especializado',
      'Extracción de células madre mesenquimales',
      'Infusión intravenosa controlada',
      'Monitoreo inmunológico continuo',
      'Seguimiento médico especializado (12 meses)'
    ],
    package_includes_en: [
      'Complete immunological evaluation',
      'Specialized laboratory analysis',
      'Mesenchymal stem cell extraction',
      'Controlled intravenous infusion',
      'Continuous immunological monitoring',
      'Specialized medical follow-up (12 months)'
    ]
  },
  {
    id: 'facial-rejuvenation',
    category: 'aesthetic',
    name_es: 'Rejuvenecimiento Facial',
    name_en: 'Facial Rejuvenation',
    description_es: 'Terapia combinada de células madre y exosomas para la regeneración facial natural.',
    description_en: 'Combined stem cell and exosome therapy for natural facial regeneration.',
    price_usd: 8500,
    price_comparison_us: 25000,
    savings_percentage: 66,
    image: facialRejuvenationImg,
    treatment_time: '2-3 horas',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: '2-3 días',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Signos de envejecimiento facial',
      'Pérdida de volumen y elasticidad',
      'Buscando resultados naturales sin cirugía',
      'Piel con capacidad de regeneración'
    ],
    ideal_candidates_en: [
      'Signs of facial aging',
      'Volume and elasticity loss',
      'Seeking natural results without surgery',
      'Skin with regeneration capacity'
    ],
    package_includes_es: [
      'Análisis facial detallado',
      'Extracción de células madre y exosomas',
      'Aplicación facial mediante microagujas',
      'Mascarillas regenerativas post-tratamiento',
      'Protocolo de cuidado en casa',
      'Seguimiento y evaluación de resultados'
    ],
    package_includes_en: [
      'Detailed facial analysis',
      'Stem cell and exosome extraction',
      'Facial application via microneedling',
      'Regenerative post-treatment masks',
      'Home care protocol',
      'Follow-up and results evaluation'
    ]
  },
  {
    id: 'skin-regeneration',
    category: 'aesthetic',
    name_es: 'Regeneración de la Piel',
    name_en: 'Skin Regeneration',
    description_es: 'Tratamiento avanzado para la reparación y rejuvenecimiento de la piel usando tecnología de células madre.',
    description_en: 'Advanced treatment for skin repair and rejuvenation using stem cell technology.',
    price_usd: 6000,
    price_comparison_us: 16000,
    savings_percentage: 63,
    image: skinRegenerationImg,
    treatment_time: '1-2 horas',
    anesthesia_es: 'Tópica',
    anesthesia_en: 'Topical',
    recovery_days: '1-2 días',
    final_results_timeline_es: '2-4 meses',
    final_results_timeline_en: '2-4 months',
    ideal_candidates_es: [
      'Cicatrices, estrías o daño solar',
      'Textura de piel irregular',
      'Hiperpigmentación o manchas',
      'Buscando mejora integral de la piel'
    ],
    ideal_candidates_en: [
      'Scars, stretch marks, or sun damage',
      'Irregular skin texture',
      'Hyperpigmentation or spots',
      'Seeking comprehensive skin improvement'
    ],
    package_includes_es: [
      'Evaluación dermatológica completa',
      'Preparación de factores de crecimiento',
      'Aplicación con tecnología avanzada',
      'Sesiones de mantenimiento incluidas',
      'Kit de cuidado dermatológico',
      'Seguimiento dermatológico'
    ],
    package_includes_en: [
      'Complete dermatological evaluation',
      'Growth factor preparation',
      'Application with advanced technology',
      'Maintenance sessions included',
      'Dermatological care kit',
      'Dermatological follow-up'
    ]
  },
  {
    id: 'inflammaging-treatment',
    category: 'medical',
    name_es: 'Tratamiento de Inflammaging',
    name_en: 'Inflammaging Treatment',
    description_es: 'Terapia dirigida para combatir el envejecimiento causado por la inflamación crónica.',
    description_en: 'Targeted therapy to combat aging caused by chronic inflammation.',
    price_usd: 9000,
    price_comparison_us: 26000,
    savings_percentage: 65,
    image: inflammagingImg,
    treatment_time: '3-4 horas',
    anesthesia_es: 'Sedación consciente',
    anesthesia_en: 'Conscious sedation',
    recovery_days: '2-3 días',
    final_results_timeline_es: '4-8 meses',
    final_results_timeline_en: '4-8 months',
    ideal_candidates_es: [
      'Inflamación crónica de bajo grado',
      'Envejecimiento acelerado',
      'Marcadores inflamatorios elevados',
      'Interés en medicina preventiva'
    ],
    ideal_candidates_en: [
      'Low-grade chronic inflammation',
      'Accelerated aging',
      'Elevated inflammatory markers',
      'Interest in preventive medicine'
    ],
    package_includes_es: [
      'Panel de biomarcadores inflamatorios',
      'Evaluación médica integral',
      'Terapia con células madre mesenquimales',
      'Protocolo anti-inflamatorio personalizado',
      'Asesoramiento nutricional',
      'Monitoreo de marcadores (8 meses)'
    ],
    package_includes_en: [
      'Inflammatory biomarkers panel',
      'Comprehensive medical evaluation',
      'Mesenchymal stem cell therapy',
      'Personalized anti-inflammatory protocol',
      'Nutritional counseling',
      'Marker monitoring (8 months)'
    ]
  },
  {
    id: 'red-light-therapy',
    category: 'technology',
    name_es: 'Terapia de Luz Roja',
    name_en: 'Red Light Therapy',
    description_es: 'Regeneración celular mejorada usando tecnología de luz avanzada.',
    description_en: 'Enhanced cellular regeneration using advanced light technology.',
    price_usd: 5500,
    price_comparison_us: 14000,
    savings_percentage: 61,
    image: redLightImg,
    treatment_time: '1 hora',
    anesthesia_es: 'No requerida',
    anesthesia_en: 'Not required',
    recovery_days: 'Inmediato',
    final_results_timeline_es: '1-3 meses',
    final_results_timeline_en: '1-3 months',
    ideal_candidates_es: [
      'Buscando terapia no invasiva',
      'Dolor muscular o articular',
      'Mejora de la piel y cicatrización',
      'Optimización del rendimiento celular'
    ],
    ideal_candidates_en: [
      'Seeking non-invasive therapy',
      'Muscle or joint pain',
      'Skin improvement and healing',
      'Cellular performance optimization'
    ],
    package_includes_es: [
      'Evaluación inicial personalizada',
      'Serie de 10 sesiones de terapia',
      'Protocolos específicos por condición',
      'Dispositivo de uso en casa (opcional)',
      'Seguimiento de progreso',
      'Recomendaciones de mantenimiento'
    ],
    package_includes_en: [
      'Personalized initial evaluation',
      'Series of 10 therapy sessions',
      'Condition-specific protocols',
      'Home-use device (optional)',
      'Progress tracking',
      'Maintenance recommendations'
    ]
  },
  {
    id: 'defensin-treatment',
    category: 'technology',
    name_es: 'Tratamiento con Defensinas',
    name_en: 'Defensin Treatment',
    description_es: 'Terapia de vanguardia que utiliza moléculas regenerativas para la reparación de tejidos.',
    description_en: 'Cutting-edge therapy using regenerative molecules for tissue repair.',
    price_usd: 7000,
    price_comparison_us: 19000,
    savings_percentage: 63,
    image: defensinImg,
    treatment_time: '2-3 horas',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: '1-2 días',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Lesiones de tejidos difíciles de sanar',
      'Cicatrización comprometida',
      'Buscando tecnología regenerativa avanzada',
      'Fallos en tratamientos convencionales'
    ],
    ideal_candidates_en: [
      'Hard-to-heal tissue injuries',
      'Compromised healing',
      'Seeking advanced regenerative technology',
      'Failures with conventional treatments'
    ],
    package_includes_es: [
      'Evaluación de capacidad de cicatrización',
      'Preparación de defensinas peptídicas',
      'Aplicación dirigida en área afectada',
      'Vendajes y cuidados especializados',
      'Protocolo de optimización de sanación',
      'Seguimiento hasta cicatrización completa'
    ],
    package_includes_en: [
      'Healing capacity evaluation',
      'Peptide defensin preparation',
      'Targeted application to affected area',
      'Specialized dressings and care',
      'Healing optimization protocol',
      'Follow-up until complete healing'
    ]
  }
];
