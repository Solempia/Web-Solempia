# Solempia — Master Routing File

Sitio multipágina de Solempia: automatización y uso seguro de IA para pymes industriales, con automoción/OEM como especialización. Next.js 16 estático, deploy a GitHub Pages (dominio solempia.com). Copy en español, de tú, B2B industrial.

**Postura editorial**: anti-hype, sobria, declarativa. La IA es la capa más pequeña del sistema y lo decimos nosotros. Riesgo calibrado: "reducir y hacer demostrable", nunca "eliminar" ni prometer cumplimiento legal. Identidad visual: minimalismo tech premium europeo (Linear/Stripe/Vercel) con acentos terminal-editoriales (slugs mono tipo `método_`, códigos `(SE-001/)`).

**Antes de tocar copy o estilos**, leer `docs/solempia-web-draft.md` (fuente de verdad del contenido), `docs/brand-voice.md` y `docs/design-tokens.md`. Hay anti-clichés visuales explícitamente vetados.

---

## Stack

| Tool | Version | Role |
|---|---|---|
| Next.js | 16 | Framework (App Router, `output: 'export'`, `trailingSlash`) |
| TypeScript | 5 | Language |
| Tailwind CSS | v4 | Styling — **CSS-first config**, no `tailwind.config.ts` |
| Framer Motion | latest | Animations (directo solo en HeroHome; resto vía `ui/Motion.tsx`) |
| GitHub Actions | — | CI → GitHub Pages |

---

## Top-level layout

```
portafolio/
├── CLAUDE.md                 ← you are here
├── docs/
│   ├── solempia-web-draft.md ← fuente de verdad del copy (todas las páginas)
│   ├── prd.md                ← producto y alcance
│   ├── brand-voice.md        ← tono, vocabulario do/don'ts
│   ├── design-tokens.md      ← color, tipografía, anti-clichés IA
│   └── imagery-spec.md       ← dirección de imagen (pendiente de decidir; sin stock)
├── src/
│   ├── app/                  ← Next.js routes (9 páginas + sitemap/robots)
│   ├── components/           ← UI components (ver src/components/README.md)
│   └── data/                 ← contenido editable (ver src/data/README.md)
├── public/                   ← assets estáticos + CNAME (solempia.com)
├── .github/workflows/        ← deploy
└── next.config.ts            ← static export config
```

---

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | Home: hero → problema → cambio → método 60/30/10 → escalera → garantía → número (ejemplo ilustrativo) → por qué → FAQ teaser → CTA |
| `/servicios` | Escalera de 4 pasos + formación (`#formacion`) |
| `/sectores` | 5 perfiles industriales + teaser automoción |
| `/sectores/automocion` | Radar de IA en la Sombra, versión automoción/OEM (URL propia para campañas) |
| `/radar` | Radar de IA en la Sombra, versión genérica para cualquier pyme — única página que no se limita a industria (URL propia para campañas) |
| `/metodo` | 4 fases (ordenar / automatizar / aplicar IA / formar) |
| `/nosotros` | Los 2 socios + "pequeños a propósito" |
| `/faq` | 13 preguntas completas |
| `/contacto` | Formulario (webhook n8n) + vías directas |
| `/aviso-legal` · `/privacidad` · `/cookies` | Placeholders legales, `noindex` hasta validar con gestoría |

---

## File map

### Config
| File | Purpose |
|---|---|
| `next.config.ts` | `output: 'export'` + `trailingSlash` + `images.unoptimized` para GitHub Pages |
| `postcss.config.mjs` | autogenerado |
| `tsconfig.json` | alias `@/*` → `src/*` |
| `.github/workflows/deploy.yml` | push a `main`/`master` → build → upload `./out` → Pages |

### Docs (leer antes de editar)
| File | Leer cuando... |
|---|---|
| `docs/solempia-web-draft.md` | tocar cualquier copy — es la fuente de verdad y contiene las decisiones de posicionamiento |
| `docs/prd.md` | añadir/quitar páginas o secciones, cambiar alcance |
| `docs/brand-voice.md` | escribir cualquier copy |
| `docs/design-tokens.md` | tocar colores, fuentes, espaciado, animación |
| `docs/imagery-spec.md` | añadir cualquier imagen — la dirección visual está pendiente de decidir y el stock está vetado |

### Design system (código)
| File | Purpose |
|---|---|
| `src/app/globals.css` | tokens en `@theme` Tailwind v4. Espejo de `docs/design-tokens.md`. También: scroll-margin para anchors y estado activo del nav. |

Tokens expuestos como utilidades Tailwind (dirección Malaquita):
```
bg-bg          (#EEF0E8 — bone con tinte salvia)
bg-surface     (#F8F9F1 — tarjetas, paneles)
text-ink       (#141614 — texto principal, casi negro con micro-tinte verde)
text-muted     (#6A7064 — salvia: texto secundario, metadata)
border-line    (#D6DACE — divisores, bordes)
text-accent    (#1F4034 — malaquita, único acento de acción)
text-bronze    (#6B5536 — segunda tinta cálida: códigos, marginalia; no es CTA)
```

### App shell
| File | Purpose |
|---|---|
| `src/app/layout.tsx` | root layout: fuentes, `metadataBase`, NavBar, Footer, WhatsAppFloat |
| `src/app/sitemap.ts` / `robots.ts` | SEO estático (`force-static`) |

### Components → ver [src/components/README.md](src/components/README.md)
- `layout/{NavBar,Footer}.tsx` — NavBar con estado activo por ruta y menú móvil
- `sections/{CtaBand,FaqList,ContactForm}.tsx` — compartidas
- `sections/home/*` · `sections/servicios/*` · `sections/sectores/*` · `sections/metodo/*` · `sections/nosotros/*`
- `ui/{SectionWrapper,PageHeader,Eyebrow,Button,Logo,Motion,WhatsAppFloat}.tsx`

### Data → ver [src/data/README.md](src/data/README.md)
- `site.ts` — fuente única (marca, contactos, redes, `n8nWebhookUrl`, `navLinks`, `legalLinks`, `ctas` canónicos)
- `home.ts` — todo el contenido de la portada
- `servicios.ts` / `sectores.ts` / `radar.ts` / `metodo.ts` / `nosotros.ts` / `faq.ts` / `contacto.ts` — contenido por página

---

## Common tasks

| Quiero... | Editar |
|---|---|
| Cambiar marca, WhatsApp, email, redes, webhook del formulario | `src/data/site.ts` |
| Cambiar los textos de botón (4 canónicos) | `ctas` en `src/data/site.ts` |
| Editar el hero, la garantía o el ejemplo económico | `src/data/home.ts` |
| Editar un servicio de la escalera o la formación | `src/data/servicios.ts` |
| Editar sectores o el Radar versión automoción | `src/data/sectores.ts` |
| Editar el Radar genérico (`/radar`) | `src/data/radar.ts` |
| Editar las fases del método | `src/data/metodo.ts` |
| Editar bios del equipo | `src/data/nosotros.ts` |
| Añadir/editar una pregunta del FAQ | `src/data/faq.ts` (portada: `faqTeaser` en `home.ts`) |
| Cambiar opciones del formulario (sector/tamaño) | `src/data/contacto.ts` + reconfigurar flujo n8n |
| Cambiar el menú | `navLinks` en `src/data/site.ts` |
| Cambiar colores | `src/app/globals.css` (`@theme`) + `docs/design-tokens.md` (sincronizar) |
| Cambiar el logo (malla Malaquita, 7 nodos) | `src/components/ui/Logo.tsx` (componente `<Mark />`) |
| Añadir cualquier imagen | leer antes `docs/imagery-spec.md` — dirección pendiente de decidir, fotografía de stock vetada |
| Cambiar favicon / apple icon / imagen OG | `src/app/{icon,apple-icon,opengraph-image}.tsx` (ImageResponse, se generan en build; el favicon usa marca simplificada de 4 nodos — la malla completa se empasta <20px) |
| Añadir una página nueva | `src/app/<ruta>/page.tsx` (usar `ui/PageHeader` + `sections/CtaBand`), data en `src/data/`, añadir a `navLinks` y `src/app/sitemap.ts` |
| Publicar el texto legal definitivo | `src/app/{aviso-legal,privacidad,cookies}/page.tsx` (quitar `noindex`, añadir al sitemap) |
| Publicar el primer caso real autorizado | sustituir `numero` en `src/data/home.ts` y adaptar `Numero.tsx` (draft → PENDIENTES) |

---

## Deploy

1. Push a GitHub
2. Repo Settings → Pages → Source: **GitHub Actions**
3. Push a `main`/`master` → el workflow construye y publica (la rama `dev` NO despliega)

Dominio propio vía `public/CNAME` (solempia.com) — no hace falta `basePath`.

**Local:**
- Dev: `npm run dev` → http://localhost:3000
- Build: `npm run build` → genera `./out/` (una carpeta por ruta gracias a `trailingSlash`)
