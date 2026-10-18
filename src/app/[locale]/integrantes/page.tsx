import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { TEAM_AREAS, TEAM_MEMBERS } from "@/content/site-data";
import ISpartansVideo from "@/components/ISpartansVideo";

export default function MembersPage() {
  const t = useTranslations("members");
  const locale = useLocale() as "es" | "en";
  const captain = TEAM_MEMBERS.find((m) => m.captain);
  const missingPhotoCount = TEAM_MEMBERS.filter((m) => !m.photoSlug).length;

  return (
    <section className="placa reparto" data-placa="tinta">
      <div className="wrap">
        <header className="encabezado">
          <p className="creditos">
            <span>{t("title")}</span>
            <span>{TEAM_MEMBERS.length}</span>
          </p>
        </header>

        <ISpartansVideo />

        <div className="reparto__top">
          {captain?.photoSlug && (
            <figure className="reparto__capitan" style={{ margin: 0 }}>
              <span className="sello">{t("captain")}</span>
              <div className="duo" style={{ position: "relative" }}>
                <Image
                  src={`/images/${captain.photoSlug}.webp`}
                  alt={`${captain.name} — ${t("captain")}`}
                  fill
                  sizes="(max-width: 860px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <figcaption className="reparto__capitan-nombre">{captain.name}</figcaption>
            </figure>
          )}
          <div className="reparto__intro">
            <h1 className="t1">{t("title")}</h1>
            <p className="prosa">{t("intro")}</p>
            {missingPhotoCount > 0 && (
              <p className="dato">
                {t("pendingNotice", { count: missingPhotoCount, total: TEAM_MEMBERS.length })}
              </p>
            )}
          </div>
        </div>

        {TEAM_AREAS.map((area) => {
          const members = TEAM_MEMBERS.filter((m) => m.areaId === area.id);
          if (members.length === 0) return null;
          return (
            <div className="area" key={area.id}>
              <div className="area__info">
                <span className="dato">
                  {members.length} {members.length === 1 ? t("memberSingular") : t("memberPlural")}
                </span>
                <h2 className="t3">{area.name[locale]}</h2>
                <p>{area.description[locale]}</p>
              </div>
              <div className="area__personas">
                {members.map((member) =>
                  member.photoSlug ? (
                    <figure className="persona" key={member.id}>
                      <div className="duo" style={{ position: "relative" }}>
                        <Image
                          src={`/images/${member.photoSlug}.webp`}
                          alt={member.name}
                          fill
                          sizes="(max-width: 700px) 50vw, 180px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <figcaption>
                        <span className="persona__nombre">{member.name}</span>
                        <span className="dato">
                          {area.name[locale]}
                          {member.captain ? ` · ${t("captain")}` : ""}
                        </span>
                      </figcaption>
                    </figure>
                  ) : (
                    <figure className="persona persona--pendiente" key={member.id}>
                      <div className="marco">
                        <span className="casco" aria-hidden="true" />
                        <span className="dato">{t("photoPending")}</span>
                      </div>
                      <figcaption>
                        <span className="persona__nombre">{member.name}</span>
                        <span className="dato">{area.name[locale]}</span>
                      </figcaption>
                    </figure>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
