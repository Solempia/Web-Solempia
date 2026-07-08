import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Socios from "@/components/sections/nosotros/Socios";
import CtaBand from "@/components/sections/CtaBand";
import { nosotrosHero } from "@/data/nosotros";
import { ctaFinal } from "@/data/home";

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
        title="Dos personas. Un perfil construye,"
        titleAccent="el otro lleva el negocio."
        intro={nosotrosHero.intro}
      />
      <Socios />
      <CtaBand
        title={ctaFinal.heading}
        titleAccent={ctaFinal.headingAccent}
        body={ctaFinal.body}
        primary={ctaFinal.primary}
        note={ctaFinal.alt}
      />
    </main>
  );
}
