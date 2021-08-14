async function updateDynamicCache(dynamicCache,request,response){
    
    // Response success
    if(response.ok){

        // Open space on cache
        const cache = await caches.open(dynamicCache);

        // Save on cache
        await cache.put(request,response.clone());

        return response.clone();
    }

    return response;
}