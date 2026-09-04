function dowork(callback){
    console.log("WorkStarted");
    console.log("work Completed");
    callback();
}
function finished(){
    console.log("Next task started");
}
dowork(finished)