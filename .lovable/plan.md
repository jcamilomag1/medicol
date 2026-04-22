

## Plan: Rediseño de marca — Medicol → Isoesthetic

### Resumen
Reemplazar todas las referencias a "Medicol" por "Isoesthetic" en la aplicación, instalar el nuevo logo SVG, actualizar el correo de contacto a `management@isoesthetic.com`, y enlazar correctamente las redes sociales nuevas (Instagram, Facebook, LinkedIn).

---

### 1. Nuevo logo

**Acción:** Copiar el archivo subido a `src/assets/isoesthetic-logo-blanco.svg`.

**Archivo a editar:** `src/components/Navbar.tsx`
- Cambiar el import: `import isoestheticLogo from '@/assets/isoesthetic-logo-blanco.svg';`
- Actualizar `<img src={isoestheticLogo} alt="Isoesthetic Logo" />`
- Mantener `className="h-10 w-auto"` (el SVG escala perfectamente).

> Nota: el archivo `medicol-logo-blanco.png` antiguo se queda en assets sin usar (no rompe nada). Lo eliminamos solo si se confirma.

---

### 2. Reemplazo de "Medicol" → "Isoesthetic" en toda la app

**Archivos de texto/UI (visible al usuario):**
- `index.html` — `<title>`, meta description, og:title, twitter:title, author.
- `src/lib/i18n/es.json` y `src/lib/i18n/en.json` — todas las cadenas con "Medicol" / "MEDICOL" / "MediCol" (incluye `header_medicol`, `price_in_medicol`, `recovery_medicol`, etc. — solo el texto visible cambia, las **claves JSON se mantienen** para no romper referencias).
- `src/data/experience-texts.ts` — frases con "Medicol" en `faq_subtitle_es/en` y `whatsapp_message_es/en`.
- `src/data/faqs/dental-faqs.ts` (y otros faqs si aplica) — preguntas que mencionan "Medicol".
- `src/components/plastic-surgery/TestimonialsSection.tsx` — texto del testimonio.
- `src/components/sections/BlogHeroSection.tsx` — `alt="Isoesthetic Blog"`.
- `src/components/sections/PricingSection.tsx` — comentario y badge "Medicol Colombia" → "Isoesthetic Colombia".
- `src/pages/PrivacyPolicyPage.tsx` y `src/pages/UserAgreementPage.tsx` — todas las menciones a "Medicol Medical Tourism" y "Medicol".
- `src/components/legal/LegalLayout.tsx` — texto de contacto.
- `src/components/Footer.tsx` — copyright `© Isoesthetic`.

**Comentarios y nombres internos (no afectan UX, solo legibilidad):**
- Variables como `medicolJourneyEntries` en `ExperiencePage.tsx` → renombrar a `isoestheticJourneyEntries`.
- Comentarios `// Medicol` → `// Isoesthetic`.

**Lo que NO se renombra (para no romper la app):**
- Claves de traducción i18n (`header_medicol`, `price_in_medicol`, etc.) — solo cambian sus **valores**.
- Nombres de componentes: `MedicolDifferentiators`, `AboutMedicolSection`, `MedicolExperienceSection`, props como `medicolPrice` — son internos; renombrarlos requeriría tocar muchos imports sin ningún beneficio para el usuario. Quedan como están.

---

### 3. Correo electrónico → `management@isoesthetic.com`

Reemplazar todos los `mailto:` y textos de email visibles:
- `src/components/Footer.tsx` — `medicol.mde@gmail.com` → `management@isoesthetic.com`.
- `src/components/legal/LegalLayout.tsx` — `info@medicol.me` → `management@isoesthetic.com`.
- `src/pages/PrivacyPolicyPage.tsx` — dos ocurrencias de `info@medicol.me`.
- `src/pages/UserAgreementPage.tsx` — `info@medicol.me`.
- `src/lib/i18n/en.json` y `es.json` — clave `email_address` (`medicol@medellinmedicalcenter.com`) → `management@isoesthetic.com`.
- Cualquier otra referencia de email encontrada en la búsqueda.

---

### 4. Redes sociales

**Archivo:** `src/components/Footer.tsx`

Reemplazar:
| Red | Nuevo enlace |
|---|---|
| Instagram | `https://www.instagram.com/isoesthetic/` |
| Facebook | `https://www.facebook.com/profile.php?id=61573490323474` |
| LinkedIn | `https://www.linkedin.com/company/isoesthetic/?viewAsMember=true` |

**Archivo adicional:** `src/components/sections/TeamSection.tsx`
- Los enlaces de Instagram/LinkedIn de los doctores actualmente apuntan a `https://instagram.com` y `https://linkedin.com` (genéricos). Se actualizarán a las nuevas redes oficiales de Isoesthetic como fallback hasta que se proporcionen perfiles individuales.

---

### 5. Verificación final

- Confirmar visualmente: logo en navbar, footer (copyright), redes sociales, correo de contacto, página de privacidad, acuerdo de usuario, hero del blog.
- Confirmar que la búsqueda `Medicol` (case-insensitive) en todos los archivos `.tsx/.ts/.json/.html` solo devuelva nombres de componentes/props internos (que mantenemos intencionalmente).

---

### Resultado esperado
- Toda la app muestra "Isoesthetic" como marca.
- Logo nuevo en SVG visible en el navbar.
- Correo unificado: `management@isoesthetic.com`.
- Redes sociales del footer apuntan a los perfiles oficiales de Isoesthetic.
- Funcionalidad y estructura de código intactas.

