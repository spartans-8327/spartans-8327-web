"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import type { ColorOption, Product } from "@/content/site-data";

function ColorGallery({
  color,
  isMockup,
  photoMismatch,
}: {
  color: ColorOption;
  isMockup: boolean;
  photoMismatch: boolean;
}) {
  const t = useTranslations("store");
  const [photoIndex, setPhotoIndex] = useState(0);
  const photo = color.photos[photoIndex];

  return (
    <>
      {/* Sin clase .duo a propósito: esa clase aplica un filtro duotono
          pensado para fotos de equipo, no para estas fotos de producto —
          aquí el color real importa, así que la imagen va sin filtro. */}
      <div
        style={{
          position: "relative",
          aspectRatio: "1",
          background: "var(--papel-2)",
          border: "2px solid var(--tinta)",
        }}
      >
        {photo ? (
          <Image
            src={`/images/${photo}.webp`}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 640px) 448px, 100vw"
            style={{ objectFit: "contain", padding: "24px" }}
          />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
            <span className="casco" aria-hidden="true" style={{ width: "30%", opacity: 0.3 }} />
          </div>
        )}
        {isMockup && photo && <span className="sello" style={{ position: "absolute", top: "12px", left: "12px" }}>{t("mockupBadge")}</span>}
        {photoMismatch && (
          <span
            className="dato"
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              right: "10px",
              background: "var(--papel)",
              color: "var(--rojo)",
              padding: "6px 8px",
              lineHeight: 1.3,
            }}
          >
            {t("photoColorMismatch")}
          </span>
        )}
      </div>

      {color.photos.length > 1 && (
        <div style={{ display: "flex", gap: "8px", padding: "14px", borderBottom: "1.5px solid var(--linea)" }}>
          {color.photos.map((photo, i) => (
            <button
              key={photo}
              type="button"
              onClick={() => setPhotoIndex(i)}
              aria-label={`${t("viewProduct")} ${i + 1}`}
              aria-pressed={i === photoIndex}
              style={{
                position: "relative",
                height: "56px",
                width: "56px",
                border: `1.5px solid ${i === photoIndex ? "var(--rojo)" : "var(--linea-fuerte)"}`,
                background: "var(--papel-2)",
                padding: 0,
              }}
            >
              <Image src={`/images/${photo}.webp`} alt="" fill sizes="56px" style={{ objectFit: "contain", padding: "4px" }} />
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default function ProductDrawer({
  product,
  colorIndex,
  setColorIndex,
  size,
  setSize,
  needsVariant,
  canAdd,
  justAdded,
  handleAdd,
  onClose,
}: {
  product: Product;
  colorIndex: number;
  setColorIndex: (i: number) => void;
  size: string | null;
  setSize: (s: string) => void;
  needsVariant: boolean;
  canAdd: boolean;
  justAdded: boolean;
  handleAdd: () => void;
  onClose: () => void;
}) {
  const t = useTranslations("store");
  const locale = useLocale() as "es" | "en";
  const panelRef = useRef<HTMLDivElement>(null);
  const color = product.colors[colorIndex];
  const photoMismatch =
    product.colors.length > 1 &&
    product.colors.every((c) => c.photos.join("|") === product.colors[0].photos.join("|"));

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      style={{ position: "fixed", inset: 0, zIndex: 300, display: "flex", justifyContent: "flex-end", background: "rgba(20,16,14,.75)" }}
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={product.name[locale]}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          maxWidth: "440px",
          flexDirection: "column",
          overflowY: "auto",
          background: "var(--papel)",
          color: "var(--tinta)",
          outline: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1.5px solid var(--linea-fuerte)",
            padding: "16px 20px",
          }}
        >
          <h2 className="t3" style={{ margin: 0 }}>
            {product.name[locale]}
          </h2>
          <button type="button" onClick={onClose} aria-label={t("closeDrawer")} className="btn btn--sec" style={{ padding: "8px 12px" }}>
            ✕
          </button>
        </div>

        <ColorGallery key={colorIndex} color={color} isMockup={product.isMockup} photoMismatch={photoMismatch} />

        <div style={{ display: "flex", flex: 1, flexDirection: "column", padding: "20px" }}>
          <p className="producto__precio" style={{ fontSize: "1.1rem" }}>
            {product.priceMXN != null ? `$${product.priceMXN} MXN` : t("pricePending")}
          </p>

          {product.colors.length > 1 ? (
            <div className="opciones" data-grupo="color" role="group" aria-label={t("color")} style={{ marginTop: "14px" }}>
              {product.colors.map((c, i) => (
                <button key={c.name} type="button" onClick={() => setColorIndex(i)} aria-pressed={i === colorIndex}>
                  {c.name}
                </button>
              ))}
            </div>
          ) : (
            <span className="dato" style={{ marginTop: "14px" }}>
              {t("color")}: {color.name}
            </span>
          )}

          {product.available && product.variants.sizes && (
            <div className="opciones" data-grupo="talla" role="group" aria-label={t("size")} style={{ marginTop: "14px" }}>
              {product.variants.sizes.map((s) => (
                <button key={s} type="button" onClick={() => setSize(s)} aria-pressed={size === s}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <button className="btn" type="button" onClick={handleAdd} disabled={!canAdd} style={{ marginTop: "22px" }}>
            {!product.available
              ? t("unavailable")
              : needsVariant
                ? t("selectVariant")
                : justAdded
                  ? "✓"
                  : t("addToCart")}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
