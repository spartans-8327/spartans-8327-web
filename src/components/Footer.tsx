import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  NAV_ROUTES,
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TIKTOK_HANDLE,
  TIKTOK_URL,
} from "@/content/site-data";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="placa pie" data-placa="roja">
      <div className="wrap pie__cuerpo">
        <div className="pie__escudo" role="img" aria-label="Escudo oficial de Spartans 8327" />

        <nav aria-label={tNav("menu")}>
          <h4>{t("siteMap")}</h4>
          <ul>
            {NAV_ROUTES.filter((r) => r.key !== "home").map((route) => (
              <li key={route.key}>
                <Link href={`/${route.slug}`}>{tNav(route.key)}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t("connect")}>
          <h4>{t("connect")}</h4>
          <ul>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                @{INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">
                @{TIKTOK_HANDLE}
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h4>{t("tagline")}</h4>
        </div>
      </div>

      <p className="pie__numero" aria-hidden="true">
        8327
      </p>

      <div className="wrap pie__legal dato">
        <span>{t("rights")}</span>
      </div>
    </footer>
  );
}
