import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import { Reveal, StaggerList, StaggerItem } from "@/components/ui/Motion";
import { automocion, automocionCta } from "@/data/sectores";

export const metadata: Metadata = {
  title: "Radar de IA en la Sombra — Automoción y OEM",
  description:
    "Diagnóstico para proveedores de OEM: mapea la IA que tu equipo ya usa, alinea reglas con TISAX/VDA ISA e IATF 16949 y prepara tu dossier de evidencias.",
};

const labelCls = "font-mono text-xs uppercase tracking-[0.16em] text-muted";

export default function AutomocionPage() {
  const { radar } = automocion;

  return (
    <main>
      <PageHeader
        eyebrow="sectores / automoción_"
        title="Radar de IA"
        titleAccent="en la Sombra."
        intro={automocion.intro[0]}
      />

      <div className="px-6 max-w-6xl mx-auto pb-32 md:pb-40">
        <Reveal className="mb-12">
          <p className="text-base text-muted leading-relaxed max-w-2xl">
            {automocion.intro[1]}
          </p>
        </Reveal>

        <StaggerList className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
          <StaggerItem className="bg-surface p-8 md:p-10">
            <div className={`${labelCls} mb-6`}>Qué mapea</div>
            <ul className="flex flex-col">
              {radar.queMapea.map((item) => (
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

          <StaggerItem className="bg-surface p-8 md:p-10">
            <div className={`${labelCls} mb-6`}>Qué resuelve</div>
            <ul className="flex flex-col">
              {radar.queResuelve.map((item) => (
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
        </StaggerList>

        {/* Guardarraíl: visible por requisito del draft, no letra pequeña */}
        <Reveal delay={0.1} className="mt-16">
          <div className="border-l-2 border-accent pl-6 py-1 max-w-2xl">
            <div className={`${labelCls} mb-3`}>guardarraíl_</div>
            <p className="font-sans font-medium text-lg md:text-xl -tracking-tight text-ink leading-snug">
              {automocion.guardarrail}
            </p>
          </div>
        </Reveal>
      </div>

      <CtaBand
        title={automocionCta.heading}
        titleAccent={automocionCta.headingAccent}
        body={automocionCta.body}
        primary={automocionCta.primary}
        secondary={automocionCta.secondary}
      />
    </main>
  );
}
