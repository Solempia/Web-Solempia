import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SectorGrid from "@/components/sections/sectores/SectorGrid";
import AutomocionTeaser from "@/components/sections/sectores/AutomocionTeaser";
import ContactSection from "@/components/sections/ContactSection";
import { sectoresHero } from "@/data/sectores";

export const metadata: Metadata = {
  title: "Sectores — Industria, servicios técnicos y automoción OEM",
  description:
    "Mantenimiento, calidad, metalmecánica, logística y proveedores de automoción. Radar de IA en la Sombra para quien trabaja con OEM.",
};

export default function SectoresPage() {
  return (
    <main>
      <PageHeader
        eyebrow="sectores_"
        title={sectoresHero.title}
        titleAccent={sectoresHero.titleAccent}
        intro={sectoresHero.intro}
      />
      <SectorGrid />
      <AutomocionTeaser />
      <ContactSection sourcePath="/sectores" links={[{ label: "Ver el Radar de IA", href: "/radar/" }]} />
    </main>
  );
}
