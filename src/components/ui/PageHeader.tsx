import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Motion";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  intro?: string;
}

/** Cabecera estándar de subpágina: eyebrow mono + h1 con línea en accent + intro. */
export default function PageHeader({
  eyebrow,
  title,
  titleAccent,
  intro,
}: PageHeaderProps) {
  return (
    <div className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 max-w-6xl mx-auto">
      <Reveal as="header">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 font-sans font-medium text-4xl md:text-6xl -tracking-tight leading-[1.08] max-w-4xl">
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="text-accent">{titleAccent}</span>
            </>
          )}
        </h1>
        {intro && (
          <p className="mt-7 text-lg text-muted leading-relaxed max-w-2xl">
            {intro}
          </p>
        )}
      </Reveal>
    </div>
  );
}
