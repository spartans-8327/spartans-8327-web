import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TeamPage() {
  const t = useTranslations("team");

  return (
    <section className="placa historia" data-placa="papel">
      <span className="fantasma" aria-hidden="true">
        2012
      </span>
      <div className="wrap">
        <header className="encabezado">
          <p className="creditos">
            <span>{t("title")}</span>
            <span>2012 — hoy</span>
          </p>
          <h1 className="t1">{t("title")}</h1>
        </header>

        <div className="historia__grid">
          <figure className="historia__foto">
            <span className="sello">Scorpions → Spartans</span>
            <div className="duo duo--papel" style={{ position: "relative" }}>
              <Image
                src="/images/hero-equipo-mural.webp"
                alt="Equipo Spartans 8327 frente a un mural en Metepec"
                fill
                sizes="(max-width: 860px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <figcaption>
              <span className="dato">2025 · Decode</span>
              <span className="dato">Archivo del equipo</span>
            </figcaption>
          </figure>

          <div className="historia__texto prosa">
            <p className="capitular">{t("originStory")}</p>
            <p>{t("milestoneStory")}</p>
            <blockquote className="cita">{t("philosophy")}</blockquote>
            <p>{t("philosophyBody")}</p>
          </div>
        </div>

        <div className="actos">
          <div className="acto">
            <span className="dato">{t("acts.founding.date")}</span>
            <b className="t2">{t("acts.founding.title")}</b>
            <span>{t("acts.founding.body")}</span>
          </div>
          <div className="acto">
            <span className="dato">{t("acts.rename.date")}</span>
            <b className="t2">{t("acts.rename.title")}</b>
            <span>{t("acts.rename.body")}</span>
          </div>
          <div className="acto">
            <span className="dato">{t("acts.current.date")}</span>
            <b className="t2">{t("acts.current.title")}</b>
            <span>{t("acts.current.body")}</span>
          </div>
        </div>

        <p className="prosa" style={{ marginTop: "clamp(40px, 6vw, 72px)", textAlign: "center" }}>
          {t("closing")}
        </p>
      </div>
    </section>
  );
}
