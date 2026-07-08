import type { Cta } from "./site";

/**
 * Contenido de /contacto. Fuente: docs/solempia-web-draft.md → PÁGINA: CONTACTO.
 * Copy literal del draft; no reescribir sin actualizar el draft primero.
 */

export const contactoHero = {
  title: "Cuéntanos tu proceso más pesado.",
  body: "Rellena el formulario o escríbenos. Te respondemos en uno o dos días laborables con una propuesta de llamada de 20 minutos. En esa llamada te decimos, honestamente, si tiene sentido un diagnóstico o si todavía no. Sin compromiso.",
} as const;

export const sectorOptions: string[] = [
  "Mantenimiento",
  "Instalaciones",
  "Calidad",
  "Metalmecánica",
  "Logística",
  "Automoción / OEM",
  "Construcción",
  "Agroindustria",
  "Otro industrial",
];

export const sizeOptions: string[] = ["5–20", "21–50", "51–100", "más de 100"];

export const bajoFormulario = {
  text: "¿Prefieres empezar más pequeño? La formación en IA para tu equipo es la puerta de entrada de menor coste, y cubre una obligación legal con fecha.",
  cta: { label: "Ver la formación →", href: "/servicios#formacion" } satisfies Cta,
} as const;
