self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>new Response('<h1>Aurevo — Offline</h1><p>Please reconnect to explore homes, tools and the admin dashboard.</p>',{headers:{'Content-Type':'text/html'}})))});
