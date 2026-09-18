import type { ContactService } from "./contacto";
import { ctas } from "./site";

/**
 * Contenido de /servicios. Fuente: docs/solempia-web-draft.md → PÁGINA: SERVICIOS.
 * Copy literal del draft; no reescribir sin actualizar el draft primero.
 */

export interface ServicioEscalon {
  code: string;
  service: ContactService;
  slug: string;
  title: string;
  tag?: string;
  paraQuien: string;
  queHacemos: string;
  queRecibesLabel?: string;
  queRecibes: string[];
  condiciones?: string[];
  nota?: string;
}

export const serviciosHero = {
  title: "Cuatro pasos,",
  titleAccent: "y la formación por separado.",
  intro:
    "Cada paso tiene precio cerrado antes de empezar, y cada paso se presupuesta con los datos del anterior.",
} as const;

export const escalones: ServicioEscalon[] = [
  {
    code: "01",
    service: "diagnostico",
    slug: "diagnostico_",
    title: "Diagnóstico operativo",
    tag: "por aquí se empieza",
    paraQuien:
      "Empresas que saben que pierden horas pero no saben cuántas, dónde, ni si compensa arreglarlo.",
    queHacemos:
      "En unas dos semanas, con participación ligera de tu equipo (entrevistas cortas y muestras de documentos, anonimizadas si hace falta), medimos dos o tres procesos candidatos.",
    queRecibes: [
      "Mapa de horas, perfiles y coste actual de cada proceso analizado.",
      "Caso económico con supuestos visibles: ahorro directo, capacidad liberada y plazo de recuperación, cada uno por separado.",
      "Mapa de exposición: qué información de la empresa (y de tus clientes) toca qué herramienta hoy, incluida la IA que se usa sin control.",
      "Reglas iniciales de uso seguro, listas para distribuir: qué se puede subir, a qué, y qué no sale nunca.",
      "Recomendación de un único piloto, con propuesta cerrada de implementación y criterio de continuar o parar.",
      "Sesión de decisión con dirección. Termina con un sí o un no.",
    ],
    condiciones: [
      "Precio cerrado según tamaño y número de procesos, confirmado antes de empezar.",
      "El 100 % se descuenta del piloto si contratas la implementación en los 30 días siguientes.",
      "Garantía: si no aparece una oportunidad cuantificada y riesgos no mapeados, no pagas.",
    ],
  },
  {
    code: "02",
    service: "automatizacion",
    slug: "piloto_",
    title: "Piloto de automatización",
    paraQuien:
      "Empresas con el diagnóstico hecho, o con un proceso ya medido y un responsable claro.",
    queHacemos:
      "Construimos y desplegamos la automatización de un único proceso, integrada con las herramientas que ya pagas.",
    queRecibes: [
      "El proceso funcionando en tu operación real, con tus datos y tu gente usándolo.",
      "Métrica medida antes y después: horas, tiempo de respuesta, retrabajos.",
      "Formación de las personas que lo van a usar: qué revisar, qué validar, qué no delegar nunca.",
      "Documentación para que tu equipo pueda mantenerlo.",
      "Criterio de continuar o parar, pactado antes de construir. Si el número no sale, se para y lo sabes pronto.",
    ],
    condiciones: [
      "Precio cerrado a partir de los datos del diagnóstico. El precio se fija contra el ahorro anual del proceso.",
    ],
  },
  {
    code: "03",
    service: "uso-seguro-ia",
    slug: "uso_seguro_",
    title: "Programa de uso seguro de IA",
    paraQuien:
      "Empresas cuyo equipo ya usa IA (lo sepa dirección o no) y que manejan información sensible propia o de clientes.",
    queHacemos:
      "Convertimos el uso clandestino en uso oficial: herramientas aprobadas, reglas claras y alguien que responde.",
    queRecibes: [
      "Política de uso de IA adaptada a tu empresa, en lenguaje que tu equipo entiende (y tu responsable de calidad puede integrar en su sistema documental).",
      "Procedimiento operativo con semáforo por tipo de dato: qué puede subirse, a qué herramienta, y qué no sale nunca.",
      "Guía técnica para IT: cuentas de empresa, herramientas aprobadas, controles y registro.",
      "Formación práctica de la plantilla, con casos de vuestro día a día. Cubre la alfabetización en IA que exige el Reglamento de IA de la UE (art. 4).",
      "Dossier de evidencias: herramientas aprobadas, formación registrada, validación humana. Lo que enseñas si un cliente o auditor pregunta.",
    ],
    nota: "El riesgo no se elimina, se reduce y se hace demostrable. Igual que en ciberseguridad.",
  },
  {
    code: "04",
    service: "mantenimiento",
    slug: "mantenimiento_",
    title: "Mantenimiento y mejora continua",
    paraQuien:
      "Empresas con procesos ya automatizados o con el programa de uso seguro implantado.",
    queHacemos:
      "Soporte mensual sobre lo implementado, para que el sistema no se degrade y las reglas no se queden viejas.",
    queRecibesLabel: "Qué recibes cada mes",
    queRecibes: [
      "Soporte y mejoras sobre lo implementado.",
      "Revisión periódica del estado del control: herramientas en uso, incidencias, incorporaciones nuevas.",
      "Actualización de reglas y procedimientos cuando cambia una herramienta o la normativa.",
      "Un informe breve a dirección: estado, incidencias, siguiente mejora recomendada.",
    ],
    nota: "Los sistemas se degradan. La gente nueva no recibe las reglas, las herramientas cambian de condiciones, la normativa se mueve. El mantenimiento evita volver a empezar de cero cada año.",
  },
];

export const formacion = {
  slug: "formacion_",
  title: "Formación en IA para tu equipo",
  tag: "se contrata suelta",
  dato: "El Reglamento de IA de la UE obliga a las empresas que usan IA a formar a su personal (alfabetización en IA, art. 4), con supervisión de la AESIA exigible desde agosto de 2026.",
  queHacemos:
    "Sesión práctica sobre los casos reales de tu empresa: trabajamos con tus documentos y tus flujos. Tu equipo sale sabiendo qué puede hacer con IA, qué no, y por qué. Tú te llevas el registro de formación como evidencia.",
  porQueEmpezar:
    "Coste bajo, obligación real con fecha, y de paso aflora cómo se está usando la IA de verdad en tu empresa. Muchos clientes descubren ahí que necesitan el diagnóstico.",
  cta: ctas.formacion,
} as const;

export const serviciosCta = {
  heading: "Cada paso, con precio cerrado",
  headingAccent: "antes de empezar.",
  body: "El diagnóstico se presupuesta según tamaño y número de procesos. Las fases siguientes, con los datos del diagnóstico. Nunca a ciegas.",
  primary: ctas.diagnostico,
  secondary: ctas.formacion,
} as const;
