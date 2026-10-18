"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import {
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TIKTOK_HANDLE,
  TIKTOK_URL,
  YOUTUBE_HANDLE,
  YOUTUBE_URL,
} from "@/content/site-data";

type SubmitState = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot anti-spam, invisible para personas. El nombre es deliberadamente
  // "raro" (no "website"/"url"/"company") porque Chrome autocompleta esos
  // nombres agresivamente incluso con autocomplete="off", lo que causaba que
  // envíos reales de personas se descartaran en silencio como si fueran spam.
  const [hpToken, setHpToken] = useState("");
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, hpToken }),
      });
      if (!res.ok) throw new Error("request_failed");
      setState("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setState("error");
    }
  }

  return (
    <section className="placa contacto" data-placa="tinta">
      <div className="wrap">
        <header className="encabezado">
          <p className="creditos">
            <span>{t("title")}</span>
            <span>{t("intro")}</span>
          </p>
        </header>

        <div className="contacto__grid">
          <div className="contacto__izq">
            <h1 className="t-colosal">{t("title")}</h1>
            <ul className="boletos" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <ContactChannel label={t("emailLabel")} value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} priority />
              <ContactChannel label="Instagram" value={`@${INSTAGRAM_HANDLE}`} href={INSTAGRAM_URL} />
              <ContactChannel label="TikTok" value={`@${TIKTOK_HANDLE}`} href={TIKTOK_URL} />
              <ContactChannel label="YouTube" value={`@${YOUTUBE_HANDLE}`} href={YOUTUBE_URL} icon={<YoutubeIcon />} />
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="contacto__form">
            <div aria-hidden="true" style={{ position: "absolute", height: 0, width: 0, overflow: "hidden", opacity: 0 }}>
              <label htmlFor="spartans-hp">No llenar este campo</label>
              <input
                id="spartans-hp"
                name="spartans-hp-2x9f"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={hpToken}
                onChange={(e) => setHpToken(e.target.value)}
              />
            </div>

            <div className="campo">
              <label htmlFor="name">{t("formName")}</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="campo">
              <label htmlFor="email">{t("formEmail")}</label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                spellCheck={false}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="campo">
              <label htmlFor="message">{t("formMessage")}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                autoComplete="off"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="btns">
              <button className="btn" type="submit" disabled={state === "sending"}>
                {state === "sending" ? t("formSending") : t("formSubmit")}
              </button>
            </div>

            <p className="form-estado" role="status" aria-live="polite">
              {state === "sent" && t("formSent")}
              {state === "error" && t("formError")}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactChannel({
  label,
  value,
  href,
  priority,
  pending,
  icon,
}: {
  label: string;
  value?: string;
  href?: string;
  priority?: boolean;
  pending?: boolean;
  icon?: ReactNode;
}) {
  const t = useTranslations("contact");

  if (pending || !href || !value) {
    return (
      <li className="boleto">
        <span className="creditos">{label}</span>
        <span className="pendiente dato">{t("pendingChannel")}</span>
      </li>
    );
  }

  const isExternal = href.startsWith("http");
  return (
    <li className="boleto">
      <span className="creditos">
        {label}
        {priority && <span style={{ color: "var(--rojo-vivo)", marginLeft: "8px" }}>{t("priorityBadge")}</span>}
      </span>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="boleto__valor"
        style={icon ? { display: "inline-flex", alignItems: "center", gap: "8px" } : undefined}
      >
        {icon}
        {value}
      </a>
    </li>
  );
}

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9.3 15 12l-5 2.7V9.3Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
