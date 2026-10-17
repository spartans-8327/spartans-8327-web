import type { CartItem } from "./cart-context";
import { WHATSAPP_NUMBER } from "@/content/site-data";

/**
 * Construye el texto del pedido y, si hay un número de WhatsApp confirmado,
 * la URL wa.me correspondiente. Mientras WHATSAPP_NUMBER sea null, url es null
 * y la interfaz debe deshabilitar el envío (ver cart/CartSummary).
 */
export function buildWhatsappOrder(items: CartItem[], locale: "es" | "en") {
  const lines: string[] = [];
  const header =
    locale === "es"
      ? "Hola, me gustaría solicitar lo siguiente a Spartans 8327:"
      : "Hi, I'd like to request the following from Spartans 8327:";
  lines.push(header, "");

  let confirmedTotal = 0;
  let hasPending = false;

  for (const item of items) {
    const variant = item.variantLabel ? ` (${item.variantLabel})` : "";
    if (item.priceMXN != null) {
      const subtotal = item.priceMXN * item.quantity;
      confirmedTotal += subtotal;
      lines.push(
        `• ${item.name}${variant} x${item.quantity} — $${item.priceMXN} MXN c/u = $${subtotal} MXN`
      );
    } else {
      hasPending = true;
      lines.push(
        `• ${item.name}${variant} x${item.quantity} — ${
          locale === "es" ? "precio por confirmar" : "price to be confirmed"
        }`
      );
    }
  }

  lines.push("");
  lines.push(
    locale === "es"
      ? `Total de artículos con precio confirmado: $${confirmedTotal} MXN`
      : `Total for items with confirmed price: $${confirmedTotal} MXN`
  );
  if (hasPending) {
    lines.push(
      locale === "es"
        ? "Algunos artículos tienen precio por confirmar y no están incluidos en ese total."
        : "Some items have a price pending confirmation and are not included in that total."
    );
  }
  lines.push("");
  lines.push(
    locale === "es"
      ? "Este es un resumen de mi pedido, no una compra confirmada. Quedo atento(a) a que el equipo confirme disponibilidad, forma de pago y entrega."
      : "This is a summary of my order, not a confirmed purchase. I'll wait for the team to confirm availability, payment, and delivery."
  );

  const text = lines.join("\n");
  const url = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    : null;

  return { text, url, confirmedTotal, hasPending };
}
