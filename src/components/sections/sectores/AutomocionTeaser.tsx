import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Motion";
import { automocion } from "@/data/sectores";

export default function AutomocionTeaser() {
  return (
    <div className="border-t border-line">
      <SectionWrapper id="automocion">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-start">
          <Reveal>
            <Eyebrow>automoción_</Eyebrow>
            <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
              Especialización:
              <br />
              <span className="text-accent">automoción y proveedores de OEM.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            {automocion.intro.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="text-base text-muted leading-relaxed"
              >
                {p}
              </p>
            ))}
            <div className="pt-2">
              <Button href="/sectores/automocion" variant="ghost">
                {automocion.radar.name} →
              </Button>
            </div>
          </Reveal>
        </div>
      </SectionWrapper>
    </div>
  );
}
