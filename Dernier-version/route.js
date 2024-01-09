function route(pathname,handle,response){
    console.log("Debut traitement "+pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response);
    }else{
        console.log("Aucun gestionnaire associe");
        response.writeHead(200,{"Content-Type": "Text/plain" });
        response.write("not found");
        response.end();
    }
}
exports.route = route;