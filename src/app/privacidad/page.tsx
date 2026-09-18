import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de privacidad — Solempia",
  description: "Política de privacidad de Solempia.",
  // Placeholder legal: no indexar hasta que la gestoría confirme el texto definitivo.
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <main>
      <PageHeader
        eyebrow="legal_"
        title="Política de privacidad"
        intro="Documento en preparación. Publicaremos aquí la versión completa una vez validada."
      />
      <div className="px-6 max-w-6xl mx-auto pb-32 md:pb-40">
        <div className="max-w-2xl flex flex-col gap-6 text-base text-muted leading-relaxed">
          <p>
            Los datos que envías por el formulario de contacto (nombre,
            empresa, email, teléfono, servicio y mensaje, junto con la página de origen) se usan únicamente para
            responder a tu consulta y proponerte una llamada. No se ceden a
            terceros ni se usan para publicidad.
          </p>
          <p>
            Responsable del tratamiento: Sebastián Lazarte (Solempia), Jaén,
            Andalucía. Puedes ejercer tus derechos de acceso, rectificación y
            supresión escribiendo a{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-ink underline underline-offset-2 hover:text-accent transition-colors"
            >
              {site.email}
            </a>
            .
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
