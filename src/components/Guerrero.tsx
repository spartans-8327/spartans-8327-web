import { readFileSync } from "fs";
import { join } from "path";

let cached: string | null = null;

function loadSvg() {
  if (cached) return cached;
  cached = readFileSync(join(process.cwd(), "public/poster/guerrero.svg"), "utf8");
  return cached;
}

/**
 * Figura del guerrero espartano del Inicio — ilustración original a dos
 * tintas (grabado/serigrafía), generada para este rediseño. No es una
 * fotografía ni un recurso oficial del equipo: es un motivo gráfico nuevo,
 * a diferencia del escudo y el casco oficiales que sí son reales.
 */
export default function Guerrero({ className }: { className?: string }) {
  return (
    <div
      className={className}
      // El SVG es un asset local propio del proyecto (no contenido de
      // usuario), se inserta en línea para poder controlar sus colores con
      // las variables CSS --g-tinta / --g-rojo / --g-vivo.
      dangerouslySetInnerHTML={{ __html: loadSvg() }}
    />
  );
}
