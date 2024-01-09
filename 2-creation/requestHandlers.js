function start(){
    console.log("le gestionnaire 'start' est appele");
    function sleep (milliseconde){
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliseconde){
            
        }
     }
     sleep(10000);
    return "START";
}
function upload(){
    console.log("le gestionnaire 'upload' est appele");
    return "UPLOAD";
}
exports.start = start;
exports.upload = upload;