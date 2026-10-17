// Contenido estructurado de Spartans 8327.
//
// Esta es la voz pública del equipo contando su propia historia — no un reporte
// académico de hechos verificados por terceros. Cada afirmación aquí tiene respaldo
// directo en los materiales que el equipo compartió (Historia SPARTANS 8327.docx,
// reescrito 2026-10-11; Linea del tiempo SPARTANS 8327.pptx; fotografías; carpeta
// MIEMBROS 2026-2027; catálogo de Tienda). Los detalles ambiguos, nombres de premio
// poco claros o años sin fuente se omiten en vez de rellenarse con suposiciones —
// ver docs/historia-verificacion-pendiente.md para el registro completo de qué
// falta confirmar antes de ampliar esta narrativa.

export const NAV_ROUTES = [
  { slug: "", key: "home" },
  { slug: "equipo", key: "team" },
  { slug: "linea-de-tiempo", key: "timeline" },
  { slug: "integrantes", key: "members" },
  { slug: "robots", key: "robots" },
  { slug: "logros", key: "achievements" },
  { slug: "portafolios", key: "portfolios" },
  { slug: "galeria", key: "gallery" },
  { slug: "impacto", key: "impact" },
  { slug: "patrocinadores", key: "sponsors" },
  { slug: "tienda", key: "store" },
  { slug: "contacto", key: "contact" },
] as const;

// El equipo se fundó el 21 de agosto de 2012. Esta fecha es distinta de "cuándo
// empezó a competir en FIRST Tech Challenge": según la Historia del equipo, ambas
// cosas ocurrieron la misma temporada (2012), pero son dos afirmaciones distintas —
// ver SEASONS[0].story, que las separa explícitamente en vez de fusionarlas.
export const FOUNDING_DATE = "2012-08-21";

export function getTeamAgeYears(asOf: Date = new Date()): number {
  const founded = new Date(FOUNDING_DATE);
  let years = asOf.getFullYear() - founded.getFullYear();
  const hasHadAnniversaryThisYear =
    asOf.getMonth() > founded.getMonth() ||
    (asOf.getMonth() === founded.getMonth() && asOf.getDate() >= founded.getDate());
  if (!hasHadAnniversaryThisYear) years -= 1;
  return years;
}

export type Season = {
  year: string;
  game: string;
  // Narrativa de evolución del equipo — para Línea del tiempo. Cuenta cómo cambió
  // el equipo, no qué ganó (eso vive en `achievements`, para Logros).
  story: { es: string; en: string };
  // Cita textual del equipo (Linea del tiempo SPARTANS 8327.pptx), cuando existe.
  // Verificada contra la agrupación de formas del pptx (no contra posición X/Y,
  // que resultó ambigua) para no atribuir una cita a la temporada equivocada.
  reflection?: { es: string; en: string };
  // Resultados concretos — para Logros. Array vacío si la temporada sigue en curso
  // o no dejó un resultado documentado (no se inventa ninguno).
  achievements: { es: string; en: string }[];
  worldsQualification?: string;
  photoSlug?: string;
  // Logo oficial de la temporada de FIRST (ISOTIPOS TEMPORADAS FIRST/). Solo se
  // usa en temporadas que la Historia del equipo confirma como jugadas — existen
  // isotipos de 2013-14, 2014-15 y 2020-21 en el material compartido, pero esas
  // temporadas nunca se mencionan en la Historia, así que no se usan aquí: tener
  // el logo oficial no es evidencia de que el equipo haya participado.
  isotypeSlug?: string;
};

export const SEASONS: Season[] = [
  {
    year: "2012",
    game: "Ring It Up!",
    story: {
      es: "El equipo se fundó el 21 de agosto de 2012 como Scorpions, en el CBTIS 203 de Metepec, Estado de México. Desde sus primeros pasos se adentró en FIRST Tech Challenge, compitiendo esa misma temporada en Ring It Up! — el inicio de un camino que todavía no imaginaba todo lo que vendría después.",
      en: "The team was founded on August 21, 2012 as Scorpions, at CBTIS 203 in Metepec, State of Mexico. From its first steps it entered FIRST Tech Challenge, competing that same season in Ring It Up! — the start of a path that didn't yet know everything that was coming.",
    },
    achievements: [],
    isotypeSlug: "isotipo-2012-ring-it-up",
  },
  {
    year: "2015",
    game: "Res-Q",
    story: {
      es: "El equipo dejó de llamarse Scorpions y se convirtió en Spartans. No se trataba solamente de cambiar cómo los llamaban — era el comienzo de una identidad con la que, temporada tras temporada, aprenderían a reconocerse.",
      en: "The team stopped being Scorpions and became Spartans. It wasn't just a new name — it was the beginning of an identity that, season after season, they would learn to recognize themselves by.",
    },
    achievements: [
      { es: "Inspire Award — México Championship, Ciudad de México", en: "Inspire Award — Mexico Championship, Mexico City" },
      { es: "Clasificación al Campeonato Mundial — St. Louis, Missouri", en: "World Championship qualification — St. Louis, Missouri" },
    ],
    worldsQualification: "St. Louis, Missouri",
    isotypeSlug: "isotipo-2015-res-q",
  },
  {
    year: "2016",
    game: "Velocity Vortex",
    story: {
      es: "Spartans volvió a demostrar que su trabajo podía llevarlo lejos. No se trataba solamente de volver a competir fuera de México — era saber que el esfuerzo de todo un equipo podía llevarlos nuevamente hasta ahí.",
      en: "Spartans proved again that its work could take it far. It wasn't just about competing abroad again — it was knowing that the effort of an entire team could take them there once more.",
    },
    achievements: [
      { es: "Alianza Ganadora — Campeonato Nacional", en: "Winning Alliance — National Championship" },
      { es: "Clasificación al Campeonato Mundial — St. Louis, Missouri (segunda vez consecutiva)", en: "World Championship qualification — St. Louis, Missouri (second year in a row)" },
    ],
    worldsQualification: "St. Louis, Missouri",
    photoSlug: "historia-2016-nacional",
    isotypeSlug: "isotipo-2016-velocity-vortex",
  },
  {
    year: "2017",
    game: "Relic Recovery",
    story: {
      es: "Por tercera temporada consecutiva desde el cambio de nombre, el equipo siguió construyendo una trayectoria que lo llevaba cada vez más lejos. Los retos cambiaban, los robots eran diferentes — pero las ganas de seguir adelante permanecían.",
      en: "For the third season in a row since the name change, the team kept building a track record that took it further each time. The challenges changed, the robots were different — but the drive to keep going stayed the same.",
    },
    reflection: {
      es: "Ser diferentes no estuvo mal; fue parte de encontrar nuestra solución.",
      en: "Being different wasn't a bad thing — it was part of finding our solution.",
    },
    achievements: [
      { es: "Inspire Award — clasificación al Campeonato Mundial en Houston, Texas", en: "Inspire Award — World Championship qualification in Houston, Texas" },
    ],
    worldsQualification: "Houston, Texas",
    isotypeSlug: "isotipo-2017-relic-recovery",
  },
  {
    year: "2018",
    game: "Rover Ruckus",
    story: {
      es: "Competir en robótica nunca fue solamente construir una máquina que funcione. También significó preguntarse cómo hacer las cosas de una manera diferente, probar ideas y encontrar soluciones a los problemas que tenían enfrente.",
      en: "Competing in robotics was never just about building a machine that works. It also meant asking how to do things differently, testing ideas, and finding solutions to the problems right in front of them.",
    },
    reflection: {
      es: "Diseñar e imprimir nuestras propias piezas reduce costos y mejora la integración del robot.",
      en: "Designing and 3D-printing our own parts cuts costs and improves how the robot comes together.",
    },
    achievements: [
      { es: "Rockwell Collins Innovator Award — Campeonato Nacional de México", en: "Rockwell Collins Innovator Award — Mexico National Championship" },
    ],
    isotypeSlug: "isotipo-2018-rover-ruckus",
  },
  {
    year: "2019",
    game: "Skystone",
    story: {
      es: "Cada temporada dejaba algo más que un resultado: dejaba experiencia, conocimiento y nuevos retos para quienes continuaban el trabajo. Así, generación tras generación, la historia del equipo seguía creciendo.",
      en: "Every season left behind more than a result — it left experience, knowledge, and new challenges for whoever picked up the work next. Generation after generation, the team's story kept growing.",
    },
    reflection: {
      es: "Somos una familia, familia Spartans.",
      en: "We are a family — the Spartans family.",
    },
    achievements: [
      { es: "Finalista — evento nacional", en: "Finalist — national event" },
      { es: "Premio a la innovación (nombre oficial por confirmar con el equipo)", en: "Innovation award (official name pending confirmation from the team)" },
    ],
    isotypeSlug: "isotipo-2019-skystone",
  },
  {
    year: "2021",
    game: "Freight Frenzy",
    story: {
      es: "Después de las circunstancias extraordinarias que trajo la pandemia, esta temporada se vivió de una manera distinta: el México Championship se celebró de forma virtual. Las condiciones ya no eran las mismas, pero el equipo siguió participando y trabajando por sus objetivos.",
      en: "After the extraordinary circumstances the pandemic brought, this season was lived differently: the Mexico Championship was held virtually. Conditions weren't the same anymore, but the team kept participating and working toward its goals.",
    },
    reflection: {
      es: "Nuestro esfuerzo y perseverancia se ve reflejado en el trabajo.",
      en: "Our effort and perseverance show in the work.",
    },
    achievements: [
      { es: "Finalist Alliance — México Championship (edición virtual), según el registro histórico del equipo", en: "Finalist Alliance — Mexico Championship (virtual edition), per the team's own historical record" },
    ],
    isotypeSlug: "isotipo-2021-freight-frenzy",
  },
  {
    year: "2022",
    game: "Power Play",
    story: {
      es: "El equipo regresó a la competencia regional en Toluca. Fue otra oportunidad para poner a prueba lo que sabían, reconocer lo que todavía necesitaban mejorar y demostrar que seguían teniendo la capacidad de competir y aprender junto con otros equipos.",
      en: "The team returned to the regional competition in Toluca. It was another chance to test what they knew, recognize what still needed work, and show they still had what it took to compete and learn alongside other teams.",
    },
    reflection: {
      es: "Aprender implica practicar e innovar constantemente.",
      en: "Learning means constantly practicing and innovating.",
    },
    achievements: [
      { es: "Alianza Ganadora y Capitanes de Alianza — Regional de Toluca", en: "Winning Alliance and Alliance Captains — Toluca Regional" },
      { es: "Innovate Award — Regional de Toluca", en: "Innovate Award — Toluca Regional" },
      { es: "Clasificación al evento nacional — Torreón, Coahuila", en: "Qualified for the national event — Torreón, Coahuila" },
    ],
    isotypeSlug: "isotipo-2022-power-play",
  },
  {
    year: "2023",
    game: "Centerstage",
    story: {
      es: "Esta temporada no fue solamente sobre competir — también fue sobre lo que el equipo representa para su comunidad. Llevaron el nombre de su escuela y de su municipio a espacios donde pudieron demostrar lo que los estudiantes son capaces de hacer cuando tienen la oportunidad de aprender, crear y trabajar juntos.",
      en: "This season wasn't only about competing — it was also about what the team means to its community. They carried their school's and their town's name to places where they could show what students are capable of when given the chance to learn, create, and work together.",
    },
    reflection: {
      es: "La organización a tiempo mejora el desempeño del equipo. Cada error es información: así iteramos, aprendemos y mejoramos.",
      en: "Being organized on time improves team performance. Every mistake is information — that's how we iterate, learn, and improve.",
    },
    achievements: [
      { es: "Presea a la Ciencia y la Tecnología — Ayuntamiento de Metepec (octubre 2023)", en: "Science and Technology Medal — Metepec City Government (October 2023)" },
      { es: "Control Award y Alianza Ganadora — Regional de Toluca", en: "Control Award and Winning Alliance — Toluca Regional" },
      { es: "Alianza Finalista — Campeonato Nacional, Ciudad de México", en: "Finalist Alliance — National Championship, Mexico City" },
    ],
    photoSlug: "centerstage-equipo-2023",
    isotypeSlug: "isotipo-2023-centerstage",
  },
  {
    year: "2024",
    game: "Into the Deep",
    story: {
      es: "Detrás de un robot hay muchas decisiones, pruebas, errores y cambios que no siempre se ven desde fuera. Este reconocimiento también forma parte de la historia: recuerda que cada detalle importa y que las ideas necesitan trabajo para convertirse en algo real.",
      en: "Behind a robot there are many decisions, tests, mistakes, and changes that don't always show from the outside. This recognition is part of the story too — a reminder that every detail matters and that ideas need work to become something real.",
    },
    achievements: [
      { es: "Design Award — Regional de Toluca, Estado de México", en: "Design Award — Toluca Regional, State of Mexico" },
    ],
    photoSlug: "robots-banco-pruebas",
    isotypeSlug: "isotipo-2024-into-the-deep",
  },
  {
    year: "2025",
    game: "Decode",
    story: {
      es: "Cada temporada enfrenta al equipo a problemas distintos y lo obliga a cuestionar lo que creía saber. La historia de Spartans no se construye únicamente con los premios que consigue, sino también con todo lo que aprende mientras intenta alcanzarlos.",
      en: "Every season puts the team in front of different problems and forces it to question what it thought it knew. Spartans' story isn't built only on the awards it wins, but also on everything it learns while trying to reach them.",
    },
    reflection: {
      es: "Este es nuestro hoy: un equipo que aprende, colabora y construye más que robots.",
      en: "This is who we are today: a team that learns, collaborates, and builds more than robots.",
    },
    achievements: [
      { es: "Tercer lugar — Inspire Award", en: "Third place — Inspire Award" },
      { es: "Segundo lugar — Design Award", en: "Second place — Design Award" },
      { es: "Tercer lugar — Finalist Alliance Partner", en: "Third place — Finalist Alliance Partner" },
    ],
    photoSlug: "decode-equipo-momento",
    isotypeSlug: "isotipo-2025-decode",
  },
  {
    year: "2026",
    game: "BioBuzz",
    story: {
      es: "Una nueva temporada comienza y todavía queda mucho por descubrir. Mirar hacia atrás le recuerda al equipo todo lo que ha conseguido; mirar hacia adelante, que todavía tiene mucho por hacer.",
      en: "A new season is beginning and there's still a lot to discover. Looking back reminds the team of everything it has achieved; looking ahead, that there's still a lot left to do.",
    },
    achievements: [],
    photoSlug: "logo-biobuzz",
  },
];

export const WORLDS_APPEARANCES = [
  { year: "2015", location: "St. Louis, Missouri" },
  { year: "2016", location: "St. Louis, Missouri" },
  { year: "2017", location: "Houston, Texas" },
];

// Reconocimiento institucional destacado — se muestra en Logros junto a los
// resultados de competencia, no como una temporada más de la línea del tiempo.
export const COMMUNITY_RECOGNITION = {
  title: { es: "Presea a la Ciencia y la Tecnología", en: "Science and Technology Medal" },
  issuer: { es: "Ayuntamiento de Metepec", en: "Metepec City Government" },
  date: "2023-10",
  note: {
    es: "Reconocimiento otorgado al equipo por el vínculo con su comunidad.",
    en: "Awarded to the team for its connection with its community.",
  },
};

export type RobotSpec = {
  id: string;
  name: string;
  season: string; // ej. "2025–2026 · Decode"
  photoSlug?: string;
  award?: { es: string; en: string };
  specs?: { label: { es: string; en: string }; value: { es: string; en: string } }[];
  description?: { es: string; en: string };
  featured?: boolean;
};

// Fuente: "GIPSY(robot decode).docx" (compartido por el equipo, 2026-10-14). El
// documento interno llama al robot "Gypsy" (así, cuatro veces en el cuerpo del
// texto); "GIPSY" es solo la convención de mayúsculas usada en los nombres de
// archivo — confirmado con el equipo que el nombre público es "Gypsy".
export const ROBOTS: RobotSpec[] = [
  {
    id: "gypsy",
    name: "Gypsy",
    season: "2025–2026 · Decode",
    photoSlug: "robot-gypsy-decode",
    featured: true,
    description: {
      es: "Construimos a Gypsy, un robot diseñado para combinar movilidad, recolección, almacenamiento y lanzamiento de pelotas en un solo sistema, buscando aprovechar al máximo el espacio disponible y responder a las exigencias de la competencia.",
      en: "We built Gypsy, a robot designed to combine mobility, collection, storage, and launching of balls into a single system, aiming to make the most of the available space and meet the demands of competition.",
    },
    specs: [
      {
        label: { es: "Chasis", en: "Chassis" },
        value: { es: "17 × 17 pulgadas", en: "17 × 17 inches" },
      },
      {
        label: { es: "Tracción", en: "Drivetrain" },
        value: {
          es: "4 motores · 435 RPM · ruedas Mecanum Grip",
          en: "4 motors · 435 RPM · Mecanum Grip wheels",
        },
      },
      {
        label: { es: "Intake", en: "Intake" },
        value: {
          es: "Motor de 1120 RPM con tren de engranajes · tambor con capacidad para 3 pelotas",
          en: "1120 RPM motor with a gear train · drum holding up to 3 balls",
        },
      },
      {
        label: { es: "Outtake", en: "Outtake" },
        value: { es: "3 motores · 6000 RPM", en: "3 motors · 6,000 RPM" },
      },
      {
        label: { es: "Electrónica", en: "Electronics" },
        value: {
          es: "Batería, controlador y Expansion Hub en la parte posterior",
          en: "Battery, controller, and Expansion Hub at the rear",
        },
      },
    ],
  },
  {
    id: "centerstage",
    name: "Centerstage",
    season: "2023–2024 · Centerstage",
    photoSlug: "centerstage-robot-2023",
    award: {
      es: "Control Award · Regional de Toluca",
      en: "Control Award · Toluca Regional",
    },
  },
  {
    id: "into-the-deep",
    name: "Into the Deep",
    season: "2024–2025 · Into the Deep",
    photoSlug: "robots-banco-pruebas",
    award: {
      es: "Design Award · Regional de Toluca",
      en: "Design Award · Toluca Regional",
    },
  },
];

export type Portfolio = {
  id: string;
  season: string;
  game: string;
  // Etapa documentada en el PDF (regional, nacional...). Omitido cuando el
  // equipo solo compartió una versión del portafolio para la temporada.
  stage?: { es: string; en: string };
  fileSlug: string;
  // false solo para el portafolio de Decode nacional: el PDF pesa 154 MB,
  // supera el límite de 100 MB por archivo de GitHub y por eso no viaja al
  // repositorio ni al sitio publicado — sigue existiendo en la copia local
  // del equipo. Sin esta bandera, el botón "Ver documento" apuntaría a un
  // archivo ausente en producción.
  availableOnline?: boolean;
};

// Portafolios de ingeniería reales compartidos por el equipo (archivos
// "(PORTAFOLIO).pdf" en SPARTANS 8327 WEB/), uno por etapa de competencia
// documentada. No existen portafolios para todas las temporadas de SEASONS —
// solo se listan las que el equipo compartió.
export const PORTFOLIOS: Portfolio[] = [
  {
    id: "2025-decode-nacional",
    season: "2025–2026",
    game: "Decode",
    stage: { es: "Nacional", en: "Nationals" },
    fileSlug: "2025-decode-nacional",
    availableOnline: false,
  },
  {
    id: "2025-decode-regional",
    season: "2025–2026",
    game: "Decode",
    stage: { es: "Regional", en: "Regional" },
    fileSlug: "2025-decode-regional",
  },
  {
    id: "2024-into-the-deep-nacional",
    season: "2024–2025",
    game: "Into the Deep",
    stage: { es: "Nacional", en: "Nationals" },
    fileSlug: "2024-into-the-deep-nacional",
  },
  {
    id: "2024-into-the-deep-regional",
    season: "2024–2025",
    game: "Into the Deep",
    stage: { es: "Regional", en: "Regional" },
    fileSlug: "2024-into-the-deep-regional",
  },
  {
    id: "2023-centerstage",
    season: "2023–2024",
    game: "Centerstage",
    fileSlug: "2023-centerstage",
  },
  {
    id: "2022-power-play",
    season: "2022–2023",
    game: "Power Play",
    fileSlug: "2022-power-play",
  },
];

export type GalleryImage = {
  slug: string;
  season: string;
  alt: { es: string; en: string };
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    slug: "hero-equipo-mural",
    season: "2025 · Decode",
    alt: {
      es: "Equipo Spartans 8327 frente a un mural en Metepec",
      en: "Spartans 8327 team in front of a mural in Metepec",
    },
  },
  {
    slug: "robots-banco-pruebas",
    season: "2024 · Into the Deep",
    alt: {
      es: "Integrante ajustando un robot en un banco de pruebas",
      en: "Team member adjusting a robot on a test bench",
    },
  },
  {
    slug: "centerstage-equipo-2023",
    season: "2023 · Centerstage",
    alt: {
      es: "Integrantes del equipo revisando el robot durante la temporada Centerstage",
      en: "Team members checking the robot during the Centerstage season",
    },
  },
  {
    slug: "centerstage-robot-2023",
    season: "2023 · Centerstage",
    alt: {
      es: "Integrante del equipo con el robot de la temporada Centerstage",
      en: "Team member with the Centerstage-season robot",
    },
  },
  {
    slug: "bosch-patrocinio",
    season: "2024 · Into the Deep",
    alt: {
      es: "Integrantes del equipo con chamarra con el logotipo de Bosch",
      en: "Team members wearing a jacket with the Bosch logo",
    },
  },
  {
    slug: "bosch-equipo",
    season: "2024 · Into the Deep",
    alt: {
      es: "Equipo completo posando frente a un mural, con bandera de México",
      en: "Full team posing in front of a mural, with the Mexican flag",
    },
  },
  {
    slug: "historia-2016-internacional",
    season: "2016 · Velocity Vortex",
    alt: {
      es: "Equipo en el campeonato mundial con la bandera de México",
      en: "Team at the World Championship with the Mexican flag",
    },
  },
  {
    slug: "historia-2016-nacional",
    season: "2016 · Velocity Vortex",
    alt: {
      es: "Equipo completo en el campeonato nacional de 2016",
      en: "Full team at the 2016 national championship",
    },
  },
  {
    slug: "decode-equipo-momento",
    season: "2025 · Decode",
    alt: {
      es: "Momento del equipo durante la temporada Decode",
      en: "Team moment during the Decode season",
    },
  },
  {
    slug: "impacto-caseta-biobuzz",
    season: "2026 · BioBuzz",
    alt: {
      es: "Caseta del equipo con cartel de proyectos sociales",
      en: "Team booth with a community-projects sign",
    },
  },
  {
    slug: "integrantes-ambiente-biobuzz",
    season: "2026 · BioBuzz",
    alt: {
      es: "Integrantes del equipo en un evento de la temporada BioBuzz",
      en: "Team members at a BioBuzz-season event",
    },
  },
  {
    slug: "centerstage-robot-ruedas",
    season: "2023 · Centerstage",
    alt: {
      es: "Detalle del robot con ruedas mecanum durante la temporada Centerstage",
      en: "Close-up of the robot's mecanum wheels during the Centerstage season",
    },
  },
  {
    slug: "centerstage-competencia-arena",
    season: "2023 · Centerstage",
    alt: {
      es: "El robot del equipo en la arena de competencia durante un partido",
      en: "The team's robot on the competition field during a match",
    },
  },
  {
    slug: "decode-robot-detalle",
    season: "2025 · Decode",
    alt: {
      es: "Detalle del robot de la temporada Decode con el número 8327",
      en: "Close-up of the Decode-season robot with the number 8327",
    },
  },
  {
    slug: "decode-equipo-energia",
    season: "2025 · Decode",
    alt: {
      es: "Integrante del equipo con la chamarra de la temporada Decode",
      en: "Team member wearing the Decode-season jacket",
    },
  },
  {
    slug: "intothedeep-equipo-retrato",
    season: "2024 · Into the Deep",
    alt: {
      es: "Tres integrantes del equipo posando durante la temporada Into the Deep",
      en: "Three team members posing during the Into the Deep season",
    },
  },
  {
    slug: "intothedeep-evento-grupo",
    season: "2024 · Into the Deep",
    alt: {
      es: "El equipo reunido en un evento de competencia durante Into the Deep",
      en: "The team gathered at a competition event during Into the Deep",
    },
  },
  {
    slug: "biobuzz-panal-construccion",
    season: "2026 · BioBuzz",
    alt: {
      es: "Integrantes del equipo armando un panal decorativo para la temporada BioBuzz",
      en: "Team members building a decorative honeycomb prop for the BioBuzz season",
    },
  },
  {
    slug: "biobuzz-mesa-exhibicion",
    season: "2026 · BioBuzz",
    alt: {
      es: "Casco oficial y mascota tejida del equipo en una mesa de exhibición",
      en: "The team's official helmet and knit mascot on a display table",
    },
  },
];

export type TeamMember = {
  id: string;
  name: string;
  areaId: "mecanica" | "programacion" | "diseno" | "marketing";
  captain?: boolean;
  photoSlug?: string;
};

export type TeamArea = {
  id: "mecanica" | "programacion" | "diseno" | "marketing";
  name: { es: string; en: string };
  description: { es: string; en: string };
};

// Descripción general de lo que hace cada área dentro de un equipo de FTC — no
// son afirmaciones específicas sobre logros de Spartans 8327, son la función del
// rol, para dar contexto a quien visite Integrantes.
export const TEAM_AREAS: TeamArea[] = [
  {
    id: "mecanica",
    name: { es: "Mecánica", en: "Mechanical" },
    description: {
      es: "Diseña, construye y ajusta el robot: chasis, mecanismos y las piezas que le permiten moverse y cumplir el reto de cada temporada.",
      en: "Designs, builds, and tunes the robot: chassis, mechanisms, and the parts that let it move and tackle each season's challenge.",
    },
  },
  {
    id: "programacion",
    name: { es: "Programación", en: "Programming" },
    description: {
      es: "Escribe el código que controla al robot, tanto en modo autónomo como en el control por control remoto durante los partidos.",
      en: "Writes the code that drives the robot, both in autonomous mode and under driver control during matches.",
    },
  },
  {
    id: "diseno",
    name: { es: "Diseño", en: "Design" },
    description: {
      es: "Cuida la identidad visual del equipo: desde materiales gráficos hasta el diseño de piezas y la documentación del proceso de construcción.",
      en: "Takes care of the team's visual identity: graphics, part design, and documenting the build process.",
    },
  },
  {
    id: "marketing",
    name: { es: "Marketing", en: "Marketing" },
    description: {
      es: "Conecta al equipo con la comunidad, patrocinadores y redes sociales — y organiza la información que el equipo comparte hacia afuera.",
      en: "Connects the team with the community, sponsors, and social media — and organizes what the team shares with the outside world.",
    },
  },
];

// Integrantes confirmados de la temporada BioBuzz 2026-2027 (carpeta
// "MIEMBROS 2026-2027", fotos completas desde 2026-10-16). Solo nombre y
// área — sin apellidos ni otros datos que el equipo no incluyó. Fabián y
// Fátima ya no aparecen en la carpeta vigente de integrantes (confirmado por
// el equipo, 2026-10-14) y se quitaron de la lista; Mateo se sumó a Diseño.
// Los 14 integrantes ya tienen fotografía confirmada.
export const TEAM_MEMBERS: TeamMember[] = [
  { id: "santiago", name: "Santiago", areaId: "mecanica", captain: true, photoSlug: "miembro-santiago" },
  { id: "armando", name: "Armando", areaId: "mecanica", photoSlug: "miembro-armando" },
  { id: "jaziel", name: "Jaziel", areaId: "mecanica", photoSlug: "miembro-jaziel" },
  { id: "yael", name: "Yael", areaId: "mecanica", photoSlug: "miembro-yael" },
  { id: "guillermo", name: "Guillermo", areaId: "programacion", photoSlug: "miembro-guillermo" },
  { id: "lucio", name: "Lucio", areaId: "programacion", photoSlug: "miembro-lucio" },
  { id: "sabine", name: "Sabine", areaId: "programacion", photoSlug: "miembro-sabine" },
  { id: "joshua", name: "Joshua", areaId: "diseno", photoSlug: "miembro-joshua" },
  { id: "mateo", name: "Mateo", areaId: "diseno", photoSlug: "miembro-mateo" },
  { id: "donaji", name: "Donají", areaId: "marketing", photoSlug: "miembro-donaji" },
  { id: "melisa", name: "Melisa", areaId: "marketing", photoSlug: "miembro-melisa" },
  { id: "yaotl", name: "Yaotl", areaId: "marketing", photoSlug: "miembro-yaotl" },
  { id: "jair", name: "Jair", areaId: "marketing", photoSlug: "miembro-jair" },
  { id: "lucero", name: "Lucero", areaId: "marketing", photoSlug: "miembro-lucero" },
];

export const SPONSOR_BOSCH = {
  name: "Bosch",
  logoAvailable: true,
  logoSlug: "bosch-logo-oficial",
  photoSlug: "bosch-patrocinio",
};

export type ColorOption = {
  name: string;
  // Todas las vistas disponibles de este color (frente, tras...), en orden de
  // exhibición. La primera es la que se usa como miniatura en la tarjeta.
  photos: string[];
};

export type Product = {
  id: string;
  category: "apparel" | "accessories";
  name: { es: string; en: string };
  priceMXN: number | null; // null = precio por confirmar
  variants: { sizes?: string[] };
  // Siempre al menos un color. Cuando hay más de uno, se muestra como selector
  // real (como la talla) y cambia las fotos exhibidas, no solo una etiqueta fija.
  colors: ColorOption[];
  available: boolean;
  // Las imágenes de productos son vistas previas de diseño (mockups creados para
  // el catálogo), no fotografías de la prenda física ya producida — ver
  // docs/informacion-pendiente-del-equipo.md.
  isMockup: boolean;
};

// Catálogo real del equipo — nombre, precio, color y disponibilidad confirmados
// el 2026-10-11 en "TIENDA ONLINE/catalogo_inventario_SPARTANS_8327.xlsx"
// (existencias: 10 unidades por producto). Las fotografías siguen siendo vistas
// previas de diseño (mockups), no fotografía del producto físico — ver
// docs/informacion-pendiente-del-equipo.md.
//
// Club y Rayas son 2 diseños de sudadera DISTINTOS (no colores del mismo
// producto — eso fue una corrección mía equivocada, revertida el mismo día).
// El equipo confirmó: "Azul/Gris" y "Azul/Negro" en el xlsx significan que cada
// diseño tiene 2 colores para elegir ("Azul" o "Gris"; "Azul" o "Negro"), igual
// que la talla — no es un color compuesto de dos tonos.
export const EXAMPLE_PRODUCTS: Product[] = [
  {
    id: "mochila-backpack-83-27",
    category: "accessories",
    name: { es: "Backpack Azul 83-27", en: "Backpack Azul 83-27" },
    priceMXN: 899,
    variants: {},
    colors: [{ name: "Azul", photos: ["producto-mochila-frente", "producto-mochila-tras"] }],
    available: true,
    isMockup: true,
  },
  {
    id: "sudadera-club-83-27",
    category: "apparel",
    name: { es: "Sudadera Club 83-27", en: "Club 83-27 Hoodie" },
    priceMXN: 699,
    variants: { sizes: ["CH", "M", "G"] },
    colors: [
      { name: "Azul", photos: ["producto-sudadera-club-frente", "producto-sudadera-club-tras"] },
      { name: "Gris", photos: ["producto-sudadera-club-frente", "producto-sudadera-club-tras"] },
    ],
    available: true,
    isMockup: true,
  },
  {
    id: "sudadera-rayas-83-27",
    category: "apparel",
    name: { es: "Sudadera Rayas 83-27", en: "Rayas 83-27 Hoodie" },
    priceMXN: 699,
    variants: { sizes: ["CH", "M", "G"] },
    colors: [
      { name: "Azul", photos: ["producto-sudadera-rayas-frente", "producto-sudadera-rayas-tras"] },
      { name: "Negro", photos: ["producto-sudadera-rayas-frente", "producto-sudadera-rayas-tras"] },
    ],
    available: true,
    isMockup: true,
  },
  {
    id: "playera-blanca-83-27",
    category: "apparel",
    name: { es: "Playera Blanca 83-27", en: "Blanca 83-27 T-shirt" },
    priceMXN: 499,
    variants: { sizes: ["CH", "M", "G"] },
    colors: [{ name: "Blanco", photos: ["producto-playera-blanca-frente", "producto-playera-blanca-tras"] }],
    available: true,
    isMockup: true,
  },
  {
    id: "llavero-83-27",
    category: "accessories",
    name: { es: "Llavero 83-27", en: "Llavero 83-27 Keychain" },
    priceMXN: 99,
    variants: {},
    colors: [{ name: "Plateado", photos: ["producto-llavero"] }],
    available: true,
    isMockup: true,
  },
];

// Número de WhatsApp oficial del equipo, confirmado por Spartans 8327.
// Formato wa.me: código de país (52, México) + número a 10 dígitos, sin "1" adicional
// (WhatsApp eliminó ese requisito para números móviles mexicanos en 2021).
export const WHATSAPP_NUMBER: string | null = "527298951473";
export const WHATSAPP_DISPLAY = "729 895 1473";

export const CONTACT_EMAIL = "spartanscbtis203@gmail.com";
export const INSTAGRAM_HANDLE = "spartans_8327";
export const INSTAGRAM_URL = "https://www.instagram.com/spartans_8327/";

// Confirmado por el equipo el 2026-10-11 y verificado en vivo: cuenta real,
// bio "spartans 8327 🤖 · cbtis 203". (Dos intentos anteriores — "spartans._8327"
// y "spartans_8327" — no correspondían a esta cuenta; se descartaron tras
// verificar que no resolvían o no eran la cuenta correcta.)
export const TIKTOK_HANDLE = "spartans_.8327";
export const TIKTOK_URL = "https://www.tiktok.com/@spartans_.8327";
