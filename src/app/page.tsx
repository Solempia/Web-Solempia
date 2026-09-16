import type { Metadata } from "next";
import HeroHome from "@/components/sections/home/HeroHome";
import Caso from "@/components/sections/home/Caso";
import Problema from "@/components/sections/home/Problema";
import Cambio from "@/components/sections/home/Cambio";
import MetodoResumen from "@/components/sections/home/MetodoResumen";
import Escalera from "@/components/sections/home/Escalera";
import Garantia from "@/components/sections/home/Garantia";
import ControlIa from "@/components/sections/home/ControlIa";
import CtaBand from "@/components/sections/CtaBand";
import { ctaFinal } from "@/data/home";

/** El layout deja un title de 74 caracteres; la home declara el suyo, más corto. */
export const metadata: Metadata = {
  title: "Solempia — Automatización de procesos para pymes industriales",
  description:
    "El papeleo se come tu margen. Medimos cuántas horas pierde tu equipo y automatizamos los procesos que las consumen. Diagnóstico de dos semanas con garantía.",
};

export default function Home() {
  return (
    <main>
      <HeroHome />
      <Caso />
      <Problema />
      <Cambio />
      <MetodoResumen />
      <Escalera />
      <Garantia />
      <ControlIa />
      <CtaBand
        id="contacto"
        title={ctaFinal.heading}
        titleAccent={ctaFinal.headingAccent}
        body={ctaFinal.body}
        primary={ctaFinal.primary}
        note={ctaFinal.alt}
      />
    </main>
  );
}
