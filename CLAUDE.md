# Solempia — Master Routing File

Landing single-page de agencia de IA y automatización. Next.js 16 estático, deploy a GitHub Pages. Copy en español.

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
| `src/app/page.tsx` | composición: Hero → Marquee → About → Services → Process → WhyUs → FinalCTA |

### Components → ver [src/components/README.md](src/components/README.md)
- `layout/{NavBar,Footer}.tsx`
- `sections/{Hero,Marquee,About,Services,Process,WhyUs,FinalCTA}.tsx`
- `ui/{SectionWrapper,Eyebrow,Button,Logo,WhatsAppFloat}.tsx`

### Data → ver [src/data/README.md](src/data/README.md)
- `site.ts` — fuente única (marca, contactos, redes, formUrl, navLinks)
- `services.ts` — 6 servicios
- `process.ts` — 4 pasos
- `differentiators.ts` — 3 diferenciales
- `metrics.ts` — 3 métricas Hero + items del marquee

---

## Common tasks

| Quiero... | Editar |
|---|---|
| Cambiar marca, WhatsApp, email, redes, URL del formulario | `src/data/site.ts` |
| Añadir/editar un servicio | `src/data/services.ts` |
| Cambiar pasos del proceso | `src/data/process.ts` |
| Cambiar diferenciales | `src/data/differentiators.ts` |
| Cambiar métricas Hero o items del marquee | `src/data/metrics.ts` |
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
