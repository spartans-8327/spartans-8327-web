"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { NAV_ROUTES } from "@/content/site-data";
import { useCart } from "@/lib/cart-context";

const CHAPTER: Record<string, string> = {
  home: "01",
  team: "02",
  timeline: "03",
  members: "04",
  robots: "05",
  achievements: "06",
  portfolios: "07",
  gallery: "08",
  impact: "09",
  sponsors: "10",
  store: "11",
  contact: "12",
};

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const { itemCount, isHydrated } = useCart();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const isActive = (slug: string) => {
    const normalized = pathname === "" ? "/" : pathname;
    if (slug === "") return normalized === "/";
    return normalized === `/${slug}` || normalized.startsWith(`/${slug}/`);
  };

  // Cierra el menú móvil con Escape, al pulsar fuera, o al redimensionar a
  // escritorio — y devuelve el foco al botón que lo abrió.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtnRef.current?.focus();
      }
    }
    function onPointerDown(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onResize() {
      if (window.innerWidth > 1240) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`nav${open ? " abierto" : ""}`} ref={navRef}>
      <div className="wrap nav__credito creditos">
        <span>Spartans 8327 · CBTIS 203</span>
        <span>FIRST Tech Challenge</span>
      </div>
      <div className="wrap nav__barra">
        <div className="nav__instituciones">
          <Image src="/images/logo-dgeti-photoroom.webp" alt="DGETI" width={72} height={72} />
          <span className="nav__instituciones-sep" aria-hidden="true" />
          <Image
            src="/images/escudo-cbtis203-transparente.png"
            alt="Escudo oficial CBTIS 203"
            width={72}
            height={72}
          />
        </div>

        <Link href="/" className="nav__marca" aria-label="Spartans 8327 · CBTIS 203 — inicio">
          <span className="casco" aria-hidden="true" />
          <span>
            <b>8327</b> Spartans
          </span>
        </Link>

        <nav aria-label={t("menu")} id="mobile-nav">
          <ul className="nav__links">
            {NAV_ROUTES.map((route) => (
              <li key={route.key}>
                <Link
                  href={route.slug ? `/${route.slug}` : "/"}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(route.slug) ? "page" : undefined}
                >
                  <i>{CHAPTER[route.key]}</i>
                  {t(route.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__acciones">
          <div className="idioma">
            {routing.locales.map((loc) => (
              <Link
                key={loc}
                href={pathname || "/"}
                locale={loc}
                aria-current={loc === locale ? "true" : undefined}
              >
                {loc}
              </Link>
            ))}
          </div>

          <Link
            href="/tienda"
            className="carrito-btn"
            aria-label={`${t("cart")}${isHydrated && itemCount > 0 ? ` (${itemCount})` : ""}`}
          >
            <span className="carrito-btn__txt">{t("cart")}</span>
            {isHydrated && itemCount > 0 && <b>{itemCount}</b>}
          </Link>

          <button
            ref={menuBtnRef}
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t("closeMenu") : t("openMenu")}
          </button>
        </div>
      </div>
    </header>
  );
}
