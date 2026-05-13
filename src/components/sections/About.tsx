import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";

export default function About() {
  return (
    <SectionWrapper id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left: copy */}
        <div>
          <Eyebrow>Sobre nosotros</Eyebrow>
          <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
            Resultados,
            <br />
            <span className="text-accent">no promesas.</span>
          </h2>
          <div className="mt-8 space-y-5 text-base text-muted leading-relaxed max-w-lg">
            <p>
              Ayudamos a empresas a dejar de perder tiempo y dinero en procesos
              que una máquina puede hacer mejor. Nos especializamos en
              automatización con IA — desde agentes inteligentes hasta flujos
              completos de operación.
            </p>
            <p>
              No trabajamos con soluciones genéricas. Cada proyecto se diseña
              desde cero para el problema específico de cada cliente, con
              tecnología de primer nivel y resultados medibles desde la primera
              semana.
            </p>
          </div>
        </div>

        {/* Right: editorial spec card (no orbital ring, no IA cliché) */}
        <div className="lg:pl-12">
          <div className="border border-line bg-surface p-8 md:p-10">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Nota — 01
            </div>
            <p className="mt-6 font-sans font-medium text-2xl md:text-3xl -tracking-tight leading-snug text-ink">
              &ldquo;La IA bien aplicada es invisible. El cliente solo ve que
              algo que costaba horas, ahora ocurre solo.&rdquo;
            </p>
            <div className="mt-8 h-px bg-line" />
            <div className="mt-5 grid grid-cols-2 gap-6 font-mono text-xs text-muted">
              <div>
                <div className="uppercase tracking-[0.12em] text-muted/70">
                  Enfoque
                </div>
                <div className="mt-1.5 text-ink">Sistémico</div>
              </div>
              <div>
                <div className="uppercase tracking-[0.12em] text-muted/70">
                  Entrega
                </div>
                <div className="mt-1.5 text-ink">Por iteraciones</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
