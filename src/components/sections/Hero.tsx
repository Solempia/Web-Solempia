"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { pillars } from "@/data/pillars";

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
        className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 lg:gap-20 items-end"
      >
        {/* Main */}
        <div>
          <motion.div variants={item} className="mb-7">
            <Eyebrow>(SE-001/) automatización · ia · gobernanza</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-sans font-medium text-5xl md:text-6xl lg:text-7xl leading-[1.05] -tracking-tight mb-8 max-w-4xl"
          >
            Empezamos con la verdad,
            <br />
            <span className="text-accent">no con el hype.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-muted leading-relaxed max-w-xl mb-10"
          >
            Construimos lo que tiene sentido — y te decimos qué no debería
            construirse. Sistemas de automatización con IA para equipos que
            quieren resultados verificables, no demos.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Button
              href={site.formUrl}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Empieza una conversación →
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

        {/* Lateral: tres verbos */}
        <motion.div variants={item} className="lg:pb-1">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-6">
            Método — 03 verbos
          </div>
          <ul className="flex flex-col">
            {pillars.map((p) => (
              <li
                key={p.code}
                className="border-t border-line py-5"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-muted">{p.code}</span>
                  <div className="flex-1">
                    <div className="font-sans font-medium text-2xl -tracking-tight text-ink leading-none">
                      {p.verb}.
                    </div>
                    <div className="mt-1.5 font-mono text-xs text-muted">
                      {p.slug}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
