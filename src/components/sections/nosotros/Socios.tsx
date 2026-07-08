import { Reveal, StaggerList, StaggerItem } from "@/components/ui/Motion";
import { socios, pequenos, donde } from "@/data/nosotros";

export default function Socios() {
  return (
    <div className="px-6 max-w-6xl mx-auto pb-32 md:pb-40">
      <StaggerList className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
        {socios.map((socio) => (
          <StaggerItem key={socio.code} className="bg-surface p-8 md:p-12">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-6">
              ({socio.code})
            </div>
            <h2 className="font-sans font-medium text-2xl md:text-3xl -tracking-tight text-ink leading-tight">
              {socio.name}
            </h2>
            <div className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {socio.role}
            </div>
            <p className="mt-6 text-base text-muted leading-relaxed">
              {socio.body}
            </p>
          </StaggerItem>
        ))}
      </StaggerList>

      <Reveal delay={0.1} className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-start">
        <div>
          <h2 className="font-sans font-medium text-2xl md:text-3xl -tracking-tight leading-snug max-w-md">
            {pequenos.heading}
          </h2>
          <p className="mt-6 text-base text-muted leading-relaxed max-w-md">
            {pequenos.body}
          </p>
        </div>
        <div className="lg:pt-2">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-3">
            {donde.heading}
          </div>
          <p className="text-base text-ink leading-relaxed max-w-md">
            {donde.body}
          </p>
        </div>
      </Reveal>
    </div>
  );
}
