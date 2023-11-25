const cacheName = 'Almacen';
const filesToCache = [
  '/',
  '../index.html',
  './public/manifest.json',
  '../src/index.js',
  '../src/App.js',
  '../src/componentes/views/loading/loading.js',
  '../src/componentes/views/loading/styles.css',
  '../src/componentes/views/footer/footer.js',
  '../offline.html',
  '../src/componentes/img/juandedios.jpg',
  '',
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
      return response || fetch(e.request).then((fetchResponse) => {
        if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
          return fetchResponse;
        }

        const responseToCache = fetchResponse.clone();

        caches.open(cacheName).then((cache) => {
          cache.put(e.request, responseToCache);
        });

        return fetchResponse;
      }).catch(() => {
        // Si la solicitud falla y no hay caché disponible, muestra una página de "offline"
        return caches.match('/offline.html');
      });
    })
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((existingCacheName) => {
          if (existingCacheName !== cacheName) {
            return caches.delete(existingCacheName);
          }
        })
      );
    })
  );
});