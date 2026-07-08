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

Todo el contenido de `/`: `hero`, `problema`, `cambio`, `metodoResumen` (60/30/10), `escalera` (4 pasos), `garantia`, `numero` (ejemplo ilustrativo), `porque` (5 puntos), `faqTeaser`, `ctaFinal`.

- `numero.ejemplo.etiqueta` es **obligatoria y visible** ("Ejemplo ilustrativo…"). No esconderla.
- `faqTeaser` tiene copy propio de portada, distinto al de `faq.ts` (así lo define el draft).
- La escalera aparece también en el lateral del hero (solo `code`/`title`/`tag`).

## servicios.ts

`escalones[4]` (interface `ServicioEscalon`: code, slug, title, tag?, paraQuien, queHacemos, queRecibes[], condiciones?, nota?) + `formacion` (la puerta lateral, con el dato del art. 4 del Reglamento de IA) + `serviciosIntro` + `serviciosCta`.

## sectores.ts

`perfiles[5]` + `encaje` + `automocion` (heading, intro[2], radar con queMapea/queResuelve, `guardarrail` **visible obligatorio**, cta) + `sectoresCta` + `automocionCta`. `/sectores` y `/sectores/automocion` leen del mismo export `automocion`.

## metodo.ts

`metodoHero` + `fases[4]` (interface `Fase`; la fase 02 lleva `destacado` — la prueba de calidad — y la 03 lleva `condiciones[3]`) + `principio` (visible en página) + `metodoCta`.

## nosotros.ts

`nosotrosHero` + `socios[2]` (Sebastián / Natalia, con código `SE-00X/`) + `pequenos` + `donde`.

## faq.ts

`faqItems[13]` (interface `FaqItem`: id, question, answer), en el orden del draft. El `id` sirve de anchor (`/faq#precio`).

## contacto.ts

`contactoHero` + `sectorOptions[9]` + `sizeOptions[4]` + `bajoFormulario` (la alternativa suave hacia `/servicios#formacion`).

## Caso de estudio (futuro)

La web no publica casos todavía (decisión 2 del draft: cero nombres de clientes, cero testimonios). Cuando exista el primer caso **autorizado por escrito y anonimizado**, sustituye al ejemplo ilustrativo: `numero` en `home.ts` + adaptar `Numero.tsx`. No inventar métricas: si una cifra no es verificable, omitirla.

---

## Voz al editar
Sigue `docs/brand-voice.md`:
- Sentencias declarativas cortas, de tú, B2B industrial
- Riesgo calibrado: "reducir y hacer demostrable", nunca "eliminar" ni prometer cumplimiento legal
- Cifras reales o nada — el ejemplo económico siempre etiquetado como ilustrativo
- Sin emojis, sin superlativos vacíos, sin signos de exclamación, sin guion largo como conector
