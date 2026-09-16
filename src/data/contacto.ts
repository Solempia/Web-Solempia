import type { Cta } from "./site";

/**
 * Contenido de /contacto. Fuente: docs/solempia-web-draft.md → PÁGINA: CONTACTO.
 * Copy literal del draft; no reescribir sin actualizar el draft primero.
 */

/**
 * Plazo de respuesta canónico. Estaba escrito de tres formas distintas y en dos
 * formatos ("uno o dos días" / "1–2 días"); ahora sale de aquí.
 * Si cambia el tiempo real de respuesta, se toca solo esta constante.
 */
export const PLAZO_RESPUESTA = "el mismo día laborable";

export const contactoHero = {
  title: "Cuéntanos tu proceso más pesado.",
  body: `Rellena el formulario o escríbenos. Te respondemos ${PLAZO_RESPUESTA} con una propuesta de llamada de 20 minutos. En esa llamada te decimos, honestamente, si tiene sentido un diagnóstico o si todavía no. Sin compromiso.`,
} as const;

/**
 * Pantalla posterior al envío. Es el momento de mayor atención de la visita, así
 * que dice algo nuevo en lugar de repetir el intro (antes era casi la misma
 * frase, que el visitante leía dos veces seguidas).
 *
 * Sin "Sin compromiso": esa duda es legítima ANTES de enviar y por eso se queda
 * en el intro. Después del envío ya no tranquiliza — sugiere que quizá sí había
 * un compromiso (docs/brand-voice.md → R7).
 */
export const exito = {
  eyebrow: "Recibido",
  title: `Te escribimos ${PLAZO_RESPUESTA} con una propuesta de hora.`,
  body: "Mientras tanto, ve pensando qué proceso os come más tiempo y cuántas personas lo tocan. Es por donde empieza la llamada.",
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
  text: "¿Prefieres empezar más pequeño? La formación en IA para tu equipo es lo más barato por lo que puedes empezar, y cubre una obligación legal con fecha.",
  cta: { label: "Ver la formación →", href: "/servicios#formacion" } satisfies Cta,
} as const;
