const staticAssets = [
'/',
'index.html',
'Instruction.html',
'BSG.html',
'StartGame.html',
'/css/Style.css',
'/js/app.js',
'sw.js',
'images/logo.png'
];

self.addEventListener('install', async event => {
const cache = await caches.open('static');
cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
const req = event.request;
const url = new URL(req.url);

if(url.origin === location.origin){
}
event.respondWith(cacheFirst(req));
});

async function cacheFirst(req){
const cacheResponse = await caches.match(req);
return cacheResponse || fetch(req);
}
