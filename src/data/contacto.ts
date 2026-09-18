/** Contacto compartido. Fuente editorial: docs/solempia-web-draft.md. */
export const PLAZO_RESPUESTA = "el mismo día laborable";

export const contactServices = {
  orientacion: {
    label: "Necesito orientación",
    title: "Cuéntanos qué necesitas",
    help: "Explícanos qué te gustaría mejorar en tu empresa. Te ayudamos a identificar por dónde empezar.",
    placeholder: "¿Qué necesitas resolver o qué te gustaría mejorar?",
  },
  diagnostico: {
    label: "Diagnóstico operativo",
    title: "Consulta sobre diagnóstico operativo",
    help: "Cuéntanos qué procesos quieres revisar y qué dificultades encuentra tu equipo.",
    placeholder: "¿Qué procesos quieres analizar?",
  },
  automatizacion: {
    label: "Automatización de procesos",
    title: "Consulta sobre automatización de procesos",
    help: "Describe la tarea que quieres automatizar y las herramientas que utilizáis para hacerla.",
    placeholder: "¿Qué tarea se repite y con qué programas trabajáis?",
  },
  "uso-seguro-ia": {
    label: "Uso seguro de IA",
    title: "Consulta sobre uso seguro de IA",
    help: "Cuéntanos cómo utiliza la IA tu equipo y qué necesitas organizar o proteger.",
    placeholder: "¿Qué herramientas de IA utilizáis y qué dudas tenéis?",
  },
  mantenimiento: {
    label: "Mantenimiento",
    title: "Consulta sobre mantenimiento",
    help: "Indica qué automatizaciones o herramientas necesitan soporte y qué quieres mejorar.",
    placeholder: "¿Qué sistema necesita mantenimiento o mejoras?",
  },
  formacion: {
    label: "Formación en IA",
    title: "Consulta sobre formación en IA",
    help: "Cuéntanos qué necesita aprender tu equipo y cómo os gustaría aplicar la IA en vuestro trabajo.",
    placeholder: "¿A quién va dirigida la formación y qué os gustaría aprender?",
  },
  radar: {
    label: "Radar de IA",
    title: "Consulta sobre el Radar de IA",
    help: "Cuéntanos qué necesitas conocer sobre el uso de IA en tu empresa y los datos que maneja tu equipo.",
    placeholder: "¿Qué te gustaría revisar sobre el uso de IA en tu empresa?",
  },
} as const;

export type ContactService = keyof typeof contactServices;
export const contactPages: Record<string, ContactService> = {
  "/": "orientacion", "/servicios": "orientacion", "/sectores": "orientacion",
  "/sectores/automocion": "radar", "/metodo": "orientacion", "/nosotros": "orientacion",
  "/faq": "orientacion", "/calculadora": "diagnostico", "/radar": "radar", "/contacto": "orientacion",
};
export function normalizePath(path: string) {
  return path.replace(/\/+$/, "") || "/";
}
export function parseContactService(value: string | null): ContactService {
  return value && Object.hasOwn(contactServices, value) ? (value as ContactService) : "orientacion";
}
export function contactHref(service?: ContactService) {
  return `/contacto/${service ? `?servicio=${service}` : ""}#contacto`;
}
export const exito = {
  title: "Hemos recibido tu consulta",
  body: `Te respondemos ${PLAZO_RESPUESTA} para hablar de lo que necesitas.`,
} as const;
