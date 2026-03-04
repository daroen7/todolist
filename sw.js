const cacheName = 'todo-v1';
const assets = ['./', './index.html', './styles.css', './app.js'];

// Install service worker
self.addEventListener('install', e => {
    e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

// Fetch assets
self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});