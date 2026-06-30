const CACHE_NAME = 'buscador-lf-cache-v1';
const urlsToCache = [
  './',
  './buscador.html',
  './manifest.json',
  './file.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});