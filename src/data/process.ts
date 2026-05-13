export interface ProcessStep {
  code: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    code: "01",
    title: "Aprende el flujo",
    description:
      "Mapeamos lo que tu equipo hace cada día — antes de construir o entrenar nada.",
  },
  {
    code: "02",
    title: "Clasifica el trabajo",
    description:
      "Decidimos qué se resuelve con software tradicional, qué con reglas, qué con IA — y qué no se debería construir.",
  },
  {
    code: "03",
    title: "Forma al equipo",
    description:
      "Los talleres funcionan como descubrimiento y entrega: tu gente aprende construyendo con sus propios datos.",
  },
  {
    code: "04",
    title: "Construye lo que importa",
    description:
      "Sistemas, no demos. Con tu equipo dentro para garantizar el mantenimiento posterior.",
  },
  {
    code: "05",
    title: "Gobierna lo que queda",
    description:
      "Adjuntamos evaluación, revisión de riesgos y reglas operativas. Si algo deja de servir, lo retiramos.",
  },
];
