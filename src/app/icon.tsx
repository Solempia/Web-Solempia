import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Favicon — marca simplificada de 4 nodos.
 * El manual (SE-LOGO/) prohíbe la malla completa por debajo de 20px porque
 * se empasta; para tamaños mínimos se usa esta derivación: 4 nodos (uno en
 * anillo, la capa de IA) en knockout bone sobre malaquita.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <svg
          width="64"
          height="64"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="100" rx="22" fill="#1F4034" />
          <g
            stroke="#F2F4EC"
            strokeOpacity="0.5"
            strokeWidth="4"
            strokeLinecap="round"
          >
            <line x1="28" y1="36" x2="70" y2="28" />
            <line x1="70" y1="28" x2="76" y2="70" />
            <line x1="76" y1="70" x2="32" y2="72" />
            <line x1="32" y1="72" x2="28" y2="36" />
            <line x1="28" y1="36" x2="76" y2="70" />
          </g>
          <circle
            cx="70"
            cy="28"
            r="11"
            fill="none"
            stroke="#F2F4EC"
            strokeWidth="5.5"
          />
          <circle cx="28" cy="36" r="11" fill="#F2F4EC" />
          <circle cx="76" cy="70" r="11" fill="#F2F4EC" />
          <circle cx="32" cy="72" r="11" fill="#F2F4EC" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
