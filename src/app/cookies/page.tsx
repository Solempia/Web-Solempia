import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Política de cookies — Solempia",
  description: "Política de cookies de Solempia.",
  // Placeholder legal: no indexar hasta que la gestoría confirme el texto definitivo.
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="legal_"
        title="Política de cookies"
        intro="Corta, porque no hay mucho que contar."
      />
      <div className="px-6 max-w-6xl mx-auto pb-32 md:pb-40">
        <div className="max-w-2xl flex flex-col gap-6 text-base text-muted leading-relaxed">
          <p>
            Este sitio no usa cookies de analítica, publicidad ni seguimiento.
            No hay cookies de terceros.
          </p>
          <p>
            Las únicas piezas técnicas que el navegador puede almacenar son las
            imprescindibles para servir la página. No requieren consentimiento
            porque no identifican a nadie.
          </p>
          {/* Si algún día se añade analítica: banner de consentimiento previo
              obligatorio y actualización de esta página (checklist del draft). */}
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
