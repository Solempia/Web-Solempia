/**
 * Contenido de /faq. Fuente: docs/solempia-web-draft.md → PÁGINA: FAQ (completa).
 * Copy literal del draft; no reescribir sin actualizar el draft primero.
 * La portada ya no lleva teaser de FAQ: duplicaba estas preguntas con otra redacción.
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "chatgpt",
    question: "“Mi equipo ya usa ChatGPT y le va bien. ¿Qué me aportáis?”",
    answer:
      "Que le vaya bien a cada persona por separado no es lo mismo que un sistema. Sin reglas ni medición, no sabes qué datos están saliendo, no puedes repetir lo que funciona y no puedes demostrar control ante un cliente. Nuestro trabajo convierte ese uso disperso en un proceso: medido, con reglas de datos y trazable.",
  },
  {
    id: "informatico",
    question: "“¿Esto no lo hace nuestro informático o nuestra empresa de IT?”",
    answer:
      "IT es imprescindible y trabajamos con él, no en su lugar. Lo que IT no suele poder hacer solo es cruzar operaciones, finanzas y calidad para decidir qué proceso merece inversión, cuánto ahorra y con qué criterio se valida. Ese cruce es el diagnóstico.",
  },
  {
    id: "precio",
    question: "“¿Cuánto cuesta?”",
    answer:
      "El diagnóstico tiene precio cerrado según tamaño y número de procesos, y te lo confirmamos antes de empezar. Se descuenta íntegro del piloto si continúas en 30 días. Las fases siguientes se presupuestan con los datos del diagnóstico: la vara es el ahorro anual del proceso. Nunca te pediremos firmar un programa grande a ciegas.",
  },
  {
    id: "datos-clientes",
    question: "“No podemos exponer datos de nuestros clientes.”",
    answer:
      "Ni deberíais. Por eso el diagnóstico arranca con muestras anonimizadas y una regla clara de qué se comparte y qué no. Y parte del resultado es justamente el mapa de qué datos están saliendo ya, hoy, sin que nadie lo haya decidido.",
  },
  {
    id: "sin-cifras",
    question: "“No tenemos cifras de horas ni de costes.”",
    answer:
      "Casi nadie las tiene; es normal. Empezamos con rangos estimados con tu equipo y los validamos durante el diagnóstico. Todos los supuestos quedan visibles en el caso económico: si un número te chirría, se corrige y el modelo se recalcula.",
  },
  {
    id: "cumplimiento",
    question: "“¿Garantizáis el cumplimiento del Reglamento de IA / RGPD?”",
    answer:
      "No, y quien te lo garantice no está siendo honesto. Nosotros diseñamos y documentamos para reducir el riesgo y hacerlo demostrable: reglas, formación registrada, controles y evidencias. La validación legal la hace tu asesor. Es la misma lógica que la ciberseguridad: el riesgo se gestiona, no desaparece.",
  },
  {
    id: "prohibir",
    question: "“¿Y si simplemente prohibimos la IA?”",
    answer:
      "Puedes, pero no funciona. El uso no desaparece: se esconde. La gente sigue usándola desde el móvil, sin registro y sin reglas, que es el peor de los escenarios. La alternativa realista es una vía oficial igual de cómoda que la clandestina: cuentas de empresa, reglas claras y alguien que responde.",
  },
  {
    id: "erp",
    question: "“¿Necesitamos un ERP?”",
    answer:
      "Para empezar, casi seguro que no. Construimos sobre las herramientas que ya usas. Si algún día un ERP tiene sentido, llegarás a esa decisión con los procesos ordenados y datos reales, que es la única forma sensata de implantar uno.",
  },
  {
    id: "piloto-falla",
    question: "“¿Qué pasa si el piloto no funciona?”",
    answer:
      "Que lo sabremos pronto y con poco dinero gastado, porque el criterio de continuar o parar se pacta antes de construir. Si el número no sale, se para. Te quedas con el proceso medido, la métrica y lo aprendido. Eso también es un resultado.",
  },
  {
    id: "solo-automocion",
    question: "“¿Trabajáis solo con automoción?”",
    answer:
      "No. Trabajamos con pymes industriales y técnicas en general. Automoción es nuestra especialización más exigente, porque los proveedores de OEM manejan datos de cliente bajo auditoría, y ese listón nos obliga a trabajar con el estándar más alto. Ese mismo estándar lo aplicamos al resto de sectores.",
  },
  {
    id: "entrenamiento",
    question: "“¿La IA que implantáis usa nuestros datos para entrenarse?”",
    answer:
      "Trabajamos con planes de empresa de los proveedores de IA, que por defecto no entrenan con tus datos, y lo dejamos configurado y documentado. Es una de las diferencias clave con las cuentas personales que tu equipo puede estar usando hoy, donde el entrenamiento suele venir activado por defecto.",
  },
];
