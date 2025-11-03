export interface FAQ {
  question_es: string;
  question_en: string;
  answer_es: string;
  answer_en: string;
}

export const diagnosticsFAQs: FAQ[] = [
  {
    question_es: '¿Cuánto tiempo toma obtener mis resultados?',
    question_en: 'How long does it take to get my results?',
    answer_es: 'El tiempo de entrega de resultados varía según el programa elegido. El Chequeo Ejecutivo Integral entrega resultados en 24-48 horas. El Screening Proactivo en 48 horas. La Evaluación de Segunda Opinión toma 3-5 días laborables para análisis completo por nuestro panel de especialistas. El Diagnóstico Genético y Longevidad requiere 2-3 semanas debido al análisis genómico completo. Todos los resultados incluyen una consulta explicativa detallada con especialistas.',
    answer_en: 'Result delivery time varies by chosen program. The Comprehensive Executive Checkup delivers results in 24-48 hours. Proactive Screening in 48 hours. Second Opinion Evaluation takes 3-5 business days for complete analysis by our specialist panel. Genetic Diagnosis and Longevity requires 2-3 weeks due to complete genomic analysis. All results include a detailed explanatory consultation with specialists.'
  },
  {
    question_es: '¿Los resultados vienen en inglés?',
    question_en: 'Do the results come in English?',
    answer_es: 'Sí, absolutamente. Todos nuestros reportes médicos son completamente bilingües (español e inglés). Entregamos documentación profesional traducida que es aceptada internacionalmente por médicos y hospitales en cualquier país. Además, tu consulta de resultados incluye un traductor médico especializado si lo necesitas, garantizando que comprendas completamente cada aspecto de tu diagnóstico y las recomendaciones de los especialistas.',
    answer_en: 'Yes, absolutely. All our medical reports are completely bilingual (Spanish and English). We deliver professionally translated documentation that is internationally accepted by doctors and hospitals in any country. Additionally, your results consultation includes a specialized medical translator if needed, ensuring you fully understand every aspect of your diagnosis and specialist recommendations.'
  },
  {
    question_es: '¿Qué tecnología de diagnóstico utilizan?',
    question_en: 'What diagnostic technology do you use?',
    answer_es: 'Utilizamos tecnología de diagnóstico de última generación que cumple con estándares internacionales. Nuestras instalaciones cuentan con Resonancia Magnética 3-Tesla de alta resolución, PET-CT de cuerpo completo con contraste, equipos de laboratorio automatizados con inteligencia artificial para análisis de imágenes y marcadores, secuenciación genómica avanzada, y ecocardiogramas 4D. Todos nuestros equipos son de marcas líderes mundiales (Siemens, GE Healthcare, Philips) y reciben mantenimiento certificado constante.',
    answer_en: 'We use state-of-the-art diagnostic technology that meets international standards. Our facilities feature high-resolution 3-Tesla MRI, full-body PET-CT with contrast, automated laboratory equipment with artificial intelligence for image and marker analysis, advanced genomic sequencing, and 4D echocardiograms. All our equipment is from world-leading brands (Siemens, GE Healthcare, Philips) and receives constant certified maintenance.'
  },
  {
    question_es: '¿Puedo traer mis estudios previos para segunda opinión?',
    question_en: 'Can I bring my previous studies for a second opinion?',
    answer_es: 'Sí, es altamente recomendado. Nuestro programa de Evaluación de Segunda Opinión está específicamente diseñado para revisar diagnósticos y estudios previos. Puedes enviar tus imágenes médicas (MRI, CT, PET-CT, radiografías) y reportes en formato digital antes de tu llegada. Nuestro panel multidisciplinario comparará tus estudios anteriores con nuevas imágenes de alta resolución, identificando diferencias, evolución de condiciones, o posibles diagnósticos alternativos que no fueron considerados.',
    answer_en: 'Yes, it is highly recommended. Our Second Opinion Evaluation program is specifically designed to review previous diagnoses and studies. You can send your medical images (MRI, CT, PET-CT, X-rays) and reports in digital format before your arrival. Our multidisciplinary panel will compare your previous studies with new high-resolution images, identifying differences, condition evolution, or possible alternative diagnoses that were not considered.'
  },
  {
    question_es: '¿Necesito ayunar para los exámenes?',
    question_en: 'Do I need to fast for the exams?',
    answer_es: 'Depende del programa elegido. Para el Chequeo Ejecutivo Integral y el Screening Proactivo, requerimos ayuno de 8-12 horas antes de los análisis de sangre (panel metabólico y lipídico). Puedes beber agua. Te enviaremos instrucciones detalladas de preparación 48 horas antes de tu cita. Para estudios con contraste (PET-CT, algunos MRI), tendrás indicaciones específicas. La Evaluación de Segunda Opinión y el Diagnóstico Genético generalmente no requieren ayuno especial.',
    answer_en: 'It depends on the chosen program. For the Comprehensive Executive Checkup and Proactive Screening, we require 8-12 hours fasting before blood tests (metabolic and lipid panel). You can drink water. We will send you detailed preparation instructions 48 hours before your appointment. For contrast studies (PET-CT, some MRI), you will have specific indications. Second Opinion Evaluation and Genetic Diagnosis generally do not require special fasting.'
  },
  {
    question_es: '¿Puedo hacer todos los estudios en un solo día?',
    question_en: 'Can I complete all studies in one day?',
    answer_es: 'Sí, la mayoría de nuestros programas están diseñados para máxima eficiencia. El Chequeo Ejecutivo Integral y el Screening Proactivo se completan en 1 día de 6-8 horas. Tu coordinador de salud personal agenda todas las pruebas de forma consecutiva en el mismo centro médico: análisis de sangre por la mañana, seguido de imágenes diagnósticas, pruebas cardíacas y consultas con especialistas. Sin tiempos de espera ni burocracia. Lo que en tu país tomaría semanas o meses, en MediCol lo completamos en horas.',
    answer_en: 'Yes, most of our programs are designed for maximum efficiency. The Comprehensive Executive Checkup and Proactive Screening are completed in 1 day of 6-8 hours. Your personal health coordinator schedules all tests consecutively at the same medical center: blood tests in the morning, followed by diagnostic imaging, cardiac tests, and specialist consultations. No waiting times or bureaucracy. What would take weeks or months in your country, at MediCol we complete in hours.'
  },
  {
    question_es: '¿Los resultados son aceptados internacionalmente?',
    question_en: 'Are the results accepted internationally?',
    answer_es: 'Sí, completamente. Nuestros resultados son emitidos por clínicas certificadas JCI (Joint Commission International), el estándar de oro en acreditación hospitalaria mundial. Nuestros reportes médicos bilingües son reconocidos y aceptados por médicos, hospitales y compañías de seguros en Estados Unidos, Canadá, Europa y todo el mundo. Además, todos nuestros especialistas están certificados internacionalmente y muchos tienen formación en instituciones de Estados Unidos o Europa.',
    answer_en: 'Yes, completely. Our results are issued by JCI-certified clinics (Joint Commission International), the gold standard in global hospital accreditation. Our bilingual medical reports are recognized and accepted by doctors, hospitals, and insurance companies in the United States, Canada, Europe, and worldwide. Additionally, all our specialists are internationally certified and many have training from institutions in the United States or Europe.'
  },
  {
    question_es: '¿Incluyen consulta médica explicativa?',
    question_en: 'Do they include an explanatory medical consultation?',
    answer_es: 'Absolutamente. Todos nuestros programas incluyen una consulta detallada de resultados con especialistas médicos. No solo recibes un reporte, sino una explicación completa de qué significan tus resultados, cuáles son los siguientes pasos recomendados, y qué acciones preventivas debes tomar. La consulta puede ser presencial o virtual según tu preferencia. Además, ofrecemos seguimiento continuo: puedes contactar a tu coordinador médico con preguntas incluso después de regresar a tu país.',
    answer_en: 'Absolutely. All our programs include a detailed results consultation with medical specialists. You not only receive a report, but a complete explanation of what your results mean, what the recommended next steps are, and what preventive actions you should take. The consultation can be in-person or virtual depending on your preference. Additionally, we offer continuous follow-up: you can contact your medical coordinator with questions even after returning to your country.'
  }
];
