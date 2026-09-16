import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal, StaggerList, StaggerItem } from "@/components/ui/Motion";
import { problema } from "@/data/home";

export default function Problema() {
  return (
    <SectionWrapper id="problema">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-start">
        <Reveal>
          <Eyebrow>problema_</Eyebrow>
          <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
            {problema.title}
            <br />
            <span className="text-accent">{problema.titleAccent}</span>
          </h2>
        </Reveal>

        <StaggerList stagger={0.06} className="border-t border-line">
          {problema.items.map((item) => (
            <StaggerItem
              key={item.slice(0, 24)}
              className="border-b border-line py-4 flex items-baseline gap-4"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent translate-y-[-2px]"
              />
              <p className="text-base text-ink leading-relaxed">{item}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>

      <Reveal delay={0.15} className="mt-16 border-t border-line pt-10">
        <p className="font-sans font-medium text-2xl md:text-3xl -tracking-tight leading-snug max-w-2xl">
          {problema.cierre}{" "}
          <span className="text-accent">{problema.cierreAccent}</span>
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
