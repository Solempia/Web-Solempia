import { ctas, type Cta } from "./site";

/**
 * Contenido de la portada. Fuente: docs/solempia-web-draft.md → PÁGINA: INICIO.
 *
 * Promesa única de la portada: horas y margen. El control de IA es el
 * diferenciador que cierra (sección ControlIA), no el gancho que abre.
 *
 * Reglas de redacción vigentes: docs/brand-voice.md → "Reglas verificables".
 * La más importante: presupuesto de 3 usos de paralelismo negativo ("X, no Y")
 * en toda la portada. Ahora se gastan en `problema.cierre` y `ctaFinal.body`.
 */

export const hero = {
  eyebrow: "(SE-001/) pyme industrial · automatización de procesos",
  title: "El papeleo se come tu margen.",
  titleAccent: "Te decimos cuánto, con tus números.",
  subtitle:
    "Automatizamos los procesos que consumen las horas de tu equipo. Se empieza por un diagnóstico de dos semanas con garantía: si no encontramos una oportunidad cuantificada, no lo pagas.",
  primary: ctas.diagnostico,
  secondary: { label: "Ver cómo trabajamos", href: "#metodo" },
  context:
    "Empresas industriales y técnicas de 5 a 100 personas: mantenimiento, instalaciones, calidad, logística, metalmecánica, automoción, construcción y agroindustria.",
} as const;

/**
 * Sección 2 (prueba). Es el bloque que más mueve la conversión y no se puede
 * inventar: hasta que haya un caso autorizado, `caso` vale null y el componente
 * no renderiza nada. Rellenar con datos reales y anonimizados para publicarlo.
 *
 * Deroga la decisión nº 2 del draft ("cero casos publicables"), vigente hasta
 * 2026-09 y hoy superada: hay clientes reales.
 */
export interface Caso {
  /** Perfil anonimizado: "Fabricante metalmecánico · 40 personas · Jaén" */
  perfil: string;
  /** El proceso concreto que se arregló, en palabras del cliente. */
  proceso: string;
  antes: { cifra: string; unidad: string };
  despues: { cifra: string; unidad: string };
  /** Cómo se midió. Sin esto la cifra no es creíble. */
  medicion: string;
  plazo: string;
}

export const caso: Caso | null = null;

export const problema = {
  title: "Te suena,",
  titleAccent: "¿verdad?",
  items: [
    "Partes de trabajo en papel que alguien pasa a limpio.",
    "Informes que se montan a mano cada semana.",
    "Fotos del móvil que nadie encuentra tres meses después.",
    "Costes por trabajo calculados a ojo.",
    "El seguimiento comercial en una libreta.",
    "Media empresa dentro de la cabeza de una sola persona.",
  ],
  cierre: "Estas horas no salen en la cuenta de resultados.",
  cierreAccent: "Salen en las nóminas.",
} as const;

export const cambio = {
  title: "Cómo se ve tu empresa",
  titleAccent: "dentro de seis meses",
  bullets: [
    "Sabes cuántas horas cuesta cada proceso y cuánto vale recuperarlas. Con tus números.",
    "Los partes e informes que hoy se teclean se generan solos. Tu equipo revisa y valida.",
    "Respondes antes a tus clientes, porque la información está donde tiene que estar.",
    "Tu gente cualificada dedica la semana a trabajo cualificado.",
  ],
  cierre: "Sin implantar un ERP.",
} as const;

export interface MetodoPaso {
  code: string;
  pct: string;
  title: string;
  body: string;
}

export const metodoResumen = {
  title: "Primero ordenar. Después automatizar.",
  titleAccent: "La IA, solo donde aporta.",
  intro: [
    "La mayoría de los proyectos de “IA para empresas” fracasan por el orden, no por la tecnología. Se pone una capa inteligente sobre procesos desordenados y sale caro dos veces.",
  ],
  pasos: [
    {
      code: "01",
      pct: "60 %",
      title: "Ordenar",
      body: "Entender el proceso real, medirlo y estructurar la información. Aquí vive la mayor parte del ahorro.",
    },
    {
      code: "02",
      pct: "30 %",
      title: "Automatizar",
      body: "Conectar las herramientas que ya usas para que los flujos corran solos.",
    },
    {
      code: "03",
      pct: "10 %",
      title: "Aplicar IA",
      body: "Solo en el tramo donde aporta, con una persona cualificada validando y un registro de cada decisión.",
    },
  ] satisfies MetodoPaso[],
  regla:
    "Si quitas la IA y el sistema sigue funcionando, está bien construido.",
  cta: { label: "Cuéntanos tu proceso más pesado", href: "/contacto" } satisfies Cta,
} as const;

export interface EscaleraPaso {
  code: string;
  title: string;
  tag?: string;
  body: string;
}

export const escalera = {
  title: "Cada paso se presupuesta con los datos del anterior.",
  titleAccent: "Nunca a ciegas.",
  pasos: [
    {
      code: "01",
      title: "Diagnóstico operativo",
      tag: "por aquí se empieza",
      body: "Dos semanas. Medimos tus procesos, cuantificamos horas y coste, y te decimos por dónde empezar. Se descuenta entero del siguiente paso.",
    },
    {
      code: "02",
      title: "Piloto acotado",
      body: "Un solo proceso, construido sobre tus herramientas actuales. Métrica antes y después, y criterio de continuar o parar pactado de antemano.",
    },
    {
      code: "03",
      title: "El proceso en producción",
      body: "El piloto validado pasa a producción, con tu equipo formado para operarlo. Donde entra la IA, entra con reglas de datos.",
    },
    {
      code: "04",
      title: "Mantenimiento y mejora continua",
      body: "Soporte mensual, mejoras sobre lo implementado y actualización de reglas cuando cambia una herramienta o la normativa.",
    },
  ] satisfies EscaleraPaso[],
  nota: "Vendemos el diagnóstico. Lo demás se decide con datos encima de la mesa.",
} as const;

export const garantia = {
  title: "Si el diagnóstico no te descubre nada,",
  titleAccent: "no lo pagas.",
  paragraphs: [
    "Si al terminar no hemos identificado al menos una oportunidad cuantificada de mejora, no pagas. Si ya habías abonado algo, se devuelve íntegro en cinco días laborables.",
    "Podemos ofrecerlo porque el diagnóstico casi siempre encuentra más de lo que el gerente espera. Las horas perdidas se ven mal desde dentro; por eso siguen ahí.",
  ],
} as const;

/**
 * Sección 7: el ángulo de control de IA, concentrado en un solo sitio.
 * Antes estaba disperso por toda la portada compitiendo con la promesa de horas.
 */
export const controlIa = {
  title: "Y hay un problema nuevo",
  titleAccent: "que casi nadie tiene en el radar.",
  paragraphs: [
    "Tu equipo ya usa IA. Desde cuentas personales, con información de la empresa y de tus clientes, sin que nadie haya decidido que eso esté bien.",
    "Prohibirlo lo vuelve invisible. La alternativa es hacerlo oficial: cuentas de empresa, reglas claras sobre qué se sube y qué no sale nunca, y formación registrada.",
  ],
  cierre:
    "Cuando un cliente o un auditor pregunte cómo gestionáis la IA, tienes un dossier que enseñar.",
  cta: { label: "Ver el Radar de IA en la Sombra", href: "/radar" } satisfies Cta,
} as const;

export const ctaFinal = {
  heading: "Empieza por saber",
  headingAccent: "cuánto te cuesta el papeleo.",
  body: "Una llamada de 20 minutos. Nos cuentas tu proceso más pesado y te decimos si tiene sentido un diagnóstico, con precio cerrado antes de empezar.",
  primary: ctas.llamada,
  alt: {
    label: "¿Aún no? Empieza por la formación en IA para tu equipo",
    href: "/servicios#formacion",
  } satisfies Cta,
} as const;
