import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Motion";
import { controlIa } from "@/data/home";

/**
 * El ángulo de control de IA, concentrado en una sola sección al final del
 * recorrido. Antes estaba repartido por toda la portada, compitiendo con la
 * promesa de horas y dejando al visitante sin saber qué se vendía.
 */
export default function ControlIa() {
  return (
    <SectionWrapper id="control-ia">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-start">
        <Reveal>
          <Eyebrow>control_</Eyebrow>
          <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
            {controlIa.title}
            <br />
            <span className="text-accent">{controlIa.titleAccent}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6">
          {controlIa.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-base text-muted leading-relaxed">
              {p}
            </p>
          ))}
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-14 flex flex-col md:flex-row md:items-center gap-8 md:justify-between border-t border-line pt-10">
        <p className="font-sans font-medium text-xl md:text-2xl -tracking-tight leading-snug max-w-xl">
          {controlIa.cierre}
        </p>
        <Button href={controlIa.cta.href} variant="ghost" className="shrink-0">
          {controlIa.cta.label} →
        </Button>
      </Reveal>
    </SectionWrapper>
  );
}
