import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/content/site-data";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string; hpToken?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  // Campo oculto que un visitante real nunca llena — si llega con contenido,
  // se asume que es un bot y no se envía el correo. Se registra en el log del
  // servidor (no solo "ok:true" silencioso) para poder diagnosticar si algún
  // envío real llega a activarlo por error (p. ej. autocompletado del navegador).
  if (body.hpToken) {
    console.warn("Formulario de contacto: honeypot activado, correo no enviado. Valor:", body.hpToken);
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada — el formulario de contacto no puede enviar correo.");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      // onboarding@resend.dev solo funciona sin verificar un dominio propio en
      // Resend, y solo entrega al correo con el que se creó la cuenta de Resend.
      // Verificar un dominio propio (p. ej. un subdominio de spartanscbtis203)
      // para enviar de forma confiable a CONTACT_EMAIL.
      from: "Spartans 8327 <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo mensaje de contacto — ${name}`,
      text: `De: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error enviando el formulario de contacto:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
