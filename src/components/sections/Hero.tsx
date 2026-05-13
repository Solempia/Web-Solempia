"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { metrics } from "@/data/metrics";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-20 items-end"
      >
        {/* Main */}
        <div>
          <motion.div variants={item} className="mb-7">
            <Eyebrow>{site.tagline}</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-sans font-medium text-5xl md:text-6xl lg:text-7xl leading-[1.05] -tracking-tight mb-7 max-w-4xl"
          >
            Tu negocio en{" "}
            <span className="text-accent">modo automático.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-muted leading-relaxed max-w-xl mb-10"
          >
            {site.description}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Button
              href={site.formUrl}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cuéntanos qué necesitas →
            </Button>
            <Button
              href={waLink}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </Button>
          </motion.div>
        </div>

        {/* Métricas */}
        <motion.div variants={item} className="lg:pb-2">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-6">
            En números
          </div>
          <ul className="flex flex-col">
            {metrics.map((m) => (
              <li
                key={m.label}
                className="border-t border-line py-5 flex items-baseline gap-4"
              >
                <span className="font-sans font-medium text-4xl -tracking-tight text-ink leading-none">
                  {m.value}
                </span>
                <span className="text-sm text-muted leading-snug">
                  {m.label}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
