# PRD — Solempia Landing

## Qué construimos
Una landing single-page institucional para **Solempia**, agencia de IA y automatización. Hosteada en GitHub Pages, estática (Next.js `output: 'export'`).

## Por qué
- Captar prospectos cualificados que necesitan automatizar procesos con IA
- Proyectar autoridad editorial europea (Linear/Stripe/Vercel) frente a agencias IA genéricas
- Centralizar el primer punto de contacto: el visitante termina enviando WhatsApp, completando el formulario externo o escribiendo al email

## Audiencia (orden de prioridad)
1. **Founders / directores de operaciones** de PyMEs y empresas medianas que perciben procesos costosos repetitivos y quieren delegarlos en IA
2. **Equipos comerciales / marketing** evaluando agencias para automatizar funnels, chatbots e integraciones (CRM, WhatsApp, email)
3. **Compradores técnicos** (CTOs, leads de IT) validando si la agencia tiene criterio antes de pasar a propuesta

Todos esperan: respuesta rápida, propuesta sin jerga, casos verificables.

## Criterios de éxito
- Carga en menos de 2s en conexión móvil mid-tier
- CTA primario (formulario o WhatsApp) visible en hero sin scroll
- Visitante puede llegar a contactar en menos de 3 acciones desde cualquier sección
- Cero clichés visuales de IA — el sitio se siente editorial premium, no "agencia IA 2024"
- Editar `src/data/site.ts` cambia marca, contactos y CTAs sin tocar componentes

## Secciones (single-page con anchors)
1. **Hero** (`#hero`) — eyebrow + titular + sub-copy + 2 CTAs (formulario / WhatsApp) + lateral con 3 métricas
2. **Marquee** — franja de servicios en mono uppercase, animada
3. **About** (`#sobre`) — quiénes somos + bloque editorial lateral (no orbital ring)
4. **Services** (`#servicios`) — grid 3×2 de 6 servicios codificados `01`–`06`
5. **Process** (`#proceso`) — 4 pasos con conector horizontal
6. **WhyUs** (`#diferencial`) — 3 diferenciales en stack de tarjetas
7. **FinalCTA** (`#contacto`) — caja centrada con 2 CTAs

Componentes globales: `NavBar` sticky, `Footer`, `WhatsAppFloat`.

## Fuera de alcance (v1)
- Página `/projects` o `/casos` (eliminada — el sitio es single-page)
- Blog
- Formulario propio de contacto (el CTA enlaza al `formUrl` externo configurado en `site.ts`)
- CMS — el contenido vive en TypeScript files dentro de `src/data/`
- Multi-idioma (sitio íntegramente en español)
- Analytics (se añade después si hace falta)
- Modo oscuro (la marca es claro hueso por definición — ver `docs/design-tokens.md`)

## Constraints
- Static site (GitHub Pages, sin servidor)
- Mobile-first (revisar 360px antes que desktop)
- Accesibilidad: HTML semántico, `lang="es"`, contraste WCAG AA, focus rings visibles
- Lighthouse target: performance ≥95, accessibility ≥95
- Toda configuración de marca/contactos centralizada en `src/data/site.ts`
