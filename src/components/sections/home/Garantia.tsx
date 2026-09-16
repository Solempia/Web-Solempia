import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Motion";
import { garantia } from "@/data/home";

export default function Garantia() {
  return (
    <section id="garantia" className="px-6 max-w-6xl mx-auto">
      <Reveal>
        <div className="border border-line bg-surface p-8 md:p-14">
          <Eyebrow>garantía_</Eyebrow>
          <h2 className="mt-6 font-sans font-medium text-3xl md:text-5xl -tracking-tight leading-[1.12] max-w-3xl">
            {garantia.title}{" "}
            <span className="text-accent">{garantia.titleAccent}</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {garantia.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="text-base text-muted leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
