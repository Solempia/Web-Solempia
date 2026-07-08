# Components

Cuatro grupos: `layout/` (chrome), `sections/` (secciones compartidas y por página), `ui/` (primitivos reusables). Las secciones específicas de una página viven en subcarpetas (`sections/home/`, `sections/servicios/`, etc.).

## layout/

### NavBar.tsx — `'use client'`
Header fijo. Fondo `bg-bg/85 backdrop-blur-sm border-b border-line` tras scrollear 24px (o con el menú móvil abierto). Estado activo por ruta con `usePathname()` + `aria-current="page"` (el subrayado persistente vive en `globals.css`). En `<md` muestra hamburguesa con panel desplegable; los links cierran el panel al navegar. Las rutas vienen de `navLinks` en `src/data/site.ts`.

### Footer.tsx
Server component. Tres columnas: marca + tagline, índice de rutas (navLinks + Contacto), contacto/redes. Barra inferior con copyright y `legalLinks` (aviso legal, privacidad, cookies).

## sections/ — compartidas

### CtaBand.tsx
Banda de cierre de página: caja centrada con eyebrow, h2 (title + titleAccent), body, CTA primario, secundario opcional y `note` opcional (link mono discreto). Props tipadas con `Cta` de `site.ts`. La usan home, servicios, sectores, automoción, método, FAQ y nosotros.

### FaqList.tsx
Lista abierta de preguntas (sin acordeón): `StaggerList` con filas `border-b`, pregunta y respuesta en grid 2/3. La usan la home (3 items de `home.ts`) y `/faq` (13 de `faq.ts`).

### ContactForm.tsx — `'use client'`
Formulario de `/contacto`: nombre, empresa, sector (select), tamaño (radio en fieldset), proceso (textarea opcional), email, teléfono opcional y checkbox RGPD obligatorio con link a `/privacidad`. POST JSON a `site.n8nWebhookUrl`; con la URL vacía el form muestra error con el email de `site.ts`. Si cambias campos, reconfigura el flujo n8n.

## sections/home/
Orden de página: HeroHome → Problema → Cambio → MetodoResumen → Escalera → Garantia → Numero → PorQue → FaqTeaser → CtaBand.

- **HeroHome** (`'use client'`, único con Framer Motion directo): titular del draft, 2 CTAs, línea de contexto mono; lateral con la escalera 01–04.
- **Problema / Cambio / MetodoResumen / Escalera / PorQue / FaqTeaser**: patrón estándar (SectionWrapper + Eyebrow + h2 con línea accent + Reveal/StaggerList).
- **Garantia**: caja statement (`border border-line bg-surface`), sin SectionWrapper para controlar el ritmo vertical.
- **Numero**: caja única con el ejemplo ilustrativo (con **etiqueta obligatoria visible**). Cuando exista el primer caso autorizado y anonimizado, lo sustituye (draft → PENDIENTES).

## sections/ por página

- `servicios/ServicioBloque.tsx` — tarjeta grande por escalón (para quién / qué hacemos / qué recibes / condiciones / nota destacada).
- `servicios/Formacion.tsx` — puerta lateral con `id="formacion"` (destino de `/servicios#formacion`), borde accent.
- `sectores/SectorGrid.tsx` — 5 perfiles + sexta celda con el criterio de encaje.
- `sectores/AutomocionTeaser.tsx` — teaser hacia `/sectores/automocion`.
- `metodo/Fases.tsx` — 4 fases editoriales; la 03 con condiciones numeradas; cierra con el principio de fondo.
- `nosotros/Socios.tsx` — 2 socios + "pequeños a propósito" + dónde estamos.

## ui/

### SectionWrapper.tsx
`<SectionWrapper id="x">...</SectionWrapper>` — `py-32 md:py-40 px-6 max-w-6xl mx-auto`.

### PageHeader.tsx
Cabecera estándar de subpágina: eyebrow + h1 (title + titleAccent) + intro. `pt-32 md:pt-40 pb-16 md:pb-20`.

### Eyebrow.tsx
Mono, uppercase, tracking-wide, `text-muted`. Dash decorativo opcional (`withDash`). Aceptar slugs estilo `método_` o `(SE-001/)`.

### Button.tsx
Dos variantes: `primary` (bg-accent) y `ghost` (border-line). Rutas internas van por `next/link`; anchors y URLs externas por `<a>`.

### Motion.tsx — `'use client'`
`Reveal`, `StaggerList`, `StaggerItem`. Todos respetan `prefers-reduced-motion`. Las secciones nuevas deben animar solo con estos wrappers (Framer Motion directo solo en HeroHome).

### Logo.tsx
Símbolo placeholder + wordmark. **Reemplazar `Mark` con el SVG definitivo cuando esté disponible.**

### WhatsAppFloat.tsx
Burbuja fija bottom-right. Verde `#25D366` (única excepción a la paleta).

## Brand voice en componentes
Copy en español, de tú, B2B industrial. Sigue `docs/brand-voice.md` y las decisiones de `docs/solempia-web-draft.md` (riesgo calibrado, etiqueta del ejemplo ilustrativo, guardarraíl de automoción visibles). Toda configuración vive en `src/data/site.ts`.
