import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import { process } from "@/data/process";

export default function Process() {
  return (
    <SectionWrapper id="proceso">
      <div className="text-center mb-20">
        <div className="flex justify-center">
          <Eyebrow>Cómo trabajamos</Eyebrow>
        </div>
        <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
          Simple, claro y<br />
          <span className="text-accent">sin sorpresas.</span>
        </h2>
        <p className="mt-5 mx-auto max-w-md text-base text-muted leading-relaxed">
          Desde la primera conversación hasta el sistema corriendo — así es
          nuestro proceso.
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Connector line — solo desktop */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-px bg-line"
        />

        {process.map((step) => (
          <div key={step.code} className="relative text-center px-2">
            <div className="mx-auto mb-7 w-[72px] h-[72px] rounded-full border border-line bg-bg flex items-center justify-center font-mono text-base font-medium text-ink relative z-10">
              {step.code}
            </div>
            <h3 className="font-sans font-medium text-lg text-ink mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
