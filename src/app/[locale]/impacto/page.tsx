import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ImpactPage() {
  const t = useTranslations("impact");

  return (
    <>
      <section className="placa impacto" data-placa="roja">
        <div className="impacto__foto duo">
          <Image
            src="/images/impacto-caseta-biobuzz.webp"
            alt="Caseta de Spartans 8327 con cartel de proyectos sociales"
            fill
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <div className="wrap impacto__contenido">
          <p className="creditos">
            <span>{t("title")}</span>
          </p>
          <h1 className="t1">{t("title")}</h1>
          <p className="prosa">{t("intro")}</p>
          <div className="btns">
            <Link href="/contacto" className="btn">
              {t("cta")}
            </Link>
          </div>
        </div>
      </section>

      <section className="placa" data-placa="papel" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "14px",
            }}
          >
            <div className="duo" style={{ position: "relative", aspectRatio: "4/3" }}>
              <Image
                src="/images/integrantes-ambiente-biobuzz.webp"
                alt="Integrantes del equipo en un evento de la temporada BioBuzz"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div className="duo" style={{ position: "relative", aspectRatio: "4/3" }}>
              <Image
                src="/images/decode-equipo-momento.webp"
                alt="Momento del equipo durante la temporada Decode"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
