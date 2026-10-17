import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { ROBOTS } from "@/content/site-data";

export default function RobotsPage() {
  const t = useTranslations("robots");
  const locale = useLocale() as "es" | "en";

  const featured = ROBOTS.find((r) => r.featured) ?? ROBOTS[0];
  const others = ROBOTS.filter((r) => r.id !== featured.id);

  return (
    <section className="placa robots" data-placa="tinta" style={{ paddingTop: 0 }}>
      <div className="regla" role="presentation" />
      <div className="wrap">
        <header className="encabezado">
          <p className="creditos">
            <span>{t("robotsHeading")}</span>
            <span>{t("title")}</span>
          </p>
          <h1 className="t1">{t("title")}</h1>
          <p className="prosa" style={{ opacity: 0.85 }}>
            {t("intro")}
          </p>
        </header>

        <div className="robots__escritorio">
          <article className="ventana robots__principal">
            <div className="ventana__barra">
              <span>
                {featured.id.toUpperCase()}_{featured.season.split(" ")[0].replace(/[–-].*/, "")}.exe
              </span>
              <span className="ventana__botones" aria-hidden="true">
                <i>_</i>
                <i>□</i>
                <i>×</i>
              </span>
            </div>
            <div className="ventana__cuerpo">
              {featured.photoSlug && (
                <div className="duo">
                  <Image
                    src={`/images/${featured.photoSlug}.webp`}
                    alt={`Robot ${featured.name}, temporada ${featured.season}`}
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    style={{ position: "absolute", inset: 0, objectFit: "cover" }}
                  />
                </div>
              )}
              <div>
                <h2 className="robots__titulo-ventana">{featured.name}</h2>
                {featured.description && (
                  <p style={{ marginTop: "10px", fontSize: ".92rem", opacity: 0.9 }}>
                    {featured.description[locale]}
                  </p>
                )}
                <dl className="ficha">
                  <div>
                    <dt>{t("season")}</dt>
                    <dd>{featured.season}</dd>
                  </div>
                  {featured.award && (
                    <div>
                      <dt>{t("award")}</dt>
                      <dd>{featured.award[locale]}</dd>
                    </div>
                  )}
                  {featured.specs?.map((spec) => (
                    <div key={spec.label.es}>
                      <dt>{spec.label[locale]}</dt>
                      <dd>{spec.value[locale]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </article>

          <div className="robots__columna">
            {others.map((robot) => (
              <article className="ventana" key={robot.id}>
                <div className="ventana__barra">
                  <span>
                    {robot.id.toUpperCase().replace(/-/g, "_")}.exe
                  </span>
                  <span className="ventana__botones" aria-hidden="true">
                    <i>_</i>
                    <i>□</i>
                    <i>×</i>
                  </span>
                </div>
                <div className="ventana__cuerpo">
                  {robot.photoSlug && (
                    <div
                      className="duo"
                      style={{ aspectRatio: "16/9", marginBottom: "12px", position: "relative" }}
                    >
                      <Image
                        src={`/images/${robot.photoSlug}.webp`}
                        alt={`Robot de la temporada ${robot.season}`}
                        fill
                        sizes="(max-width: 900px) 100vw, 30vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <h3 className="robots__titulo-ventana">{robot.name}</h3>
                  {robot.award ? (
                    <p style={{ margin: 0 }}>{robot.award[locale]}</p>
                  ) : (
                    <p className="pendiente" style={{ margin: 0 }}>
                      {t("robotPending")}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="dato" style={{ marginTop: "40px", opacity: 0.7 }}>
          {t("projectsPending")}
        </p>
      </div>
    </section>
  );
}
