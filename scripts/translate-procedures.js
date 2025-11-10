// Script para traducir todos los procedimientos/servicios
const fs = require('fs');
const path = require('path');

// Diccionario de traducciones
const translations = {
  'horas': 'hours',
  'hora': 'hour',
  'días': 'days',
  'día': 'day',
  'Inmediato': 'Immediate',
  'minutos': 'minutes',
  'minuto': 'minute',
  'semanas': 'weeks',
  'semana': 'week',
  'meses': 'months',
  'mes': 'month',
  'visitas': 'visits',
  'visita': 'visit',
  '(proceso completo)': '(complete process)',
  '(elaboración)': '(preparation)',
  'Temporal': 'Temporary',
  'Variable': 'Variable'
};

// Función para traducir texto
function translateText(spanishText) {
  let englishText = spanishText;
  
  // Traducir palabras
  Object.entries(translations).forEach(([spanish, english]) => {
    const regex = new RegExp('\\b' + spanish + '\\b', 'g');
    englishText = englishText.replace(regex, english);
  });
  
  return englishText;
}

// Función para procesar un archivo
function processFile(filePath, timeFieldName, replaceSurgeryTime = false) {
  console.log(`\nProcesando ${filePath}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Contar las ocurrencias antes de reemplazar
  const timePattern = new RegExp(`${timeFieldName}: '([^']+)'`, 'g');
  const recoveryPattern = /recovery_days: '([^']+)'/g;
  
  let timeMatches = [...content.matchAll(timePattern)];
  let recoveryMatches = [...content.matchAll(recoveryPattern)];
  
  console.log(`Encontradas ${timeMatches.length} entradas de tiempo`);
  console.log(`Encontradas ${recoveryMatches.length} entradas de recuperación`);
  
  // Reemplazar surgery_time/treatment_time
  content = content.replace(timePattern, (match, timeValue) => {
    const translatedValue = translateText(timeValue);
    return `${timeFieldName}_es: '${timeValue}',\n    ${timeFieldName}_en: '${translatedValue}'`;
  });
  
  // Reemplazar recovery_days
  content = content.replace(recoveryPattern, (match, recoveryValue) => {
    const translatedValue = translateText(recoveryValue);
    return `recovery_days_es: '${recoveryValue}',\n    recovery_days_en: '${translatedValue}'`;
  });
  
  // Escribir el archivo actualizado
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Archivo actualizado correctamente`);
}

// Procesar todos los archivos
const projectRoot = path.join(__dirname, '..');

try {
  processFile(
    path.join(projectRoot, 'src/data/plastic-surgery-procedures.ts'),
    'surgery_time'
  );
  
  processFile(
    path.join(projectRoot, 'src/data/services/stem-cells.ts'),
    'treatment_time'
  );
  
  processFile(
    path.join(projectRoot, 'src/data/services/dental-services.ts'),
    'treatment_time'
  );
  
  processFile(
    path.join(projectRoot, 'src/data/services/diagnostics-services.ts'),
    'treatment_time'
  );
  
  console.log('\n✓ Todos los archivos procesados exitosamente!');
} catch (error) {
  console.error('\n✗ Error:', error.message);
  process.exit(1);
}
