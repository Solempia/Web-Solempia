import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple touch icon — misma marca simplificada de 4 nodos que el favicon,
 * a sangre completa (iOS aplica su propia máscara de esquinas).
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <svg
          width="180"
          height="180"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="100" fill="#1F4034" />
          <g
            stroke="#F2F4EC"
            strokeOpacity="0.5"
            strokeWidth="3.5"
            strokeLinecap="round"
          >
            <line x1="30" y1="38" x2="68" y2="30" />
            <line x1="68" y1="30" x2="73" y2="68" />
            <line x1="73" y1="68" x2="34" y2="70" />
            <line x1="34" y1="70" x2="30" y2="38" />
            <line x1="30" y1="38" x2="73" y2="68" />
          </g>
          <circle
            cx="68"
            cy="30"
            r="9.5"
            fill="none"
            stroke="#F2F4EC"
            strokeWidth="4.5"
          />
          <circle cx="30" cy="38" r="9.5" fill="#F2F4EC" />
          <circle cx="73" cy="68" r="9.5" fill="#F2F4EC" />
          <circle cx="34" cy="70" r="9.5" fill="#F2F4EC" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
