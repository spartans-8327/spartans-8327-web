# Historia de Spartans 8327 — registro interno de verificación

**Este documento es solo para uso interno del equipo. No se publica en el sitio.**
Última actualización: 2026-10-11, tras la reescritura de `Historia SPARTANS
8327.docx` (modificado 2026-10-11 14:35) que reemplazó la transcripción de video
original con una narrativa en primera persona, con nombres de premio, ciudades de
clasificación y un reconocimiento institucional por temporada.

Fuentes: `Historia SPARTANS 8327.docx` (versión 2026-10-11) y `Linea del tiempo
SPARTANS 8327.pptx`, ambos en `SPARTANS 8327 WEB/`. Las citas del pptx se
atribuyeron a su temporada verificando la **agrupación de formas** del archivo
(`<p:grpSp>`), no la posición X/Y de cada texto — la posición por sí sola resultó
ambigua y habría llevado a atribuir al menos dos citas a la temporada equivocada.

## Puntos que la reescritura de 2026-10-11 resolvió

| Punto | Estado anterior | Estado actual |
|---|---|---|
| Nombre de temporada 2015 | "Rescue", sin verificar contra el nombre oficial de FIRST | Confirmado: la temporada es **Res-Q** (nombre oficial de FIRST 2015-2016), coincide con el isotipo oficial en `ISOTIPOS TEMPORADAS FIRST/` |
| Clasificaciones mundiales 2015/2016/2017 | Afirmadas solo por el testimonio del equipo, sin segunda fuente | El texto ahora nombra el premio y la ciudad exacta de cada una (Inspire Award → St. Louis 2015; Alianza Ganadora → St. Louis 2016; Inspire Award → Houston 2017). Sigue siendo la propia voz del equipo, no una fuente externa de FIRST, pero el nivel de detalle (premio + ciudad) es mucho más verificable que antes |
| Frase 2021 "Finalist Alliance First Peak" | Fragmento sin sentido claro | Aclarado: "Finalist Alliance" en la temporada Freight Frenzy (México Championship virtual), "según el registro histórico del equipo" — el equipo mismo marca esto como proveniente de su registro, no de una fuente externa |
| Premio 2018 (Rockwell Collins) / Lucasfilm-Star Wars | La fuente mencionaba un patrocinio de Lucasfilm/Star Wars, inusual y no repetido en ninguna otra fuente | La reescritura **ya no menciona Lucasfilm/Star Wars en absoluto** — se mantiene fuera del sitio, consistente con no haberlo confirmado nunca |
| Nombre completo del plantel | No confirmado | Sigue sin confirmarse — el escudo solo dice "CBTIS 203, Metepec, Estado de México" |

## Puntos que siguen pendientes

| Punto | Lo que dice la fuente actual | Qué falta confirmar |
|---|---|---|
| Premio 2019 | El propio texto dice: *"recibimos otro reconocimiento de innovación, cuya denominación oficial estamos por confirmar"* | El equipo ya marcó esto como pendiente en su propia narrativa — no se inventó ningún nombre. Queda igual en el sitio público: aparece como "premio a la innovación (nombre oficial por confirmar)" |
| Temporadas 2013, 2014, 2020 | No mencionadas en la Historia reescrita (salta de 2012 a 2015, y de 2019 a 2021) | Existen isotipos oficiales de esas temporadas (Block Party! 2013-14, Cascade Effect 2014-15, Ultimate Goal 2020-21) en `ISOTIPOS TEMPORADAS FIRST/`, pero **tener el logo oficial de una temporada no es evidencia de que el equipo haya competido en ella** — no se usan en el sitio. Si el equipo participó, confirmarlo explícitamente |
| Fecha EXIF de una foto de Velocity Vortex 2016 | 18 de agosto de 2016 | Anterior al kickoff oficial de esa temporada (~septiembre 2016); esa foto específica sigue sin usarse por esta razón |

## Material nuevo incorporado al sitio (2026-10-11)

- **Citas del equipo** (`Linea del tiempo SPARTANS 8327.pptx`) — se usan como `reflection` en `src/content/site-data.ts`, mostradas en Línea del tiempo y Robots. Verificadas por agrupación de formas, no por posición.
- **Reconocimiento institucional** — Presea a la Ciencia y la Tecnología, Ayuntamiento de Metepec, octubre 2023. Nuevo en esta versión de la Historia; se usa en Logros (`COMMUNITY_RECOGNITION`), no en Línea del tiempo, para no duplicar contenido entre ambas páginas.
- **Isotipos oficiales de temporada** — reemplazan el ícono genérico de casco que se mostraba antes en toda temporada sin fotografía propia.

**Cómo se usó esto al redactar el sitio público:** se separó la narrativa en tres
campos independientes por temporada — `story` (evolución del equipo, para Línea
del tiempo), `achievements` (resultados concretos, para Logros) y `reflection`
(cita textual, cuando existe). Antes, Línea del tiempo y Logros mostraban el mismo
párrafo; ya no.
