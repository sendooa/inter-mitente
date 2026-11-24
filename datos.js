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
// - cartel: la imagen de "Matchday" que subís a Instagram antes del partido.
//   Sale en la tarjeta del próximo partido y en la sección de Instagram.
// - imagen: la imagen de "Resultado final" que subís después del partido.
//   Sale en el resultado y en la sección de Instagram.
//   Guarda las dos en la carpeta "instagram" y escribe aquí su nombre,
//   por ejemplo: cartel: "instagram/j3-cartel.jpg"
const PARTIDOS = [
  {
    jornada: 1, local: false, rival: "San Roke F.T.", escudo: "san roke.png",
    fecha: "Sáb. 03/10/2026", hora: "19:15", campo: "Kabiezes",
    goles: { nosotros: 3, rival: 0 },
    goleadores: ["Sandro Martin", "Borja Arroita", "Mario Elvira"],
    mvp: "Josu Postigo",
    imagen: "instagram/j1-resultado.jpg",
  },
  {
    jornada: 2, local: false, rival: "Elefutbol Fc", escudo: "elefutbol.png",
    fecha: "Sáb. 17/10/2026", hora: "18:00", campo: "San Jorge",
    goles: { nosotros: 3, rival: 7 },
    goleadores: ["Samuel Sagarna", "Josu Elorrieta", "Sendoa Guerrero"],
    mvp: "",   // no hubo MVP de nuestro equipo
    cartel: "instagram/j2-cartel.jpg",
    imagen: "instagram/j2-resultado.jpg",
  },
  {
    jornada: 3, local: true, rival: "Euskoreading F.C", escudo: "euskoreading.png",
    fecha: "Sáb. 07/11/2026", hora: "17:30", campo: "Lutxana",
    mapa: "https://www.google.com/maps/search/?api=1&query=Campo+de+f%C3%BAtbol+Lutxana+Barakaldo",
    goles: { nosotros: 0, rival: 3 },
    goleadores: [],
    mvp: "",
    cartel: "instagram/j3-cartel.jpg",
    imagen: "instagram/j3-resultado.jpg",
  },
  { jornada: 4,  descanso: true },   // Jornada en la que descansamos
  {
    jornada: 5, local: true, rival: "Blackburn Reventaos", escudo: "blackburn.jpg",
    fecha: "Sáb. 14/11/2026", hora: "18:30", campo: "Lutxana",
    mapa: "https://www.google.com/maps/search/?api=1&query=Campo+de+f%C3%BAtbol+Lutxana+Barakaldo",
    goles: { nosotros: 4, rival: 3 },
    goleadores: ["Borja Arroita (2)", "Jon Xabier Beltran", "Alex Gonzalo"],
    mvp: "Ander López",
    imagen: "instagram/j5-resultado.jpg",
  },
  {
    jornada: 6, local: false, rival: "Kaldotarrak Fkt", escudo: "kaldotarrak.png",
    fecha: "Sáb. 21/11/2026", hora: "20:30", campo: "San Jorge 1",
    goles: { nosotros: 2, rival: 1 },
    goleadores: ["Mario Elvira", "Josu Postigo"],
    mvp: "Josu Postigo",
    cartel: "instagram/j6-cartel.jpg",
    imagen: "instagram/j6-resultado.jpg",
  },
  // De la J7 en adelante la liga solo ha confirmado el día: falta hora y campo.
  { jornada: 7,  local: true,  rival: "Fc Farsantes",        escudo: "farsantes.jpg",          fecha: "Sáb. 28/11/2026" },
  { jornada: 8,  local: false, rival: "La Patata Mekanika",  escudo: "la patata mekanika.png", fecha: "Sáb. 12/12/2026" },
  { jornada: 9,  local: true,  rival: "Rba",                 escudo: "rba.jpg",                fecha: "Sáb. 09/01/2027" },
  { jornada: 10, local: false, rival: "Palmeras Kt",         escudo: "palmeras.png",           fecha: "Sáb. 16/01/2027" },
  { jornada: 11, local: true,  rival: "Eternos Repelega 94", escudo: "eternos repelega 94.png", fecha: "Sáb. 23/01/2027" },
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
// Actualizada el 24/11/2026 (jornada 6 de la liga).
const CLASIFICACION = [
  { equipo: "Euskoreading F.C",    pj: 6, g: 5, e: 0, p: 1, gf: 21, gc: 13 },
  { equipo: "Elefutbol Fc",        pj: 5, g: 3, e: 1, p: 1, gf: 23, gc: 13 },
  { equipo: "San Roke F.T.",       pj: 6, g: 3, e: 1, p: 2, gf: 17, gc: 13 },
  { equipo: "Blackburn Reventaos", pj: 5, g: 3, e: 0, p: 2, gf: 18, gc: 11 },
  { equipo: "Palmeras Kt",         pj: 4, g: 3, e: 0, p: 1, gf: 10, gc: 6 },
  { equipo: "Inter Mitente",       pj: 5, g: 3, e: 0, p: 2, gf: 12, gc: 14 },
  { equipo: "Rba",                 pj: 4, g: 2, e: 0, p: 2, gf: 7,  gc: 9 },
  { equipo: "Fc Farsantes",        pj: 6, g: 1, e: 2, p: 3, gf: 24, gc: 19 },
  { equipo: "La Patata Mekanika",  pj: 5, g: 1, e: 1, p: 3, gf: 9,  gc: 15 },
  { equipo: "Eternos Repelega 94", pj: 4, g: 1, e: 1, p: 2, gf: 12, gc: 19 },
  { equipo: "Kaldotarrak Fkt",     pj: 6, g: 0, e: 0, p: 6, gf: 6,  gc: 27 },
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
  { dorsal: 13, nombre: "Ander López",        posicion: "Portero",        partidos: 5, goles: 0 },
  { dorsal: 2,  nombre: "Josu Postigo",       posicion: "Defensa",        partidos: 5, goles: 1 },
  { dorsal: 3,  nombre: "Ander Bolado",       posicion: "Defensa",        partidos: 4, goles: 0 },
  { dorsal: 4,  nombre: "Gorka Ramos",        posicion: "Defensa",        partidos: 2, goles: 0 },
  { dorsal: 10, nombre: "Ander Guerrero",     posicion: "Defensa",        partidos: 4, goles: 0 },
  { dorsal: 32, nombre: "Josu Elorrieta",     posicion: "Defensa",        partidos: 3, goles: 1 },
  { dorsal: 6,  nombre: "Arkaitz Ferreira",   posicion: "Ala",            partidos: 4, goles: 0 },
  { dorsal: 14, nombre: "Samuel Sagarna",     posicion: "Ala",            partidos: 5, goles: 1 },
  { dorsal: 22, nombre: "Ander Tena",         posicion: "Ala",            partidos: 2, goles: 0 },
  { dorsal: 11, nombre: "Oier Tena",          posicion: "Centrocampista", partidos: 1, goles: 0 },
  { dorsal: 8,  nombre: "Borja Arroita",      posicion: "Centrocampista", partidos: 2, goles: 3 },
  { dorsal: 30, nombre: "Diego Sánchez",      posicion: "Centrocampista", partidos: 3, goles: 0 },
  { dorsal: 45, nombre: "Mario Elvira",       posicion: "Centrocampista", partidos: 3, goles: 2 },
  { dorsal: 71, nombre: "Sandro Martin",      posicion: "Centrocampista", partidos: 5, goles: 1 },
  { dorsal: 80, nombre: "Sendoa Guerrero",    posicion: "Centrocampista", partidos: 4, goles: 1 },
  { dorsal: 17, nombre: "Jon Xabier Beltran", posicion: "Delantero",      partidos: 5, goles: 1 },
  { dorsal: 99, nombre: "Alex Gonzalo",       posicion: "Delantero",      partidos: 3, goles: 1 },
];
