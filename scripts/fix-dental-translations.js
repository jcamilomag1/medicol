const fs = require('fs');

let content = fs.readFileSync('src/data/services/dental-services.ts', 'utf8');

// Diccionario de traducciones
const translations = {
  'horas': 'hours', 'hora': 'hour',
  'días': 'days', 'día': 'day',
  'minutos': 'minutes', 'minuto': 'minute',
  'Inmediato': 'Immediate',
  'visitas': 'visits', 'visita': 'visit',
  'semanas': 'weeks', 'semana': 'week',
  'meses': 'months', 'mes': 'month',
  '(proceso completo)': '(complete process)',
  '(elaboración)': '(preparation)',
  'Temporal': 'Temporary'
};

// Función para traducir
function translate(text) {
  let result = text;
  Object.entries(translations).forEach(([es, en]) => {
    result = result.replace(new RegExp('\\b' + es + '\\b', 'g'), en);
  });
  return result;
}

// Reemplazar treatment_time
content = content.replace(/(\s+)treatment_time: '([^']+)',/g, (match, indent, value) => {
  return `${indent}treatment_time_es: '${value}',\n${indent}treatment_time_en: '${translate(value)}',`;
});

// Reemplazar recovery_days
content = content.replace(/(\s+)recovery_days: '([^']+)',/g, (match, indent, value) => {
  return `${indent}recovery_days_es: '${value}',\n${indent}recovery_days_en: '${translate(value)}',`;
});

fs.writeFileSync('src/data/services/dental-services.ts', content);
console.log('✓ Dental services actualizado!');
