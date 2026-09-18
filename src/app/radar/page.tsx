import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import RadarDetalle from "@/components/sections/RadarDetalle";
import ContactSection from "@/components/sections/ContactSection";
import { radar, radarCta } from "@/data/radar";

export const metadata: Metadata = {
  title: "Radar de IA en la Sombra — Diagnóstico para pymes",
  description:
    "Tu equipo ya usa IA por su cuenta. El Radar mapea qué datos salen, cuántas horas se pierden y qué reglas lo ponen bajo control demostrable.",
};

export default function RadarPage() {
  return (
    <main>
      <PageHeader
        eyebrow="diagnóstico / radar_"
        title="Radar de IA"
        titleAccent="en la Sombra."
        intro={radar.intro}
      />

      <RadarDetalle
        contexto={radar.contexto}
        queMapea={radar.queMapea}
        queResuelve={radar.queResuelve}
        guardarrail={radar.guardarrail}
      />

      <ContactSection sourcePath="/radar" links={[radarCta.note]} />
    </main>
  );
}
