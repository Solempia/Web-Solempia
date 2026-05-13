export interface ProcessStep {
  code: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    code: "01",
    title: "Diagnóstico",
    description:
      "Estudiamos el negocio, los procesos actuales y la mayor oportunidad de automatización.",
  },
  {
    code: "02",
    title: "Diseño",
    description:
      "Creamos la solución a medida — flujos, agentes, integraciones. Nada genérico.",
  },
  {
    code: "03",
    title: "Implementación",
    description:
      "Construimos y configuramos todo. El cliente revisa y aprueba en cada etapa.",
  },
  {
    code: "04",
    title: "Soporte",
    description:
      "No desaparecemos. Monitorizamos, ajustamos y mejoramos de forma continua.",
  },
];
