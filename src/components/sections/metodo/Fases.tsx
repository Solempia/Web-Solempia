import { Reveal, StaggerList, StaggerItem } from "@/components/ui/Motion";
import { fases, principio } from "@/data/metodo";

export default function Fases() {
  return (
    <div className="px-6 max-w-6xl mx-auto pb-32 md:pb-40">
      <StaggerList stagger={0.06} className="border-t border-line">
        {fases.map((fase) => (
          <StaggerItem
            key={fase.code}
            className="border-b border-line grid grid-cols-[64px_1fr] md:grid-cols-[120px_280px_1fr] gap-6 md:gap-10 py-10 md:py-12"
          >
            <div className="font-mono text-sm text-muted pt-1">
              {fase.code}
            </div>
            <h2 className="font-sans font-medium text-2xl md:text-3xl -tracking-tight text-ink leading-tight">
              {fase.name}
            </h2>
            <div className="col-span-2 md:col-span-1 max-w-xl flex flex-col gap-5">
              {fase.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="text-sm md:text-base text-muted leading-relaxed"
                >
                  {p}
                </p>
              ))}

              {fase.condiciones && (
                <ol className="flex flex-col gap-4 mt-1">
                  {fase.condiciones.map((c, i) => (
                    <li key={c.title} className="flex gap-4">
                      <span className="font-mono text-xs text-accent pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm md:text-base leading-relaxed">
                        <span className="font-medium text-ink">{c.title}</span>{" "}
                        <span className="text-muted">{c.body}</span>
                      </p>
                    </li>
                  ))}
                </ol>
              )}

              {fase.destacado && (
                <p className="border-l-2 border-accent pl-5 py-1 font-sans font-medium text-base md:text-lg -tracking-tight text-ink leading-snug">
                  {fase.destacado}
                </p>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerList>

      {/* Principio de fondo: visible en la página (requisito del draft) */}
      <Reveal delay={0.1} className="mt-16">
        <p className="border-l-2 border-accent pl-6 py-1 font-sans font-medium text-xl md:text-2xl -tracking-tight leading-snug max-w-2xl">
          {principio}
        </p>
      </Reveal>
    </div>
  );
}
