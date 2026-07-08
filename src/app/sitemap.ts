import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/servicios/",
  "/sectores/",
  "/sectores/automocion/",
  "/metodo/",
  "/nosotros/",
  "/faq/",
  "/contacto/",
  // /privacidad queda fuera a propósito: placeholder con noindex hasta
  // que la gestoría valide el texto legal.
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));
}
