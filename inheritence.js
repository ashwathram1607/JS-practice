class student{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log("Hello"+this.name);
    }
}
class Developer extends student{
}
let Developer1=new Developer("Ashwath");
Developer1.greet();
