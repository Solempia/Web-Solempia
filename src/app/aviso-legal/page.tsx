import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso legal — Solempia",
  description: "Aviso legal de Solempia.",
  // Placeholder legal: no indexar hasta que la gestoría confirme el texto definitivo.
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <main>
      <PageHeader
        eyebrow="legal_"
        title="Aviso legal"
        intro="Documento en preparación. Publicaremos aquí la versión completa una vez validada."
      />
      <div className="px-6 max-w-6xl mx-auto pb-32 md:pb-40">
        <div className="max-w-2xl flex flex-col gap-6 text-base text-muted leading-relaxed">
          <p>
            Titular del sitio: Sebastián Lazarte (Solempia), profesional
            autónomo con domicilio en Jaén, Andalucía.{" "}
            <span className="font-mono text-xs">
              [PENDIENTE: NIF y domicilio fiscal exactos — confirmar con la
              gestoría antes de publicar.]
            </span>
          </p>
          <p>
            Contacto:{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-ink underline underline-offset-2 hover:text-accent transition-colors"
            >
              {site.email}
            </a>
            .
          </p>
          <p>
            El contenido de este sitio tiene carácter informativo y no
            constituye asesoramiento profesional. Las condiciones concretas de
            cada servicio se pactan por escrito, con precio cerrado, antes de
            empezar.
          </p>
          <p className="font-mono text-xs text-muted border-l-2 border-line pl-4 py-1">
            Versión provisional. El texto definitivo (aviso legal, privacidad y
            cookies) está pendiente de validación con la gestoría antes de la
            publicación del sitio.
          </p>
        </div>
      </div>
    </main>
  );
}
