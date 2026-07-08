export interface Cta {
  label: string;
  href: string;
}

export const site = {
  brand: "solempia",
  tagline: "Automatización y uso seguro de IA para pymes industriales",
  description:
    "Recupera las horas que tu empresa pierde en tareas manuales y pon la IA de tu equipo bajo control demostrable. Diagnóstico con garantía.",
  url: "https://solempia.com",
  whatsapp: "34614932840",
  whatsappMessage:
    "Hola, quiero contaros el proceso que más horas nos come y ver si tiene sentido un diagnóstico.",
  email: "info@solempia.com",
  instagram: "https://instagram.com/solempia",
  linkedin: "https://linkedin.com/company/solempia",
  // Webhook n8n al que el formulario de /contacto envía POST JSON.
  // Configurar CORS en el nodo Webhook de n8n para permitir el dominio.
  n8nWebhookUrl: "",
  copyrightYear: 2026,
} as const;

export const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/sectores", label: "Sectores" },
  { href: "/metodo", label: "Método" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/faq", label: "FAQ" },
] as const;

export const legalLinks = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
] as const;

/**
 * Textos de botón canónicos (docs/solempia-web-draft.md → SEO y microcopy).
 * Usar siempre estas constantes; no redactar variantes por página.
 */
export const ctas = {
  diagnostico: { label: "Pedir el diagnóstico", href: "/contacto" },
  llamada: { label: "Reservar llamada de 20 minutos", href: "/contacto" },
  formacion: { label: "Reservar la formación", href: "/contacto" },
  radar: { label: "Pedir el Radar de IA en la Sombra", href: "/contacto" },
} as const satisfies Record<string, Cta>;
