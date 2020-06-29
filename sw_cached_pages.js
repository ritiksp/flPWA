const cacheName = 'v1';

const cacheAssets = [
    '/index.html',
    '/style.css',
    '/js/main.js',
    '/img/portflio-1.jpg',
    '/img/portflio-2.jpg',
    '/img/portflio-3.jpg',
    '/img/portflio-4.jpg',
    '/img/portflio-5.jpg',
    '/img/portflio-9.jpg',
  ];


//call install event
self.addEventListener('install', e => {
    console.log('Service Worker: Activated');

    e.waitUntil(
        caches
          .open(cacheName)
          .then(cache => {
            console.log('Service Worker: Caching Files');
            cache.addAll(cacheAssets);
          })
          .then(() => self.skipWaiting())
      );
});

// Call Activate Event
self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');

    // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );

});

// Call Fetch Event
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
  });
  