export interface Pillar {
  code: string;
  verb: string;
  slug: string;
  headline: string;
  body: string;
}

export const pillars: Pillar[] = [
  {
    code: "01",
    verb: "Construye",
    slug: "construye_",
    headline: "Sistemas, no demos.",
    body: "Sistemas multi-agente e infraestructura de producción. La mayor parte de los flujos no pertenecen a la IA de punta a punta — sino a bases de datos, reglas claras y software tradicional.",
  },
  {
    code: "02",
    verb: "Enseña",
    slug: "ensena_",
    headline: "Que tu equipo lo entienda.",
    body: "No entregamos sistemas que tu equipo no pueda operar. Formamos a quien lo va a usar — con tus propios flujos y datos, no con ejemplos de catálogo.",
  },
  {
    code: "03",
    verb: "Gobierna",
    slug: "gobierna_",
    headline: "Desde el día uno.",
    body: "Evaluación de riesgos, métricas de uso y reglas operativas se integran al diseño, no a una reunión posterior. Si algo deja de servir, se retira.",
  },
];
