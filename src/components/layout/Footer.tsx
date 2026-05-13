import Logo from "@/components/ui/Logo";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <Logo size="sm" />

        <ul className="flex flex-wrap items-center gap-7 text-sm text-muted">
          <li>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              className="hover:text-ink transition-colors"
            >
              {site.email}
            </a>
          </li>
        </ul>

        <p className="font-mono text-xs text-muted tracking-wide">
          © {site.copyrightYear} {site.brand}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
