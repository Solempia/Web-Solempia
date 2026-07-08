"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { hero, escalera } from "@/data/home";

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

export default function HeroHome() {
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
          <motion.div variants={item} className="mb-7 inline-flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent animate-status-breathe"
            />
            <Eyebrow withDash={false}>{hero.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-sans font-medium text-4xl md:text-6xl lg:text-[4.25rem] leading-[1.05] -tracking-tight mb-8 max-w-4xl"
          >
            {hero.title}
            <br />
            <span className="text-accent">{hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-muted leading-relaxed max-w-xl mb-10"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Button href={hero.primary.href} variant="primary">
              {hero.primary.label} →
            </Button>
            <Button href={hero.secondary.href} variant="ghost">
              {hero.secondary.label}
            </Button>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 font-mono text-xs text-muted leading-relaxed max-w-xl"
          >
            {hero.context}
          </motion.p>
        </div>

        {/* Lateral: la escalera en 4 pasos */}
        <motion.div variants={item} className="lg:pb-1">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted mb-6">
            Cómo trabajamos — 04 pasos
          </div>
          <ul className="flex flex-col">
            {escalera.pasos.map((paso) => (
              <li key={paso.code} className="border-t border-line py-5">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-muted">
                    {paso.code}
                  </span>
                  <div className="flex-1">
                    <div className="font-sans font-medium text-lg -tracking-tight text-ink leading-snug">
                      {paso.title}
                    </div>
                    {paso.tag && (
                      <div className="mt-1.5 font-mono text-xs text-accent">
                        {paso.tag}_
                      </div>
                    )}
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
