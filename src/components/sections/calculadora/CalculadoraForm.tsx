"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Motion";
import {
  campos,
  resultado,
  RECUPERACION,
  SEMANAS_ANIO,
} from "@/data/calculadora";

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

interface CampoProps {
  id: string;
  label: string;
  hint: string;
  min: number;
  max: number;
  sufijo?: string;
  valor: number;
  onChange: (n: number) => void;
}

function Campo({ id, label, hint, min, max, sufijo, valor, onChange }: CampoProps) {
  return (
    <div className="border-b border-line py-6">
      <label
        htmlFor={id}
        className="block font-sans font-medium text-base text-ink leading-snug"
      >
        {label}
      </label>
      <p className="mt-1.5 text-sm text-muted leading-relaxed max-w-md">{hint}</p>
      <div className="mt-4 flex items-center gap-4">
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          value={valor}
          onChange={(e) => {
            const n = Number(e.target.value);
            // Un campo vacío devuelve NaN: lo tratamos como el mínimo para que
            // el resultado nunca muestre "NaN €".
            onChange(Number.isFinite(n) ? n : min);
          }}
          className="w-28 bg-surface border border-line rounded-none px-4 py-2.5 font-mono text-lg text-ink focus:outline-none focus:border-accent transition-colors"
        />
        {sufijo && (
          <span className="font-mono text-sm text-muted">{sufijo}</span>
        )}
      </div>
    </div>
  );
}

export default function CalculadoraForm() {
  const [personas, setPersonas] = useState<number>(campos.personas.defecto);
  const [horas, setHoras] = useState<number>(campos.horas.defecto);
  const [coste, setCoste] = useState<number>(campos.coste.defecto);

  // Acotamos a los rangos declarados para que un valor pegado a mano no
  // produzca cifras absurdas en pantalla.
  const clamp = (n: number, min: number, max: number) =>
    Math.min(Math.max(n || min, min), max);

  const p = clamp(personas, campos.personas.min, campos.personas.max);
  const h = clamp(horas, campos.horas.min, campos.horas.max);
  const c = clamp(coste, campos.coste.min, campos.coste.max);

  const anual = p * h * SEMANAS_ANIO * c;
  const recMin = anual * RECUPERACION.min;
  const recMax = anual * RECUPERACION.max;

  return (
    <div className="px-6 max-w-6xl mx-auto pb-32 md:pb-40">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
        <Reveal>
          <fieldset className="border-t border-line">
            <legend className="sr-only">Datos de tu empresa</legend>
            <Campo
              id="personas"
              {...campos.personas}
              valor={personas}
              onChange={setPersonas}
            />
            <Campo id="horas" {...campos.horas} valor={horas} onChange={setHoras} />
            <Campo id="coste" {...campos.coste} valor={coste} onChange={setCoste} />
          </fieldset>
        </Reveal>

        <Reveal delay={0.1} className="lg:sticky lg:top-28">
          <output
            htmlFor="personas horas coste"
            aria-live="polite"
            className="block border border-line bg-surface p-8 md:p-10"
          >
            <div className="font-sans font-medium text-5xl md:text-6xl -tracking-tight text-accent leading-none">
              {eur.format(anual)}
            </div>
            <div className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {resultado.etiquetaPrincipal}
            </div>

            <div className="mt-8 pt-8 border-t border-line">
              <div className="font-sans font-medium text-2xl md:text-3xl -tracking-tight text-ink">
                {eur.format(recMin)} – {eur.format(recMax)}
              </div>
              <div className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                {resultado.etiquetaRecuperable}
              </div>
            </div>

            <p className="mt-8 text-sm text-muted leading-relaxed">
              {resultado.supuestos}
            </p>

            <p className="mt-5 pt-5 border-t border-line flex items-start gap-3 font-mono text-xs text-ink leading-relaxed">
              <span
                aria-hidden="true"
                className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {resultado.aviso}
            </p>
          </output>
        </Reveal>
      </div>
    </div>
  );
}
