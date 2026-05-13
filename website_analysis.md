# Website Analysis: rython.dev
> Documento de referencia para Claude Code — entender la estructura del sitio antes de planificar el diseño.

---

## 1. Identidad del sitio

| Campo | Valor |
|---|---|
| **Dueño** | Ryan Lee (alias: RythonDev) |
| **Tipo** | Portfolio personal de desarrollador de software |
| **Nicho** | Full Stack Developer + creador de contenido para streamers de Twitch |
| **URL** | https://rython.dev/ |
| **Copyright** | 2023–2026 Ryan Lee |

---

## 2. Stack tecnológico del sitio

El portfolio está construido con:

- **Framework:** [Astro](https://astro.build/) (sitio estático/SSR)
- **Lenguaje:** TypeScript
- **Assets:** Imágenes en formato `.webp` optimizadas con hashing (`pfp_new.w1fjma6i_ZLOx9Y.webp`)
- **Íconos sociales:** SVG inline servidos desde `/images/socials/`
- **Fuente de verdad de imágenes de proyectos:** `/images/projects/` y `/_astro/` (compilados por Astro)
- **Despliegue:** Inferido como Vercel o Netlify (proyectos del autor usan Vercel)

---

## 3. Estructura de navegación

El sitio es una **single page** con anclas (`#`) para cada sección:

```
/ (home)
├── #home        → Hero / Presentación
├── #experience  → Experiencia laboral + educación
├── #projects    → Proyectos destacados
├── #skills      → Habilidades técnicas
└── #contact     → Contacto
```

Existe también una página separada:
```
/projects        → Listado completo de proyectos
```

Y un asset estático:
```
/RyanLee_SoftwareDeveloper_Resume.pdf  → CV descargable
```

---

## 4. Secciones del sitio — detalle por sección

### 4.1 Hero (`#home`)

**Propósito:** Primera impresión, identidad personal.

**Elementos presentes:**
- Foto de perfil (`pfp_new.webp`)
- Nombre: "Ryan Lee"
- Título: "Full Stack Developer"
- Avatar alternativo/mascota: `RythonDev-UwU-compressed.webp` (imagen de personaje)
- Bio corta (2–3 líneas)
- Íconos sociales con links: GitHub, CodePen, Codeberg, Twitch

**Tono:** Amigable e informal ("Good |!" como saludo)

---

### 4.2 Experience (`#experience`)

**Propósito:** Historial profesional y académico.

**Estructura:** Tabs o secciones separadas:
- `Experience` (activo por defecto)
- `Education`
- `Extracurricular`

**Entradas de experiencia (Experience tab):**

| Rol | Período | Ubicación |
|---|---|---|
| Application Developer Intern | Mar 2026 – Now | Australia |
| Student Project Frontend Lead | Mar 2026 – Now | Australia |
| Full Stack Developer (Part Time) | Dec 2024 – Feb 2026 | Malaysia |

Cada entrada tiene:
- Título del puesto
- Rango de fechas
- País
- Lista de bullets con logros/responsabilidades

---

### 4.3 Projects (`#projects`)

**Propósito:** Mostrar proyectos destacados con descripción y tecnologías usadas.

**Layout:** Grid de tarjetas (inferido), cada tarjeta contiene:
- Imagen del proyecto (`.webp`)
- Nombre del proyecto
- Descripción breve
- Stack de tecnologías (tags/badges)
- Botón(es) de acción: "Visit Site" o "View Repository"

**Proyectos listados en homepage:**

| Proyecto | Tech | Link |
|---|---|---|
| Coworking Guide | Astro, TypeScript, Markdown | [coworking-guide.vercel.app](https://coworking-guide.vercel.app/) |
| Computer Vision AimLab Bot | Python, OpenCV, win32API | — |
| Portfolio Roast Bot | Rust, SQLite, Forgejo Actions | Codeberg |
| Chat-task-tic widget | HTML, CSS, JavaScript | GitHub |

**Elemento especial — Ticker de streamers:**
- Widget animado (scroll/marquee) con nombres de usuarios de Twitch y sus metas
- Ejemplo: `O 4l1c3_0 : mental breakdance`, `O studypaws : be a vet`
- Contiene 30+ nombres de viewers/streamers reales
- Tiene un contador: "0/100+" — sugiere gamificación o interactividad
- El ticker se repite (duplicado en el HTML para efecto de loop continuo)
- **Hipótesis de función:** es el widget `Chat-task-tic` embebido o una demo del mismo

**CTA al final:** "VIEW ALL PROJECTS" → `/projects`

---

### 4.4 Skills (`#skills`)

**Propósito:** Mostrar stack técnico de forma organizada.

**Estructura:** Categorías con listas de tecnologías:

| Categoría | Tecnologías |
|---|---|
| Frontend | TypeScript, React, TailwindCSS |
| Backend | Node.js, PHP, C#, Go, Rust |
| Tools | Git, Docker, Forgejo Actions |

**Texto adicional:**
- Menciona trabajo en websites (front + back)
- Proyectos adicionales: Python scripts, Discord bots, Streamer.bot (C#)
- CV disponible bajo petición vía email
- Botón: "View Resume" → PDF

---

### 4.5 Contact (`#contact`)

**Propósito:** Punto de contacto directo.

**Elementos:**
- Foto de perfil (versión medium: `pfp_new_medium.webp`)
- Nombre + subtítulo: "Software Developer & Content Creator"
- Email directo: `rythondev@gmail.com`
- Íconos sociales (mismo set que Hero): GitHub, CodePen, Codeberg, Twitch

---

## 5. Componentes reutilizables identificados

| Componente | Descripción | Aparece en |
|---|---|---|
| `SocialLinks` | Fila de 4 íconos SVG (GitHub, CodePen, Codeberg, Twitch) | Hero, Contact |
| `ProjectCard` | Imagen + título + descripción + tech tags + CTA | Projects |
| `ExperienceItem` | Puesto + fecha + país + bullets | Experience |
| `SkillGroup` | Categoría + lista de tecnologías | Skills |
| `StreamerTicker` | Marquee animado con nombres y metas de viewers | Projects |
| `NavBar` | Links de navegación con anclas | Global (sticky/top) |

---

## 6. Assets y media

```
/images/
├── socials/
│   ├── github.svg
│   ├── codepen.svg
│   ├── codeberg.svg       (ruta usada para YouTube también, posible error)
│   └── twitch.svg
└── projects/
    └── aim-lab.webp

/_astro/                   (imágenes compiladas/hasheadas por Astro)
    ├── pfp_new.[hash].webp
    ├── pfp_new_medium.[hash].webp
    ├── coworking-guide.[hash].webp
    └── portfolio-roast-bot.[hash].webp
```

**Nota:** El ícono de YouTube usa la ruta de `codeberg.svg` — posible bug o el link de YouTube fue reemplazado por Codeberg.

---

## 7. Links externos del autor

| Plataforma | URL |
|---|---|
| GitHub | https://github.com/liyunze-coding |
| CodePen | https://codepen.io/rythondev |
| Codeberg | https://codeberg.org/RythonDev |
| Twitch | https://twitch.tv/RythonDev |
| Email | rythondev@gmail.com |

---

## 8. Tono y personalidad del sitio

- **Informal y cercano:** saludo "Good |!" en hero, nombres de streamers con metas divertidas
- **Orientado a comunidad:** el ticker de streamers crea sentido de pertenencia
- **Clean y técnico:** secciones bien separadas, sin exceso de texto
- **Dual identidad:** Developer + Content Creator (streamer)
- **Audiencia objetivo:** reclutadores tech + comunidad de streamers

---

## 9. Lo que NO está en el sitio (ausencias notables)

- No hay sección de blog o artículos
- No hay testimonials ni referencias
- No hay dark/light mode toggle visible en el HTML extraído
- No hay formulario de contacto (solo email directo)
- La sección Education y Extracurricular existen en el tab de Experience pero no se extrajeron en el scraping (requieren interacción JS)

---

*Documento generado a partir de análisis estático de https://rython.dev/ — Abril 2026*
