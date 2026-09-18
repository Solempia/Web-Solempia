import Button from "@/components/ui/Button";
import { contactHref } from "@/data/contacto";
import { Reveal } from "@/components/ui/Motion";
import type { ServicioEscalon } from "@/data/servicios";

interface ServicioBloqueProps {
  escalon: ServicioEscalon;
  delay?: number;
}

const labelCls = "font-mono text-xs uppercase tracking-[0.16em] text-muted";

export default function ServicioBloque({ escalon, delay = 0 }: ServicioBloqueProps) {
  return (
    <Reveal as="article" delay={delay}>
      <div className="border border-line bg-surface p-8 md:p-12">
        {/* Encabezado */}
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 pb-8 border-b border-line">
          <span className="font-mono text-sm text-muted">{escalon.code}</span>
          <h2 className="font-sans font-medium text-2xl md:text-3xl -tracking-tight text-ink leading-tight">
            {escalon.title}
          </h2>
          {escalon.tag && (
            <span className="font-mono text-xs text-accent">
              {escalon.tag}_
            </span>
          )}
        </div>

        {/* Para quién / Qué hacemos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 py-8 border-b border-line">
          <div>
            <div className={`${labelCls} mb-3`}>Para quién</div>
            <p className="text-base text-ink leading-relaxed">
              {escalon.paraQuien}
            </p>
          </div>
          <div>
            <div className={`${labelCls} mb-3`}>Qué hacemos</div>
            <p className="text-base text-ink leading-relaxed">
              {escalon.queHacemos}
            </p>
          </div>
        </div>

        {/* Qué recibes */}
        <div className="py-8">
          <div className={`${labelCls} mb-5`}>
            {escalon.queRecibesLabel ?? "Qué recibes"}
          </div>
          <ul className="flex flex-col gap-3">
            {escalon.queRecibes.map((item) => (
              <li key={item.slice(0, 32)} className="flex gap-4">
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
        </div>

        {/* Condiciones */}
        {escalon.condiciones && (
          <div className="border-t border-line pt-8">
            <div className={`${labelCls} mb-5`}>Condiciones</div>
            <ul className="flex flex-col gap-3">
              {escalon.condiciones.map((item) => (
                <li key={item.slice(0, 32)} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs text-muted pt-1.5"
                  >
                    —
                  </span>
                  <p className="text-sm md:text-base text-muted leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Nota destacada */}
        {escalon.nota && (
          <div className="border-t border-line pt-8">
            <p className="border-l-2 border-accent pl-5 py-1 font-sans font-medium text-base md:text-lg -tracking-tight text-ink leading-snug max-w-2xl">
              {escalon.nota}
            </p>
          </div>
        )}
        <div className="border-t border-line pt-6 mt-6">
          <Button href={contactHref(escalon.service)}>Consultar sobre {escalon.title.charAt(0).toLowerCase() + escalon.title.slice(1)}</Button>
        </div>
      </div>
    </Reveal>
  );
}
