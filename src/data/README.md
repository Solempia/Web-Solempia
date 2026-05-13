# Data

Toda la configuración y contenido editable de la landing vive aquí. Los componentes leen de estos archivos.

## site.ts — fuente de verdad de marca

Archivo central. Cambiar aquí actualiza NavBar, Footer, WhatsApp float, CTAs y metadata.

```ts
export const site = {
  brand,            // wordmark (minúsculas)
  tagline,          // texto auxiliar
  description,      // metadata.description
  whatsapp,         // dígitos con código país, sin "+"
  whatsappMessage,  // texto pre-poblado al abrir WhatsApp
  email,
  instagram, linkedin,
  formUrl,          // URL del formulario externo
  copyrightYear,
}

export const navLinks  // { href, label }[] — anchors del NavBar
```

## pillars.ts — los 3 verbos (Construye / Enseña / Gobierna)

Modelo central de Solempia. Aparece en Hero (lateral) y en `Pillars.tsx`.

```ts
interface Pillar {
  code: string;     // "01"–"03"
  verb: string;     // "Construye" / "Enseña" / "Gobierna"
  slug: string;     // "construye_" / etc — eyebrow mono
  headline: string; // 3–5 palabras
  body: string;     // 1–2 frases
}
```

## process.ts — los 5 pasos

```ts
interface ProcessStep {
  code: string;        // "01"–"05"
  title: string;
  description: string;
}
```

**El paso 02 — "Clasifica el trabajo" — es el diferenciador**: decidir explícitamente qué NO automatizar. No tocar sin razón.

## services.ts

6 entradas. Render en grid 3×2.

```ts
interface Service { code: string; title: string; description: string }
```

## differentiators.ts — postura

3 entradas. Render en `WhyUs.tsx` como lista enumerada sobria.

```ts
interface Differentiator { title: string; description: string }
```

## cases.ts — caso de estudio único

**Slot vacío hasta que se rellene con datos reales.** No inventar métricas — si una cifra no es verificable, omitirla.

```ts
interface CaseStudy {
  client; sector; problem; built;
  before; after; delivery;
  testimonial?: { quote; author; role };
}
```

## team.ts — bio

**Slot vacío.** 1-3 frases honestas sobre quién dirige Solempia. Sin nombres ni titulares falsos.

```ts
interface TeamBio { code: string; body: string }
```

## metrics.ts

```ts
export const marqueeItems: string[]  // ~9 ítems del Marquee
```

Las "métricas duras" del Hero fueron eliminadas: no se muestran cifras inventadas. Cuando exista una métrica real verificable, va dentro del caso, no en el Hero.

---

## Voz al editar
Sigue `docs/brand-voice.md`:
- Sentencias declarativas cortas
- Primera persona plural
- Cifras reales o nada — sin redondeos cómodos
- Decir qué **no** construir es la postura central
- Sin emojis, sin superlativos vacíos, sin signos de exclamación
