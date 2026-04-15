

## Plan: Agregar "Términos y Condiciones" y "Alcance Técnico" al Footer

### Enfoque
Copiar los PDFs a la carpeta `public/docs/` para que sean accesibles directamente por URL, y agregar dos nuevos enlaces en la sección Legal del footer que abran los PDFs en una nueva pestaña.

---

### Cambio 1: Copiar los PDFs al proyecto

- `user-uploads://Terminos_y_Condiciones_Isoesthetic.pdf` → `public/docs/terminos-y-condiciones.pdf`
- `user-uploads://Alcance_Tecnico_Isoesthetic.pdf` → `public/docs/alcance-tecnico.pdf`

Al estar en `public/`, serán accesibles en `/docs/terminos-y-condiciones.pdf` y `/docs/alcance-tecnico.pdf`.

---

### Cambio 2: Agregar enlaces en el footer

**Archivo:** `src/components/Footer.tsx`

Agregar dos entradas al array `footerNav.legal`:

```typescript
legal: [
  { key: 'footer.legal.privacy', href: '/politica-de-privacidad' },
  { key: 'footer.legal.terms', href: '/acuerdo-de-usuario' },
  { key: 'footer.legal.terms_conditions', href: '/docs/terminos-y-condiciones.pdf', external: true },
  { key: 'footer.legal.technical_scope', href: '/docs/alcance-tecnico.pdf', external: true },
],
```

Los enlaces con `external: true` se abrirán en nueva pestaña (`target="_blank"`). Se actualizará el renderizado del footer para manejar esta propiedad.

---

### Cambio 3: Agregar traducciones

**`src/lib/i18n/es.json`:**
```json
"footer.legal.terms_conditions": "Términos y Condiciones",
"footer.legal.technical_scope": "Alcance Técnico"
```

**`src/lib/i18n/en.json`:**
```json
"footer.legal.terms_conditions": "Terms and Conditions",
"footer.legal.technical_scope": "Technical Scope"
```

---

### Resultado
- Los PDFs quedan alojados en la página y se abren directamente en el navegador
- El footer mostrará 4 opciones en la sección Legal
- Se ve profesional al estar bajo el dominio del sitio

