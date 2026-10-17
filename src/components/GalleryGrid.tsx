"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import type { GalleryImage } from "@/content/site-data";

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const t = useTranslations("gallery");
  const locale = useLocale() as "es" | "en";

  const seasons = useMemo(() => {
    const seen: string[] = [];
    for (const img of images) {
      if (!seen.includes(img.season)) seen.push(img.season);
    }
    return seen;
  }, [images]);

  const [activeSeason, setActiveSeason] = useState<string>("todas");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const visibleImages = useMemo(
    () => (activeSeason === "todas" ? images : images.filter((img) => img.season === activeSeason)),
    [images, activeSeason]
  );

  function openLightbox(index: number, triggerEl: HTMLButtonElement) {
    triggerRef.current = triggerEl;
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
    triggerRef.current?.focus();
  }

  return (
    <div>
      <div className="galeria__filtros" role="group" aria-label={t("seasonsLabel")}>
        <button
          type="button"
          aria-pressed={activeSeason === "todas"}
          onClick={() => setActiveSeason("todas")}
        >
          {t("allSeasons")}
        </button>
        {seasons.map((season) => (
          <button
            key={season}
            type="button"
            aria-pressed={season === activeSeason}
            onClick={() => setActiveSeason(season)}
          >
            {season}
          </button>
        ))}
      </div>

      <div className="galeria__muro">
        {visibleImages.map((img) => {
          const globalIndex = images.indexOf(img);
          return (
            <figure className="foto bn" key={img.slug}>
              <button
                type="button"
                onClick={(e) => openLightbox(globalIndex, e.currentTarget)}
                style={{ display: "block", width: "100%", border: 0, padding: 0, background: "none" }}
              >
                <Image
                  src={`/images/${img.slug}.webp`}
                  alt={img.alt[locale]}
                  width={1400}
                  height={1000}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                />
              </button>
              <figcaption>{img.season}</figcaption>
            </figure>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          locale={locale}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}

function Lightbox({
  images,
  index,
  locale,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number;
  locale: "es" | "en";
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const t = useTranslations("gallery");
  const dialogRef = useRef<HTMLDivElement>(null);
  const img = images[index];

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [index, images.length, onClose, onNavigate]);

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(20, 16, 14, .94)",
        padding: "16px",
      }}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={img.alt[locale]}
        tabIndex={-1}
        style={{
          position: "relative",
          display: "flex",
          maxHeight: "100%",
          maxWidth: "1100px",
          flexDirection: "column",
          outline: "none",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ position: "relative", maxHeight: "80vh", width: "100%" }}>
          <Image
            src={`/images/${img.slug}.webp`}
            alt={img.alt[locale]}
            width={1600}
            height={1200}
            sizes="100vw"
            style={{ maxHeight: "80vh", width: "auto", height: "auto", objectFit: "contain" }}
            priority
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={t("closeLightbox")}
            className="sello"
            style={{ position: "absolute", top: "10px", right: "10px", background: "var(--papel)", color: "var(--tinta)" }}
          >
            ✕
          </button>
        </div>
        <p className="dato" style={{ marginTop: "12px", color: "var(--papel)" }}>
          {img.season} — {img.alt[locale]}
        </p>

        <div className="btns" style={{ marginTop: "16px", justifyContent: "space-between" }}>
          <button
            type="button"
            className="btn btn--sec"
            onClick={() => onNavigate((index - 1 + images.length) % images.length)}
            aria-label={t("previousImage")}
            style={{ color: "var(--papel)" }}
          >
            ←
          </button>
          <button
            type="button"
            className="btn btn--sec"
            onClick={() => onNavigate((index + 1) % images.length)}
            aria-label={t("nextImage")}
            style={{ color: "var(--papel)" }}
          >
            →
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
