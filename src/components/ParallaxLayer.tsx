"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Desplaza su contenido ligeramente más lento que el scroll de la página —
 * la "cámara" sigue al casco mientras el resto de la escena se mueve a su
 * propio ritmo. Se apaga por completo con prefers-reduced-motion (no solo se
 * frena): el contenido nunca depende de esto para verse bien, es un extra.
 */
export default function ParallaxLayer({
  children,
  strength = 0.12,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let ticking = false;

    function update() {
      ticking = false;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter;
      const offset = distanceFromCenter * -strength;
      node.style.transform = `translateY(${offset}px)`;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
