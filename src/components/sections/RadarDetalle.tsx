import { Reveal, StaggerList, StaggerItem } from "@/components/ui/Motion";

interface RadarDetalleProps {
  /** Párrafo de contexto bajo el PageHeader. */
  contexto: string;
  queMapea: readonly string[];
  queResuelve: readonly string[];
  /** Visible por requisito del draft, no letra pequeña. */
  guardarrail: string;
}

const labelCls = "font-mono text-xs uppercase tracking-[0.16em] text-muted";

function Panel({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <StaggerItem className="bg-surface p-8 md:p-10">
      <div className={`${labelCls} mb-6`}>{label}</div>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li
            key={item.slice(0, 32)}
            className="border-t border-line py-5 first:border-t-0 first:pt-0 flex gap-4"
          >
            <span
              aria-hidden="true"
              className="font-mono text-xs text-accent pt-1.5"
            >
              —
            </span>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </StaggerItem>
  );
}

/**
 * Cuerpo compartido de las dos páginas del Radar de IA en la Sombra
 * (/radar genérico y /sectores/automocion): contexto, grid
 * "Qué mapea / Qué resuelve" y guardarraíl visible.
 */
export default function RadarDetalle({
  contexto,
  queMapea,
  queResuelve,
  guardarrail,
}: RadarDetalleProps) {
  return (
    <div className="px-6 max-w-6xl mx-auto pb-32 md:pb-40">
      <Reveal className="mb-12">
        <p className="text-base text-muted leading-relaxed max-w-2xl">
          {contexto}
        </p>
      </Reveal>

      <StaggerList className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
        <Panel label="Qué mapea" items={queMapea} />
        <Panel label="Qué resuelve" items={queResuelve} />
      </StaggerList>

      <Reveal delay={0.1} className="mt-16">
        <div className="border-l-2 border-accent pl-6 py-1 max-w-2xl">
          <div className={`${labelCls} mb-3`}>alcance_</div>
          <p className="font-sans font-medium text-lg md:text-xl -tracking-tight text-ink leading-snug">
            {guardarrail}
          </p>
        </div>
      </Reveal>
    </div>
  );
}
