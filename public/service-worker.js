const cacheName = 'mi-app-cache';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '../src/index.js',
  '../src/App.js',
  '../src/componentes/views/loading/loading.js',
  '../src/componentes/views/loading/styles.css',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
