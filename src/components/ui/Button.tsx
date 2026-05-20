import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: React.ReactNode;
  href: string;
}

const base =
  "inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-bg hover:bg-ink",
  ghost: "border border-line text-ink hover:border-ink/40 hover:bg-surface",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  // Rutas internas (/contacto, /caso) → next/link para nav SPA
  // Anchors (#caso) y URLs externas (https://...) → <a>
  const isInternalRoute = href.startsWith("/");

  if (isInternalRoute) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
