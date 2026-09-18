import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contacto — Solempia",
  description: "Consulta sobre automatización de procesos, formación y uso seguro de IA. Cuéntanos qué necesita tu empresa.",
};

export default function ContactoPage() {
  return <main><ContactSection sourcePath="/contacto" standalone links={[{ label: "Ver la formación en IA", href: "/servicios/#formacion" }]} /></main>;
}
