import ContactLink from "@/components/ui/ContactLink";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { site, navLinks, legalLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-20">
        {/* Marca */}
        <div className="flex flex-col gap-4">
          <Logo size="sm" />
          <p className="font-mono text-xs text-muted tracking-wide max-w-xs leading-relaxed">
            {site.tagline}
          </p>
        </div>

        {/* Navegación */}
        <nav aria-label="Footer">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-4">
            Índice
          </div>
          <ul className="flex flex-col gap-2.5 text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-muted hover:text-ink transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <ContactLink
                href="/contacto"
                className="text-muted hover:text-ink transition-colors"
              >
                Contacto
              </ContactLink>
            </li>
          </ul>
        </nav>

        {/* Contacto y redes */}
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-4">
            Escríbenos
          </div>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-muted hover:text-ink transition-colors"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-ink transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-ink transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-mono text-xs text-muted tracking-wide">
            © {site.copyrightYear} {site.brand}. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap items-center gap-5">
            {legalLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-mono text-xs text-muted tracking-wide hover:text-ink transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
