# Components

Tres grupos: `layout/` (chrome), `sections/` (secciones de página), `ui/` (primitivos reusables).

## layout/

### NavBar.tsx — `'use client'`
Sticky top nav. Añade `bg-bg/85 backdrop-blur-sm border-b border-line` tras scrollear 24px. Renderiza `<Logo />`, los anchors de `navLinks` (en `src/data/site.ts`) y un CTA primario. Actualizar anchors en `site.ts`, no aquí.

### Footer.tsx
Server component. Logo + 3 links (Instagram, LinkedIn, mailto) + copyright. Todos los valores vienen de `src/data/site.ts`.

## sections/

Todos Server Components excepto Hero (Framer Motion). Orden actual de página: Hero → Marquee → Pillars → Process → Services → Case → WhyUs → Team → FinalCTA.

### Hero.tsx — `'use client'`
Apertura anti-hype: eyebrow → titular declarativo → sub-copy → 2 CTAs. Lateral derecho: los 3 verbos del modelo (Construye / Enseña / Gobierna) como anclas mono. Lee de `site.ts` y `pillars.ts`. **Sin métricas inventadas, sin orbs, sin gradients.**

### Marquee.tsx
Franja horizontal entre Hero y Pillars. Lee `marqueeItems` de `src/data/metrics.ts`. Animación CSS pura.

### Pillars.tsx
Sustituye al About antiguo. Tres tarjetas con `code`, `slug` mono, headline y body — uno por verbo. Lee `pillars[]` de `src/data/pillars.ts`.

### Process.tsx
5 pasos en lista vertical editorial (no centrada, no con conector decorativo — el listado es la jerarquía). **El paso 02 "Clasifica el trabajo" es el diferenciador**: decidir explícitamente qué NO automatizar. Lee de `src/data/process.ts`.

### Services.tsx
Grid 3×2 de tarjetas con líneas hairline (`gap-px bg-line`). Cada servicio se aplica o no según la clasificación del paso 02. Lee `services[]` de `src/data/services.ts`.

### Case.tsx
Un único caso de estudio con bloques editoriales: cliente/sector, problema, qué construimos, antes/después, testimonio opcional. **Slot vacío** — completar con datos reales en `src/data/cases.ts`. No inventar métricas.

### WhyUs.tsx
Postura anti-hype. Lista enumerada (no tarjetas con iconos). Lee `differentiators[]` de `src/data/differentiators.ts`.

### Team.tsx
Bio honesta. **Slot vacío** — completar con texto real en `src/data/team.ts`.

### FinalCTA.tsx
Caja centrada con eyebrow + h2 + párrafo sobrio + 2 CTAs (formulario / WhatsApp). Sin urgencia falsa.

## ui/

### SectionWrapper.tsx
`<SectionWrapper id="x">...</SectionWrapper>` — `py-32 md:py-40 px-6 max-w-6xl mx-auto`.

### Eyebrow.tsx
Mono, uppercase, tracking-wide, `text-muted`. Dash decorativo opcional (`withDash` prop). Aceptar slugs estilo `construye_` o `(SE-METHOD/)`.

### Button.tsx
Dos variantes: `primary` (bg-accent, text-bg) y `ghost` (border-line). Acepta cualquier prop de anchor. Focus ring accesible.

### Logo.tsx
Símbolo placeholder (rectángulo concéntrico) + wordmark `solempia`. Tamaños `sm` y `md`. **Reemplazar el componente `Mark` con el SVG definitivo cuando esté disponible.**

### WhatsAppFloat.tsx
Burbuja fija bottom-right. Verde `#25D366` (única excepción a la paleta — convención universal). Lee número y mensaje de `src/data/site.ts`.

## Brand voice en componentes
Toda la copy en español. Sigue `docs/brand-voice.md`: declarativo, primera persona plural, sentencias cortas. Decir qué **no** construir es parte de la postura. Toda configuración (marca, contactos, URLs, nav) vive en `src/data/site.ts`.
