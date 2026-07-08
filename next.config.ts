import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Rutas anidadas (/sectores/automocion) exportan como directorio + index.html,
  // la forma canónica de servirlas en GitHub Pages.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
