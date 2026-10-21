// ===============================================================
//  Service worker de la app del Inter Mitente.
//  - Página y datos (index.html, datos.js): primero de internet,
//    así siempre se ven los resultados nuevos. Sin cobertura, se
//    usa la última copia guardada.
//  - Imágenes y fuentes: de la copia guardada (son más rápidas
//    y casi nunca cambian); se refrescan por detrás.
//  No hace falta tocar este archivo al actualizar datos.js.
// ===============================================================

const CACHE = "inter-mitente-v1";
const BASICOS = ["./", "index.html", "datos.js", "manifest.json", "foto%20escudo.png", "iconos/icono-192.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASICOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const propio = url.origin === location.origin;
  const fuentes = url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com");
  if (!propio && !fuentes) return;   // YouTube, WhatsApp, mapas... van directos

  const esPagina = req.mode === "navigate" || /\.(html|js|json)$/.test(url.pathname) || url.pathname.endsWith("/");

  if (propio && esPagina) {
    // Red primero (sin caché del navegador), copia guardada si no hay conexión
    e.respondWith(
      fetch(req, { cache: "no-cache" })
        .then(res => { guardar(req, res.clone()); return res; })
        .catch(() => caches.match(req, { ignoreSearch: true })
          .then(r => r || caches.match("index.html")))
    );
  } else {
    // Imágenes y fuentes: copia guardada al instante y se actualiza por detrás
    e.respondWith(
      caches.match(req).then(cached => {
        const red = fetch(req).then(res => { guardar(req, res.clone()); return res; }).catch(() => cached);
        return cached || red;
      })
    );
  }
});

function guardar(req, res) {
  if (res.ok || res.type === "opaque") caches.open(CACHE).then(c => c.put(req, res));
}
