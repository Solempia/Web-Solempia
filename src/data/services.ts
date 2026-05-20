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
    title: "Chatbots",
    description:
      "Atienden, califican leads y guían la compra. Cuando una FAQ estática basta, lo decimos.",
  },
  {
    code: "04",
    title: "Funnels de venta",
    description:
      "Embudos que llevan al prospecto del primer contacto a la conversión, con seguimiento automatizado en cada paso.",
  },
  {
    code: "05",
    title: "Estrategia con IA",
    description:
      "Mapeamos el negocio para identificar dónde la IA aporta, dónde basta software tradicional y qué no se debería construir.",
  },
  {
    code: "06",
    title: "Integración de sistemas",
    description:
      "Conectamos CRM, ERP, WhatsApp, email y calendario. Una sola fuente de verdad, sin datos sueltos entre herramientas.",
  },
];
