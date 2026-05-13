import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal, StaggerList, StaggerItem } from "@/components/ui/Motion";
import { differentiators } from "@/data/differentiators";

export default function WhyUs() {
  return (
    <SectionWrapper id="diferencial">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
        <Reveal>
          <Eyebrow>postura_</Eyebrow>
          <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
            Lo que la mayoría
            <br />
            <span className="text-accent">no te va a decir.</span>
          </h2>
          <p className="mt-7 text-base text-muted leading-relaxed max-w-md">
            Vendemos menos IA de la que podríamos. Lo hacemos a propósito.
          </p>
        </Reveal>

        <StaggerList stagger={0.1} className="flex flex-col">
          {differentiators.map((d, i) => (
            <StaggerItem
              key={d.title}
              className="border-t border-line py-7 first:border-t-0 first:pt-0"
            >
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-3">
                {String(i + 1).padStart(2, "0")} —
              </div>
              <h3 className="font-sans font-medium text-xl md:text-2xl -tracking-tight text-ink mb-3 leading-snug">
                {d.title}
              </h3>
              <p className="text-base text-muted leading-relaxed max-w-md">
                {d.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </SectionWrapper>
  );
}
