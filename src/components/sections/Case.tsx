import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Motion";
import { featuredCase } from "@/data/cases";

export default function Case() {
  return (
    <SectionWrapper id="caso">
      <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-12">
        <div>
          <Eyebrow>(SE-CASE/01) entregado</Eyebrow>
          <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
            Un caso,
            <br />
            <span className="text-accent">números reales.</span>
          </h2>
        </div>
        <p className="text-base text-muted leading-relaxed max-w-md md:justify-self-end">
          Solo presentamos lo que se puede verificar. Si una métrica no es
          medible, no aparece.
        </p>
      </Reveal>

      <Reveal as="article" delay={0.1}>
        <div className="border border-line bg-surface p-8 md:p-12">
          {/* Encabezado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pb-8 border-b border-line">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-2">
                Cliente / sector
              </div>
              <div className="font-sans font-medium text-lg text-ink">
                {featuredCase.client}{" "}
                <span className="text-muted font-normal">·</span>{" "}
                <span className="text-muted">{featuredCase.sector}</span>
              </div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-2">
                Entrega
              </div>
              <div className="font-sans font-medium text-lg text-ink">
                {featuredCase.delivery}
              </div>
            </div>
          </div>

          {/* Problema / Solución */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-b border-line">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-3">
                Problema
              </div>
              <p className="text-base text-ink leading-relaxed">
                {featuredCase.problem}
              </p>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-3">
                Qué construimos
              </div>
              <p className="text-base text-ink leading-relaxed">
                {featuredCase.built}
              </p>
            </div>
          </div>

          {/* Antes / Después */}
          <div className="grid grid-cols-2 gap-10 py-10">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-3">
                Antes
              </div>
              <div className="font-sans font-medium text-3xl md:text-4xl -tracking-tight text-ink">
                {featuredCase.before}
              </div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-3">
                Después
              </div>
              <div className="font-sans font-medium text-3xl md:text-4xl -tracking-tight text-accent">
                {featuredCase.after}
              </div>
            </div>
          </div>

          {/* Testimonial (opcional) */}
          {featuredCase.testimonial && (
            <div className="border-t border-line pt-10 mt-2">
              <p className="font-sans text-lg md:text-xl -tracking-tight text-ink leading-snug">
                &ldquo;{featuredCase.testimonial.quote}&rdquo;
              </p>
              <div className="mt-5 font-mono text-xs text-muted">
                {featuredCase.testimonial.author} ·{" "}
                {featuredCase.testimonial.role}
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
