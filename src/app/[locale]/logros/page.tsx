import { useTranslations, useLocale } from "next-intl";
import { SEASONS, WORLDS_APPEARANCES, COMMUNITY_RECOGNITION } from "@/content/site-data";

export default function AchievementsPage() {
  const t = useTranslations("achievements");
  const locale = useLocale() as "es" | "en";
  const seasonsWithResults = SEASONS.filter((s) => s.achievements.length > 0);
  const gameForYear = (year: string) => SEASONS.find((s) => s.year === year)?.game ?? "";
  const recognitionDate = new Intl.DateTimeFormat(locale === "es" ? "es-MX" : "en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${COMMUNITY_RECOGNITION.date}-01T00:00:00Z`));

  return (
    <section className="placa logros" data-placa="roja">
      <div className="wrap">
        <header className="encabezado">
          <p className="creditos">
            <span>{t("title")}</span>
            <span>{t("intro")}</span>
          </p>
          <h1 className="t1">{t("title")}</h1>
        </header>

        <div className="logros__heroe">
          <div className="logros__rayos" aria-hidden="true" />
          <p className="logros__tres" aria-label={`${WORLDS_APPEARANCES.length}×`}>
            {WORLDS_APPEARANCES.length}
            <span>×</span>
          </p>
          <div className="logros__mundial">
            <h2 className="t2">{t("worldsIntro")}</h2>
            <div className="medallas">
              {WORLDS_APPEARANCES.map((w) => (
                <div className="medalla" key={w.year}>
                  <span className="creditos">{gameForYear(w.year)}</span>
                  <b>{w.year}</b>
                  <span className="dato">{w.location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="presea">
          <span className="sello">{recognitionDate}</span>
          <div>
            <b className="t3">{COMMUNITY_RECOGNITION.title[locale]}</b>
            <p style={{ margin: "4px 0 0" }}>
              {COMMUNITY_RECOGNITION.issuer[locale]} — {COMMUNITY_RECOGNITION.note[locale]}
            </p>
          </div>
        </div>

        <div className="resultados tabla-scroll">
          <table>
            <caption className="creditos">
              <span>{t("seasonResults")}</span>
            </caption>
            <tbody>
              {seasonsWithResults.map((season) => (
                <tr key={season.year}>
                  <th>
                    {season.year} · {season.game}
                  </th>
                  <td>
                    <ul>
                      {season.achievements.map((a) => (
                        <li key={a.es}>{a[locale]}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
