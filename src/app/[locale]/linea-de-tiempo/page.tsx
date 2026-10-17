import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { SEASONS, WORLDS_APPEARANCES } from "@/content/site-data";

export default function TimelinePage() {
  const t = useTranslations("timeline");
  const locale = useLocale() as "es" | "en";
  const worldsYears = new Set(WORLDS_APPEARANCES.map((w) => w.year));
  const currentYear = SEASONS[SEASONS.length - 1].year;

  return (
    <section className="placa tiempo" data-placa="papel">
      <div className="wrap">
        <header className="encabezado">
          <p className="creditos">
            <span>{t("title")}</span>
            <span>{SEASONS.length} temporadas</span>
          </p>
          <h1 className="t1">{t("title")}</h1>
          <p className="prosa" style={{ opacity: 0.85 }}>
            {t("intro")}
          </p>
        </header>

        <nav className="tiempo__indice" aria-label={t("indexLabel")}>
          {SEASONS.map((s) => (
            <a key={s.year} href={`#t-${s.year}`} data-mundial={worldsYears.has(s.year)}>
              {s.year}
            </a>
          ))}
        </nav>

        <div className="cronologia">
          {SEASONS.map((season) => {
            const isWorlds = worldsYears.has(season.year);
            const isCurrent = season.year === currentYear;

            if (season.photoSlug) {
              return (
                <article
                  id={`t-${season.year}`}
                  key={season.year}
                  className={`hito${isWorlds ? " hito--mundial" : ""}`}
                >
                  <div className="hito__foto">
                    <Image
                      src={`/images/${season.photoSlug}.webp`}
                      alt={`${season.game} — Spartans 8327, ${season.year}`}
                      fill
                      sizes="(max-width: 760px) 100vw, 50vw"
                    />
                  </div>
                  <div className="hito__texto">
                    <p className="hito__anio">{season.year}</p>
                    <span className="hito__juego">
                      {season.game}
                      {isCurrent ? ` · ${t("currentSeason")}` : ""}
                    </span>
                    <p className="hito__historia">{season.story[locale]}</p>
                    {season.reflection && (
                      <blockquote className="hito__cita">“{season.reflection[locale]}”</blockquote>
                    )}
                    {season.worldsQualification && (
                      <span className="hito__mundial">
                        {t("worldsLabel")} — {season.worldsQualification}
                      </span>
                    )}
                  </div>
                </article>
              );
            }

            return (
              <div
                id={`t-${season.year}`}
                key={season.year}
                className={`cronica-fila${isWorlds ? " cronica-fila--mundial" : ""}`}
              >
                <p className="cronica-fila__anio">{season.year}</p>
                <div>
                  <span className="cronica-fila__juego">
                    {season.game}
                    {isCurrent ? ` · ${t("currentSeason")}` : ""}
                  </span>
                  <p>{season.story[locale]}</p>
                  {season.reflection && (
                    <p style={{ marginTop: "8px", fontStyle: "italic" }}>“{season.reflection[locale]}”</p>
                  )}
                  {season.worldsQualification && (
                    <p style={{ marginTop: "8px" }} className="dato">
                      {t("worldsLabel")} — {season.worldsQualification}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="tiempo__ayuda" style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
          <span className="dato">{t("worldsHint")}</span>
        </div>
      </div>
    </section>
  );
}
