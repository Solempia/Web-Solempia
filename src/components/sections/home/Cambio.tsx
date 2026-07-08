import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal, StaggerList, StaggerItem } from "@/components/ui/Motion";
import { cambio } from "@/data/home";

export default function Cambio() {
  return (
    <SectionWrapper>
      <Reveal className="mb-16">
        <Eyebrow>después_</Eyebrow>
        <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
          Cómo se ve tu empresa
          <br />
          <span className="text-accent">después</span>
        </h2>
      </Reveal>

      <StaggerList className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
        {cambio.bullets.map((bullet, i) => (
          <StaggerItem key={bullet.slice(0, 24)} className="bg-surface p-8">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-4">
              {String(i + 1).padStart(2, "0")} —
            </div>
            <p className="text-base text-ink leading-relaxed">{bullet}</p>
          </StaggerItem>
        ))}
      </StaggerList>

      <Reveal delay={0.1}>
        <p className="mt-8 font-mono text-sm text-muted leading-relaxed">
          {cambio.cierre}
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
