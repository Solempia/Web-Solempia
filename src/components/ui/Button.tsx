import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: React.ReactNode;
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
  ...rest
}: ButtonProps) {
  return (
    <a {...rest} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
