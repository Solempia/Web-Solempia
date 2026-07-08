import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { Reveal, StaggerList, StaggerItem } from "@/components/ui/Motion";
import { metodoResumen } from "@/data/home";

export default function MetodoResumen() {
  return (
    <SectionWrapper id="metodo">
      <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-16">
        <div>
          <Eyebrow>método_</Eyebrow>
          <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
            Primero ordenar. Después automatizar.
            <br />
            <span className="text-accent">La IA, solo donde aporta.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 max-w-md md:justify-self-end">
          {metodoResumen.intro.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="text-base text-muted leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>
      </Reveal>

      <StaggerList className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
        {metodoResumen.pasos.map((paso) => (
          <StaggerItem key={paso.code} className="bg-surface p-8">
            <div className="flex items-baseline justify-between mb-6">
              <span className="font-mono text-xs text-muted">{paso.code}</span>
              <span className="font-mono text-3xl md:text-4xl text-accent -tracking-tight">
                {paso.pct}
              </span>
            </div>
            <h3 className="font-sans font-medium text-xl md:text-2xl -tracking-tight text-ink mb-3">
              {paso.title}
            </h3>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              {paso.body}
            </p>
          </StaggerItem>
        ))}
      </StaggerList>

      <Reveal delay={0.1} className="mt-12">
        <p className="border-l-2 border-accent pl-6 py-1 font-sans font-medium text-lg md:text-xl -tracking-tight leading-snug max-w-2xl">
          {metodoResumen.regla}
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-12">
        <Button href={metodoResumen.cta.href} variant="ghost">
          {metodoResumen.cta.label} →
        </Button>
      </Reveal>
    </SectionWrapper>
  );
}
