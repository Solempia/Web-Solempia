import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import RadarDetalle from "@/components/sections/RadarDetalle";
import CtaBand from "@/components/sections/CtaBand";
import { automocion, automocionCta } from "@/data/sectores";

export const metadata: Metadata = {
  title: "Radar de IA en la Sombra — Automoción y OEM",
  description:
    "Diagnóstico para proveedores de OEM: mapea la IA que tu equipo ya usa, alinea reglas con TISAX/VDA ISA e IATF 16949 y prepara tu dossier de evidencias.",
};

export default function AutomocionPage() {
  const { radar } = automocion;

  return (
    <main>
      <PageHeader
        eyebrow="sectores / automoción_"
        title="Radar de IA"
        titleAccent="en la Sombra."
        intro={automocion.intro[0]}
      />

      <RadarDetalle
        contexto={automocion.intro[1]}
        queMapea={radar.queMapea}
        queResuelve={radar.queResuelve}
        guardarrail={automocion.guardarrail}
      />

      <CtaBand
        title={automocionCta.heading}
        titleAccent={automocionCta.headingAccent}
        body={automocionCta.body}
        primary={automocionCta.primary}
        secondary={automocionCta.secondary}
        note={automocionCta.note}
      />
    </main>
  );
}
