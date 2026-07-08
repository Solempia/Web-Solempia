import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Motion";
import { problema } from "@/data/home";

export default function Problema() {
  return (
    <SectionWrapper id="problema">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-start">
        <Reveal>
          <Eyebrow>problema_</Eyebrow>
          <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
            Te suena,
            <br />
            <span className="text-accent">¿verdad?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6">
          {problema.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-base text-muted leading-relaxed">
              {p}
            </p>
          ))}
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-16 border-t border-line pt-10">
        <p className="font-sans font-medium text-2xl md:text-3xl -tracking-tight leading-snug max-w-2xl">
          El problema no es solo de eficiencia.{" "}
          <span className="text-accent">Es de control.</span>
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
