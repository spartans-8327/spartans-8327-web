# Información pendiente del equipo — SPARTANS 8327

**Documento interno. No se publica en el sitio.** Última actualización: 2026-10-11
(integración de `MIEMBROS 2026-2027`, `TIENDA ONLINE`, `ISOTIPOS TEMPORADAS FIRST`
y la Historia reescrita).

Este documento reemplaza y amplía `docs/matriz-de-contenido.md` (que se conserva
como referencia detallada por página). Aquí la información está organizada por el
tipo de acción que se necesita, no por página, para que sea más fácil de responder.

---

## A.0 Datos de contacto

| Canal | Estado | Detalle |
|---|---|---|
| WhatsApp | **Confirmado y activo, solo en Tienda** | +52 729 895 1473. Verificado en vivo en `wa.me` como número válido. Por instrucción del equipo (2026-10-11), ya no aparece en Contacto ni en el pie de página — solo en el flujo de pedido de la Tienda |
| Correo | **Confirmado y activo** | spartanscbtis203@gmail.com |
| Instagram | **Confirmado y activo** | @spartans_8327 — verificado en vivo: cuenta real, 1,542 seguidores |
| TikTok | **Confirmado y activo** | @spartans_.8327 (guion bajo seguido de punto). Verificado en vivo el 2026-10-11: cuenta real, bio "spartans 8327 🤖 · cbtis 203", 20 seguidores. Dos intentos anteriores del equipo ("spartans._8327" y "spartans_8327") no eran la cuenta correcta — se descartaron tras verificar que no resolvían o no coincidían; este tercer handle sí fue escrito explícitamente (no dictado) y verificado antes de publicarse |

Nota aparte (no se actuó sobre ella, solo se reporta): la bio de Instagram dice
"FTC Robotics Team since 2013", mientras que el sitio usa el 21 de agosto de 2012
como fecha de fundación (fuente: `Historia SPARTANS 8327.docx`). Ver pregunta en
la sección E.

---

## A.1 Integrantes — resuelto parcialmente el 2026-10-11

La carpeta `MIEMBROS 2026-2027/` dio nombre y área de los 15 integrantes de la
temporada BioBuzz 2026-2027 (Diseño, Marketing, Mecánica, Programación; Santiago
como capitán). Ya están publicados en Integrantes con nombre + área.

**Sigue pendiente:** 5 de los 15 no tienen fotografía (Fabián, Fátima, Jair,
Lucero, Sabine) — se muestran con un marcador visual ("Fotografía pendiente"), no
se inventó ninguna imagen. Tampoco se proporcionaron apellidos — se publica solo
el nombre, tal como está en las carpetas.

**Permisos:** las 10 fotografías publicadas son identificables y de estudiantes de
bachillerato (posiblemente menores de edad). No hay ningún documento de
autorización de imagen en el material compartido — ver sección D.

---

## A.2 Tienda — catálogo resuelto el 2026-10-11

`TIENDA ONLINE/catalogo_inventario_SPARTANS_8327.xlsx` fue actualizado por el
equipo con precio, color y disponibilidad confirmados para 5 productos reales.

**Historial de una corrección propia el mismo día:** primero interpreté
"Azul/Gris" y "Azul/Negro" como un solo color compuesto de dos tonos por
producto, y fusioné Club y Rayas en un solo producto con 2 colores
seleccionables. El equipo aclaró que eso estaba mal en dos sentidos: (1) Club y
Rayas son **dos diseños de sudadera distintos** (no colores del mismo
producto) y deben seguir siendo dos productos separados; (2) "Azul/Gris" y
"Azul/Negro" significan que **cada uno de esos dos diseños** tiene 2 colores
para elegir — Club: Azul o Gris; Rayas: Azul o Negro — igual que el selector de
talla, no una etiqueta fija. Se corrigió a esto último, que es lo correcto.

Catálogo final (5 productos):

| Producto | Precio | Color(es) seleccionables | Tallas | Disponible | Existencias (xlsx) |
|---|---|---|---|---|---|
| Backpack Azul 83-27 | $899 MXN | Azul | No aplica | Sí | 10 |
| Sudadera Club 83-27 | $699 MXN | Azul o Gris | CH, M, G | Sí | 10 |
| Sudadera Rayas 83-27 | $699 MXN | Azul o Negro | CH, M, G | Sí | 10 |
| Playera Blanca 83-27 | $499 MXN | Blanco | CH, M, G | Sí | 10 |
| Llavero 83-27 | $99 MXN | Plateado | No aplica | Sí | 10 |

Nota: las existencias (10 por producto) están en el xlsx pero el sitio no
muestra un contador numérico de unidades — solo "disponible"/"agotado", por
diseño; si el equipo prefiere mostrar el número exacto, es un cambio de alcance
a decidir, no una omisión. El color elegido ya viaja correctamente en el
mensaje de WhatsApp junto con la talla — verificado en vivo con ambos modelos.

**Importante sobre las imágenes:** siguen siendo vistas previas de diseño (mockups
creados para el catálogo), no fotografías de la prenda física ya producida — se
etiquetan explícitamente como "Vista previa de diseño" en cada tarjeta. Los
mockups de la Sudadera incluyen una nota visible propia del equipo ("V1 ·
FRENTE — inspirada en la de Chivas", "V2 · FRENTE — inspirada en la blanca con
líneas") que no se modificó ni se ocultó — es parte del diseño que el equipo
subió. Como no hay una fotografía distinta por color dentro de un mismo
diseño, elegir Azul o Gris en Club (o Azul/Negro en Rayas) no cambia la imagen
mostrada — solo registra el color elegido para el pedido.

**Discrepancia menor detectada (no bloquea nada):** la hoja "Inventario por
variante" del mismo xlsx todavía marca el color como "Por confirmar" a nivel de
talla individual, mientras que la hoja "Catálogo" (la hoja activa) ya da los
colores confirmados. Se usó la hoja "Catálogo" por ser la que el equipo
actualizó explícitamente.

---

## A.3 Patrocinadores — logo de Bosch resuelto el 2026-10-11

Se recibió un logo de Bosch con fondo transparente (`bosch-logo-png_seeklogo-21517.png`)
y ya se usa en Patrocinadores. **Nota de procedencia:** el nombre del archivo
indica que proviene de un repositorio de logos de terceros (seeklogo.com), no
directamente de Bosch — funcionalmente se usa como el logo oficial de la marca,
pero si el equipo tiene el archivo que Bosch les entregó directamente, sería
preferible sustituirlo por ese.

---

## A.4 Formulario de contacto — resuelto el 2026-10-11

El formulario de `/contacto` está conectado a una ruta real
(`src/app/api/contact/route.ts`) que usa [Resend](https://resend.com) para
enviar el mensaje a spartanscbtis203@gmail.com. El equipo ya creó la cuenta de
Resend, configuró `RESEND_API_KEY` en `.env.local`, y se confirmó una entrega
real: se envió un mensaje de prueba desde el formulario y el equipo confirmó
que llegó a la bandeja de entrada.

**Pendiente, no urgente:** el remitente sigue siendo el de prueba de Resend
(`onboarding@resend.dev`), que solo entrega de forma confiable al correo con el
que se creó la cuenta de Resend. Verificar un dominio propio en Resend (por
ejemplo un subdominio de spartanscbtis203) eliminaría esa limitación — no
bloquea el uso actual, pero conviene hacerlo antes de depender de esto a largo
plazo o si se necesita enviar a otras direcciones.

Si el formulario llegara a fallar en el futuro (API key vencida, límite de
envíos, etc.), no finge éxito: muestra un error claro pidiendo escribir
directamente a spartanscbtis203@gmail.com.

---

## A. Datos que el equipo debe proporcionar (sigue pendiente, sin cambios este corte)

| # | Dato | Dónde se usa | ¿Obligatorio para publicar? |
|---|---|---|---|
| 1 | Nombres de los robots por temporada, si los tienen | Robots y proyectos | No |
| 2 | Descripciones técnicas del robot (sensores, mecanismos) para las temporadas recientes | Robots y proyectos | No |
| 3 | Información de entrega de la tienda: envío, recogida en plantel, costos | Tienda (mensaje de WhatsApp) | No — el mensaje ya indica que el equipo confirmará esto directamente |
| 4 | Nombre, fecha aproximada y alcance de 2-3 actividades de impacto comunitario | Impacto comunitario | No — las fotos ya se muestran sin esa descripción |
| 5 | Nombre completo oficial del plantel, si es distinto de "CBTIS 203" | Pie de página, Historia | No |
| 6 | Apellidos de los 15 integrantes, si se quieren publicar | Integrantes | No |

---

## B. Datos que necesitan verificación

La reescritura de `Historia SPARTANS 8327.docx` (2026-10-11) resolvió la mayoría de
los puntos que antes estaban en esta sección — ver el detalle completo en
`docs/historia-verificacion-pendiente.md`. Resumen:

| # | Punto | Estado |
|---|---|---|
| 1 | Nombre de temporada 2015 | **Resuelto** — confirmado como Res-Q, coincide con el isotipo oficial de FIRST |
| 2 | Clasificaciones mundiales 2015/2016/2017 | **Resuelto en el sitio** — cada una ahora tiene premio y ciudad nombrados explícitamente |
| 3 | Frase de 2021 | **Aclarado** — "Finalist Alliance" en Freight Frenzy, marcado por el equipo como "según nuestro registro histórico" |
| 4 | Patrocinio de Lucasfilm/Star Wars 2018 | Sigue sin confirmarse — la reescritura ya no lo menciona; se mantiene fuera del sitio |
| 5 | Premio 2019 | Sigue pendiente — el propio texto del equipo dice "cuya denominación oficial estamos por confirmar"; el sitio refleja exactamente eso |
| 6 | Temporadas 2013, 2014, 2020 | Sin mencionar en ninguna fuente. Existen isotipos oficiales de esas temporadas, pero tener el logo no prueba participación — no se usan |
| 7 | Fecha EXIF de una foto de Velocity Vortex 2016 | Sin resolver, no urgente — esa foto específica no se usa |

---

## C. Funcionalidades: estado real verificado

Verificado en navegador real (Playwright + emulación de viewport móvil real,
confirmada vía `window.innerWidth`/`innerHeight`) en las sesiones del 2026-10-11,
no solo leyendo el código.

| Funcionalidad | Estado real |
|---|---|
| Formulario de contacto | **Funciona de verdad.** Conectado a `src/app/api/contact/route.ts` con Resend; `RESEND_API_KEY` configurada por el equipo. Verificado con un envío real desde el formulario: el equipo confirmó que el correo llegó a spartanscbtis203@gmail.com |
| WhatsApp (solo Tienda) | Activo únicamente en el flujo de la Tienda — mensaje completo con productos/variantes/total, enlaza a `wa.me` con el número confirmado. Por instrucción tuya, ya no aparece en Contacto ni en el pie de página |
| Carrito, variantes, cantidades | Funciona de verdad — probado en navegador real |
| Cambio de idioma ES/EN | Funciona de verdad — contenido cambia, no solo la URL |
| Navegación y menú móvil | Verificado en viewport móvil real (iPhone 13, Playwright): sin overflow horizontal, 0 errores de consola en las 11 páginas |
| `prefers-reduced-motion` | Verificado en vivo: con la preferencia activa, la duración de animación cae a ~0 y el contenido queda visible (`opacity:1`) desde el primer instante — nunca se oculta |
| Navegación por teclado | Verificado en vivo: Tab recorre todos los enlaces en orden lógico con foco visible (contorno de 2px). El enlace "saltar al contenido" se corrigió para mover también el foco de teclado a `<main>`, no solo hacer scroll |
| Enlaces de redes sociales | Instagram y TikTok verificados en vivo como cuentas reales (ver A.0) |

---

## D. Recursos y permisos pendientes

**Ninguna fotografía del sitio tiene autorización de imagen documentada.** El
sitio no afirma en ningún texto público que exista autorización (se verificó que
no hay ninguna mención de "autorización", "permiso" o similar en el código de
cara al visitante) — las fotos simplemente se muestran, sin reclamar un estatus de
permiso que no se ha confirmado. Esto es lo que aparece públicamente hoy, por
nivel de sensibilidad:

| Dónde | Qué se publica | Nivel de identificación |
|---|---|---|
| Integrantes | 10 fotografías individuales, cada una con el nombre real de la persona junto a su foto | **Alto** — nombre + rostro emparejados directamente |
| Inicio, Historia/Equipo, Línea del tiempo, Robots, Impacto, Patrocinadores, Galería | ~15 fotografías de grupo o candid (p. ej. `bosch-equipo.webp`, `centerstage-equipo-2023.webp`, `impacto-caseta-biobuzz.webp`, `robots-banco-pruebas.webp`) | Medio — rostros identificables, pero sin nombre asociado en el sitio |
| Inicio (hero) | `hero-casco-ventana.webp` — composición con el casco oficial como máscara sobre una fotografía recortada del equipo | Bajo — la mayoría del rostro queda oculta por el diseño |

Qué falta en todos los casos: confirmación explícita del equipo (y, si aplica, de
madres/padres o tutores de integrantes menores de edad) de que estas fotografías
pueden publicarse en un sitio web público — especialmente las 10 de Integrantes,
por el nivel de identificación directa.

| Otro recurso | Qué falta |
|---|---|
| Logo de Bosch entregado directamente por la marca (si existe) | El logo actual viene de un repositorio de terceros (ver A.3) |
| Material 3D (modelo de guerrero espartano) | No existe ningún recurso 3D en los archivos compartidos — no se generó ninguno |

---

## E. Preguntas priorizadas para ti (resumen ejecutivo)

No queda ninguna pregunta que bloquee una función concreta — el formulario de
contacto ya se configuró con Resend y se confirmó una entrega real (2026-10-11).

**Necesitan tu confirmación directa (no se publicó nada sin marcar):**
1. Instagram dice "since 2013" en su bio; la Historia dice fundación el 21 de agosto de 2012. ¿Cuál es la relación correcta entre esas dos fechas?
2. ¿Confirman que existe autorización de imagen para publicar fotos de estudiantes identificables (incluyendo los 10 integrantes con foto ya publicados), especialmente si hay menores de edad?
3. ¿El logo de Bosch que se está usando (de un repositorio de terceros) es aceptable, o tienen el archivo oficial que Bosch les entregó?

**Importantes pero no bloquean el lanzamiento:**
4. ¿Pueden las 5 personas sin fotografía (Fabián, Fátima, Jair, Lucero, Sabine) enviarla?
5. ¿Pueden confirmar o corregir el patrocinio de Lucasfilm/Star Wars en 2018 y el nombre del premio 2019?

**Pueden esperar:**
6. ¿Hay nombres o datos técnicos de los robots que quieran mostrar?
7. ¿Hay actividades de impacto comunitario específicas (nombre, fecha, alcance) que quieran describir junto a las fotos ya usadas?
