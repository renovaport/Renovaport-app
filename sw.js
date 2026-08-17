const CACHE="renovaport-v2";
const FILES=["./","./index.html","./styles.css","./manifest.webmanifest","./logo-renovaport.png","./logo-192.png","./logo-512.png","./favicon.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
