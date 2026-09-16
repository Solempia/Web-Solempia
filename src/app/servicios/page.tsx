import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ServicioBloque from "@/components/sections/servicios/ServicioBloque";
import Formacion from "@/components/sections/servicios/Formacion";
import CtaBand from "@/components/sections/CtaBand";
import { escalones, serviciosHero, serviciosCta } from "@/data/servicios";

export const metadata: Metadata = {
  title: "Servicios — Diagnóstico, automatización y uso seguro de IA",
  description:
    "Del diagnóstico operativo al mantenimiento: cada fase con precio cerrado y presupuestada con datos, nunca a ciegas.",
};

export default function ServiciosPage() {
  return (
    <main>
      <PageHeader
        eyebrow="servicios_"
        title={serviciosHero.title}
        titleAccent={serviciosHero.titleAccent}
        intro={serviciosHero.intro}
      />

      <div className="px-6 max-w-6xl mx-auto pb-32 md:pb-40 flex flex-col gap-6">
        {escalones.map((escalon) => (
          <ServicioBloque key={escalon.code} escalon={escalon} />
        ))}
        <Formacion />
      </div>

      <CtaBand
        title={serviciosCta.heading}
        titleAccent={serviciosCta.headingAccent}
        body={serviciosCta.body}
        primary={serviciosCta.primary}
        secondary={serviciosCta.secondary}
      />
    </main>
  );
}
