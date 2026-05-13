import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

const waMessage = "Hola, quiero información sobre automatización.";
const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  waMessage
)}`;

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="border-t border-line py-32 md:py-40 px-6"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center">
          <Eyebrow>¿Listo para automatizar?</Eyebrow>
        </div>
        <h2 className="mt-5 font-sans font-medium text-4xl md:text-5xl -tracking-tight leading-[1.1]">
          Cuéntanos qué necesitas.
          <br />
          <span className="text-accent">Lo hacemos realidad.</span>
        </h2>
        <p className="mt-6 text-base text-muted leading-relaxed">
          Completa el formulario o escríbenos por WhatsApp. En menos de 24
          horas agendamos una llamada para presentar la solución.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Button
            href={site.formUrl}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero empezar →
          </Button>
          <Button
            href={waLink}
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prefiero WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
