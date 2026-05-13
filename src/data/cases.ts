export interface CaseStudy {
  client: string;
  sector: string;
  problem: string;
  built: string;
  before: string;
  after: string;
  delivery: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

/**
 * SLOT VACÍO — completar con datos reales del único caso entregado.
 * No inventar métricas. Si una cifra no es verificable, omitirla.
 */
export const featuredCase: CaseStudy = {
  client: "—",
  sector: "—",
  problem:
    "Pendiente — describir en 1-2 frases el proceso ineficiente que se atacó.",
  built:
    "Pendiente — describir en 1-2 frases el sistema concreto que se construyó.",
  before: "—",
  after: "—",
  delivery: "—",
  // testimonial: undefined,  // añadir si existe
};
