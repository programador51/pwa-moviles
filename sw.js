importScripts('js/sw-utils.js');

const 
    STATIC_CACHE = 'static-v3',
    DYNAMIC_CACHE = 'dynamic-v1',
    INMUTABLE_CACHE = 'inmutable-v1',
    APP_SHELL = [
        // '/',
        'index.html',
        'css/style.css',
        'img/favicon.ico',
        'img/avatars/spiderman.jpg',
        'img/avatars/wolverine.jpg',
        'img/avatars/hulk.jpg',
        'img/avatars/ironman.jpg',
        'img/avatars/thor.jpg',
        'js/app.js',
        'js/sw-utils.js'
    ],
    APP_SHELL_INMUTABLE = [
        'https://fonts.googleapis.com/css?family=Quicksand:300,400',
        'https://fonts.googleapis.com/css?family=Lato:400,300',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
        'css/animate.css',
        'js/libs/jquery.js'
    ];


self.addEventListener('install',async e => {

    try {
        
        // OPEN CACHE STATIC
        const staticCache = await caches.open(STATIC_CACHE);

        // SAVE FILES ON CACHE STATIC
        await staticCache.addAll(APP_SHELL);

        // OPEN CACHE INMUTABLE
        const inmutableCache = await caches.open(INMUTABLE_CACHE);

        // SAVE FILES ON CACHE INMUTABLE
        await inmutableCache.addAll(APP_SHELL_INMUTABLE);

        e.waitUntil(Promise.all[staticCache,inmutableCache]);  
    } catch (error) {
        console.error('ERROR',error);
    }

});

self.addEventListener('activate',async e => {
    try {
        
        const cacheNames = await caches.keys();

        await cacheNames.forEach(name=>{
            if(name!== STATIC_CACHE && key.includes('static')){
                return caches.delete(name);
            }
        });

        e.waitUntil(cacheNames);

    } catch (error) {
        
    }
});

self.addEventListener('fetch',async e => {
    try {
        
        const data = await caches.match(e.request);

        if(data){
            return data;
        }else{
            const networkResponse = await fetch(e.request);
            return await updateDynamicCache(DYNAMIC_CACHE,e.request,networkResponse);
        }


        e.respondWith(data);

    } catch (error) {
        console.error('ERROR',error);
    }
})