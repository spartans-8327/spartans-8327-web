"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useCart } from "@/lib/cart-context";
import { WHATSAPP_NUMBER } from "@/content/site-data";
import { buildWhatsappOrder } from "@/lib/whatsapp";

export default function CartPanel() {
  const t = useTranslations("cart");
  const locale = useLocale() as "es" | "en";
  const { items, updateQuantity, removeItem, clear, confirmedTotal, hasPendingPriceItems, isHydrated } =
    useCart();
  const [confirmingClear, setConfirmingClear] = useState(false);

  if (!isHydrated) {
    return <h3>{t("title")}</h3>;
  }

  if (items.length === 0) {
    return (
      <>
        <h3>{t("title")}</h3>
        <p className="recibo__vacio">{t("empty")}</p>
        <Link href="/tienda" className="btn btn--sec" style={{ width: "100%", justifyContent: "center", marginTop: "14px" }}>
          {t("exploreStore")}
        </Link>
      </>
    );
  }

  const order = buildWhatsappOrder(items, locale);

  function handleClearClick() {
    if (confirmingClear) {
      clear();
      setConfirmingClear(false);
    } else {
      setConfirmingClear(true);
      window.setTimeout(() => setConfirmingClear(false), 4000);
    }
  }

  return (
    <>
      <h3>{t("title")}</h3>
      <p style={{ margin: 0, textAlign: "center" }} className="dato">
        Spartans 8327 · CBTIS 203
      </p>
      <hr className="recibo__linea" />

      <ul>
        {items.map((item) => (
          <li key={item.lineId} style={{ display: "flex", gap: "10px" }}>
            <div
              style={{
                position: "relative",
                flex: "none",
                width: "44px",
                height: "44px",
                background: "var(--papel-2)",
                border: "1px solid var(--linea-fuerte)",
              }}
            >
              {item.photoSlug ? (
                <Image
                  src={`/images/${item.photoSlug}.webp`}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="44px"
                  style={{ objectFit: "contain", padding: "4px" }}
                />
              ) : (
                <span
                  className="casco"
                  aria-hidden="true"
                  style={{ position: "absolute", inset: 0, margin: "auto", width: "55%", opacity: 0.35 }}
                />
              )}
            </div>
            <div style={{ display: "grid", gap: "4px", flex: "1", minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                <span>
                  {item.quantity} × {item.name}
                </span>
                <span style={{ flex: "none" }}>
                  {item.priceMXN != null
                    ? `$${item.priceMXN * item.quantity} MXN`
                    : locale === "es"
                      ? "Precio por confirmar"
                      : "Price to be confirmed"}
                </span>
              </div>
              {item.variantLabel && <small>{item.variantLabel}</small>}
              <small style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                  aria-label={
                    locale === "es" ? `Disminuir cantidad de ${item.name}` : `Decrease quantity of ${item.name}`
                  }
                  style={{ border: "1px solid var(--linea-fuerte)", background: "none", padding: "2px 8px" }}
                >
                  −
                </button>
                <span aria-live="polite">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                  aria-label={
                    locale === "es" ? `Aumentar cantidad de ${item.name}` : `Increase quantity of ${item.name}`
                  }
                  style={{ border: "1px solid var(--linea-fuerte)", background: "none", padding: "2px 8px" }}
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => removeItem(item.lineId)}
                  style={{ background: "none", border: 0, textDecoration: "underline", padding: 0 }}
                >
                  {t("remove")}
                </button>
              </small>
            </div>
          </li>
        ))}
      </ul>

      <hr className="recibo__linea" />
      <div className="recibo__total">
        <span>{t("total")}</span>
        <span>${confirmedTotal} MXN</span>
      </div>
      {hasPendingPriceItems && (
        <p className="dato" style={{ color: "var(--rojo)", marginTop: "6px" }}>
          {t("pendingItems")}
        </p>
      )}

      <p className="dato" style={{ marginTop: "14px", opacity: 0.8 }}>
        {t("reviewNotice")}
      </p>

      {WHATSAPP_NUMBER && order.url ? (
        <a href={order.url} target="_blank" rel="noopener noreferrer" className="btn">
          {t("continueToWhatsapp")}
        </a>
      ) : (
        <>
          <button type="button" disabled aria-disabled="true" className="btn" style={{ opacity: 0.5, cursor: "not-allowed" }}>
            {t("continueToWhatsapp")}
          </button>
          <p className="dato" style={{ color: "var(--rojo)", marginTop: "6px" }}>
            {t("whatsappPendingNumber")}
          </p>
        </>
      )}

      <button type="button" onClick={handleClearClick} className="btn btn--sec" style={{ marginTop: "10px" }}>
        {confirmingClear
          ? locale === "es"
            ? "¿Vaciar? Pulsa de nuevo para confirmar"
            : "Clear? Press again to confirm"
          : t("clear")}
      </button>
    </>
  );
}
