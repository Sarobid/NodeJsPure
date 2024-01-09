const { Console } = require("console");
var http = require("http");
var url = require("url");

function start (routes,handle){
    function OnRequest (request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Requete pour le chemin "+pathname+".");
        var content = routes(pathname,handle);
        response.writeHead(200,{"Content-Type": "Text/plain" });
        response.write(content);
        response.end();
    }
    http.createServer(OnRequest).listen(8082);    
    console.log("Démarage du serveur");
}
exports.start = start;
