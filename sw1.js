self.addEventListener('install', () => {
    console.log('SW: INSTALADO');
})

self.addEventListener('fetch', e => {
    console.log('SW: Fetch');
    console.log(e.request.url);
    //   const respOff = new Response(`
    //        Bienvenido a la pag offline
    //       Para usar la app ocupas internet
    //   `);
    // const respOff = new Response(`
    // <!DOCTYPE html>
    // <html lang="en">

    // <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Document</title>
    // </head>

    // <body>
        
    // <h1>MODO OFLINE</h1>
    // </body>

    // </html>
    // `,{
    //     headers:{
    //         'Content-Type':'text/html'
    //     }
    // });

    const respOffline = fetch('pages/viewOff.html');

    const resp = fetch(e.request)
        .catch(() => {
            console.log('SW: Error en la peticion');
            return respOffline;
        });

    //console.log(e.request.url);

    e.respondWith(resp)
})