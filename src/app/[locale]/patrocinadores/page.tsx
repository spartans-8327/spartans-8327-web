import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SPONSOR_BOSCH } from "@/content/site-data";

export default function SponsorsPage() {
  const t = useTranslations("sponsors");

  return (
    <section className="placa patro" data-placa="papel">
      <div className="wrap">
        <header className="encabezado" style={{ justifyItems: "center", textAlign: "center" }}>
          <p className="creditos" style={{ width: "100%" }}>
            <span>{t("title")}</span>
          </p>
          <h1 className="t1">{t("title")}</h1>
        </header>

        <div className="patro__principal">
          {SPONSOR_BOSCH.logoAvailable && SPONSOR_BOSCH.logoSlug ? (
            <span
              className="logo-mask"
              style={{
                ["--logo" as string]: `url('/images/${SPONSOR_BOSCH.logoSlug}.webp')`,
                width: "min(320px, 70%)",
                aspectRatio: "732 / 211",
              }}
              role="img"
              aria-label={SPONSOR_BOSCH.name}
            />
          ) : (
            <p className="t2">{t("bosch.name")}</p>
          )}
          <span className="creditos">{t("bosch.status")}</span>
          <p className="prosa" style={{ margin: "0 auto" }}>
            {t("bosch.note")}
          </p>
        </div>

        <div className="patro__slots">
          <div className="patro__slot">
            <span className="dato">{t("slotPlaceholder")}</span>
          </div>
          <div className="patro__slot">
            <span className="dato">{t("slotPlaceholder")}</span>
          </div>
          <div className="patro__slot">
            <span className="dato">{t("slotPlaceholder")}</span>
          </div>
        </div>

        <p className="patro__nota">{t("disclaimer")}</p>
        <p style={{ textAlign: "center" }}>{t("cta")}</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="/contacto" className="btn">
            {t("ctaButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}
