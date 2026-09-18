"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";
import { contactPages, normalizePath } from "@/data/contacto";

export const CONTACT_CHANGE_EVENT = "solempia:contact-change";
export function updateContactService(service: string) {
  const url = new URL(window.location.href);
  url.searchParams.set("servicio", service);
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  window.dispatchEvent(new Event(CONTACT_CHANGE_EVENT));
}

/** Contact CTAs stay on the current commercial page and preserve the draft. */
export default function ContactLink({ href, onClick, ...props }:
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const pathname = normalizePath(usePathname() ?? "/");
  const hasContact = Object.hasOwn(contactPages, pathname);
  const requested = new URL(href, "https://solempia.com").searchParams.get("servicio");
  const localHref = requested === null ? "#contacto" : `?servicio=${encodeURIComponent(requested)}#contacto`;
  const resolvedHref = hasContact ? localHref : `/contacto/${localHref}`;

  return <Link {...props} href={resolvedHref} onClick={(event) => {
    onClick?.(event);
    if (event.defaultPrevented || !hasContact || event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      (props.target && props.target !== "_self")) return;
    const section = document.getElementById("contacto");
    if (!section) return;
    event.preventDefault();
    const url = new URL(window.location.href);
    if (requested !== null) url.searchParams.set("servicio", requested);
    url.hash = "contacto";
    window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new Event(CONTACT_CHANGE_EVENT));
    section.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    section.querySelector<HTMLElement>("[data-contact-heading]")?.focus({ preventScroll: true });
  }} />;
}
