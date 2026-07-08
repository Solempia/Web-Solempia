import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Motion";
import { formacion } from "@/data/servicios";

const labelCls = "font-mono text-xs uppercase tracking-[0.16em] text-muted";

/** Puerta lateral: la formación. Destino del anchor /servicios#formacion. */
export default function Formacion() {
  return (
    <Reveal as="article">
      <div
        id="formacion"
        className="border border-accent/30 bg-surface p-8 md:p-12"
      >
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 pb-8 border-b border-line">
          <Eyebrow withDash={false} className="text-accent">
            {formacion.tag}_
          </Eyebrow>
          <h2 className="font-sans font-medium text-2xl md:text-3xl -tracking-tight text-ink leading-tight">
            {formacion.title}
          </h2>
        </div>

        <div className="py-8">
          <p className="border-l-2 border-accent pl-5 py-1 font-sans font-medium text-base md:text-lg -tracking-tight text-ink leading-snug max-w-2xl">
            {formacion.dato}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pb-8">
          <div>
            <div className={`${labelCls} mb-3`}>Qué hacemos</div>
            <p className="text-base text-ink leading-relaxed">
              {formacion.queHacemos}
            </p>
          </div>
          <div>
            <div className={`${labelCls} mb-3`}>
              Por qué es la mejor forma de empezar
            </div>
            <p className="text-base text-ink leading-relaxed">
              {formacion.porQueEmpezar}
            </p>
          </div>
        </div>

        <Button href={formacion.cta.href} variant="primary">
          {formacion.cta.label} →
        </Button>
      </div>
    </Reveal>
  );
}
