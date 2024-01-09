const { Console } = require("console");
var http = require("http");
var url = require("url");

function start (routes,handle){
    function OnRequest (request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Requete pour le chemin "+pathname+".");
        routes(pathname,handle,response);
    }
    http.createServer(OnRequest).listen(8082);    
    console.log("Démarage du serveur");
}
exports.start = start;
