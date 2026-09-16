import { ctas } from "./site";

/**
 * Contenido de /radar (versión genérica del Radar de IA en la Sombra,
 * para cualquier pyme: la única página del sitio sin el apellido "industrial").
 * Fuente: docs/solempia-web-draft.md → PÁGINA: RADAR (versión genérica).
 * Copy literal del draft; no reescribir sin actualizar el draft primero.
 * La versión afilada para automoción/OEM vive en sectores.ts (/sectores/automocion).
 */

export const radar = {
  intro:
    "Tu equipo ya usa IA. Desde cuentas personales, con información de la empresa y de tus clientes, sin que nadie haya decidido que eso esté bien. Prohibirlo no lo arregla. Lo vuelve invisible.",
  contexto:
    "El Radar es un diagnóstico corto que convierte ese uso invisible en un mapa. Qué información sale, hacia dónde, cuántas horas se van en tareas manuales y qué merece arreglarse primero. Es el mismo diagnóstico que afilamos para proveedores de automoción, en versión para cualquier pyme.",
  queMapea: [
    "Qué información de tu empresa y de tus clientes toca hoy qué herramienta, incluida la IA que tu equipo usa desde cuentas personales.",
    "Cuántas horas cualificadas se van en informes, presupuestos y documentación que se rehace a mano.",
    "Qué proceso merece automatizarse primero, con un caso económico defendible.",
  ],
  queResuelve: [
    "Reglas de uso seguro listas para distribuir: qué puede subirse, a qué herramienta, y qué no sale nunca.",
    "Validación humana explícita y registrada en cualquier salida que afecte a clientes o a calidad.",
    "Un dossier de evidencias: herramientas aprobadas, formación registrada, controles. Lo que enseñas cuando un cliente o un auditor pregunta cómo gestionáis la IA.",
  ],
  // Guardarraíl obligatorio: visible en la página, no letra pequeña.
  guardarrail:
    "El riesgo no se elimina. Se reduce y se hace demostrable. No sustituimos a tu asesor legal: preparamos la evidencia y el control, y la validación normativa es de quien corresponde.",
} as const;

export const radarCta = {
  heading: "Cuando un cliente pregunte,",
  headingAccent: "ten un dossier.",
  body: "El Radar tiene precio cerrado antes de empezar y la misma garantía que el diagnóstico operativo: si no te descubre nada, no lo pagas.",
  primary: ctas.radar,
  secondary: ctas.llamada,
  note: {
    label: "Ver la versión para automoción y OEM",
    href: "/sectores/automocion",
  },
} as const;
