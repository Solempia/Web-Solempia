import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { Reveal, StaggerList, StaggerItem } from "@/components/ui/Motion";
import { escalera } from "@/data/home";

export default function Escalera() {
  return (
    <SectionWrapper id="escalera">
      <Reveal className="mb-16 max-w-3xl">
        <Eyebrow>escalera_</Eyebrow>
        <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
          Cada paso se presupuesta con los datos del anterior.
          <br />
          <span className="text-accent">Nunca a ciegas.</span>
        </h2>
      </Reveal>

      <StaggerList stagger={0.06} className="border-t border-line">
        {escalera.pasos.map((paso) => (
          <StaggerItem
            key={paso.code}
            className="border-b border-line grid grid-cols-[64px_1fr] md:grid-cols-[120px_280px_1fr] gap-6 md:gap-10 py-8 md:py-10"
          >
            <div className="font-mono text-sm text-muted pt-1">{paso.code}</div>
            <div>
              <h3 className="font-sans font-medium text-xl md:text-2xl -tracking-tight text-ink leading-tight">
                {paso.title}
              </h3>
              {paso.tag && (
                <div className="mt-2 font-mono text-xs text-accent">
                  {paso.tag}_
                </div>
              )}
            </div>
            <p className="text-sm md:text-base text-muted leading-relaxed col-span-2 md:col-span-1 max-w-xl">
              {paso.body}
            </p>
          </StaggerItem>
        ))}
      </StaggerList>

      <Reveal delay={0.1} className="mt-10 flex flex-col md:flex-row md:items-center gap-8 md:justify-between">
        <p className="font-mono text-sm text-muted leading-relaxed max-w-xl">
          {escalera.nota}
        </p>
        <Button href="/servicios" variant="ghost" className="shrink-0">
          Ver los servicios en detalle →
        </Button>
      </Reveal>
    </SectionWrapper>
  );
}
