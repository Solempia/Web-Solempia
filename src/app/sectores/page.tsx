import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SectorGrid from "@/components/sections/sectores/SectorGrid";
import AutomocionTeaser from "@/components/sections/sectores/AutomocionTeaser";
import CtaBand from "@/components/sections/CtaBand";
import { sectoresCta } from "@/data/sectores";

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
        title="Solo trabajamos"
        titleAccent="con industria."
        intro="Estos son los perfiles donde nuestro método rinde más."
      />
      <SectorGrid />
      <AutomocionTeaser />
      <CtaBand
        title={sectoresCta.heading}
        titleAccent={sectoresCta.headingAccent}
        body={sectoresCta.body}
        primary={sectoresCta.primary}
        secondary={sectoresCta.secondary}
      />
    </main>
  );
}
