"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { navLinks, site } from "@/data/site";

/** Con trailingSlash el pathname puede llegar con "/" final; normalizar antes de comparar. */
function normalize(path: string) {
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const current = normalize(pathname ?? "/");
  const isActive = (href: string) =>
    current === href || current.startsWith(`${href}/`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-bg/85 backdrop-blur-sm border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          aria-label={site.brand}
          onClick={closeMenu}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          <Logo />
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className="nav-link relative text-sm text-muted hover:text-ink transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button
            href="/contacto/#contacto"
            onClick={closeMenu}
            variant="primary"
            className="px-4 py-2 text-sm"
          >
            Contacto
          </Button>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <span aria-hidden="true" className="flex flex-col gap-1.5 w-5">
              <span
                className={`h-px bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Panel móvil */}
      <div
        id="mobile-nav"
        className={`lg:hidden border-b border-line bg-bg ${open ? "" : "hidden"}`}
      >
        <ul className="px-6 py-4 flex flex-col">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="border-b border-line last:border-b-0">
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                onClick={closeMenu}
                className={`block py-4 text-sm transition-colors ${
                  isActive(href) ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
