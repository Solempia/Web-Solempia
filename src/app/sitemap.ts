import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/servicios/",
  "/sectores/",
  "/sectores/automocion/",
  "/radar/",
  "/metodo/",
  "/nosotros/",
  "/faq/",
  "/contacto/",
  // /aviso-legal, /privacidad y /cookies quedan fuera a propósito:
  // placeholders con noindex hasta que la gestoría valide el texto legal.
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));
}
