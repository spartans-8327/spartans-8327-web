# Matriz de contenido — SPARTANS 8327

**Documento interno. No se publica en el sitio.** Última actualización: 2026-10-11
(integración de `MIEMBROS 2026-2027`, `TIENDA ONLINE`, `ISOTIPOS TEMPORADAS FIRST`
y la Historia reescrita).

Leyenda de columna "Tipo de pendiente":
- **(1) Por proporcionar** — el equipo tiene el dato pero no lo ha compartido (nombre real, precio, número, foto).
- **(2) Por verificar** — existe una fuente, pero es ambigua, contradictoria o de un solo testimonio.
- **(3) Funcionalidad no implementada** — la sección está preparada en el código pero depende de datos del punto 1 o 2.

| Página / sección | Información existente | Información faltante | Información por verificar | Fuente / evidencia | Acción concreta |
|---|---|---|---|---|---|
| **Inicio** — hero | Nombre, escudo, casco, lema, fotografía real del equipo | — | — | Escudo oficial, Casco oficial, `IMG_0194.JPG` | Ninguna — completo |
| **Nuestra historia** | Fundación (21 ago 2012, como Scorpions), cambio de nombre a Spartans (2015), filosofía, foto grupal | — | — | `Historia SPARTANS 8327.docx` (reescrita 2026-10-11) | Ninguna — completo |
| **Línea de tiempo** | 12 temporadas (2012, 2015-2026) con narrativa de evolución (`story`) y cita del equipo (`reflection`) cuando existe; isotipo oficial de temporada cuando no hay fotografía propia | Temporadas 2013, 2014, 2020 — ninguna fuente las menciona (existen isotipos oficiales de esas temporadas, pero el logo no es evidencia de participación) | — | `Historia SPARTANS 8327.docx`, `Linea del tiempo SPARTANS 8327.pptx` (citas verificadas por agrupación de formas, no posición X/Y), `ISOTIPOS TEMPORADAS FIRST/` | (1) Si hubo actividad en 2013/2014/2020, pedir al equipo que la describa — por ahora el sitio simplemente no las menciona |
| **Robots y proyectos** | 5 temporadas con fotografía real (2016, 2023, 2024, 2025, 2026) con narrativa y cita del equipo cuando existe | Nombres de los robots, especificaciones técnicas (sensores, mecanismos, lenguaje de programación), fotos de las demás temporadas | — | Fotografías en `Fotos [temporada]/`, ninguna especificación técnica documentada en ningún archivo | (1) Pedir al equipo nombres de robot y 2-3 datos técnicos por temporada reciente si quieren mostrarlos — no inventar ninguno mientras tanto |
| **Logros** | Resultados concretos por temporada (`achievements`, lista separada de la narrativa de Línea de tiempo), 3 clasificaciones mundiales con premio y ciudad, reconocimiento institucional (Presea Ciencia y Tecnología, Metepec 2023) | Resultado final de BioBuzz (2026, en curso) | Nombre oficial del premio 2019 — el propio equipo lo marca como pendiente en su texto | `Historia SPARTANS 8327.docx` | (1) Actualizar cuando termine la temporada en curso. (2) El sitio ya refleja la incertidumbre del equipo sobre el premio 2019 tal cual, sin inventar un nombre |
| **Integrantes** | 15 integrantes de BioBuzz 2026-2027 con nombre y área (Diseño, Marketing, Mecánica, Programación), capitán marcado; 10 con fotografía | 5 integrantes sin fotografía (Fabián, Fátima, Jair, Lucero, Sabine) — se muestran con marcador explícito, no se omiten ni se inventa imagen. Apellidos no proporcionados | — | `MIEMBROS 2026-2027/` | (1) Pedir las 5 fotos faltantes si el equipo las tiene. (1) Confirmar autorización de imagen por persona — ver sección D de `informacion-pendiente-del-equipo.md` |
| **Impacto comunitario** | 3 fotografías reales de actividad comunitaria/divulgación | Nombre y fecha de cada actividad, número de beneficiarios o alcance, instituciones colaboradoras | — | Fotos de `Fotos biobuzz (2026-2027)/` | (1) Pedir al equipo una descripción breve de 2-3 actividades reales con fecha aproximada, para acompañar las fotos ya usadas |
| **Patrocinadores** | Bosch confirmado como patrocinador; logo oficial con fondo transparente ya integrado; fotografía real con la prenda de marca | Tipo de apoyo (económico, materiales, mentoría); vigencia | Procedencia del logo actual (viene de un repositorio de terceros, no directamente de Bosch) | Confirmación directa tuya; `bosch-logo-png_seeklogo-21517.png`; fotos `bosch-equipo.webp` / `bosch-patrocinio.webp` | (1) Si el equipo tiene el archivo que Bosch les entregó directamente, sustituir el logo actual por ese. (1) Decidir si se quiere publicar el tipo de apoyo |
| **Galería** | 11 fotografías reales organizadas por temporada (incluye 2 nuevas de Centerstage 2023) | Cobertura de 2012-2015, 2018-2021 (sin fotos en el archivo para esas temporadas) | — | Carpetas `Fotos [temporada]/` | (1) Si el equipo tiene fotos de archivo de esas temporadas, añadirlas; si no existen, la galería simplemente las omite |
| **Tienda** | Catálogo real de 5 productos (Backpack, Sudadera Club, Sudadera Rayas, playera, llavero); Club y Rayas son diseños separados, cada uno con selector real de 2 colores (Club: Azul/Gris; Rayas: Azul/Negro), igual que la talla; nombre, precio, color y disponibilidad confirmados (ver `informacion-pendiente-del-equipo.md` A.2); imágenes son vista previa de diseño (mockup, etiquetado como tal); carrito, variantes de talla y color, flujo a WhatsApp — todo funcional, verificado en vivo con ambos modelos | — | — | `TIENDA ONLINE/catalogo_inventario_SPARTANS_8327.xlsx` (actualizado 2026-10-11 18:14); el equipo corrigió una mala interpretación mía ("1 producto, 2 colores") el mismo día — son 2 diseños, cada uno con 2 colores | (3) Pasarela de pago — explícitamente fuera de alcance de esta primera versión por instrucción tuya. Ninguna otra acción pendiente |
| **Tienda — WhatsApp** | Mensaje de pedido que se genera automáticamente con productos, variantes, cantidades y total, enlazado a `wa.me/527298951473` | — | — | Número confirmado por el equipo 2026-10-11; verificado como cuenta de WhatsApp válida | Ninguna — completo |
| **Equipo / Contacto** | Formulario conectado a una ruta API real con Resend (`src/app/api/contact/route.ts`), probado con un envío real confirmado por el equipo; correo, Instagram y TikTok confirmados y activos. WhatsApp ya no aparece aquí por instrucción del equipo — sigue activo solo en Tienda | — | — | Datos proporcionados y verificados el 2026-10-11 | Ninguna — completo. Pendiente no urgente: verificar un dominio propio en Resend para dejar de depender del remitente de prueba |

## Notas de redacción pública (para que el equipo las revise)

El texto público de Historia, Línea de tiempo y Logros se redactó en la voz del
equipo, usando solo lo que `Historia SPARTANS 8327.docx` (versión reescrita
2026-10-11) respalda directamente. Un fragmento de la versión anterior del
documento se mantiene fuera del sitio por no repetirse en la reescritura:

- La mención de patrocinio de Lucasfilm/Star Wars en la temporada 2018 (Rover Ruckus) —
  ya no aparece en la Historia reescrita, así que sigue sin publicarse.

El premio 2019 se publica exactamente como el equipo lo describe en su propio
texto: "un reconocimiento de innovación, cuya denominación oficial estamos por
confirmar" — no es una omisión editorial, es la propia incertidumbre del equipo.

Ver `docs/historia-verificacion-pendiente.md` para el detalle completo de qué se
resolvió con la reescritura y qué sigue pendiente.
