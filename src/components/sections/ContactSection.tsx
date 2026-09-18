"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { CONTACT_CHANGE_EVENT, updateContactService } from "@/components/ui/ContactLink";
import { contactPages, contactServices, normalizePath, parseContactService, type ContactService } from "@/data/contacto";
import { site, type Cta } from "@/data/site";

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(CONTACT_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(CONTACT_CHANGE_EVENT, callback);
  };
}
const getSearch = () => window.location.search;
const getServerSearch = () => null;

export default function ContactSection({ sourcePath,
  initialService = contactPages[normalizePath(sourcePath)] ?? "orientacion",
  standalone = false, links = [],
}: { sourcePath: string; initialService?: ContactService; standalone?: boolean; links?: readonly Cta[] }) {
  const search = useSyncExternalStore(subscribe, getSearch, getServerSearch);
  const params = new URLSearchParams(search ?? "");
  const service = params.has("servicio") ? parseContactService(params.get("servicio")) : initialService;
  const content = contactServices[service];
  const Heading = standalone ? "h1" : "h2";

  return (
    <section id="contacto" aria-labelledby="contact-heading" className={`${standalone ? "pt-32 md:pt-40" : "border-t border-line pt-20 md:pt-28"} pb-24 md:pb-32 px-6`}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <Heading id="contact-heading" data-contact-heading tabIndex={-1} className="font-sans font-medium text-3xl md:text-4xl -tracking-tight leading-[1.15] text-ink focus:outline-none">{content.title}</Heading>
          <p id="contact-help" className="mt-5 text-base text-muted leading-relaxed">{content.help}</p>
        </div>
        <ContactForm key={sourcePath} service={service} onServiceChange={updateContactService} sourcePath={sourcePath} />
        <div className="mt-10 border-t border-line pt-6 text-center text-sm text-muted">
          <p>También puedes escribirnos a{" "}<a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">{site.email}</a>{" "}o por{" "}<a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-4">WhatsApp</a>.</p>
          {links.length > 0 && <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {links.map((link) => <li key={link.href}><Link href={link.href} className="text-ink underline underline-offset-4 hover:text-accent">{link.label}</Link></li>)}
          </ul>}
        </div>
      </div>
    </section>
  );
}
