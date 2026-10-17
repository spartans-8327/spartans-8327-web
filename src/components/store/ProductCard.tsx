"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import type { Product } from "@/content/site-data";
import { useAddToCart } from "@/lib/use-add-to-cart";
import ProductDrawer from "./ProductDrawer";

export default function ProductCard({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  const t = useTranslations("store");
  const locale = useLocale() as "es" | "en";
  const {
    size,
    setSize,
    colorIndex,
    setColorIndex,
    color,
    needsVariant,
    canAdd,
    justAdded,
    handleAdd,
  } = useAddToCart(product);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const photoMismatch =
    product.colors.length > 1 &&
    product.colors.every((c) => c.photos.join("|") === product.colors[0].photos.join("|"));

  return (
    <article className={`producto${featured ? " producto--destacado" : ""}`}>
      <div className="producto__img">
        {product.isMockup && <span className="sello">{t("mockupBadge")}</span>}
        {photoMismatch && (
          <span
            className="dato"
            style={{
              position: "absolute",
              bottom: "8px",
              left: "8px",
              right: "8px",
              zIndex: 2,
              pointerEvents: "none",
              background: "var(--papel)",
              color: "var(--rojo)",
              padding: "4px 6px",
              lineHeight: 1.3,
            }}
          >
            {t("photoColorMismatch")}
          </span>
        )}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setDrawerOpen(true)}
          aria-label={`${t("viewProduct")}: ${product.name[locale]}`}
        >
          {color.photos[0] ? (
            <Image
              src={`/images/${color.photos[0]}.webp`}
              alt=""
              aria-hidden="true"
              fill
              sizes={featured ? "(max-width: 1080px) 100vw, 33vw" : "(max-width: 1080px) 50vw, 20vw"}
            />
          ) : (
            <span className="dato" style={{ display: "block", padding: "2rem", textAlign: "center" }}>
              {product.name[locale]}
            </span>
          )}
        </button>
      </div>

      <div className="producto__info">
        <div className="producto__fila">
          <h3 className="producto__nombre">{product.name[locale]}</h3>
          <span className="producto__precio">
            {product.priceMXN != null ? `$${product.priceMXN} MXN` : t("pricePending")}
          </span>
        </div>

        {!product.available && <p className="pendiente dato">{t("soldOut")}</p>}

        {product.colors.length > 1 ? (
          <div className="opciones" data-grupo="color" role="group" aria-label={t("color")}>
            {product.colors.map((c, i) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setColorIndex(i)}
                aria-pressed={i === colorIndex}
              >
                {c.name}
              </button>
            ))}
          </div>
        ) : (
          <span className="dato">
            {t("color")}: {color.name}
          </span>
        )}

        {product.available && product.variants.sizes && (
          <div className="opciones" data-grupo="talla" role="group" aria-label={t("size")}>
            {product.variants.sizes.map((s) => (
              <button key={s} type="button" onClick={() => setSize(s)} aria-pressed={size === s}>
                {s}
              </button>
            ))}
          </div>
        )}

        <button className="btn" type="button" onClick={handleAdd} disabled={!canAdd}>
          {!product.available
            ? t("unavailable")
            : needsVariant
              ? t("selectVariant")
              : justAdded
                ? "✓"
                : t("addToCart")}
        </button>
      </div>

      {drawerOpen && (
        <ProductDrawer
          product={product}
          colorIndex={colorIndex}
          setColorIndex={setColorIndex}
          size={size}
          setSize={setSize}
          needsVariant={needsVariant}
          canAdd={canAdd}
          justAdded={justAdded}
          handleAdd={handleAdd}
          onClose={() => {
            setDrawerOpen(false);
            triggerRef.current?.focus();
          }}
        />
      )}
    </article>
  );
}
