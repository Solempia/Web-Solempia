import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import { services } from "@/data/services";

export default function Services() {
  return (
    <SectionWrapper id="servicios">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-16">
        <div>
          <Eyebrow>servicios_</Eyebrow>
          <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
            Lo que entra
            <br />
            <span className="text-accent">en el alcance.</span>
          </h2>
        </div>
        <p className="text-base text-muted leading-relaxed max-w-md md:justify-self-end">
          No todo lo de aquí encaja en todos los proyectos. La clasificación del
          paso 02 decide qué aplica — y qué no.
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
        {services.map((s) => (
          <li
            key={s.code}
            className="group relative bg-surface p-8 transition-colors duration-300 hover:bg-bg"
          >
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-8">
              {s.code}
            </div>
            <h3 className="font-sans font-medium text-lg text-ink mb-3">
              {s.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {s.description}
            </p>
            <span
              aria-hidden="true"
              className="absolute top-7 right-7 text-accent opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
            >
              →
            </span>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
