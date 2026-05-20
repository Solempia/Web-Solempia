export const site = {
  brand: "solempia",
  tagline: "Automatización · IA · Gobernanza",
  description:
    "Diseñamos y construimos sistemas de automatización con IA para empresas que quieren dejar de perder tiempo en procesos manuales.",
  whatsapp: "34614932840",
  whatsappMessage: "Hola, vi su sitio y me interesa automatizar mi negocio.",
  email: "hola@solempia.com",
  instagram: "https://instagram.com/solempia",
  linkedin: "https://linkedin.com/company/solempia",
  // Webhook n8n al que el formulario de /contacto envía POST JSON.
  // Configurar CORS en el nodo Webhook de n8n para permitir el dominio.
  n8nWebhookUrl: "",
  copyrightYear: 2026,
} as const;

export const navLinks = [
  { href: "#sobre", label: "Modelo" },
  { href: "#proceso", label: "Método" },
  { href: "#caso", label: "Caso" },
  { href: "#diferencial", label: "Postura" },
] as const;
