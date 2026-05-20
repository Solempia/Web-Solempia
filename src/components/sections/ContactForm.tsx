"use client";

import { useState } from "react";
import { site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initial: FormData = { name: "", email: "", company: "", message: "" };

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const update =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData((d) => ({ ...d, [field]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!site.n8nWebhookUrl) {
      setStatus("error");
      setErrorMsg(
        "Webhook no configurado. Escríbenos directamente a hola@solempia.com.",
      );
      return;
    }

    setStatus("submitting");
    setErrorMsg(null);

    try {
      const res = await fetch(site.n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "solempia.com/contacto",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg(
        "No pudimos enviar el mensaje. Intenta de nuevo o escríbenos a hola@solempia.com.",
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
          Te respondemos en menos de 24 horas con una primera lectura — sin
          compromiso, sin pitch.
        </p>
      </div>
    );
  }

  const labelCls =
    "block font-mono text-xs uppercase tracking-[0.16em] text-muted mb-2";
  const inputCls =
    "w-full bg-surface border border-line px-4 py-3 text-base text-ink placeholder:text-muted/60 focus:outline-none focus:border-ink/40 transition-colors";

  return (
    <form onSubmit={submit} className="flex flex-col gap-6" noValidate>
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
          disabled={status === "submitting"}
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
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="company" className={labelCls}>
          Empresa <span className="text-muted/60 normal-case">(opcional)</span>
        </label>
        <input
          id="company"
          type="text"
          value={data.company}
          onChange={update("company")}
          className={inputCls}
          autoComplete="organization"
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Cuéntanos qué proceso te está costando tiempo
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={data.message}
          onChange={update("message")}
          className={`${inputCls} resize-y min-h-[140px]`}
          disabled={status === "submitting"}
        />
      </div>

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
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium bg-accent text-bg hover:bg-ink transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          {status === "submitting" ? "Enviando…" : "Enviar →"}
        </button>
        <p className="font-mono text-xs text-muted">
          Respondemos en {"<"} 24h
        </p>
      </div>
    </form>
  );
}
