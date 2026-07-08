import { ctas, type Cta } from "./site";

/**
 * Contenido de la portada. Fuente: docs/solempia-web-draft.md → PÁGINA: INICIO.
 * Copy literal del draft; no reescribir sin actualizar el draft primero.
 */

export const hero = {
  eyebrow: "(SE-001/) pyme industrial · automatización · ia bajo control",
  title: "Tu equipo pierde horas en tareas manuales.",
  titleAccent: "Y ya usa IA por su cuenta.",
  subtitle:
    "Solempia automatiza los procesos que consumen el margen de tu pyme industrial y pone el uso de IA bajo control demostrable. Se empieza por un diagnóstico corto con garantía: si no encontramos una oportunidad cuantificada de mejora, no lo pagas.",
  primary: ctas.diagnostico,
  secondary: { label: "Ver cómo trabajamos", href: "#metodo" },
  context:
    "Para empresas industriales y técnicas de 5 a 100 personas: mantenimiento, instalaciones, calidad, logística, metalmecánica, automoción, construcción y agroindustria.",
} as const;

export const problema = {
  heading: "Te suena, ¿verdad?",
  paragraphs: [
    "Partes de trabajo en papel. Informes que se montan a mano cada semana. Fotos del móvil que nadie encuentra después. El seguimiento comercial en una libreta. Los costes reales, sin calcular. Y la información clave del negocio en la cabeza de una sola persona.",
    "Nada de eso sale en la cuenta de resultados con nombre propio. Se manifiesta de otra forma: horas de gente cualificada haciendo trabajo administrativo, errores que se repiten, auditorías que cuestan una semana de preparar y decisiones tomadas a ojo.",
    "Y mientras tanto hay un problema nuevo que casi nadie tiene en el radar: tu equipo ya usa IA. Desde cuentas personales, con información de la empresa y de tus clientes, sin que nadie haya decidido que eso esté bien. Prohibirlo no lo arregla. Lo vuelve invisible.",
  ],
  cierre: "El problema no es solo de eficiencia. Es de control.",
} as const;

export const cambio = {
  heading: "Cómo se ve tu empresa después",
  bullets: [
    "Sabes cuántas horas cuesta cada proceso y cuánto vale recuperarlas. Con tus números, no con promedios de internet.",
    "Los partes, informes y documentos que hoy se hacen a mano se generan solos. Tu equipo revisa y valida, no teclea.",
    "Respondes antes a tus clientes, porque la información está donde tiene que estar.",
    "Y cuando un cliente o un auditor pregunte cómo gestionáis la IA, tienes algo que enseñar: herramientas aprobadas, reglas claras, formación registrada.",
  ],
  cierre:
    "Sin implantar un ERP. Sin proyectos de seis meses. Sin informes que se quedan en un cajón.",
} as const;

export interface MetodoPaso {
  code: string;
  pct: string;
  title: string;
  body: string;
}

export const metodoResumen = {
  heading: "Primero ordenar. Después automatizar. La IA, solo donde aporta.",
  intro: [
    "La mayoría de los proyectos de “IA para empresas” fracasan por el orden, no por la tecnología. Se intenta poner una capa inteligente sobre procesos desordenados, y sale caro dos veces.",
    "Nosotros trabajamos al revés:",
  ],
  pasos: [
    {
      code: "01",
      pct: "60 %",
      title: "Ordenar",
      body: "Entender el proceso real, medirlo y estructurar la información. Aquí vive el 60 % del valor.",
    },
    {
      code: "02",
      pct: "30 %",
      title: "Automatizar",
      body: "Conectar las herramientas que ya usas para que los flujos corran solos. Otro 30 %.",
    },
    {
      code: "03",
      pct: "10 %",
      title: "Aplicar IA",
      body: "Solo en el tramo donde de verdad aporta, con una persona cualificada validando el resultado y un registro de cada decisión. Es el 10 % final, y solo funciona si los dos pasos anteriores existen.",
    },
  ] satisfies MetodoPaso[],
  regla:
    "Una regla que aplicamos a todo lo que construimos: si quitas la IA y el sistema sigue funcionando, está bien construido.",
  cta: { label: "Cuéntanos tu proceso más pesado", href: "/contacto" } satisfies Cta,
} as const;

export interface EscaleraPaso {
  code: string;
  title: string;
  tag?: string;
  body: string;
}

export const escalera = {
  heading: "Cada paso se presupuesta con los datos del anterior. Nunca a ciegas.",
  pasos: [
    {
      code: "01",
      title: "Diagnóstico operativo",
      tag: "la puerta de entrada",
      body: "En unas dos semanas medimos tus procesos candidatos, cuantificamos horas y coste, mapeamos qué información toca qué herramienta (incluida la IA que ya se usa sin control) y te recomendamos por dónde empezar, con un caso económico de supuestos visibles. Se descuenta íntegro del siguiente paso si continúas.",
    },
    {
      code: "02",
      title: "Piloto acotado",
      body: "Un solo proceso, construido y desplegado sobre tus herramientas actuales, con métrica medida antes y después y un criterio claro de continuar o parar. Si no funciona, se sabe pronto y barato.",
    },
    {
      code: "03",
      title: "Módulo implementado + uso seguro de IA",
      body: "El piloto validado se convierte en un módulo en producción, con tu equipo formado para operarlo. Donde entra la IA, entra con reglas: qué datos pueden subirse, a qué herramientas, y quién valida qué.",
    },
    {
      code: "04",
      title: "Mantenimiento y mejora continua",
      body: "Soporte mensual, mejoras sobre lo implementado y actualización de las reglas cuando cambia una herramienta o la normativa. Para que el sistema no se degrade a los seis meses.",
    },
  ] satisfies EscaleraPaso[],
  nota: "No vendemos el programa completo el primer día. Vendemos el diagnóstico. Lo demás se decide con datos encima de la mesa.",
} as const;

export const garantia = {
  heading: "Si el diagnóstico no te descubre nada, no lo pagas.",
  paragraphs: [
    "Si al terminar el diagnóstico no hemos identificado al menos una oportunidad cuantificada de mejora y riesgos que no tenías mapeados, no pagas. Y si ya habías abonado algo, se devuelve íntegro en cinco días laborables.",
    "Podemos ofrecer esto porque el diagnóstico casi siempre encuentra más de lo que el gerente espera. Las horas perdidas no se ven desde dentro; por eso siguen ahí.",
  ],
} as const;

export const numero = {
  heading: "¿Cuánto cuesta no hacer nada?",
  intro:
    "Un ejemplo trabajado, con cifras conservadoras. No es un caso real: es la cuenta que haremos contigo, con tus datos.",
  ejemplo: {
    supuestos:
      "8 personas cualificadas dedicando 5 horas a la semana a tareas administrativas, a un coste cargado de 40 €/hora:",
    cifra: "83.200 €",
    unidad: "al año en capacidad perdida",
    detalle:
      "Recuperar entre un 25 y un 35 % de ese tiempo (rango conservador para procesos documentales) son 20.800 a 29.120 € al año. Ese es el tipo de número que el diagnóstico calcula con tus datos, y contra el que se decide cualquier inversión posterior.",
    // Etiqueta obligatoria: debe ser visible junto al bloque, no letra pequeña.
    etiqueta: "Ejemplo ilustrativo con supuestos visibles. Tu diagnóstico usa tus cifras.",
  },
} as const;

export const porque: { title: string; body: string }[] = [
  {
    title: "Solo industria.",
    body: "No hacemos webs, ni marketing, ni “transformación digital” de todo. Pymes industriales y técnicas, con operarios, partes, informes y clientes B2B.",
  },
  {
    title: "Pilotos de bajo riesgo.",
    body: "No firmas una implantación completa. Firmas un paso corto, con precio cerrado y métrica de éxito. Si no compensa, paras.",
  },
  {
    title: "Sin hype.",
    body: "La IA es la capa más pequeña del sistema, y lo decimos nosotros, que la implantamos. Lo que se vende es el proceso ordenado y el control.",
  },
  {
    title: "Implementación real.",
    body: "Construimos, formamos a tu equipo y transferimos el conocimiento. No entregamos un PDF de recomendaciones y desaparecemos.",
  },
  {
    title: "Quien construye da la cara.",
    body: "Somos un equipo pequeño con perfiles complementarios. Hablas con quien diseña y monta tu solución, no con un comercial intermediario.",
  },
];

/** FAQ de portada: copy propio, distinto al de la página /faq (así lo define el draft). */
export const faqTeaser: { question: string; answer: string }[] = [
  {
    question: "“Mi equipo ya usa ChatGPT. ¿Para qué os necesito?”",
    answer:
      "Justo por eso. El valor no está en el modelo, está en el proceso: medición, reglas de datos, repetibilidad y trazabilidad. Es la diferencia entre “alguien se apaña con la IA” y un sistema que puedes defender ante un cliente o una auditoría.",
  },
  {
    question: "“¿Esto no lo puede hacer mi informático?”",
    answer:
      "IT implanta controles, y bien. Pero decidir qué proceso merece inversión, con qué datos y con qué criterio de validación cruza operaciones, finanzas y calidad. Ese cruce es nuestro trabajo, y lo hacemos con IT, no en su lugar.",
  },
  {
    question: "“¿Garantizáis el cumplimiento del Reglamento de IA?”",
    answer:
      "No, y desconfía de quien te lo garantice. Diseñamos y documentamos para reducir el riesgo y hacerlo demostrable; la validación legal es de tu asesor. Lo que sí te llevas es evidencia ordenada: reglas, formación registrada y controles.",
  },
];

export const ctaFinal = {
  heading: "Empieza por saber",
  headingAccent: "cuánto te cuesta el papeleo.",
  body: "Una llamada de 20 minutos. Nos cuentas tu proceso más pesado, te decimos si tiene sentido un diagnóstico y te damos precio cerrado antes de empezar. Sin compromiso y sin presentaciones de 40 diapositivas.",
  primary: ctas.llamada,
  alt: {
    label: "¿Aún no? Empieza por la formación en IA para tu equipo",
    href: "/servicios#formacion",
  } satisfies Cta,
} as const;
