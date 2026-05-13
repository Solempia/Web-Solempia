export interface Service {
  code: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    code: "01",
    title: "Agentes de IA",
    description:
      "Agentes autónomos que toman decisiones, responden y ejecutan tareas complejas sin supervisión constante.",
  },
  {
    code: "02",
    title: "Automatización de procesos",
    description:
      "Sistemas para las operaciones más ineficientes de cualquier departamento. Menos coste, menos tiempo desperdiciado.",
  },
  {
    code: "03",
    title: "Chatbots inteligentes",
    description:
      "Atienden 24/7, califican leads, responden dudas y guían el proceso de compra con precisión.",
  },
  {
    code: "04",
    title: "Funnels de venta",
    description:
      "Embudos automatizados que llevan al prospecto del primer contacto a la conversión con seguimiento inteligente.",
  },
  {
    code: "05",
    title: "Estrategia con IA",
    description:
      "Analizamos el negocio para identificar los puntos de mayor impacto y diseñar la arquitectura adecuada.",
  },
  {
    code: "06",
    title: "Integración de sistemas",
    description:
      "Conectamos CRM, ERP, WhatsApp, email y calendarios en un ecosistema que funciona sin fricciones.",
  },
];
