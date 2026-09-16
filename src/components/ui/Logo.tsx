import { site } from "@/data/site";

interface LogoProps {
  size?: "sm" | "md";
  className?: string;
}

const sizes = {
  sm: { mark: 20, text: "text-sm" },
  md: { mark: 24, text: "text-base" },
};

/** Enlaces de la malla — pares de nodos tejidos por hairlines. */
const LINKS: [number, number, number, number][] = [
  [24, 34, 52, 22],
  [52, 22, 78, 32],
  [24, 34, 34, 62],
  [52, 22, 62, 54],
  [78, 32, 62, 54],
  [78, 32, 84, 68],
  [34, 62, 62, 54],
  [62, 54, 48, 82],
  [62, 54, 84, 68],
  [34, 62, 48, 82],
];

/** Nodos sólidos (el nodo-anillo se dibuja aparte). */
const NODES: [number, number][] = [
  [24, 34],
  [52, 22],
  [34, 62],
  [62, 54],
  [84, 68],
  [48, 82],
];

/**
 * Símbolo Malaquita — malla de siete nodos de igual tamaño tejidos por
 * hairlines (la arquitectura operativa hecha red). El nodo en anillo señala
 * la capa de IA: presente pero contenida. Cada nodo conserva la perla
 * (luz arriba-izquierda). Usa currentColor: hereda el acento del contenedor.
 */
function Mark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <g
        stroke="currentColor"
        strokeOpacity={0.34}
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        {LINKS.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>

      {/* Nodo-anillo: la capa de IA, contenida */}
      <circle cx={78} cy={32} r={7.6} fill="none" stroke="currentColor" strokeWidth={1.98} />

      {NODES.map(([cx, cy]) => (
        <circle key={`n${cx}-${cy}`} cx={cx} cy={cy} r={7.6} fill="currentColor" />
      ))}

      {/* Perla: luz arriba-izquierda en cada nodo sólido */}
      {NODES.map(([cx, cy]) => (
        <circle
          key={`p${cx}-${cy}`}
          cx={cx - 2.58}
          cy={cy - 2.74}
          r={2.28}
          fill="var(--color-bg)"
          opacity={0.42}
        />
      ))}
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
        className={`inline-flex items-baseline font-sans font-medium tracking-[-0.025em] text-ink ${text}`}
      >
        {site.brand}
        {/* Punto malaquita: cierra el wordmark como un punto de imprenta */}
        <span
          aria-hidden="true"
          className="ml-[0.06em] size-[0.2em] rounded-full bg-accent"
        />
      </span>
    </span>
  );
}
