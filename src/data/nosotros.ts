/**
 * Contenido de /nosotros. Fuente: docs/solempia-web-draft.md → PÁGINA: NOSOTROS.
 * Copy literal del draft; no reescribir sin actualizar el draft primero.
 */

export const nosotrosHero = {
  title: "Dos personas. Un perfil construye,",
  titleAccent: "el otro lleva el negocio.",
  intro:
    "Somos dos socios con perfiles complementarios. Quien analiza tu operación es quien diseña la solución y quien la monta. Hablas siempre con las dos personas que hacen el trabajo.",
} as const;

export interface Socio {
  code: string;
  name: string;
  role: string;
  body: string;
}

export const socios: Socio[] = [
  {
    code: "SE-001/",
    name: "Sebastián Lazarte",
    role: "tecnología y producto",
    body: "Ingeniero de Sistemas especializado en automatización e IA aplicada. Diseña y monta: flujos, integraciones, bases de datos y la capa de IA donde aporta. Enseña lo que construye: docente de Herramientas de IA Aplicada a nivel de postgrado (Universidad de Los Andes, 2025) y ponente en el Hub Boliviano de Inteligencia Artificial. La formación de tu equipo es una fase del método y la imparte él.",
  },
  {
    code: "SE-002/",
    name: "Natalia Izquierdo",
    role: "negocio y cliente",
    body: "Ingeniera Comercial con especialización en Marketing y MBA por la Universidad de Jaén. Lleva la captación, la comunicación y el acompañamiento del cliente. Ha acompañado a pymes en procesos de digitalización y traduce entre lo que la operación necesita y lo que el negocio puede sostener.",
  },
];

export const pequenos = {
  heading: "Trabajamos con pocos clientes a la vez",
  body: "Preferimos pocos clientes bien atendidos a muchos proyectos a medias. Cada implantación deja plantillas y procedimientos que hacen mejor la siguiente. Es el mismo criterio que te vamos a recomendar a ti.",
} as const;

export const donde = {
  heading: "Dónde estamos",
  body: "Jaén, Andalucía. Trabajamos en toda España.",
} as const;
