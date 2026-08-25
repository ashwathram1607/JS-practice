class studendent{
    constructor(name){
        this.name=name;
    }

    greet(){
        console.log("Hello"+ this.name);
    }
}
class Developer extends studendent{
    constructor(name,language){
        super(name);
        this.language=language;
    }
}
let Developer1=new Developer("Ashwath","Javascript");
Developer1.greet();
console.log(Developer1.language);