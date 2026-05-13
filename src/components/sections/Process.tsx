import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal, StaggerList, StaggerItem } from "@/components/ui/Motion";
import { process } from "@/data/process";

export default function Process() {
  return (
    <SectionWrapper id="proceso">
      <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-16">
        <div>
          <Eyebrow>(SE-METHOD/) los 05 pasos</Eyebrow>
          <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
            Una secuencia
            <br />
            <span className="text-accent">sin atajos.</span>
          </h2>
        </div>
        <p className="text-base text-muted leading-relaxed max-w-md md:justify-self-end">
          Cada engagement sigue esta secuencia. El paso 02 es el más
          importante — y el que la mayoría de agencias evita.
        </p>
      </Reveal>

      <StaggerList
        stagger={0.06}
        className="border-t border-line"
      >
        {process.map((step) => (
          <StaggerItem
            key={step.code}
            className="border-b border-line grid grid-cols-[64px_1fr] md:grid-cols-[120px_240px_1fr] gap-6 md:gap-10 py-8 md:py-10"
          >
            <div className="font-mono text-sm text-muted pt-1">
              {step.code}
            </div>
            <h3 className="font-sans font-medium text-xl md:text-2xl -tracking-tight text-ink leading-tight md:col-span-1 col-span-1">
              {step.title}
            </h3>
            <p className="text-sm md:text-base text-muted leading-relaxed col-span-2 md:col-span-1 max-w-xl">
              {step.description}
            </p>
          </StaggerItem>
        ))}
      </StaggerList>
    </SectionWrapper>
  );
}
