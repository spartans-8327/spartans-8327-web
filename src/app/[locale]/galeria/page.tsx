import { useTranslations } from "next-intl";
import { GALLERY_IMAGES } from "@/content/site-data";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
  const t = useTranslations("gallery");

  return (
    <section className="placa galeria" data-placa="papel">
      <div className="wrap">
        <header className="encabezado">
          <p className="creditos">
            <span>{t("title")}</span>
            <span>{t("seasonsLabel")}</span>
          </p>
          <h1 className="t1">{t("title")}</h1>
          <p className="prosa" style={{ opacity: 0.85 }}>
            {t("intro")}
          </p>
        </header>

        <GalleryGrid images={GALLERY_IMAGES} />
      </div>
    </section>
  );
}
