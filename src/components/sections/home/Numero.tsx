import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Motion";
import { numero } from "@/data/home";

export default function Numero() {
  const { ejemplo } = numero;

  return (
    <SectionWrapper id="numero">
      <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-12">
        <div>
          <Eyebrow>número_</Eyebrow>
          <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
            ¿Cuánto cuesta
            <br />
            <span className="text-accent">no hacer nada?</span>
          </h2>
        </div>
        <p className="text-base text-muted leading-relaxed max-w-md md:justify-self-end">
          {numero.intro}
        </p>
      </Reveal>

      {/* Cuando exista el primer caso autorizado y anonimizado, este bloque
          se sustituye por el caso real (draft → PENDIENTES). */}
      <Reveal delay={0.1}>
        <article className="border border-line bg-surface p-8 md:p-12 flex flex-col max-w-3xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-6">
            Ejemplo ilustrativo
          </div>
          <p className="text-base text-ink leading-relaxed">
            {ejemplo.supuestos}
          </p>
          <div className="py-8">
            <div className="font-sans font-medium text-5xl md:text-6xl -tracking-tight text-accent">
              {ejemplo.cifra}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {ejemplo.unidad}
            </div>
          </div>
          <p className="text-sm md:text-base text-muted leading-relaxed">
            {ejemplo.detalle}
          </p>
          {/* Etiqueta obligatoria: visible, no letra pequeña escondida */}
          <p className="mt-auto pt-8">
            <span className="inline-flex items-start gap-3 border-t border-line pt-4 font-mono text-xs text-ink leading-relaxed">
              <span
                aria-hidden="true"
                className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {ejemplo.etiqueta}
            </span>
          </p>
        </article>
      </Reveal>
    </SectionWrapper>
  );
}
