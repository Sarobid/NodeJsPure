const { Console } = require("console");
var http = require("http");
var url = require("url");

function start (routes){
    function OnRequest (request,response){
        var pathname = url.parse(request.url).pathname;
        routes(pathname);
        response.writeHead(200,{"Content-Type": "Text/plain" });
        response.write("Hello start");
        response.end();
    }
    http.createServer(OnRequest).listen(8082);    
    console.log("Démarage du serveur");
}
exports.start = start;
