import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const dynamic = "force-static";
export const alt =
  "Solempia — Automatización y uso seguro de IA para pymes industriales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Paleta Malaquita (espejo de globals.css @theme; Satori no lee CSS vars)
const BG = "#EEF0E8";
const INK = "#141614";
const MUTED = "#6A7064";
const LINE = "#D6DACE";
const ACCENT = "#1F4034";

// Malla de 7 nodos — mismas coordenadas que src/components/ui/Logo.tsx
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
const NODES: [number, number][] = [
  [24, 34],
  [52, 22],
  [34, 62],
  [62, 54],
  [84, 68],
  [48, 82],
];

function Mark({ px }: { px: number }) {
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke={ACCENT}
        strokeOpacity={0.34}
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        {LINKS.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      <circle
        cx={78}
        cy={32}
        r={7.6}
        fill="none"
        stroke={ACCENT}
        strokeWidth={1.98}
      />
      {NODES.map(([cx, cy]) => (
        <circle key={`n${cx}-${cy}`} cx={cx} cy={cy} r={7.6} fill={ACCENT} />
      ))}
      {NODES.map(([cx, cy]) => (
        <circle
          key={`p${cx}-${cy}`}
          cx={cx - 2.58}
          cy={cy - 2.74}
          r={2.28}
          fill={BG}
          opacity={0.42}
        />
      ))}
    </svg>
  );
}

/**
 * Descarga en build el TTF de Google Fonts subseteado al texto usado
 * (receta documentada de next/og). El build ya requiere red para next/font.
 */
async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family,
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error(`No se pudo resolver la fuente ${family} ${weight}`);
  const res = await fetch(match[1]);
  if (!res.ok) throw new Error(`No se pudo descargar la fuente ${family} ${weight}`);
  return res.arrayBuffer();
}

export default async function OgImage() {
  const monoText = "(SE-001/) SOLEMPIA.COM · JAÉN · ANDALUCÍA";
  const [geistMedium, geistRegular, geistMono] = await Promise.all([
    loadGoogleFont("Geist", 500, "solempia"),
    loadGoogleFont("Geist", 400, site.tagline),
    loadGoogleFont("Geist Mono", 400, monoText),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: BG,
          padding: "64px 72px 56px",
          fontFamily: "Geist",
        }}
      >
        {/* Cabecera: símbolo + código de sección */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Mark px={132} />
          <div
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: 22,
              letterSpacing: "3.5px",
              color: ACCENT,
            }}
          >
            (SE-001/)
          </div>
        </div>

        <div style={{ display: "flex", flex: 1 }} />

        {/* Wordmark + punto malaquita */}
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 500,
              letterSpacing: "-2.6px",
              color: INK,
              lineHeight: 1,
            }}
          >
            solempia
          </div>
          <div
            style={{
              display: "flex",
              width: 20,
              height: 20,
              borderRadius: 9999,
              backgroundColor: ACCENT,
              marginLeft: 10,
              marginBottom: 8,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 36,
            color: MUTED,
            lineHeight: 1.35,
            maxWidth: 880,
          }}
        >
          {site.tagline}
        </div>

        {/* Pie: hairline + metadata mono */}
        <div
          style={{
            display: "flex",
            marginTop: 52,
            paddingTop: 26,
            borderTop: `1px solid ${LINE}`,
            justifyContent: "space-between",
            fontFamily: "Geist Mono",
            fontSize: 20,
            letterSpacing: "3px",
            color: MUTED,
          }}
        >
          <div style={{ display: "flex" }}>SOLEMPIA.COM</div>
          <div style={{ display: "flex" }}>JAÉN · ANDALUCÍA</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistMedium, weight: 500, style: "normal" },
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
        { name: "Geist Mono", data: geistMono, weight: 400, style: "normal" },
      ],
    },
  );
}
