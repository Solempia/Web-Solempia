import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import { pillars } from "@/data/pillars";

export default function Pillars() {
  return (
    <SectionWrapper id="sobre">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-16">
        <div>
          <Eyebrow>El modelo</Eyebrow>
          <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
            Construye.
            <br />
            Enseña.
            <br />
            <span className="text-accent">Gobierna.</span>
          </h2>
        </div>
        <p className="text-base text-muted leading-relaxed max-w-md md:justify-self-end">
          Tres áreas integradas que cubren el ciclo completo: del primer flujo
          identificado al sistema gobernado en producción.
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
        {pillars.map((p) => (
          <li key={p.code} className="bg-surface p-8 md:p-10">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-8">
              {p.code} — {p.slug}
            </div>
            <h3 className="font-sans font-medium text-2xl md:text-3xl -tracking-tight text-ink mb-4 leading-tight">
              {p.headline}
            </h3>
            <p className="text-sm text-muted leading-relaxed">{p.body}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
