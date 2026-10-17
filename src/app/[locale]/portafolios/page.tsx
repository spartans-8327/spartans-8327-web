"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { PORTFOLIOS, type Portfolio } from "@/content/site-data";

export default function PortfoliosPage() {
  const t = useTranslations("portfolios");

  const seasons: { season: string; items: Portfolio[] }[] = [];
  for (const item of PORTFOLIOS) {
    const group = seasons.find((s) => s.season === item.season);
    if (group) group.items.push(item);
    else seasons.push({ season: item.season, items: [item] });
  }

  return (
    <section className="placa portafolios" data-placa="tinta">
      <div className="wrap">
        <header className="encabezado">
          <p className="creditos">
            <span>{t("title")}</span>
            <span>{PORTFOLIOS.length}</span>
          </p>
          <h1 className="t1">{t("title")}</h1>
          <p className="prosa" style={{ opacity: 0.85 }}>
            {t("intro")}
          </p>
        </header>

        {seasons.map(({ season, items }) => (
          <div className="portafolios__temporada" key={season}>
            <div className="portafolios__cabecera">
              <h2 className="t3">{season}</h2>
              <span className="dato">{items[0].game}</span>
            </div>
            <div className="portafolios__lista">
              {items.map((portfolio) => (
                <PortfolioCard key={portfolio.id} portfolio={portfolio} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PortfolioCard({ portfolio }: { portfolio: Portfolio }) {
  const t = useTranslations("portfolios");
  const locale = useLocale() as "es" | "en";
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const src = `/portafolios/${portfolio.fileSlug}.pdf`;
  const label = portfolio.stage ? portfolio.stage[locale] : portfolio.game;
  const available = portfolio.availableOnline !== false;

  return (
    <article className="ventana portafolio">
      <div className="ventana__barra">
        <span>{portfolio.fileSlug.toUpperCase().replace(/-/g, "_")}.pdf</span>
        <span className="ventana__botones" aria-hidden="true">
          <i>_</i>
          <i>□</i>
          <i>×</i>
        </span>
      </div>
      <div className="ventana__cuerpo">
        <h3 className="robots__titulo-ventana" style={{ margin: 0 }}>
          {label}
        </h3>
        {available ? (
          <div className="btns">
            <button type="button" className="btn btn--sec" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
              {open ? t("hide") : t("view")}
            </button>
            <a href={src} target="_blank" rel="noopener noreferrer" className="btn btn--sec">
              {t("openNewTab")}
            </a>
          </div>
        ) : (
          <p className="pendiente dato" style={{ margin: 0 }}>
            {t("notAvailableOnline")}
          </p>
        )}
        {available && open && (
          <div className="portafolio__visor">
            {!loaded && (
              <div className="portafolio__cargando dato">
                <span>{t("loading")}</span>
                <span style={{ opacity: 0.7 }}>{t("loadingNote")}</span>
              </div>
            )}
            <iframe
              src={src}
              title={`${portfolio.game} — ${label}`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              style={{ visibility: loaded ? "visible" : "hidden" }}
            />
          </div>
        )}
      </div>
    </article>
  );
}
