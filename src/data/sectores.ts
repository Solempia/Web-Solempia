import { ctas } from "./site";

/**
 * Contenido de /sectores y /sectores/automocion.
 * Fuente: docs/solempia-web-draft.md → PÁGINA: SECTORES.
 * Copy literal del draft; no reescribir sin actualizar el draft primero.
 */

export interface SectorPerfil {
  title: string;
  body: string;
}

export const sectoresIntro =
  "Solo trabajamos con industria. Estos son los perfiles donde nuestro método rinde más.";

export const perfiles: SectorPerfil[] = [
  {
    title: "Mantenimiento industrial e instalaciones",
    body: "Partes de trabajo, planificación, documentación técnica y evidencias de campo.",
  },
  {
    title: "Calidad e inspección",
    body: "Informes, checklist, trazabilidad y preparación de auditorías.",
  },
  {
    title: "Metalmecánica y fabricación",
    body: "Control de costes por trabajo, seguimiento de pedidos, documentación de producción.",
  },
  {
    title: "Logística y servicios técnicos B2B",
    body: "Coordinación documental con clientes y plataformas, reporting periódico.",
  },
  {
    title: "Construcción y agroindustria",
    body: "Partes, certificaciones, trazabilidad y gestión documental con terceros.",
  },
];

export const encaje =
  "Si tu empresa tiene entre 5 y 100 personas, técnicos en campo o planta, y vive entre Excel, papel y WhatsApp, encajas.";

export const automocion = {
  heading: "Especialización: automoción y proveedores de OEM",
  intro: [
    "Trabajar para un fabricante de automóviles cambia las reglas. Manejas solicitudes de oferta, planos y datos de calidad que no son tuyos: son de tu cliente. Y tu cliente audita.",
    "Para este perfil tenemos un diagnóstico específico: el Radar de IA en la Sombra.",
  ],
  radar: {
    name: "Radar de IA en la Sombra",
    queMapea: [
      "Qué información del OEM toca hoy qué herramienta, incluida la IA que tu equipo usa desde cuentas personales.",
      "Cuántas horas cualificadas se van en leer solicitudes de oferta, adaptar plantillas de informe y rehacer documentación.",
      "Qué proceso merece automatizarse primero, con un caso económico defendible.",
    ],
    queResuelve: [
      "Reglas de uso seguro alineadas con lo que tu cliente reconoce: los marcos de seguridad de la información del sector (TISAX/VDA ISA) y las exigencias de los sistemas de calidad de automoción (IATF 16949).",
      "Validación humana explícita y registrada en cualquier salida que afecte a calidad.",
      "Un dossier de evidencias, para que cuando el OEM pregunte cómo gestionáis la IA, tengas un dossier y no una explicación.",
    ],
  },
  // Guardarraíl obligatorio: visible en la página, no letra pequeña.
  guardarrail:
    "No certificamos TISAX ni IATF, y no sustituimos a tu asesor legal. Preparamos la evidencia y el control; la validación normativa es de quien corresponde.",
  cta: ctas.radar,
} as const;

export const sectoresCta = {
  heading: "Cuéntanos tu proceso",
  headingAccent: "más pesado.",
  body: "Una llamada de 20 minutos. Te decimos si tiene sentido un diagnóstico y te damos precio cerrado antes de empezar.",
  primary: ctas.diagnostico,
  secondary: ctas.radar,
} as const;

export const automocionCta = {
  heading: "Cuando el OEM pregunte,",
  headingAccent: "ten un dossier.",
  body: "El Radar es un diagnóstico específico para proveedores de automoción, con precio cerrado antes de empezar y la misma garantía que el diagnóstico operativo.",
  primary: ctas.radar,
  secondary: ctas.llamada,
} as const;
