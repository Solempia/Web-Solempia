# Components

Three groups: `layout/` (chrome), `sections/` (page sections), `ui/` (small reusables).

## layout/

### NavBar.tsx — `'use client'`
Sticky top nav. Adds `bg-bg/85 backdrop-blur-sm border-b border-line` after scrolling 24px. Renders `<Logo />`, anchors from `navLinks` (in `src/data/site.ts`), and a primary CTA. Update nav anchors in `site.ts`, not here.

### Footer.tsx
Server component. Logo + 3 links (Instagram, LinkedIn, mailto) + copyright. All values come from `src/data/site.ts`.

## sections/

All Server Components except Hero (Framer Motion).

### Hero.tsx — `'use client'`
Editorial hero: eyebrow → titular → sub-copy → 2 CTAs (formulario / WhatsApp), with a metrics column on the right. Reads from `src/data/site.ts` and `src/data/metrics.ts`. **Sin orbs, sin gradients, sin glow** — la regla anti-cliché IA en `docs/design-tokens.md`.

### Marquee.tsx
Franja horizontal entre Hero y About. Lee `marqueeItems` de `src/data/metrics.ts`. Animación CSS pura (sin JS).

### About.tsx
Layout 2 columnas. Izquierda: copy. Derecha: tarjeta editorial con cita y metadata mono (sin orbital ring).

### Services.tsx
Grid 3×2 de tarjetas con líneas hairline (`gap-px bg-line`). Lee `services[]` de `src/data/services.ts`.

### Process.tsx
4 pasos centrados con conector horizontal de 1px. Lee `process[]` de `src/data/process.ts`.

### WhyUs.tsx
Layout 2 columnas. Izquierda: copy. Derecha: stack de tarjetas. Iconografía geométrica primitiva (línea, círculo, cuadrado) en `text-accent`. Lee `differentiators[]` de `src/data/differentiators.ts`.

### FinalCTA.tsx
Caja centrada con eyebrow + h2 + párrafo + 2 CTAs (formulario / WhatsApp).

## ui/

### SectionWrapper.tsx
`<SectionWrapper id="x">...</SectionWrapper>` — `py-32 md:py-40 px-6 max-w-6xl mx-auto`. Espacios generosos editoriales.

### Eyebrow.tsx
Label reusable: mono, uppercase, tracking-wide, `text-muted`, con dash decorativo opcional (`withDash` prop).

### Button.tsx
Dos variantes: `primary` (bg-accent, text-bg) y `ghost` (border-line). Acepta cualquier prop de anchor. Focus ring accesible.

### Logo.tsx
Símbolo abstracto (rectángulo concéntrico — placeholder hasta recibir el SVG definitivo) + wordmark `solempia`. Tamaños `sm` y `md`. Reusado en NavBar y Footer.

### WhatsAppFloat.tsx
Burbuja fija bottom-right. Verde `#25D366` (excepción funcional a la paleta). Lee número y mensaje de `src/data/site.ts`. Animación de "ring" CSS.

## Brand voice en componentes
Toda la copy en español. Sigue `docs/brand-voice.md`: editorial sobrio, frases cortas, primera persona plural, sin emojis ni superlativos. Toda configuración (marca, contactos, URLs, nav) vive en `src/data/site.ts`.
