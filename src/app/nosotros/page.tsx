import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Socios from "@/components/sections/nosotros/Socios";
import ContactSection from "@/components/sections/ContactSection";
import { nosotrosHero } from "@/data/nosotros";

export const metadata: Metadata = {
  title: "Nosotros — El equipo de Solempia",
  description:
    "Dos socios, perfil técnico y comercial. Quien analiza tu operación es quien construye la solución. Desde Jaén para toda España.",
};

export default function NosotrosPage() {
  return (
    <main>
      <PageHeader
        eyebrow="nosotros_"
        title={nosotrosHero.title}
        titleAccent={nosotrosHero.titleAccent}
        intro={nosotrosHero.intro}
      />
      <Socios />
      <ContactSection sourcePath="/nosotros" links={[{ label: "Ver la formación en IA", href: "/servicios/#formacion" }]} />
    </main>
  );
}
