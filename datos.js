// ===============================================================
//  DATOS DEL EQUIPO — después de cada jornada solo hay que tocar
//  este archivo. La página se actualiza sola (último resultado,
//  próximo partido, calendario y goleadores).
// ===============================================================

const CLUB = {
  nombre: "Inter Mitente",
  escudo: "foto escudo.png",
  temporada: "2026/27",
};

// PARTIDOS
// - local: true si jugamos en casa, false si jugamos fuera.
// - fecha, hora, campo y mapa son opcionales: si no los pones,
//   la web dice que están por confirmar.
// - mapa: enlace de Google Maps al campo (opcional).
// - Con fecha y hora, la portada muestra la cuenta atrás y el botón
//   "Añadir al calendario". La fecha tiene que llevar dd/mm/aaaa.
// - Jornada de descanso: { jornada: 4, descanso: true }
// - Cuando se juegue un partido, añade "goles" (y "goleadores").
//   En cuanto tiene "goles", pasa solo a la sección de resultados.
// - mvp: el mejor jugador del partido, escrito igual que en la plantilla.
//   Con eso se monta sola la tabla de MVPs. Si lo dejas en "", no cuenta.
const PARTIDOS = [
  {
    jornada: 1, local: false, rival: "San Roke F.T.", escudo: "san roke.png",
    fecha: "Sáb. 03/10/2026", hora: "19:15", campo: "Kabiezes",
    goles: { nosotros: 3, rival: 0 },
    goleadores: ["Sandro Martin", "Borja Arroita", "Mario Elvira"],
    mvp: "Josu Postigo",
  },
  {
    jornada: 2, local: false, rival: "Elefutbol Fc", escudo: "elefutbol.png",
    fecha: "Sáb. 17/10/2026", hora: "18:00", campo: "San Jorge",
    goles: { nosotros: 3, rival: 7 },
    goleadores: ["Samuel Sagarna", "Josu Elorrieta", "Sendoa Guerrero"],
    mvp: "",   // no hubo MVP de nuestro equipo
  },
  { jornada: 3,  local: true,  rival: "Euskoreading F.C",    escudo: "euskoreading.png" },
  { jornada: 4,  descanso: true },   // Jornada en la que descansamos
  { jornada: 5,  local: true,  rival: "Blackburn Reventaos", escudo: "blackburn.jpg" },
  { jornada: 6,  local: false, rival: "Kaldotarrak Fkt",     escudo: "kaldotarrak.png" },
  { jornada: 7,  local: true,  rival: "Fc Farsantes",        escudo: "farsantes.jpg" },
  { jornada: 8,  local: false, rival: "La Patata Mekanika",  escudo: "la patata mekanika.png" },
  { jornada: 9,  local: true,  rival: "Rba",                 escudo: "rba.jpg" },
  { jornada: 10, local: false, rival: "Palmeras Kt",         escudo: "palmeras.png" },
  { jornada: 11, local: true,  rival: "Eternos Repelega 94", escudo: "eternos repelega 94.png" },
];

// CORREO para pedir camisetas y para contactar con el club
const CORREO = "intermitentefr@gmail.com";

// REDES SOCIALES — pega el enlace completo de cada red.
// Las que dejes vacías ("") no salen en la web.
const REDES = {
  instagram: "https://www.instagram.com/inter_mitente_fr/",
  tiktok: "",
  youtube: "",
  x: "",
};

// CLASIFICACIÓN DE LA LIGA
// Después de cada jornada, copia los números de la clasificación oficial.
// pj = jugados, g = ganados, e = empatados, p = perdidos,
// gf = goles a favor, gc = goles en contra.
// Los puntos y el orden se calculan solos. El escudo se coge del calendario.
// Ponlos en el mismo orden que la clasificación oficial: si dos equipos
// empatan en todo, se respeta el orden en que están aquí.
// Mientras todos tengan pj: 0, la web dice que la clasificación llegará pronto.
// Actualizada tras la jornada 2.
const CLASIFICACION = [
  { equipo: "Blackburn Reventaos", pj: 1, g: 1, e: 0, p: 0, gf: 5, gc: 1 },
  { equipo: "Palmeras Kt",         pj: 1, g: 1, e: 0, p: 0, gf: 4, gc: 1 },
  { equipo: "Elefutbol Fc",        pj: 2, g: 1, e: 0, p: 1, gf: 9, gc: 7 },
  { equipo: "Rba",                 pj: 1, g: 1, e: 0, p: 0, gf: 4, gc: 2 },
  { equipo: "Euskoreading F.C",    pj: 1, g: 1, e: 0, p: 0, gf: 4, gc: 2 },
  { equipo: "Inter Mitente",       pj: 2, g: 1, e: 0, p: 1, gf: 6, gc: 7 },
  { equipo: "La Patata Mekanika",  pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0 },
  { equipo: "Fc Farsantes",        pj: 1, g: 0, e: 0, p: 1, gf: 2, gc: 4 },
  { equipo: "Kaldotarrak Fkt",     pj: 1, g: 0, e: 0, p: 1, gf: 1, gc: 4 },
  { equipo: "San Roke F.T.",       pj: 1, g: 0, e: 0, p: 1, gf: 0, gc: 3 },
  { equipo: "Eternos Repelega 94", pj: 1, g: 0, e: 0, p: 1, gf: 1, gc: 5 },
];

// SOBRE NOSOTROS — cada línea entre comillas es un párrafo.
const SOBRE_NOSOTROS = [
  "Somos el Inter Mitente FC, un equipo de amigos de Barakaldo que juega en la liga de fútbol rápido.",
  "Nos une una idea clara: pasarlo bien, competir cada fin de semana y no perder nunca el buen rollo.",
  "Esta temporada 2026/27 nuestro objetivo es ascender. ¡Ven a vernos jugar!",
];

// MEJORES GOLES (vídeos de YouTube)
// Copia el enlace del vídeo desde YouTube (botón "Compartir") y pégalo en "youtube".
// Valen enlaces normales, cortos (youtu.be), Shorts y el código de "Insertar".
// Los más nuevos, arriba. jornada y temporada son opcionales.
// Ejemplo:
// { titulo: "Golazo de falta", jugador: "Sandro Martin", jornada: 1, youtube: "https://youtu.be/XXXXXXXXXXX" },
const MEJORES_GOLES = [
  { titulo: "Gol Bolado", jugador: "Ander Bolado", youtube: "https://www.youtube.com/embed/YgcITj8B8Bo" },
];

// PLANTILLA (partidos jugados y goles de cada jugador)
const JUGADORES = [
  { dorsal: 13, nombre: "Ander López",        posicion: "Portero",        partidos: 2, goles: 0 },
  { dorsal: 2,  nombre: "Josu Postigo",       posicion: "Defensa",        partidos: 2, goles: 0 },
  { dorsal: 3,  nombre: "Ander Bolado",       posicion: "Defensa",        partidos: 1, goles: 0 },
  { dorsal: 4,  nombre: "Gorka Ramos",        posicion: "Defensa",        partidos: 0, goles: 0 },
  { dorsal: 10, nombre: "Ander Guerrero",     posicion: "Defensa",        partidos: 2, goles: 0 },
  { dorsal: 32, nombre: "Josu Elorrieta",     posicion: "Defensa",        partidos: 1, goles: 1 },
  { dorsal: 6,  nombre: "Arkaitz Ferreira",   posicion: "Ala",            partidos: 2, goles: 0 },
  { dorsal: 14, nombre: "Samuel Sagarna",     posicion: "Ala",            partidos: 2, goles: 1 },
  { dorsal: 22, nombre: "Ander Tena",         posicion: "Ala",            partidos: 1, goles: 0 },
  { dorsal: 8,  nombre: "Borja Arroita",      posicion: "Centrocampista", partidos: 1, goles: 1 },
  { dorsal: 11, nombre: "Oier Tena",          posicion: "Centrocampista", partidos: 1, goles: 0 },
  { dorsal: 30, nombre: "Diego Sánchez",      posicion: "Centrocampista", partidos: 2, goles: 0 },
  { dorsal: 45, nombre: "Mario Elvira",       posicion: "Centrocampista", partidos: 2, goles: 1 },
  { dorsal: 71, nombre: "Sandro Martin",      posicion: "Centrocampista", partidos: 2, goles: 1 },
  { dorsal: 80, nombre: "Sendoa Guerrero",    posicion: "Centrocampista", partidos: 2, goles: 1 },
  { dorsal: 17, nombre: "Jon Xabier Beltran", posicion: "Delantero",      partidos: 2, goles: 0 },
  { dorsal: 99, nombre: "Alex Gonzalo",       posicion: "Delantero",      partidos: 2, goles: 0 },
];
