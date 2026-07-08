import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Motion";
import type { Cta } from "@/data/site";

interface CtaBandProps {
  id?: string;
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  body: string;
  primary: Cta;
  secondary?: Cta;
  /** Alternativa suave bajo los botones, en mono discreto. */
  note?: Cta;
}

/** Banda de cierre de página: caja centrada con CTAs. Sustituye a FinalCTA. */
export default function CtaBand({
  id,
  eyebrow = "contacto_",
  title,
  titleAccent,
  body,
  primary,
  secondary,
  note,
}: CtaBandProps) {
  return (
    <section id={id} className="border-t border-line py-32 md:py-40 px-6">
      <Reveal className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="text-accent">{titleAccent}</span>
            </>
          )}
        </h2>
        <p className="mt-6 text-base text-muted leading-relaxed">{body}</p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Button href={primary.href} variant="primary">
            {primary.label} →
          </Button>
          {secondary && (
            <Button href={secondary.href} variant="ghost">
              {secondary.label}
            </Button>
          )}
        </div>
        {note && (
          <p className="mt-8">
            <Link
              href={note.href}
              className="font-mono text-xs uppercase tracking-[0.16em] text-muted hover:text-ink transition-colors"
            >
              {note.label} →
            </Link>
          </p>
        )}
      </Reveal>
    </section>
  );
}
