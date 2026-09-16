import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  // Title de la home según la tabla SEO del draft (supera los 60 caracteres
  // de su propia guía; se usa tal cual por ser la fuente de verdad).
  title: "Solempia — Automatización y uso seguro de IA para pymes industriales",
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      // globals.css aplica scroll-behavior: smooth para los anchors (#metodo,
      // #formacion). Sin este atributo, Next lo aplica también al cambiar de
      // ruta y la navegación se siente lenta.
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className="min-h-screen bg-bg text-ink antialiased"
        suppressHydrationWarning
      >
        <NavBar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
