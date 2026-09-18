"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { contactServices, exito, PLAZO_RESPUESTA, type ContactService } from "@/data/contacto";

type Status = "idle" | "submitting" | "success" | "error";
const initial = { name: "", company: "", process: "", email: "", phone: "", rgpd: false, website: "" };

export default function ContactForm({ service, onServiceChange, sourcePath }: {
  service: ContactService; onServiceChange: (service: ContactService) => void; sourcePath: string;
}) {
  const id = useId();
  const [data, setData] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const submitting = useRef(false);
  const update = (field: keyof typeof initial) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target instanceof HTMLInputElement && event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setData((previous) => ({ ...previous, [field]: value }));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting.current || status === "success") return;
    if (!data.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim()) || !data.process.trim() || !data.rgpd) {
      setStatus("error");
      setErrorMsg("Completa tu nombre, un email válido y el mensaje, y acepta la política de privacidad.");
      return;
    }
    // Keep the server-side honeypot too: client checks alone do not stop bots.
    if (data.website) { setStatus("success"); return; }
    if (!site.n8nWebhookUrl) {
      setStatus("error");
      setErrorMsg(`Escríbenos directamente a ${site.email}.`);
      return;
    }
    submitting.current = true;
    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch(site.n8nWebhookUrl, {
        method: "POST", headers: { "Content-Type": "application/json" }, signal: AbortSignal.timeout(15000),
        body: JSON.stringify({
          name: data.name.trim(), company: data.company.trim(), process: data.process.trim(),
          email: data.email.trim(), phone: data.phone.trim(), service, serviceLabel: contactServices[service].label,
          rgpdAccepted: data.rgpd, website: data.website, source: `${new URL(site.url).host}${sourcePath}`,
          timestamp: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg(`No pudimos enviar la consulta. Inténtalo de nuevo o escríbenos a ${site.email}.`);
    } finally { submitting.current = false; }
  };

  if (status === "success") return (
    <div role="status" className="border border-accent/20 rounded-xl bg-surface p-8 md:p-10 text-center">
      <p className="font-medium text-2xl text-accent">{exito.title}</p>
      <p className="mt-4 text-base text-muted leading-relaxed">{exito.body}</p>
    </div>
  );

  const labelCls = "block text-sm font-medium text-ink mb-2";
  const inputCls = "w-full min-w-0 rounded-lg bg-surface border border-line px-4 py-3 text-base text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors disabled:opacity-60";
  const disabled = status === "submitting";
  const fields = [
    { name: "name", label: "Nombre", type: "text", autoComplete: "name", required: true },
    { name: "company", label: "Empresa", type: "text", autoComplete: "organization", required: false },
    { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
    { name: "phone", label: "Teléfono", type: "tel", autoComplete: "tel", required: false },
  ] as const;

  return (
    <form onSubmit={submit} aria-label="Formulario de contacto" aria-describedby="contact-help" aria-busy={disabled} className="relative flex flex-col gap-5">
      <input type="text" name="website" aria-hidden="true" tabIndex={-1} autoComplete="off" value={data.website} onChange={update("website")} className="absolute left-[-9999px] h-px w-px opacity-0" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {fields.map((field) => <div key={field.name}>
          <label htmlFor={`${id}-${field.name}`} className={labelCls}>{field.label}{field.required ? " *" : <span className="font-normal text-muted"> (opcional)</span>}</label>
          <input id={`${id}-${field.name}`} name={field.name} type={field.type} required={field.required} value={data[field.name]} onChange={update(field.name)} className={inputCls} autoComplete={field.autoComplete} disabled={disabled} maxLength={field.name === "phone" ? 60 : field.name === "email" ? 254 : 120} />
        </div>)}
      </div>
      <div>
        <label htmlFor={`${id}-service`} className={labelCls}>Servicio</label>
        <select id={`${id}-service`} name="service" value={service} onChange={(event) => onServiceChange(event.target.value as ContactService)} className={inputCls} disabled={disabled}>
          {Object.entries(contactServices).map(([value, content]) => <option key={value} value={value}>{content.label}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor={`${id}-process`} className={labelCls}>Mensaje *</label>
        <textarea id={`${id}-process`} name="process" required rows={4} value={data.process} onChange={update("process")} placeholder={contactServices[service].placeholder} className={`${inputCls} resize-y min-h-[120px]`} disabled={disabled} maxLength={2000} />
      </div>
      <label className="flex items-start gap-3 rounded-lg border border-line p-4 text-sm text-muted leading-relaxed cursor-pointer">
        <input type="checkbox" name="rgpd" required checked={data.rgpd} onChange={update("rgpd")} className="accent-accent mt-1 h-4 w-4 shrink-0" disabled={disabled} />
        <span>He leído y acepto la <Link href="/privacidad/" target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-2 hover:text-accent">política de privacidad<span className="sr-only"> (se abre en otra pestaña)</span></Link>. *</span>
      </label>
      {status === "error" && <p role="alert" className="text-sm text-ink border-l-2 border-accent pl-3 py-1">{errorMsg}</p>}
      <div className="flex flex-col items-center gap-4 pt-1">
        <button type="submit" disabled={disabled} className="w-full sm:w-auto inline-flex justify-center rounded-full px-8 py-3 text-base font-medium bg-accent text-bg hover:bg-ink transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg">{disabled ? "Enviando…" : "Enviar consulta"}</button>
        <p aria-live="polite" className="text-sm text-muted text-center">{disabled ? "Enviando tu consulta…" : `Respondemos ${PLAZO_RESPUESTA}.`}</p>
      </div>
    </form>
  );
}
