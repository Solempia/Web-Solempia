# PRD — Sitio web Solempia

## Qué construimos
Sitio multipágina institucional para **Solempia**: automatización de procesos y uso seguro de IA para pymes industriales, con automoción/OEM como especialización visible. Hosteado en GitHub Pages, estático (Next.js `output: 'export'`), dominio solempia.com.

El contenido completo (copy, SEO, decisiones de posicionamiento) vive en `docs/solempia-web-draft.md` — ese documento es la fuente de verdad editorial.

## Por qué
- Captar pymes industriales que pierden horas en tareas manuales y no controlan el uso de IA de su equipo
- Vender la puerta de entrada (diagnóstico con garantía), no el programa completo: "nunca a ciegas"
- Proyectar autoridad sobria anti-hype frente a agencias de "IA para empresas" genéricas

## Audiencia (orden de prioridad)
1. **Gerentes de pymes industriales y técnicas (5–100 personas)**: mantenimiento, instalaciones, calidad, metalmecánica, logística, construcción, agroindustria
2. **Proveedores de automoción / OEM** con exigencias de auditoría (TISAX, IATF): audiencia de la página `/sectores/automocion`
3. **Responsables de calidad / IT** que validan al proveedor antes de pasar a dirección

## Criterios de éxito
- Carga en menos de 2s en conexión móvil mid-tier
- CTA primario ("Pedir el diagnóstico") visible en hero sin scroll
- Visitante puede llegar a contactar en menos de 3 acciones desde cualquier página
- Cero clichés visuales de IA — el sitio se siente editorial premium
- Editar `src/data/*.ts` cambia todo el contenido sin tocar componentes
- Lenguaje de riesgo calibrado en todo el sitio: nunca "eliminar riesgo" ni prometer cumplimiento legal

## Páginas
1. `/` — Hero (garantía en titular) → Problema → Lo que cambia → Método 60/30/10 → Escalera 4 pasos → Garantía → El número (ejemplo ilustrativo) → Por qué Solempia → FAQ breve → CTA final
2. `/servicios` — escalera detallada (diagnóstico, piloto, módulo + uso seguro, mantenimiento) + formación como puerta lateral (`#formacion`)
3. `/sectores` — 5 perfiles industriales + teaser de automoción
4. `/sectores/automocion` — Radar de IA en la Sombra (URL propia para campañas), con guardarraíl visible
5. `/metodo` — las 4 fases, con las 3 condiciones no negociables de la IA
6. `/nosotros` — 2 socios con nombre y credenciales reales
7. `/faq` — 12 preguntas sin rodeos
8. `/contacto` — formulario (n8n webhook) con checkbox RGPD + vías directas
9. `/aviso-legal` · `/privacidad` · `/cookies` — placeholders legales (noindex) hasta validación con gestoría

Componentes globales: `NavBar` fija con estado activo y menú móvil, `Footer` con índice, `WhatsAppFloat`.

## Reglas de contenido (del draft)
- **Cero nombres de clientes y cero testimonios** — la prueba es la garantía, el método con nombre y el ejemplo económico ilustrativo
- El ejemplo económico lleva **etiqueta visible** de "ejemplo ilustrativo"
- Precios públicos: solo la puerta de entrada se describe con "precio cerrado antes de empezar"
- La palabra IA aparece donde es sustancia, no como gancho de portada
- Textos de botón canónicos y consistentes (definidos en `ctas`, `src/data/site.ts`)

## Fuera de alcance (v2)
- Blog
- CMS — el contenido vive en TypeScript files dentro de `src/data/`
- Versión en inglés (solo cuando se active la fase Alemania/Suecia, adaptando la voz, no traduciendo)
- Analytics (si se añade, requiere banner de consentimiento)
- Modo oscuro (la marca es claro hueso por definición — ver `docs/design-tokens.md`)
- Precios orientativos publicados (reversible: decidir tras las primeras conversaciones)

## Constraints
- Static site (GitHub Pages, sin servidor) — el formulario envía a un webhook n8n externo
- Mobile-first (revisar 360px antes que desktop)
- Accesibilidad: HTML semántico, `lang="es"`, contraste WCAG AA, focus rings visibles, `prefers-reduced-motion`
- Lighthouse target: performance ≥95, accessibility ≥95
- Toda configuración de marca/contactos centralizada en `src/data/site.ts`

## Pendientes antes de publicar (checklist del draft)
- [ ] Confirmar con la gestoría los datos del aviso legal y publicar las páginas legales definitivas (quitar noindex, añadir al sitemap)
- [ ] Configurar `n8nWebhookUrl` en `src/data/site.ts` (hoy el form está deshabilitado)
- [ ] Decidir si se publican precios orientativos del diagnóstico y la formación
- [ ] Rellenar `caso` en `src/data/home.ts` con el primer caso autorizado y anonimizado (hoy `null`: la sección de prueba de la portada no se renderiza)
- [ ] Pasada anti-tells de IA tras cualquier edición de copy
