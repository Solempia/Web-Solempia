import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Motion";
import ContactForm from "@/components/sections/ContactForm";
import { site } from "@/data/site";
import { contactoHero, bajoFormulario } from "@/data/contacto";

export const metadata: Metadata = {
  title: "Contacto — Pide tu diagnóstico",
  description:
    "Cuéntanos tu proceso más pesado. Llamada de 20 minutos y precio cerrado antes de empezar.",
};

const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export default function ContactoPage() {
  return (
    <main className="pt-32 md:pt-40 pb-32 md:pb-40 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
        {/* Columna izquierda — copy */}
        <Reveal>
          <Eyebrow>contacto_</Eyebrow>
          <h1 className="mt-5 font-sans font-medium text-4xl md:text-5xl lg:text-6xl -tracking-tight leading-[1.05]">
            Cuéntanos tu proceso
            <br />
            <span className="text-accent">más pesado.</span>
          </h1>
          <p className="mt-7 text-base text-muted leading-relaxed max-w-md">
            {contactoHero.body}
          </p>

          <div className="mt-10 border-t border-line pt-8 max-w-md">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-4">
              Otras vías
            </div>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink hover:text-accent transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-accent transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Columna derecha — form */}
        <Reveal delay={0.1}>
          <ContactForm />

          <div className="mt-10 border-t border-line pt-6">
            <p className="text-sm text-muted leading-relaxed max-w-md">
              {bajoFormulario.text}{" "}
              <Link
                href={bajoFormulario.cta.href}
                className="text-ink underline underline-offset-2 hover:text-accent transition-colors whitespace-nowrap"
              >
                {bajoFormulario.cta.label}
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
