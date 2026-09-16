import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CalculadoraForm from "@/components/sections/calculadora/CalculadoraForm";
import CtaBand from "@/components/sections/CtaBand";
import { calculadoraHero, calculadoraCta } from "@/data/calculadora";

export const metadata: Metadata = {
  title: "Calculadora — Cuánto te cuesta el papeleo al año",
  description:
    "Tres datos y el coste anual de las horas que tu equipo pierde en tareas administrativas. Cálculo con tus cifras, sin registro.",
};

export default function CalculadoraPage() {
  return (
    <main>
      <PageHeader
        eyebrow={calculadoraHero.eyebrow}
        title={calculadoraHero.title}
        titleAccent={calculadoraHero.titleAccent}
        intro={calculadoraHero.intro}
      />
      <CalculadoraForm />
      <CtaBand
        title={calculadoraCta.heading}
        titleAccent={calculadoraCta.headingAccent}
        body={calculadoraCta.body}
        primary={calculadoraCta.primary}
        secondary={calculadoraCta.secondary}
      />
    </main>
  );
}
