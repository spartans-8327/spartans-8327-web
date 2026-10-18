"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

/**
 * Carga diferida real: el <video> (23 MB) no se monta hasta que la persona
 * hace clic en reproducir, así que no se descarga ni un byte en la carga de
 * la página. El clic cuenta como gesto del usuario, por lo que el navegador
 * permite reproducción con sonido sin ser autoplay no solicitado.
 */
export default function ISpartansVideo() {
  const t = useTranslations("members");
  const [playing, setPlaying] = useState(false);

  return (
    <div className="reparto__video">
      <div className="reparto__video-marco">
        {playing ? (
          <video
            className="reparto__video-reproductor"
            src="/videos/ispartans.mp4"
            poster="/images/ispartans-portada.webp"
            controls
            autoPlay
            playsInline
            preload="auto"
          >
            {t("videoUnsupported")}
          </video>
        ) : (
          <button
            type="button"
            className="reparto__video-disparador"
            onClick={() => setPlaying(true)}
            aria-label={t("videoPlayLabel", { title: t("videoTitle") })}
          >
            <span className="duo reparto__video-duo">
              <Image
                src="/images/ispartans-portada.webp"
                alt=""
                fill
                sizes="(max-width: 860px) 100vw, 58vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </span>
            <span className="reparto__video-boton" aria-hidden="true">
              ▶
            </span>
            <span className="dato reparto__video-duracion">{t("videoDuration")}</span>
          </button>
        )}
      </div>

      <div className="reparto__video-texto">
        <span className="sello">{t("videoBadge")}</span>
        <h2 className="t2">{t("videoTitle")}</h2>
        <p className="prosa">{t("videoDescription")}</p>
      </div>
    </div>
  );
}
