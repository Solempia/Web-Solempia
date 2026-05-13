"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { navLinks, site } from "@/data/site";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-sm border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          aria-label={site.brand}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          <Logo />
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <Button href="#contacto" variant="primary" className="px-5 py-2 text-sm">
          Empezar
        </Button>
      </nav>
    </header>
  );
}
