import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Fases from "@/components/sections/metodo/Fases";
import CtaBand from "@/components/sections/CtaBand";
import { metodoHero, metodoCta } from "@/data/metodo";

export const metadata: Metadata = {
  title: "Método — Ordenar, automatizar y aplicar IA donde aporta",
  description:
    "El 60 % es información ordenada, el 30 % automatización y el 10 % el modelo. Construimos en ese orden, con validación humana.",
};

export default function MetodoPage() {
  return (
    <main>
      <PageHeader
        eyebrow="método_"
        title="La IA es la capa más pequeña"
        titleAccent="del sistema."
        intro={metodoHero.intro}
      />
      <Fases />
      <CtaBand
        title={metodoCta.heading}
        titleAccent={metodoCta.headingAccent}
        body={metodoCta.body}
        primary={metodoCta.primary}
        secondary={metodoCta.secondary}
      />
    </main>
  );
}
