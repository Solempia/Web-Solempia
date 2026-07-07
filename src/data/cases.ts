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
 * INDACON — construcción de campos deportivos calidad FIFA.
 * Métricas duras pendientes de verificación; before/after en clave cualitativa
 * hasta tener cifras medibles. No inventar números.
 */
export const featuredCase: CaseStudy = {
  client: "INDACON",
  sector: "Construcción de campos deportivos · calidad FIFA",
  problem:
    "La captación comercial dependía de búsqueda manual de clubes y municipios, sin trazabilidad de oportunidades ni cualificación previa. Cada lead competía con la operación de obra por el tiempo del equipo comercial.",
  built:
    "Landing de captación con formulario público, cualificación de leads asistida por IA, sincronización al CRM y agenda automática de reuniones con el equipo comercial. Un único flujo, sin intervención manual entre la consulta y la cita.",
  before: "Búsqueda manual",
  after: "Inbound cualificado",
  delivery: "6 semanas",
  // testimonial: undefined,  // añadir cuando el cliente lo apruebe por escrito
};
