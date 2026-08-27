class camera{
    takephoto(){
        console.log("Taking photo");

    }
};
class musicplayer{
    playmusic(){
        console.log("playing music");
    }
};
class mobile{
    call(){
        console.log("calling")
    }
};
Object.getOwnPropertyNames(camera.prototype).forEach(method=>{
    if (method!=="consructor"){
        mobile.prototype [method]=camera.prototype[method];
    }
});
Object.getOwnPropertyNames(musicplayer.prototype).forEach(method=>{
    if (method!=="constructor"){
        mobile.prototype[method]=musicplayer.prototype[method];
    }
});
let phone=new mobile();
phone.takephoto();
phone.call();
phone.playmusic();