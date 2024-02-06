var exec = require("child_process").exec;
function start(response){
   console.log("le gestionnaire 'start' est appele");
    function sleep (milliseconde){
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliseconde){
            
        }
     }
        sleep(10000);
        response.writeHead(200,{"Content-Type": "Text/plain" });
        response.write("sssss");
        response.end();  
}
function upload(response){
    console.log("le gestionnaire 'upload' est appele");
    response.writeHead(200,{"Content-Type": "Text/plain" });
    response.write("UPLOAD");
    response.end();

}
exports.start = start;
exports.upload = upload;
