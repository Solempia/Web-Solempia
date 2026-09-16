import { ctas } from "./site";

/**
 * Contenido de /calculadora — el peldaño gratuito de la escalera.
 *
 * Hasta ahora el escalón más barato (la formación) ya costaba dinero: no había
 * nada que diera valor antes de pedirlo. Esta página entrega el mismo cálculo
 * que promete el hero ("te decimos cuánto, con tus números"), en 30 segundos y
 * sin hablar con nadie.
 *
 * El cálculo corre en el navegador: sin backend, compatible con output: 'export'.
 * Copy sujeto a docs/brand-voice.md → reglas verificables R1-R7.
 */

export const calculadoraHero = {
  eyebrow: "calculadora_",
  title: "Cuánto te cuesta el papeleo",
  titleAccent: "al año.",
  intro:
    "Tres datos y el número que sale. Es la misma cuenta con la que empieza un diagnóstico, en versión corta y con tus cifras.",
} as const;

/** Rango conservador de recuperación para procesos documentales. */
export const RECUPERACION = { min: 0.25, max: 0.35 } as const;

/** Semanas trabajadas al año descontando vacaciones y festivos. */
export const SEMANAS_ANIO = 46;

export const campos = {
  personas: {
    label: "Personas que hacen ese trabajo administrativo",
    hint: "Cuenta solo a quien podría estar haciendo otra cosa.",
    min: 1,
    max: 100,
    defecto: 8,
  },
  horas: {
    label: "Horas a la semana que le dedica cada una",
    hint: "Partes, informes, presupuestos, buscar documentos, pasar datos a mano.",
    min: 1,
    max: 40,
    defecto: 5,
  },
  coste: {
    label: "Coste por hora de esas personas",
    hint: "Coste cargado para la empresa: salario bruto más cotizaciones, dividido entre las horas trabajadas.",
    min: 10,
    max: 150,
    defecto: 40,
    sufijo: "€/h",
  },
} as const;

export const resultado = {
  etiquetaPrincipal: "al año en capacidad perdida",
  etiquetaRecuperable: "recuperable con los procesos ordenados",
  /** Visible junto al resultado. El lector tiene que poder auditar la cuenta. */
  supuestos: `Calculado sobre ${SEMANAS_ANIO} semanas trabajadas al año. El rango recuperable va del ${RECUPERACION.min * 100} al ${RECUPERACION.max * 100} %, que es lo habitual en procesos documentales cuando se ordenan y se automatizan.`,
  aviso:
    "Es una estimación con tus supuestos, no una medición. El diagnóstico mide el proceso real y corrige estos números con lo que encuentre.",
} as const;

export const calculadoraCta = {
  heading: "Ese número sale de tres casillas.",
  headingAccent: "El diagnóstico lo mide de verdad.",
  body: "Dos semanas midiendo tus procesos reales, con un caso económico de supuestos visibles y garantía: si no te descubre nada, no lo pagas.",
  primary: ctas.diagnostico,
  secondary: ctas.llamada,
} as const;
