import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Motion";
import { caso } from "@/data/home";

/**
 * Sección 2: la prueba. Sustituye al antiguo bloque `Numero`, que publicaba un
 * ejemplo económico inventado.
 *
 * Mientras `caso` sea null no se renderiza nada: es preferible una portada sin
 * prueba a una portada con una cifra que el visitante no puede creer.
 * Para publicarlo, rellenar `caso` en src/data/home.ts.
 */
export default function Caso() {
  if (!caso) return null;

  return (
    <SectionWrapper id="caso">
      <Reveal className="mb-12 max-w-3xl">
        <Eyebrow>caso_</Eyebrow>
        <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
          Un proceso real,{" "}
          <span className="text-accent">medido antes y después.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <article className="border border-line bg-surface p-8 md:p-12">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
            {caso.perfil}
          </div>

          <p className="mt-6 font-sans font-medium text-xl md:text-2xl -tracking-tight text-ink leading-snug max-w-2xl">
            {caso.proceso}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-8 sm:gap-10 items-end max-w-2xl">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-3">
                Antes
              </div>
              <div className="font-sans font-medium text-4xl md:text-5xl -tracking-tight text-ink">
                {caso.antes.cifra}
              </div>
              <div className="mt-1 font-mono text-xs text-muted">
                {caso.antes.unidad}
              </div>
            </div>

            <div
              aria-hidden="true"
              className="hidden sm:block font-mono text-2xl text-muted pb-3"
            >
              →
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-3">
                Después
              </div>
              <div className="font-sans font-medium text-4xl md:text-5xl -tracking-tight text-accent">
                {caso.despues.cifra}
              </div>
              <div className="mt-1 font-mono text-xs text-muted">
                {caso.despues.unidad}
              </div>
            </div>
          </div>

          <dl className="mt-10 pt-8 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-2">
                Cómo se midió
              </dt>
              <dd className="text-sm text-muted leading-relaxed">
                {caso.medicion}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-2">
                Plazo
              </dt>
              <dd className="text-sm text-muted leading-relaxed">
                {caso.plazo}
              </dd>
            </div>
          </dl>
        </article>
      </Reveal>
    </SectionWrapper>
  );
}
