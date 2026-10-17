"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Product } from "@/content/site-data";
import { useCart } from "@/lib/cart-context";

export function useAddToCart(product: Product) {
  const t = useTranslations("store");
  const locale = useLocale() as "es" | "en";
  const { addItem } = useCart();
  const [size, setSize] = useState<string | null>(product.variants.sizes?.[0] ?? null);
  const [colorIndex, setColorIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const needsVariant = Boolean(product.variants.sizes?.length) && !size;
  const canAdd = product.available && !needsVariant;
  const color = product.colors[colorIndex];

  function handleAdd() {
    if (!canAdd) return;
    const parts = [
      size ? `${t("size")}: ${size}` : null,
      product.colors.length > 1 ? `${t("color")}: ${color.name}` : null,
    ].filter((p): p is string => Boolean(p));
    const variantLabel = parts.length > 0 ? parts.join(" · ") : null;
    const lineId = `${product.id}__${color.name}__${size ?? "default"}`;
    addItem({
      lineId,
      productId: product.id,
      name: product.name[locale],
      variantLabel,
      priceMXN: product.priceMXN,
      photoSlug: color.photos[0] ?? null,
    });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
  }

  return { size, setSize, colorIndex, setColorIndex, color, needsVariant, canAdd, justAdded, handleAdd };
}
