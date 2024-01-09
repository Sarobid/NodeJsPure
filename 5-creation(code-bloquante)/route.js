function route(pathname,handle){
    console.log("Debut traitement "+pathname);
    if(typeof handle[pathname] === 'function'){
        return handle[pathname]();
    }else{
        console.log("Aucun gestionnaire associe");
        return "NOT FOUND";
    }
}
exports.route = route;