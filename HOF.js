function createGreeting(){
    return function(){
        console.log("Hello Ashwath")
    };
}
const greet=createGreeting();
greet();