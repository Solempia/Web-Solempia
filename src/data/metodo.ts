import { ctas } from "./site";

/**
 * Contenido de /metodo. Fuente: docs/solempia-web-draft.md → PÁGINA: MÉTODO.
 * Copy literal del draft; no reescribir sin actualizar el draft primero.
 */

export const metodoHero = {
  title: "La IA es la capa más pequeña del sistema.",
  intro:
    "En cualquier sistema que funciona de verdad, el reparto es más o menos este: 60 % es información ordenada, 30 % es automatización de flujos y 10 % es el modelo de IA. La industria del hype vende el 10 % como si fuera el todo. Nosotros construimos en orden.",
} as const;

export interface Fase {
  code: string;
  name: string;
  paragraphs: string[];
  /** Solo fase 3: las tres condiciones no negociables. */
  condiciones?: { title: string; body: string }[];
  /** Cita destacada dentro de la fase (p. ej. la prueba de calidad de la fase 2). */
  destacado?: string;
}

export const fases: Fase[] = [
  {
    code: "01",
    name: "Ordenar",
    paragraphs: [
      "Entramos en tu operación real: cómo llega un pedido, quién rellena qué, dónde se guarda, quién lo busca después. Medimos horas y coste con tus datos. Estructuramos la información para que deje de vivir en carpetas sueltas y cabezas concretas.",
      "Es la fase menos vistosa y la más rentable. La mayoría del ahorro aparece aquí, antes de automatizar nada.",
    ],
  },
  {
    code: "02",
    name: "Automatizar",
    paragraphs: [
      "Conectamos tus herramientas actuales para que los flujos corran solos: el parte que se convierte en informe, el dato que se vuelca donde toca, el aviso que llega a quien tiene que actuar. Preferimos integrar lo que ya usas antes que venderte software nuevo.",
    ],
    destacado:
      "Nuestra prueba de calidad: si quitas la IA y el sistema sigue funcionando, está bien construido. La automatización base no depende de la IA.",
  },
  {
    code: "03",
    name: "Aplicar IA donde aporta",
    paragraphs: [
      "Con el proceso ordenado y automatizado, la IA entra en el tramo donde de verdad suma: resumir, extraer, clasificar, preparar borradores. Siempre con tres condiciones que no negociamos:",
    ],
    condiciones: [
      {
        title: "Una persona cualificada valida el resultado.",
        body: "La decisión sigue siendo humana, y queda registrado quién validó qué.",
      },
      {
        title: "Los datos van solo a herramientas aprobadas,",
        body: "en planes de empresa, con reglas claras de qué se sube y qué no sale nunca.",
      },
      {
        title: "Todo es trazable.",
        body: "Si algo falla, se sabe dónde y por qué.",
      },
    ],
  },
  {
    code: "04",
    name: "Formar y transferir",
    paragraphs: [
      "Formamos a tu equipo para operar el sistema con criterio y autonomía. La capacitación no es un extra: es lo que hace que la mejora sobreviva cuando nosotros no estamos. De paso, cubre la formación en IA que exige la normativa europea.",
    ],
  },
];

/** Principio de fondo: visible en la página. */
export const principio =
  "La tecnología potencia a las personas, no las reemplaza. Automatizamos lo repetitivo para que tu gente cualificada haga trabajo cualificado.";

export const metodoCta = {
  heading: "Construimos en orden.",
  headingAccent: "Empieza por el diagnóstico.",
  body: "Cada paso se presupuesta con los datos del anterior. Nunca a ciegas.",
  primary: ctas.diagnostico,
  secondary: { label: "Ver los servicios", href: "/servicios" },
} as const;
