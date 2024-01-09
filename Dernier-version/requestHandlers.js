var { setTimeout } = require("timers/promises");

function start(response){
    console.log("le gestionnaire 'start' est appele");
    setTimeout(()=>{
        console.log("timeout entrer");
        response.writeHead(200,{"Content-Type": "Text/plain" });
       response.write("sssss");
       response.end(); 
    });
}
function upload(response){
    console.log("le gestionnaire 'upload' est appele");
    response.writeHead(200,{"Content-Type": "Text/plain" });
    response.write("UPLOAD");
    response.end();
}
exports.start = start;
exports.upload = upload;