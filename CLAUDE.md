# Solempia — Master Routing File

Landing single-page de agencia de IA y automatización. Next.js 16 estático, deploy a GitHub Pages. Copy en español.

**Postura editorial inspirada en EDUBA**: anti-hype, sobria, declarativa. Decir qué **no** construir es parte del modelo. Identidad visual: minimalismo tech premium europeo (Linear/Stripe/Vercel) con acentos terminal-editoriales (slugs mono tipo `construye_`, códigos `(SE-001/)`).

**Antes de tocar copy o estilos**, leer `docs/brand-voice.md` y `docs/design-tokens.md`. Hay anti-clichés visuales explícitamente vetados.

---

## Stack

| Tool | Version | Role |
|---|---|---|
| Next.js | 16 | Framework (App Router, `output: 'export'`) |
| TypeScript | 5 | Language |
| Tailwind CSS | v4 | Styling — **CSS-first config**, no `tailwind.config.ts` |
| Framer Motion | latest | Animations (solo Hero) |
| GitHub Actions | — | CI → GitHub Pages |

---

## Top-level layout

```
portafolio/
├── CLAUDE.md                 ← you are here
├── docs/
│   ├── prd.md                ← producto y alcance
│   ├── brand-voice.md        ← tono, vocabulario do/don'ts
│   └── design-tokens.md      ← color, tipografía, anti-clichés IA
├── src/
│   ├── app/                  ← Next.js routes
│   ├── components/           ← UI components (ver src/components/README.md)
│   └── data/                 ← contenido editable (ver src/data/README.md)
├── public/                   ← assets estáticos
├── .github/workflows/        ← deploy
└── next.config.ts            ← static export config
```

---

## File map

### Config
| File | Purpose |
|---|---|
| `next.config.ts` | `output: 'export'` + `images.unoptimized` para GitHub Pages |
| `postcss.config.mjs` | autogenerado |
| `tsconfig.json` | alias `@/*` → `src/*` |
| `.github/workflows/deploy.yml` | push a `main` → build → upload `./out` → Pages |

### Docs (leer antes de editar)
| File | Leer cuando... |
|---|---|
| `docs/prd.md` | añadir/quitar secciones, cambiar alcance |
| `docs/brand-voice.md` | escribir cualquier copy |
| `docs/design-tokens.md` | tocar colores, fuentes, espaciado, animación |

### Design system (código)
| File | Purpose |
|---|---|
| `src/app/globals.css` | tokens en `@theme` Tailwind v4. Espejo de `docs/design-tokens.md`. |

Tokens expuestos como utilidades Tailwind:
```
bg-bg          (#FAFAF7 — fondo hueso)
bg-surface     (#FFFFFF — tarjetas)
text-ink       (#1A1A1A — texto principal)
text-muted     (#6B6B6B — texto secundario, metadata)
border-line    (#E5E5E0 — divisores, bordes)
text-accent    (#1E2952 — azul tinta, único acento)
.eyebrow       (mono uppercase tracking-wide para labels)
.divider       (hairline 1px bg-line)
```

### App shell
| File | Purpose |
|---|---|
| `src/app/layout.tsx` | root layout: fuentes, metadata, NavBar, Footer, WhatsAppFloat |
| `src/app/page.tsx` | composición: Hero → Marquee → Pillars → Process → Services → Case → WhyUs → Team → FinalCTA |

### Components → ver [src/components/README.md](src/components/README.md)
- `layout/{NavBar,Footer}.tsx`
- `sections/{Hero,Marquee,Pillars,Process,Services,Case,WhyUs,Team,FinalCTA}.tsx`
- `ui/{SectionWrapper,Eyebrow,Button,Logo,WhatsAppFloat}.tsx`

### Data → ver [src/data/README.md](src/data/README.md)
- `site.ts` — fuente única (marca, contactos, redes, formUrl, navLinks)
- `pillars.ts` — los 3 verbos (Construye / Enseña / Gobierna)
- `process.ts` — 5 pasos (paso 02 = "Clasifica el trabajo / qué no construir")
- `services.ts` — 6 servicios
- `differentiators.ts` — 3 puntos de postura
- `cases.ts` — caso de estudio único (slot vacío hasta llenarse con datos reales)
- `team.ts` — bio (slot vacío)
- `metrics.ts` — items del Marquee

---

## Common tasks

| Quiero... | Editar |
|---|---|
| Cambiar marca, WhatsApp, email, redes, URL del formulario | `src/data/site.ts` |
| Editar los 3 verbos del modelo | `src/data/pillars.ts` |
| Cambiar pasos del proceso (5) | `src/data/process.ts` |
| Añadir/editar un servicio | `src/data/services.ts` |
| Editar la postura (3 puntos) | `src/data/differentiators.ts` |
| Rellenar el caso de estudio | `src/data/cases.ts` |
| Rellenar la bio del equipo | `src/data/team.ts` |
| Cambiar items del Marquee | `src/data/metrics.ts` |
| Cambiar anchors del menú | `navLinks` en `src/data/site.ts` |
| Cambiar colores | `src/app/globals.css` (`@theme`) + `docs/design-tokens.md` (sincronizar) |
| Reemplazar logo placeholder | `src/components/ui/Logo.tsx` (componente `<Mark />`) |
| Añadir una sección nueva | crear en `src/components/sections/`, importar en `src/app/page.tsx`, añadir anchor en `navLinks` |

---

## Deploy

1. Push a GitHub
2. Repo Settings → Pages → Source: **GitHub Actions**
3. Push a `main` → el workflow construye y publica

**Subpath** (p. ej. `username.github.io/portafolio`), añadir a `next.config.ts`:
```ts
basePath: '/portafolio',
assetPrefix: '/portafolio',
```

**Local:**
- Dev: `npm run dev` → http://localhost:3000
- Build: `npm run build` → genera `./out/index.html`
