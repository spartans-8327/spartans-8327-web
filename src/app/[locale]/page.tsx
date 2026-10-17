import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Guerrero from "@/components/Guerrero";
import { WORLDS_APPEARANCES, COMMUNITY_RECOGNITION } from "@/content/site-data";

function tituloConEpica(headline: string) {
  const lines = headline.split("\n");
  const last = lines[lines.length - 1];
  const words = last.split(" ");
  const epica = words.pop() ?? "";
  return (
    <>
      {lines.slice(0, -1).map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}
      {words.join(" ")} <em className="epica">{epica}</em>
    </>
  );
}

export default function HomePage() {
  const t = useTranslations("home");
  const locale = useLocale() as "es" | "en";

  return (
    <>
      {/* 01 · inicio */}
      <section className="placa inicio" data-placa="roja">
        <p className="fantasma" aria-hidden="true">
          8327
        </p>
        <p className="inicio__vertical" aria-hidden="true">
          FIRST TECH CHALLENGE
        </p>
        <div className="wrap">
          <div className="creditos">
            <span>{t("hero.eyebrowTeam")}</span>
            <span>{t("hero.eyebrowLocation")}</span>
          </div>

          <div className="inicio__grid">
            <div className="inicio__texto">
              <p className="inicio__kicker dato">FIRST Tech Challenge</p>
              <h1>{tituloConEpica(t("hero.headline"))}</h1>
              <p className="inicio__bajada">{t("hero.sub")}</p>
              <div className="btns">
                <Link href="/integrantes" className="btn">
                  {t("hero.ctaPrimary")}
                </Link>
                <Link href="/equipo" className="btn btn--sec">
                  {t("hero.ctaSecondary")}
                </Link>
              </div>
            </div>
            <div className="inicio__figura" aria-hidden="true">
              <Guerrero className="guerrero" />
            </div>
          </div>

          <div className="inicio__cartelera">
            <div className="inicio__mundiales">
              {WORLDS_APPEARANCES.map((w) => (
                <span key={w.year}>
                  {w.year}
                  <small>{w.location}</small>
                </span>
              ))}
            </div>
            <p className="dato" style={{ gridColumn: 3, opacity: 0.85, textAlign: "right" }}>
              {COMMUNITY_RECOGNITION.title[locale]}
              <br />
              {COMMUNITY_RECOGNITION.issuer[locale]}
            </p>
          </div>
        </div>
      </section>

      {/* El espíritu del equipo — cita */}
      <section className="placa" data-placa="papel">
        <div className="wrap" style={{ maxWidth: "840px" }}>
          <blockquote
            className="cita"
            style={{ margin: 0, borderLeft: "4px solid var(--acento)", paddingLeft: "1.5rem" }}
          >
            {t("purpose.quote")}
          </blockquote>
          <p className="creditos" style={{ marginTop: "1.75rem" }}>
            {t("purpose.attribution")}
          </p>
        </div>
      </section>

      {/* Qué es FIRST */}
      <section className="placa" data-placa="tinta">
        <div className="wrap">
          <div className="inicio-first">
            <div>
              <p className="creditos" style={{ borderBottom: "none" }}>
                FIRST
              </p>
              <h2 className="t2" style={{ marginTop: "14px" }}>
                {t("first.title")}
              </h2>
              <p className="prosa" style={{ marginTop: "18px" }}>
                {t("first.intro")}
              </p>
              <p className="prosa" style={{ marginTop: "18px", opacity: 0.85, fontSize: ".95rem" }}>
                {t("first.mission")}
              </p>
              <Link
                href="/linea-de-tiempo"
                className="btn btn--sec"
                style={{ marginTop: "24px" }}
              >
                {t("history.cta")}
              </Link>
            </div>

            <div className="ventana">
              <div className="ventana__barra">
                <span>FIRST.EXE</span>
                <div className="ventana__botones">
                  <i>_</i>
                  <i>□</i>
                  <i>×</i>
                </div>
              </div>
              <dl className="ficha ventana__cuerpo" style={{ fontSize: ".95rem" }}>
                {(["F", "I", "R", "S", "T"] as const).map((letter) => (
                  <div key={letter}>
                    <dt style={{ color: "var(--egeo)", fontWeight: 700 }}>{letter}</dt>
                    <dd>{t(`first.letters.${letter}`)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* El trabajo detrás del robot */}
      <section className="placa impacto" data-placa="roja">
        <div className="impacto__foto duo">
          <Image
            src="/images/robots-banco-pruebas.webp"
            alt="Integrante de Spartans 8327 ajustando un robot en un banco de pruebas"
            fill
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <div className="wrap impacto__contenido">
          <h2 className="t2">{t("work.title")}</h2>
          <p className="prosa">{t("work.body")}</p>
          <div className="btns">
            <Link href="/robots" className="btn btn--sec">
              {t("work.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Más que un equipo de robótica */}
      <section
        className="placa"
        data-placa="tinta"
        style={{ padding: 0, position: "relative" }}
      >
        <div className="duo" style={{ position: "absolute", inset: 0, background: "var(--tinta)" }}>
          <Image
            src="/images/impacto-caseta-biobuzz.webp"
            alt="Caseta de Spartans 8327 con cartel de proyectos sociales"
            fill
            sizes="100vw"
            loading="lazy"
            style={{ filter: "grayscale(1) contrast(1.15) sepia(.18)" }}
          />
        </div>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, var(--tinta) 0%, rgba(20,16,14,.78) 32%, rgba(20,16,14,.25) 62%, transparent 90%)",
          }}
        />
        <div className="wrap" style={{ position: "relative", paddingBlock: "var(--seccion-y)" }}>
          <h2 className="t2">{t("community.title")}</h2>
          <p className="prosa" style={{ marginTop: "14px", maxWidth: "58ch" }}>
            {t("community.body")}
          </p>
          <nav
            aria-label={t("community.title")}
            className="btns"
            style={{ marginTop: "32px", borderTop: "1px solid var(--linea)", paddingTop: "24px" }}
          >
            <Link href="/integrantes" className="btn btn--sec">
              {t("community.ctaMembers")}
            </Link>
            <Link href="/patrocinadores" className="btn btn--sec">
              {t("community.ctaSponsors")}
            </Link>
            <Link href="/tienda" className="btn btn--sec">
              {t("community.ctaStore")}
            </Link>
            <Link href="/contacto" className="btn btn--sec">
              {t("community.ctaContact")}
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}
