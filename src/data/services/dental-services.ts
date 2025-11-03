export interface DentalService {
  id: string;
  category: 'design' | 'cosmetic' | 'restorative' | 'orthodontics' | 'technology';
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

export const dentalServices: DentalService[] = [
  {
    id: 'smile-design',
    category: 'design',
    name_es: 'Diseño de Sonrisa',
    name_en: 'Smile Design',
    description_es: 'Planificación completa y visualización del diseño de tu sonrisa',
    description_en: 'Complete smile design planning and visualization',
    price_usd: 850,
    price_comparison_us: 2500,
    savings_percentage: 66,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '2-3 horas',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: 'Inmediato',
    final_results_timeline_es: '1-2 semanas',
    final_results_timeline_en: '1-2 weeks',
    ideal_candidates_es: [
      'Personas que buscan mejorar su sonrisa',
      'Dientes desalineados o descoloridos',
      'Quienes desean ver su resultado antes del tratamiento',
      'Pacientes que buscan un cambio estético completo'
    ],
    ideal_candidates_en: [
      'People looking to improve their smile',
      'Misaligned or discolored teeth',
      'Those who want to see their result before treatment',
      'Patients seeking a complete aesthetic change'
    ],
    package_includes_es: [
      'Simulación digital 3D con IA',
      'Escaneo intraoral completo',
      'Consulta con especialista en estética',
      'Plan de tratamiento personalizado',
      'Fotografías antes y después',
      'Seguimiento post-tratamiento'
    ],
    package_includes_en: [
      '3D digital simulation with AI',
      'Complete intraoral scan',
      'Consultation with aesthetic specialist',
      'Personalized treatment plan',
      'Before and after photos',
      'Post-treatment follow-up'
    ]
  },
  {
    id: 'upper-arch-design',
    category: 'design',
    name_es: 'Diseño de Arcada Superior',
    name_en: 'Upper Arch Design',
    description_es: 'Diseño personalizado para los dientes superiores',
    description_en: 'Customized design for upper teeth',
    price_usd: 625,
    price_comparison_us: 1800,
    savings_percentage: 65,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    treatment_time: '1-2 horas',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: 'Inmediato',
    final_results_timeline_es: '1 semana',
    final_results_timeline_en: '1 week',
    ideal_candidates_es: [
      'Problemas estéticos en dientes superiores',
      'Desgaste o fracturas en arcada superior',
      'Deseo de mejorar la sonrisa visible',
      'Planificación de restauraciones múltiples'
    ],
    ideal_candidates_en: [
      'Aesthetic problems in upper teeth',
      'Wear or fractures in upper arch',
      'Desire to improve visible smile',
      'Planning multiple restorations'
    ],
    package_includes_es: [
      'Diseño digital CAD/CAM',
      'Visualización 3D del resultado',
      'Escaneo de arcada superior',
      'Plan de tratamiento detallado',
      'Consulta con prostodoncista'
    ],
    package_includes_en: [
      'CAD/CAM digital design',
      '3D result visualization',
      'Upper arch scan',
      'Detailed treatment plan',
      'Consultation with prosthodontist'
    ]
  },
  {
    id: 'micro-design',
    category: 'design',
    name_es: 'Micro Diseño',
    name_en: 'Micro Design',
    description_es: 'Ajustes micro precisos para estética perfecta',
    description_en: 'Precise micro adjustments for perfect aesthetics',
    price_usd: 500,
    price_comparison_us: 1500,
    savings_percentage: 67,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    treatment_time: '1 hora',
    anesthesia_es: 'Local o no requerida',
    anesthesia_en: 'Local or not required',
    recovery_days: 'Inmediato',
    final_results_timeline_es: 'Inmediato',
    final_results_timeline_en: 'Immediate',
    ideal_candidates_es: [
      'Pequeñas imperfecciones dentales',
      'Ajustes estéticos menores',
      'Refinamiento de sonrisa existente',
      'Corrección de contornos dentales'
    ],
    ideal_candidates_en: [
      'Small dental imperfections',
      'Minor aesthetic adjustments',
      'Refinement of existing smile',
      'Dental contour correction'
    ],
    package_includes_es: [
      'Evaluación con microscopio dental',
      'Ajustes de precisión',
      'Pulido y acabado especializado',
      'Fotografías de seguimiento'
    ],
    package_includes_en: [
      'Evaluation with dental microscope',
      'Precision adjustments',
      'Specialized polishing and finishing',
      'Follow-up photos'
    ]
  },
  {
    id: 'small-resin-repair',
    category: 'cosmetic',
    name_es: 'Reparación Pequeña de Resina',
    name_en: 'Small Resin Repair',
    description_es: 'Reparaciones y ajustes menores con resina compuesta',
    description_en: 'Minor composite resin repairs and adjustments',
    price_usd: 37.50,
    price_comparison_us: 175,
    savings_percentage: 79,
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
    treatment_time: '30-45 minutos',
    anesthesia_es: 'Generalmente no requerida',
    anesthesia_en: 'Generally not required',
    recovery_days: 'Inmediato',
    final_results_timeline_es: 'Inmediato',
    final_results_timeline_en: 'Immediate',
    ideal_candidates_es: [
      'Pequeñas caries o fracturas',
      'Restauraciones anteriores desgastadas',
      'Espacios interdentales menores',
      'Defectos estéticos leves'
    ],
    ideal_candidates_en: [
      'Small cavities or fractures',
      'Worn previous restorations',
      'Minor interdental spaces',
      'Slight aesthetic defects'
    ],
    package_includes_es: [
      'Evaluación completa',
      'Resina de alta calidad',
      'Ajuste oclusal',
      'Pulido y acabado'
    ],
    package_includes_en: [
      'Complete evaluation',
      'High-quality resin',
      'Occlusal adjustment',
      'Polishing and finishing'
    ]
  },
  {
    id: 'complete-veneer',
    category: 'cosmetic',
    name_es: 'Carilla Completa',
    name_en: 'Complete Veneer',
    description_es: 'Aplicación completa de carilla dental',
    description_en: 'Full dental veneer application',
    price_usd: 75,
    price_comparison_us: 1400,
    savings_percentage: 95,
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    treatment_time: '1 hora por diente',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: '1-2 días',
    final_results_timeline_es: '2 semanas',
    final_results_timeline_en: '2 weeks',
    ideal_candidates_es: [
      'Dientes manchados o descoloridos',
      'Dientes ligeramente torcidos',
      'Espacios entre dientes',
      'Dientes desgastados o astillados'
    ],
    ideal_candidates_en: [
      'Stained or discolored teeth',
      'Slightly crooked teeth',
      'Gaps between teeth',
      'Worn or chipped teeth'
    ],
    package_includes_es: [
      'Consulta de diseño de sonrisa',
      'Carilla de porcelana premium',
      'Preparación dental mínima',
      'Cementación permanente',
      'Garantía de 5 años'
    ],
    package_includes_en: [
      'Smile design consultation',
      'Premium porcelain veneer',
      'Minimal dental preparation',
      'Permanent cementation',
      '5-year warranty'
    ]
  },
  {
    id: 'laser-whitening',
    category: 'cosmetic',
    name_es: 'Blanqueamiento Dental Láser',
    name_en: 'Laser Teeth Whitening',
    description_es: 'Tratamiento avanzado de blanqueamiento con láser',
    description_en: 'Advanced laser whitening treatment',
    price_usd: 300,
    price_comparison_us: 1000,
    savings_percentage: 70,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981a782dfe?auto=format&fit=crop&w=800&q=80',
    treatment_time: '1 hora',
    anesthesia_es: 'No requerida',
    anesthesia_en: 'Not required',
    recovery_days: 'Inmediato',
    final_results_timeline_es: 'Inmediato',
    final_results_timeline_en: 'Immediate',
    ideal_candidates_es: [
      'Dientes amarillentos o manchados',
      'Descoloración por edad o hábitos',
      'Deseo de sonrisa más brillante',
      'Evento especial próximo'
    ],
    ideal_candidates_en: [
      'Yellowed or stained teeth',
      'Discoloration from age or habits',
      'Desire for brighter smile',
      'Upcoming special event'
    ],
    package_includes_es: [
      'Limpieza dental previa',
      'Aplicación de gel blanqueador profesional',
      'Activación con láser LED',
      'Kit de mantenimiento para casa',
      'Seguimiento a 6 meses'
    ],
    package_includes_en: [
      'Prior dental cleaning',
      'Professional whitening gel application',
      'LED laser activation',
      'Home maintenance kit',
      '6-month follow-up'
    ]
  },
  {
    id: 'custom-whitening-trays',
    category: 'cosmetic',
    name_es: 'Cubetas de Blanqueamiento Personalizadas',
    name_en: 'Custom Whitening Trays',
    description_es: 'Kit profesional de blanqueamiento para casa',
    description_en: 'Professional take-home whitening kit',
    price_usd: 200,
    price_comparison_us: 500,
    savings_percentage: 60,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '45 minutos (elaboración)',
    anesthesia_es: 'No requerida',
    anesthesia_en: 'Not required',
    recovery_days: 'Inmediato',
    final_results_timeline_es: '2-4 semanas',
    final_results_timeline_en: '2-4 weeks',
    ideal_candidates_es: [
      'Preferencia por tratamiento en casa',
      'Dientes sensibles',
      'Deseo de blanqueamiento gradual',
      'Mantenimiento post-tratamiento láser'
    ],
    ideal_candidates_en: [
      'Preference for home treatment',
      'Sensitive teeth',
      'Desire for gradual whitening',
      'Post-laser treatment maintenance'
    ],
    package_includes_es: [
      'Cubetas personalizadas hechas a medida',
      'Gel blanqueador profesional (4 jeringas)',
      'Instrucciones de uso detalladas',
      'Estuche de almacenamiento',
      'Consulta de seguimiento'
    ],
    package_includes_en: [
      'Custom-made personalized trays',
      'Professional whitening gel (4 syringes)',
      'Detailed usage instructions',
      'Storage case',
      'Follow-up consultation'
    ]
  },
  {
    id: 'protective-guard',
    category: 'orthodontics',
    name_es: 'Guarda Protectora',
    name_en: 'Protective Guard',
    description_es: 'Protección dental personalizada',
    description_en: 'Custom-made dental protection',
    price_usd: 62.50,
    price_comparison_us: 400,
    savings_percentage: 84,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '30 minutos (elaboración)',
    anesthesia_es: 'No requerida',
    anesthesia_en: 'Not required',
    recovery_days: 'Inmediato',
    final_results_timeline_es: 'Inmediato',
    final_results_timeline_en: 'Immediate',
    ideal_candidates_es: [
      'Deportistas de contacto',
      'Bruxismo leve',
      'Protección dental general',
      'Actividades de riesgo dental'
    ],
    ideal_candidates_en: [
      'Contact sports athletes',
      'Mild bruxism',
      'General dental protection',
      'Dental risk activities'
    ],
    package_includes_es: [
      'Toma de impresión dental',
      'Guarda personalizada de material flexible',
      'Estuche protector',
      'Instrucciones de cuidado',
      'Reemplazo con descuento'
    ],
    package_includes_en: [
      'Dental impression taking',
      'Custom flexible material guard',
      'Protective case',
      'Care instructions',
      'Discounted replacement'
    ]
  },
  {
    id: 'botox-bruxism',
    category: 'technology',
    name_es: 'Botox para Bruxismo',
    name_en: 'Botox for Bruxism',
    description_es: 'Tratamiento de ATM y rechinamiento dental',
    description_en: 'TMJ and teeth grinding treatment',
    price_usd: 500,
    price_comparison_us: 1250,
    savings_percentage: 60,
    image: 'https://images.unsplash.com/photo-1629909615957-be38c326b21e?auto=format&fit=crop&w=800&q=80',
    treatment_time: '30 minutos',
    anesthesia_es: 'No requerida',
    anesthesia_en: 'Not required',
    recovery_days: '1-2 días',
    final_results_timeline_es: '1-2 semanas',
    final_results_timeline_en: '1-2 weeks',
    ideal_candidates_es: [
      'Bruxismo severo',
      'Dolor de mandíbula o ATM',
      'Desgaste dental por rechinamiento',
      'Dolores de cabeza por tensión mandibular'
    ],
    ideal_candidates_en: [
      'Severe bruxism',
      'Jaw or TMJ pain',
      'Dental wear from grinding',
      'Headaches from jaw tension'
    ],
    package_includes_es: [
      'Evaluación de ATM completa',
      'Inyecciones de Botox en músculos masticadores',
      'Duración de 3-6 meses',
      'Consulta de seguimiento',
      'Plan de mantenimiento'
    ],
    package_includes_en: [
      'Complete TMJ evaluation',
      'Botox injections in masticatory muscles',
      '3-6 month duration',
      'Follow-up consultation',
      'Maintenance plan'
    ]
  },
  {
    id: 'orthodontic-setup',
    category: 'orthodontics',
    name_es: 'Configuración de Ortodoncia',
    name_en: 'Orthodontic Setup',
    description_es: 'Configuración inicial del tratamiento de ortodoncia',
    description_en: 'Initial orthodontic treatment setup',
    price_usd: 175,
    price_comparison_us: 650,
    savings_percentage: 73,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '1 hora',
    anesthesia_es: 'No requerida',
    anesthesia_en: 'Not required',
    recovery_days: 'Inmediato',
    final_results_timeline_es: 'Variable',
    final_results_timeline_en: 'Variable',
    ideal_candidates_es: [
      'Dientes desalineados',
      'Maloclusión',
      'Espacios o apiñamiento',
      'Corrección de mordida'
    ],
    ideal_candidates_en: [
      'Misaligned teeth',
      'Malocclusion',
      'Spacing or crowding',
      'Bite correction'
    ],
    package_includes_es: [
      'Evaluación ortodóntica completa',
      'Radiografías y fotografías',
      'Plan de tratamiento detallado',
      'Escaneo digital 3D',
      'Consulta de opciones de tratamiento'
    ],
    package_includes_en: [
      'Complete orthodontic evaluation',
      'X-rays and photographs',
      'Detailed treatment plan',
      '3D digital scan',
      'Treatment options consultation'
    ]
  },
  {
    id: 'single-root-canal',
    category: 'restorative',
    name_es: 'Endodoncia Unirradicular',
    name_en: 'Single Root Canal',
    description_es: 'Tratamiento endodóntico para dientes de una raíz',
    description_en: 'Endodontic treatment for single-rooted teeth',
    price_usd: 300,
    price_comparison_us: 1250,
    savings_percentage: 76,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '1-1.5 horas',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: '2-3 días',
    final_results_timeline_es: '1-2 semanas',
    final_results_timeline_en: '1-2 weeks',
    ideal_candidates_es: [
      'Dolor dental severo',
      'Infección o absceso dental',
      'Caries profunda en diente anterior',
      'Trauma dental con daño pulpar'
    ],
    ideal_candidates_en: [
      'Severe dental pain',
      'Dental infection or abscess',
      'Deep cavity in front tooth',
      'Dental trauma with pulp damage'
    ],
    package_includes_es: [
      'Radiografías diagnósticas',
      'Anestesia local completa',
      'Limpieza y desinfección de conductos',
      'Sellado con gutapercha',
      'Corona temporal',
      'Medicamentos post-operatorios'
    ],
    package_includes_en: [
      'Diagnostic X-rays',
      'Complete local anesthesia',
      'Canal cleaning and disinfection',
      'Gutta-percha sealing',
      'Temporary crown',
      'Post-operative medications'
    ]
  },
  {
    id: 'multi-root-canal',
    category: 'restorative',
    name_es: 'Endodoncia Multirradicular',
    name_en: 'Multi-Root Canal',
    description_es: 'Tratamiento endodóntico complejo',
    description_en: 'Complex endodontic treatment',
    price_usd: 375,
    price_comparison_us: 1500,
    savings_percentage: 75,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '1.5-2 horas',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: '3-5 días',
    final_results_timeline_es: '2-3 semanas',
    final_results_timeline_en: '2-3 weeks',
    ideal_candidates_es: [
      'Dolor en molares',
      'Infección en diente posterior',
      'Caries profunda en molar',
      'Fractura dental con exposición pulpar'
    ],
    ideal_candidates_en: [
      'Molar pain',
      'Posterior tooth infection',
      'Deep cavity in molar',
      'Dental fracture with pulp exposure'
    ],
    package_includes_es: [
      'Radiografías 3D si necesario',
      'Tratamiento de múltiples conductos',
      'Desinfección completa',
      'Sellado permanente',
      'Corona temporal reforzada',
      'Seguimiento post-operatorio'
    ],
    package_includes_en: [
      '3D X-rays if necessary',
      'Multiple canal treatment',
      'Complete disinfection',
      'Permanent sealing',
      'Reinforced temporary crown',
      'Post-operative follow-up'
    ]
  },
  {
    id: 'basic-denture',
    category: 'restorative',
    name_es: 'Prótesis Básica',
    name_en: 'Basic Denture',
    description_es: 'Prótesis removible estándar',
    description_en: 'Standard removable prosthetic',
    price_usd: 375,
    price_comparison_us: 2250,
    savings_percentage: 83,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '3-4 visitas',
    anesthesia_es: 'No requerida',
    anesthesia_en: 'Not required',
    recovery_days: '1-2 semanas',
    final_results_timeline_es: '3-4 semanas',
    final_results_timeline_en: '3-4 weeks',
    ideal_candidates_es: [
      'Pérdida múltiple de dientes',
      'Necesidad de prótesis completa',
      'Presupuesto limitado',
      'Solución temporal'
    ],
    ideal_candidates_en: [
      'Multiple tooth loss',
      'Need for complete denture',
      'Limited budget',
      'Temporary solution'
    ],
    package_includes_es: [
      'Toma de impresiones',
      'Prueba de ajuste',
      'Prótesis de acrílico de calidad',
      'Ajustes post-entrega (3 meses)',
      'Kit de limpieza',
      'Instrucciones de cuidado'
    ],
    package_includes_en: [
      'Impression taking',
      'Fitting trial',
      'Quality acrylic denture',
      'Post-delivery adjustments (3 months)',
      'Cleaning kit',
      'Care instructions'
    ]
  },
  {
    id: 'high-impact-denture',
    category: 'restorative',
    name_es: 'Prótesis de Alto Impacto',
    name_en: 'High-Impact Denture',
    description_es: 'Prótesis removible de calidad premium y durable',
    description_en: 'Premium quality durable denture',
    price_usd: 625,
    price_comparison_us: 3000,
    savings_percentage: 79,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '4-5 visitas',
    anesthesia_es: 'No requerida',
    anesthesia_en: 'Not required',
    recovery_days: '1-2 semanas',
    final_results_timeline_es: '4-5 semanas',
    final_results_timeline_en: '4-5 weeks',
    ideal_candidates_es: [
      'Pérdida completa de dientes',
      'Deseo de prótesis duradera',
      'Necesidad de estética superior',
      'Uso intensivo'
    ],
    ideal_candidates_en: [
      'Complete tooth loss',
      'Desire for durable denture',
      'Need for superior aesthetics',
      'Heavy use'
    ],
    package_includes_es: [
      'Material de alto impacto resistente',
      'Dientes de porcelana premium',
      'Diseño personalizado estético',
      'Múltiples pruebas de ajuste',
      'Garantía de 2 años',
      'Ajustes ilimitados (6 meses)'
    ],
    package_includes_en: [
      'Resistant high-impact material',
      'Premium porcelain teeth',
      'Aesthetic custom design',
      'Multiple fitting trials',
      '2-year warranty',
      'Unlimited adjustments (6 months)'
    ]
  },
  {
    id: 'dental-implants',
    category: 'restorative',
    name_es: 'Implantes Dentales',
    name_en: 'Dental Implants',
    description_es: 'Implante de titanio con restauración',
    description_en: 'Titanium implant with restoration',
    price_usd: 1125,
    price_comparison_us: 3750,
    savings_percentage: 70,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '2-3 meses (proceso completo)',
    anesthesia_es: 'Local o sedación',
    anesthesia_en: 'Local or sedation',
    recovery_days: '7-10 días',
    final_results_timeline_es: '3-6 meses',
    final_results_timeline_en: '3-6 months',
    ideal_candidates_es: [
      'Pérdida de uno o más dientes',
      'Hueso suficiente para implante',
      'Salud oral buena general',
      'Deseo de solución permanente'
    ],
    ideal_candidates_en: [
      'Loss of one or more teeth',
      'Sufficient bone for implant',
      'Good overall oral health',
      'Desire for permanent solution'
    ],
    package_includes_es: [
      'Implante de titanio grado médico',
      'Radiografías y escaneo 3D',
      'Cirugía de colocación',
      'Pilar y corona final',
      'Seguimiento de osteointegración',
      'Garantía de por vida en implante'
    ],
    package_includes_en: [
      'Medical-grade titanium implant',
      'X-rays and 3D scan',
      'Placement surgery',
      'Abutment and final crown',
      'Osseointegration follow-up',
      'Lifetime warranty on implant'
    ]
  },
  {
    id: 'dental-crowns',
    category: 'restorative',
    name_es: 'Coronas Dentales',
    name_en: 'Dental Crowns',
    description_es: 'Corona dental personalizada de ajuste perfecto',
    description_en: 'Custom-fitted dental crown',
    price_usd: 625,
    price_comparison_us: 1600,
    savings_percentage: 61,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '2 visitas',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: '3-5 días',
    final_results_timeline_es: '2 semanas',
    final_results_timeline_en: '2 weeks',
    ideal_candidates_es: [
      'Diente fracturado o débil',
      'Después de endodoncia',
      'Restauración grande existente',
      'Mejora estética necesaria'
    ],
    ideal_candidates_en: [
      'Fractured or weak tooth',
      'After root canal',
      'Existing large restoration',
      'Aesthetic improvement needed'
    ],
    package_includes_es: [
      'Corona de porcelana sobre metal',
      'Preparación dental',
      'Corona temporal incluida',
      'Cementación permanente',
      'Ajuste oclusal',
      'Garantía de 5 años'
    ],
    package_includes_en: [
      'Porcelain-fused-to-metal crown',
      'Dental preparation',
      'Temporary crown included',
      'Permanent cementation',
      'Occlusal adjustment',
      '5-year warranty'
    ]
  },
  {
    id: 'zirconia-crown',
    category: 'restorative',
    name_es: 'Corona de Zirconia',
    name_en: 'Zirconia Crown',
    description_es: 'Restauración premium libre de metal con zirconia',
    description_en: 'Premium metal-free zirconia restoration',
    price_usd: 700,
    price_comparison_us: 2000,
    savings_percentage: 65,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '2 visitas',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: '3-5 días',
    final_results_timeline_es: '2 semanas',
    final_results_timeline_en: '2 weeks',
    ideal_candidates_es: [
      'Alergias a metales',
      'Deseo de estética superior',
      'Dientes anteriores visibles',
      'Mayor biocompatibilidad'
    ],
    ideal_candidates_en: [
      'Metal allergies',
      'Desire for superior aesthetics',
      'Visible front teeth',
      'Greater biocompatibility'
    ],
    package_includes_es: [
      'Corona 100% zirconia',
      'Translucidez natural',
      'Diseño CAD/CAM digital',
      'Color personalizado',
      'Mayor resistencia',
      'Garantía de 7 años'
    ],
    package_includes_en: [
      '100% zirconia crown',
      'Natural translucency',
      'CAD/CAM digital design',
      'Custom color',
      'Greater strength',
      '7-year warranty'
    ]
  },
  {
    id: 'inlay-onlay',
    category: 'restorative',
    name_es: 'Incrustación Inlay/Onlay',
    name_en: 'Inlay/Onlay',
    description_es: 'Restauración de cerámica personalizada',
    description_en: 'Custom ceramic restoration',
    price_usd: 500,
    price_comparison_us: 1250,
    savings_percentage: 60,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '2 visitas',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: '2-3 días',
    final_results_timeline_es: '1-2 semanas',
    final_results_timeline_en: '1-2 weeks',
    ideal_candidates_es: [
      'Caries moderadas',
      'Fracturas parciales',
      'Alternativa a corona completa',
      'Preservación de estructura dental'
    ],
    ideal_candidates_en: [
      'Moderate cavities',
      'Partial fractures',
      'Alternative to full crown',
      'Dental structure preservation'
    ],
    package_includes_es: [
      'Incrustación de cerámica',
      'Diseño CAD/CAM',
      'Preparación dental conservadora',
      'Cementación adhesiva',
      'Ajuste de mordida',
      'Garantía de 5 años'
    ],
    package_includes_en: [
      'Ceramic inlay/onlay',
      'CAD/CAM design',
      'Conservative dental preparation',
      'Adhesive cementation',
      'Bite adjustment',
      '5-year warranty'
    ]
  },
  {
    id: 'temporary-crown',
    category: 'restorative',
    name_es: 'Corona Temporal',
    name_en: 'Temporary Crown',
    description_es: 'Protección provisional de corona',
    description_en: 'Provisional crown protection',
    price_usd: 175,
    price_comparison_us: 600,
    savings_percentage: 71,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '30-45 minutos',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: 'Inmediato',
    final_results_timeline_es: 'Temporal',
    final_results_timeline_en: 'Temporary',
    ideal_candidates_es: [
      'Espera de corona permanente',
      'Protección post-preparación',
      'Mantenimiento de espacio',
      'Estética temporal'
    ],
    ideal_candidates_en: [
      'Waiting for permanent crown',
      'Post-preparation protection',
      'Space maintenance',
      'Temporary aesthetics'
    ],
    package_includes_es: [
      'Corona provisional de acrílico',
      'Ajuste inmediato',
      'Cementación temporal',
      'Instrucciones de cuidado',
      'Reemplazo si necesario'
    ],
    package_includes_en: [
      'Provisional acrylic crown',
      'Immediate fitting',
      'Temporary cementation',
      'Care instructions',
      'Replacement if needed'
    ]
  },
  {
    id: 'post-and-core',
    category: 'restorative',
    name_es: 'Poste y Núcleo',
    name_en: 'Post and Core',
    description_es: 'Poste dental para soporte de corona',
    description_en: 'Dental post for crown support',
    price_usd: 175,
    price_comparison_us: 700,
    savings_percentage: 75,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '1 hora',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: '1-2 días',
    final_results_timeline_es: '1 semana',
    final_results_timeline_en: '1 week',
    ideal_candidates_es: [
      'Después de endodoncia',
      'Diente con estructura insuficiente',
      'Refuerzo antes de corona',
      'Retención adicional necesaria'
    ],
    ideal_candidates_en: [
      'After root canal',
      'Tooth with insufficient structure',
      'Reinforcement before crown',
      'Additional retention needed'
    ],
    package_includes_es: [
      'Poste de fibra de vidrio o metal',
      'Núcleo de resina composite',
      'Cementación adhesiva',
      'Radiografía de control',
      'Preparación para corona'
    ],
    package_includes_en: [
      'Fiberglass or metal post',
      'Composite resin core',
      'Adhesive cementation',
      'Control X-ray',
      'Crown preparation'
    ]
  },
  {
    id: 'night-guard',
    category: 'orthodontics',
    name_es: 'Guarda Nocturna',
    name_en: 'Night Guard',
    description_es: 'Protección nocturna personalizada',
    description_en: 'Custom-made night protection',
    price_usd: 300,
    price_comparison_us: 750,
    savings_percentage: 60,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    treatment_time: '30 minutos (elaboración)',
    anesthesia_es: 'No requerida',
    anesthesia_en: 'Not required',
    recovery_days: 'Inmediato',
    final_results_timeline_es: 'Inmediato',
    final_results_timeline_en: 'Immediate',
    ideal_candidates_es: [
      'Bruxismo nocturno',
      'Desgaste dental evidente',
      'Dolor mandibular matutino',
      'Protección de restauraciones'
    ],
    ideal_candidates_en: [
      'Nocturnal bruxism',
      'Evident dental wear',
      'Morning jaw pain',
      'Restoration protection'
    ],
    package_includes_es: [
      'Guarda rígida personalizada',
      'Material de grado médico',
      'Ajuste perfecto',
      'Estuche de almacenamiento',
      'Instrucciones de limpieza',
      'Ajustes incluidos (1 año)'
    ],
    package_includes_en: [
      'Custom rigid guard',
      'Medical-grade material',
      'Perfect fit',
      'Storage case',
      'Cleaning instructions',
      'Adjustments included (1 year)'
    ]
  },
  {
    id: 'ceramic-veneer',
    category: 'cosmetic',
    name_es: 'Carilla de Cerámica',
    name_en: 'Ceramic Veneer',
    description_es: 'Carilla dental premium de cerámica',
    description_en: 'Premium ceramic dental veneer',
    price_usd: 500,
    price_comparison_us: 2000,
    savings_percentage: 75,
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    treatment_time: '2 visitas',
    anesthesia_es: 'Local mínima',
    anesthesia_en: 'Minimal local',
    recovery_days: '1-2 días',
    final_results_timeline_es: '2 semanas',
    final_results_timeline_en: '2 weeks',
    ideal_candidates_es: [
      'Deseo de sonrisa perfecta',
      'Dientes con manchas permanentes',
      'Forma o tamaño dental irregular',
      'Espacios entre dientes'
    ],
    ideal_candidates_en: [
      'Desire for perfect smile',
      'Teeth with permanent stains',
      'Irregular tooth shape or size',
      'Gaps between teeth'
    ],
    package_includes_es: [
      'Carilla de porcelana E-max',
      'Diseño digital de sonrisa',
      'Preparación mínimamente invasiva',
      'Cementación adhesiva permanente',
      'Color personalizado',
      'Garantía de 10 años'
    ],
    package_includes_en: [
      'E-max porcelain veneer',
      'Digital smile design',
      'Minimally invasive preparation',
      'Permanent adhesive cementation',
      'Custom color',
      '10-year warranty'
    ]
  },
  {
    id: 'professional-cleaning',
    category: 'cosmetic',
    name_es: 'Limpieza Profesional',
    name_en: 'Professional Cleaning',
    description_es: 'Limpieza profunda y pulido',
    description_en: 'Deep cleaning and polishing',
    price_usd: 62.50,
    price_comparison_us: 200,
    savings_percentage: 69,
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
    treatment_time: '45-60 minutos',
    anesthesia_es: 'No requerida',
    anesthesia_en: 'Not required',
    recovery_days: 'Inmediato',
    final_results_timeline_es: 'Inmediato',
    final_results_timeline_en: 'Immediate',
    ideal_candidates_es: [
      'Mantenimiento oral regular',
      'Acumulación de placa',
      'Prevención de enfermedades',
      'Antes de otros tratamientos'
    ],
    ideal_candidates_en: [
      'Regular oral maintenance',
      'Plaque buildup',
      'Disease prevention',
      'Before other treatments'
    ],
    package_includes_es: [
      'Remoción de placa y sarro',
      'Pulido dental',
      'Aplicación de flúor',
      'Examen oral completo',
      'Instrucciones de higiene',
      'Recomendaciones personalizadas'
    ],
    package_includes_en: [
      'Plaque and tartar removal',
      'Dental polishing',
      'Fluoride application',
      'Complete oral exam',
      'Hygiene instructions',
      'Personalized recommendations'
    ]
  },
  {
    id: 'deep-scaling',
    category: 'cosmetic',
    name_es: 'Raspado Profundo',
    name_en: 'Deep Scaling',
    description_es: 'Limpieza periodontal avanzada',
    description_en: 'Advanced periodontal cleaning',
    price_usd: 125,
    price_comparison_us: 300,
    savings_percentage: 58,
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
    treatment_time: '1-2 horas',
    anesthesia_es: 'Local',
    anesthesia_en: 'Local',
    recovery_days: '2-3 días',
    final_results_timeline_es: '1-2 semanas',
    final_results_timeline_en: '1-2 weeks',
    ideal_candidates_es: [
      'Enfermedad periodontal',
      'Bolsas periodontales profundas',
      'Inflamación de encías',
      'Sangrado gingival'
    ],
    ideal_candidates_en: [
      'Periodontal disease',
      'Deep periodontal pockets',
      'Gum inflammation',
      'Gingival bleeding'
    ],
    package_includes_es: [
      'Raspado y alisado radicular',
      'Limpieza subgingival',
      'Anestesia local completa',
      'Medicamentos antibióticos si necesario',
      'Instrucciones post-operatorias',
      'Seguimiento periodontal'
    ],
    package_includes_en: [
      'Scaling and root planing',
      'Subgingival cleaning',
      'Complete local anesthesia',
      'Antibiotic medication if needed',
      'Post-operative instructions',
      'Periodontal follow-up'
    ]
  }
];
