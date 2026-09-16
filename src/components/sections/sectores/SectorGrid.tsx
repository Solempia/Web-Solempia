import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal, StaggerList, StaggerItem } from "@/components/ui/Motion";
import { perfiles, encaje } from "@/data/sectores";

export default function SectorGrid() {
  return (
    <div className="px-6 max-w-6xl mx-auto pb-32 md:pb-40">
      <Reveal className="mb-12">
        <Eyebrow>para quién_</Eyebrow>
      </Reveal>

      <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
        {perfiles.map((perfil, i) => (
          <StaggerItem key={perfil.title} className="bg-surface p-8">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-4">
              {String(i + 1).padStart(2, "0")} —
            </div>
            <h2 className="font-sans font-medium text-xl -tracking-tight text-ink mb-3 leading-snug">
              {perfil.title}
            </h2>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              {perfil.body}
            </p>
          </StaggerItem>
        ))}
        {/* Sexta celda: el criterio de encaje, destacado */}
        <StaggerItem className="bg-bg p-8 flex items-end">
          <p className="font-sans font-medium text-lg md:text-xl -tracking-tight text-ink leading-snug">
            {encaje}
          </p>
        </StaggerItem>
      </StaggerList>
    </div>
  );
}
