import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Motion";
import ContactForm from "@/components/sections/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto — Solempia",
  description:
    "Cuéntanos qué proceso te está costando tiempo. Respondemos en menos de 24 horas con una primera lectura — sin compromiso, sin pitch.",
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
            Empieza una
            <br />
            <span className="text-accent">conversación.</span>
          </h1>
          <p className="mt-7 text-base text-muted leading-relaxed max-w-md">
            Cuéntanos qué flujo te está costando tiempo. Una primera lectura,
            sin compromiso. Si vemos que no necesitas IA, te lo decimos.
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
        </Reveal>
      </div>
    </main>
  );
}
