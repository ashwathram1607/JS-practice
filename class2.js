class student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("Hello" + this.name);
    }
}
let student1=new student("Ashwath",25);
let student2=new student("venkat",27);
student1.greet();
student2.greet();