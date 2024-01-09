const { Console } = require("console");
var http = require("http");

/*  @Param : 2-creation serveur
*/
function start (){
    function OnRequest (request,response){
        response.writeHead(200,{"Content-Type": "Text/plain" });
        response.write("Hello start");
        response.end();
    }
    http.createServer(OnRequest).listen(8082);    
    console.log("Démarage du serveur");
}
exports.start = start;

/* @Param : 1-creation serveur    
*/
/*
http.createServer(
    function (request,response){
        response.writeHead(200,{"Content-Type": "Text/plain" });
        response.write("Hello word");
        response.end();
    }
).listen(8082);
*/