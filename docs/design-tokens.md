# Design Tokens

Source of truth for visual design. The code in `src/app/globals.css` mirrors these values inside a Tailwind v4 `@theme` block.

## Visual direction
**Editorial European minimalism — claro, sobrio, premium.** Referencias rectoras: Linear, Stripe, Vercel. Tradiciones: diseño suizo, Bauhaus, refinamiento escandinavo, editorial holandés. Calidez por restricción (espacios, jerarquía, contraste sans/mono), no por adornos.

---

## Palette

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#FAFAF7` | Fondo principal — hueso / blanco roto |
| `--color-surface` | `#FFFFFF` | Tarjetas, paneles |
| `--color-ink` | `#1A1A1A` | Texto principal — negro suavizado |
| `--color-muted` | `#6B6B6B` | Texto secundario, metadatos, captions |
| `--color-line` | `#E5E5E0` | Divisores, bordes de tarjeta y tabla |
| `--color-accent` | `#1E2952` | Acento único — azul tinta. Enlaces, CTAs primarios, símbolos clave |

Expuestas como utilidades Tailwind: `bg-bg`, `bg-surface`, `text-ink`, `text-muted`, `border-line`, `text-accent`, etc.

**Excepción funcional:** el verde WhatsApp `#25D366` se permite únicamente en el botón flotante de WhatsApp por convención universal de la marca.

## Typography

Contraste sans + mono es la firma identitaria del sistema.

- **Sans (principal)**: Geist Sans — wordmark, titulares, cuerpo
- **Mono (técnica)**: Geist Mono — eyebrows, códigos de servicio (`01`, `02`…), métricas, metadata

Cargadas vía `next/font/google` en `src/app/layout.tsx`.

### Pesos
- Wordmark y titulares: `font-medium` (500). Nunca `font-bold` agresivo.
- Cuerpo: `font-normal` (400)
- Mono / metadata: `font-normal`

### Scale (Tailwind utility → use)
| Class | Size | Use |
|---|---|---|
| `text-xs` | 12px | Eyebrows, códigos mono |
| `text-sm` | 14px | Body small, nav links, buttons |
| `text-base` | 16px | Body |
| `text-lg` | 18px | Lead paragraphs |
| `text-2xl` | 24px | Subsection titles |
| `text-3xl` | 30px | Section titles (mobile) |
| `text-4xl` / `text-5xl` | 36/48px | Section titles (desktop) |
| `text-6xl` / `text-7xl` | 60/72px | Hero title |

Tracking: `-tracking-tight` en titulares grandes; `tracking-wide` en eyebrows mono.

## Spacing
Tailwind default 4px scale. Patrones editoriales:
- Section padding: `py-32 md:py-40 px-6` — espacios generosos
- Section max-width: `max-w-6xl mx-auto`
- Card padding: `p-8`
- Grid gap: `gap-px` con `bg-line` (líneas hairline) o `gap-6` para tarjetas separadas

## Radius
- `rounded-full` — buttons, WhatsApp float
- `rounded-lg` (8px) — tarjetas (radio mínimo, no card glassy)
- Sin `rounded-3xl` ni shapes orgánicas

## Animation
- **Duration**: 300ms standard transitions, 650ms para entrada del hero
- **Easing**: `[0.22, 1, 0.36, 1]` (cubic-bezier ease-out)
- **Stagger**: 120ms entre hijos en la entrada del hero
- Movimiento contenido — sin parallax, sin orbs flotantes, sin elementos en autoplay decorativo

## Effects permitidos
- **Eyebrow** (`.eyebrow` utility): label mono uppercase tracking-wide en `text-muted`
- **Divider** (`.divider` utility): hairline 1px `bg-line`
- **Hover en tarjetas**: `border-line` → `border-ink/40`, sin glow ni transform agresivo
- **Backdrop sutil** en NavBar al scroll: `bg-bg/80 backdrop-blur-sm` (no `backdrop-blur-xl`)

---

## ⛔ Anti-clichés IA — prohibido explícitamente

Estos territorios visuales están vetados. Si una propuesta los incluye, se descarta sin discusión:

- **Cerebros estilizados, redes neuronales, nodos conectados, grafos, circuitos, chips, hexágonos tech, ondas**
- **Orbital rings con "IA" en el centro** (cliché agencia IA 2023–2025)
- **Gradient text violet → cyan / morado → rosa** (estética SaaS genérica)
- **Blur orbs gigantes de fondo** (estética startup juvenil)
- **Scanlines, grid overlays decorativos, noise/grain** dramáticos
- **Iconografía**: solo geometría primitiva (línea, círculo, cuadrado, triángulo). Stroke, no fill cuando sea posible.
- **Color**: no morado saturado, no azul Facebook (#0066FF), no fluor

## Don'ts generales
- No pure black (`#000`) — usar `--color-ink`
- No pure white para fondos de página — usar `--color-bg`
- No más de 1 color de acento por pantalla
- No drop-shadows decorativos en texto
- No emojis en UI institucional
