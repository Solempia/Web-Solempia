# Data

Toda la configuración y contenido editable de la landing vive aquí. Componentes leen de estos archivos.

## site.ts — fuente de verdad de marca

Archivo central. Cambiar aquí actualiza simultáneamente NavBar, Footer, WhatsApp float, CTAs y metadata.

```ts
export const site = {
  brand,           // wordmark mostrado (minúsculas)
  tagline,         // eyebrow del Hero
  description,     // metadata.description
  whatsapp,        // dígitos con código país, sin "+"
  whatsappMessage, // texto pre-poblado al abrir WhatsApp
  email,
  instagram,
  linkedin,
  formUrl,         // URL del formulario externo (CTAs primarios)
  copyrightYear,
}

export const navLinks  // { href, label }[] — anchors del NavBar
```

## services.ts

```ts
interface Service {
  code: string;        // "01"–"06" (mostrado en mono)
  title: string;       // 2–4 palabras
  description: string; // 1–2 frases editoriales sobrias
}
```

6 entradas. Render en grid 3×2.

## process.ts

```ts
interface ProcessStep {
  code: string;        // "01"–"04"
  title: string;
  description: string; // 1 frase
}
```

4 pasos. Render horizontal con conector hairline.

## differentiators.ts

```ts
interface Differentiator {
  title: string;
  description: string;
}
```

3 entradas. Render como stack de tarjetas con iconografía geométrica primitiva.

## metrics.ts

```ts
interface Metric { value: string; label: string }      // 3 — Hero lateral
export const marqueeItems: string[]                    // ~9 — Marquee
```

## Voz al editar
Sigue `docs/brand-voice.md`: editorial sobrio, frases cortas, primera persona plural, sin emojis ni superlativos. Cifras y verbos concretos antes que adjetivos.
