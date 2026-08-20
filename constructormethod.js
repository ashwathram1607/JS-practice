function student(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log("Hello"+this.name)
    };
}
let student1=new student("Ashwath",26);
let student2=new student("venkat",28);
console.log(student1);
console.log(student2)