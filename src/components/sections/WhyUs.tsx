import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import { differentiators } from "@/data/differentiators";

const icons = [
  // Línea horizontal — sin plazos
  <svg
    key="i1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="square"
  >
    <line x1="4" y1="12" x2="20" y2="12" />
  </svg>,
  // Punto en círculo — enfoque
  <svg
    key="i2"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
  </svg>,
  // Cuadrado — garantía
  <svg
    key="i3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="4" y="4" width="16" height="16" />
  </svg>,
];

export default function WhyUs() {
  return (
    <SectionWrapper id="diferencial">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <Eyebrow>Por qué elegirnos</Eyebrow>
          <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
            IA que trabaja.
            <br />
            <span className="text-accent">Resultados</span>
            <br />
            que se miden.
          </h2>
          <p className="mt-7 text-base text-muted leading-relaxed max-w-md">
            Sin tecnología de moda ni promesas vacías. Solo sistemas que
            funcionan y números que se pueden verificar.
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {differentiators.map((d, i) => (
            <li
              key={d.title}
              className="flex gap-5 items-start border border-line bg-surface p-6 transition-colors duration-300 hover:border-ink/30"
            >
              <div className="shrink-0 w-10 h-10 flex items-center justify-center text-accent">
                <div className="w-5 h-5">{icons[i]}</div>
              </div>
              <div>
                <h3 className="font-sans font-medium text-base text-ink mb-1.5">
                  {d.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {d.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
