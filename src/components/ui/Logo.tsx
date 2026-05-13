import { site } from "@/data/site";

interface LogoProps {
  size?: "sm" | "md";
  className?: string;
}

const sizes = {
  sm: { mark: 18, text: "text-sm" },
  md: { mark: 22, text: "text-base" },
};

/**
 * Símbolo placeholder: dos cuadrados concéntricos en diálogo.
 * Reemplazar por el SVG definitivo cuando esté disponible.
 */
function Mark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect x="8" y="8" width="8" height="8" rx="1" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const { mark, text } = sizes[size];
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-accent ${className}`}
    >
      <Mark size={mark} />
      <span
        className={`font-sans font-medium tracking-tight text-ink ${text}`}
      >
        {site.brand}
      </span>
    </span>
  );
}
