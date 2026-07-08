/**
 * Contenido de /nosotros. Fuente: docs/solempia-web-draft.md → PÁGINA: NOSOTROS.
 * Copy literal del draft; no reescribir sin actualizar el draft primero.
 */

export const nosotrosHero = {
  title: "Dos personas. Un perfil construye, el otro lleva el negocio.",
  intro:
    "Solempia la formamos dos socios con perfiles complementarios. No hay capas comerciales de por medio: la persona que analiza tu operación es la misma que diseña y monta la solución.",
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
    body: "Ingeniero de Sistemas especializado en automatización e IA aplicada. Diseña e implementa los módulos: flujos, integraciones, bases de datos y la capa de IA donde aporta. Ha sido docente de Herramientas de IA Aplicada a nivel de postgrado (Universidad de Los Andes, 2025) y ponente en el Hub Boliviano de Inteligencia Artificial. Esa faceta docente no es anécdota: formar al equipo del cliente es una fase del método, y la imparte quien construyó el sistema.",
  },
  {
    code: "SE-002/",
    name: "Natalia Izquierdo",
    role: "negocio y cliente",
    body: "Ingeniera Comercial con especialización en Marketing, MBA en curso en la Universidad de Jaén. Lleva la captación, la comunicación y el acompañamiento del cliente. Ha acompañado a pymes en su digitalización dentro del programa Kit Digital, así que conoce de primera mano las ayudas que pueden abaratar tu proyecto.",
  },
];

export const pequenos = {
  heading: "Por qué somos pequeños a propósito (por ahora)",
  body: "Preferimos pocos clientes bien atendidos a muchos proyectos a medias. Cada implantación genera plantillas y procedimientos que hacen mejor la siguiente. Crecemos cuando la evidencia lo sostiene, no antes. Es el mismo criterio que te vamos a recomendar a ti.",
} as const;

export const donde = {
  heading: "Dónde estamos",
  body: "Jaén, Andalucía. Trabajamos en toda España, presencial donde hace falta y en remoto donde no.",
} as const;
