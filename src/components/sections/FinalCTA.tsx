import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Motion";
import { site } from "@/data/site";

const waMessage = "Hola, quiero empezar una conversación sobre automatización.";
const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  waMessage
)}`;

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="border-t border-line py-32 md:py-40 px-6"
    >
      <Reveal className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center">
          <Eyebrow>contacto_</Eyebrow>
        </div>
        <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
          Empieza una
          <br />
          <span className="text-accent">conversación.</span>
        </h2>
        <p className="mt-6 text-base text-muted leading-relaxed">
          Cuéntanos qué flujo te está costando tiempo. En menos de 24 horas
          respondemos con una primera lectura — sin compromiso, sin pitch.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Button
            href={site.formUrl}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escríbenos →
          </Button>
          <Button
            href={waLink}
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
