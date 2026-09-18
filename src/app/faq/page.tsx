import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import FaqList from "@/components/sections/FaqList";
import ContactSection from "@/components/sections/ContactSection";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Preguntas frecuentes — Solempia",
  description:
    "Precios, datos de clientes, cumplimiento, pilotos que no salen y por qué prohibir la IA no funciona. Respuestas sin rodeos.",
};

export default function FaqPage() {
  return (
    <main>
      <PageHeader
        eyebrow="faq_"
        title="Preguntas frecuentes,"
        titleAccent="sin rodeos."
        intro="Lo que nos preguntan antes de empezar. Si falta la tuya, escríbenos."
      />
      <div className="px-6 max-w-6xl mx-auto pb-32 md:pb-40">
        <FaqList items={faqItems} />
      </div>
      <ContactSection sourcePath="/faq" links={[{ label: "Ver la formación en IA", href: "/servicios/#formacion" }]} />
    </main>
  );
}
