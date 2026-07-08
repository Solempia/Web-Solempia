"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { sectorOptions, sizeOptions } from "@/data/contacto";

type Status = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  company: string;
  sector: string;
  size: string;
  process: string;
  email: string;
  phone: string;
  rgpd: boolean;
}

const initial: FormData = {
  name: "",
  company: "",
  sector: "",
  size: "",
  process: "",
  email: "",
  phone: "",
  rgpd: false,
};

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const update =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value;
      setData((d) => ({ ...d, [field]: value }));
    };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!site.n8nWebhookUrl) {
      setStatus("error");
      setErrorMsg(
        `Webhook no configurado. Escríbenos directamente a ${site.email}.`,
      );
      return;
    }

    setStatus("submitting");
    setErrorMsg(null);

    try {
      // Payload que recibe el nodo Webhook de n8n. Si cambian los campos,
      // reconfigurar el flujo n8n aguas abajo.
      const res = await fetch(site.n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          sector: data.sector,
          size: data.size,
          process: data.process,
          email: data.email,
          phone: data.phone,
          rgpdAccepted: data.rgpd,
          source: "solempia.com/contacto",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg(
        `No pudimos enviar el mensaje. Intenta de nuevo o escríbenos a ${site.email}.`,
      );
    }
  };

  if (status === "success") {
    return (
      <div className="border border-line bg-surface p-10 md:p-12">
        <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-5">
          Recibido
        </div>
        <p className="font-sans font-medium text-2xl md:text-3xl -tracking-tight leading-snug text-ink">
          Te respondemos en uno o dos días laborables con una propuesta de
          llamada de 20 minutos. Sin compromiso.
        </p>
      </div>
    );
  }

  const labelCls =
    "block font-mono text-xs uppercase tracking-[0.16em] text-muted mb-2";
  const inputCls =
    "w-full bg-surface border border-line px-4 py-3 text-base text-ink placeholder:text-muted/60 focus:outline-none focus:border-ink/40 transition-colors";
  const disabled = status === "submitting";

  return (
    <form onSubmit={submit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className={labelCls}>
          Nombre
        </label>
        <input
          id="name"
          type="text"
          required
          value={data.name}
          onChange={update("name")}
          className={inputCls}
          autoComplete="name"
          disabled={disabled}
        />
      </div>

      <div>
        <label htmlFor="company" className={labelCls}>
          Empresa
        </label>
        <input
          id="company"
          type="text"
          required
          value={data.company}
          onChange={update("company")}
          className={inputCls}
          autoComplete="organization"
          disabled={disabled}
        />
      </div>

      <div>
        <label htmlFor="sector" className={labelCls}>
          Sector
        </label>
        <select
          id="sector"
          required
          value={data.sector}
          onChange={update("sector")}
          className={`${inputCls} ${data.sector === "" ? "text-muted/60" : ""}`}
          disabled={disabled}
        >
          <option value="" disabled>
            Selecciona tu sector
          </option>
          {sectorOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <fieldset disabled={disabled}>
        <legend className={labelCls}>Tamaño del equipo</legend>
        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-1">
          {sizeOptions.map((size) => (
            <label
              key={size}
              className="inline-flex items-center gap-2 text-sm text-ink cursor-pointer"
            >
              <input
                type="radio"
                name="size"
                value={size}
                required
                checked={data.size === size}
                onChange={update("size")}
                className="accent-accent"
              />
              {size}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="process" className={labelCls}>
          ¿Cuál es el proceso que más horas os come?{" "}
          <span className="text-muted/60 normal-case">(opcional)</span>
        </label>
        <textarea
          id="process"
          rows={5}
          value={data.process}
          onChange={update("process")}
          className={`${inputCls} resize-y min-h-[120px]`}
          disabled={disabled}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={data.email}
          onChange={update("email")}
          className={inputCls}
          autoComplete="email"
          disabled={disabled}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelCls}>
          Teléfono <span className="text-muted/60 normal-case">(opcional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={data.phone}
          onChange={update("phone")}
          className={inputCls}
          autoComplete="tel"
          disabled={disabled}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          required
          checked={data.rgpd}
          onChange={update("rgpd")}
          className="accent-accent mt-1"
          disabled={disabled}
        />
        <span>
          He leído y acepto la{" "}
          <Link
            href="/privacidad"
            className="text-ink underline underline-offset-2 hover:text-accent transition-colors"
          >
            política de privacidad
          </Link>
          .
        </span>
      </label>

      {status === "error" && errorMsg && (
        <p
          role="alert"
          className="font-mono text-xs text-ink border-l-2 border-accent pl-3 py-1"
        >
          {errorMsg}
        </p>
      )}

      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium bg-accent text-bg hover:bg-ink transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          {status === "submitting" ? "Enviando…" : "Enviar →"}
        </button>
        <p className="font-mono text-xs text-muted">
          Respondemos en 1–2 días laborables
        </p>
      </div>
    </form>
  );
}
