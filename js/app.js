// Instalar el service worker
let url = window.location.href;
let swDirect = "/PWA-ERGJ-U2-P5/sw.js";

if (navigator.serviceWorker) {
  if (url.includes("localhost")) {
    swDirect = "/sw.js";
  }
  navigator.serviceWorker.register(swDirect);
} else {
  console.log("Ups, cambia de navegador");
}


// if (window.caches) {
//     console.log('Tenemos cache')

//     caches.open('prueba')
//     caches.open('prueba-v2')

//     caches.has('prueba')
//         .then(console.log)

//     caches.open('cache-v1')
//         .then((cache) => {
//             cache.addAll([
//                 '/index.html',
//                 '/css/page.css',
//                 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css',
//                 '/img/chem.PNG'
//             ]).then(() => {
//                 cache.delete('/css/page.css');
//                 cache.put('index.html', new Response('Actualizado desde cache'))
//             });

//             cache.match('index.html')
//                 .then((res)=>{
//                     res.text().then((text)=>{console.log(text)});
//                     console.log(res)
//                 })
//         })
    
//     caches.keys().then((keys)=>{
//         console.log(keys)
//     })
    
// }