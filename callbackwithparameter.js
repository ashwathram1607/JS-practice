function dowork(callback){
    console.log("Workstarted");
    let result="workcompleted";
    callback(result);
}
function finished(result){
    console.log(result)
}
dowork(finished);