# Data

Toda la configuración y contenido editable del sitio vive aquí. Los componentes leen de estos archivos. **La fuente de verdad del copy es `docs/solempia-web-draft.md`**: si cambias contenido aquí, actualiza el draft (o al revés).

## site.ts — fuente de verdad de marca

Archivo central. Cambiar aquí actualiza NavBar, Footer, WhatsApp float, CTAs y metadata.

```ts
export const site = {
  brand,            // wordmark (minúsculas)
  tagline,          // posicionamiento en una línea (footer)
  description,      // metadata.description de la home
  url,              // dominio canónico — metadataBase, sitemap, robots
  whatsapp,         // dígitos con código país, sin "+"
  whatsappMessage,  // texto pre-poblado al abrir WhatsApp
  email,
  instagram, linkedin,
  n8nWebhookUrl,    // webhook n8n del formulario; "" = form deshabilitado
  copyrightYear,
}

export const navLinks   // { href, label }[] — rutas reales del NavBar/Footer
export const legalLinks // { href, label }[] — aviso legal, privacidad, cookies (Footer)
export const ctas       // los 4 textos de botón canónicos del draft
export interface Cta    // { label, href }
```

**`ctas` es de solo lectura conceptual**: los 4 textos de botón (diagnóstico, llamada, formación, radar) son consistentes en todo el sitio por decisión del draft. No redactar variantes por página.

## home.ts — portada completa

Todo el contenido de `/`: `hero`, `caso` (prueba), `problema`, `cambio`, `metodoResumen` (60/30/10), `escalera` (4 pasos), `garantia`, `controlIa`, `ctaFinal`.

- **Promesa única de la portada: horas y margen.** El control de IA vive solo en `controlIa`, al final. No reintroducirlo en el hero: esa doble promesa es lo que hacía ilegible la portada.
- `caso` vale `null` hasta que haya un cliente real autorizado. Con `null`, la sección no se renderiza. No rellenarlo con cifras estimadas.
- Cada sección lleva `title` + `titleAccent` (el acento se pinta en color). **Son la fuente real**: los componentes los consumen, no reescriben headings en el JSX.
- La escalera aparece también en el lateral del hero (solo `code`/`title`/`tag`).
- Antes de redactar aquí, leer las reglas verificables de `docs/brand-voice.md` (R1-R6). La R1 fija un presupuesto de 3 usos de "X, no Y" por página; hoy se gastan en `problema.cierre`, `cambio.cierre` y `metodoResumen.intro`.

## servicios.ts

`escalones[4]` (interface `ServicioEscalon`: code, slug, title, tag?, paraQuien, queHacemos, queRecibes[], condiciones?, nota?) + `formacion` (la puerta lateral, con el dato del art. 4 del Reglamento de IA) + `serviciosIntro` + `serviciosCta`.

## sectores.ts

`perfiles[5]` + `encaje` + `automocion` (heading, intro[2], radar con queMapea/queResuelve, `guardarrail` **visible obligatorio**, cta) + `sectoresCta` + `automocionCta` (con `note` hacia `/radar`). `/sectores` y `/sectores/automocion` leen del mismo export `automocion`.

## radar.ts

Contenido de `/radar`, la versión genérica del Radar de IA en la Sombra (landing de campaña para cualquier pyme, sin TISAX/IATF; la única página del sitio que no se limita a industria): `radar` (intro, contexto, queMapea, queResuelve, `guardarrail` **visible obligatorio**) + `radarCta` (con `note` hacia `/sectores/automocion`). La versión automoción vive en `sectores.ts`.

## metodo.ts

`metodoHero` + `fases[4]` (interface `Fase`; la fase 02 lleva `destacado` — la prueba de calidad — y la 03 lleva `condiciones[3]`) + `principio` (visible en página) + `metodoCta`.

## nosotros.ts

`nosotrosHero` + `socios[2]` (Sebastián / Natalia, con código `SE-00X/`) + `pequenos` + `donde`.

## faq.ts

`faqItems[12]` (interface `FaqItem`: id, question, answer), en el orden del draft. El `id` sirve de anchor (`/faq#precio`).

## calculadora.ts

Contenido de `/calculadora`, el peldaño gratuito de la escalera: `calculadoraHero` + `campos` (personas, horas, coste: label, hint, min, max, defecto) + `resultado` + `calculadoraCta`.

- `SEMANAS_ANIO` (46) y `RECUPERACION` (25-35 %) son **los supuestos del cálculo**. Cambiarlos cambia la cifra que ve el visitante, así que van declarados aquí y explicados en `resultado.supuestos`, visible en pantalla.
- Se usan 46 semanas y no 52 a propósito: 52 asume que nadie tiene vacaciones e infla el resultado. El ejemplo ilustrativo retirado en 2026-09 sí usaba 52 (daba 83.200 €; con 46 son 73.600 €).
- `resultado.aviso` es **obligatorio y visible**: esto es una estimación con los supuestos del visitante, no una medición.

## contacto.ts

`contactServices` contiene etiquetas, títulos y ayudas; `contactPages` define los valores iniciales por ruta. `ContactService`, `parseContactService`, `normalizePath` y `contactHref` centralizan tipos y enlaces. `PLAZO_RESPUESTA` y `exito` son comunes. Ver `docs/contacto.md`.

## Caso de estudio

La decisión 2 del draft (cero nombres de clientes, cero testimonios) quedó **derogada en 2026-09-16**: hay clientes reales y la falta de prueba era el mayor lastre de conversión del sitio.

Para publicar el primero, rellenar `caso` en `home.ts` con datos **autorizados por escrito y anonimizados**: perfil, proceso, cifra antes, cifra después, cómo se midió y plazo. No inventar métricas: si una cifra no es verificable, omitirla. Mientras `caso` sea `null`, la sección simplemente no aparece.

---

## Voz al editar
Sigue `docs/brand-voice.md`:
- Sentencias declarativas cortas, de tú, B2B industrial
- Riesgo calibrado: "reducir y hacer demostrable", nunca "eliminar" ni prometer cumplimiento legal
- Cifras reales o nada — el ejemplo económico siempre etiquetado como ilustrativo
- Sin emojis, sin superlativos vacíos, sin signos de exclamación, sin guion largo como conector
