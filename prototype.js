function student(name){
    this.name=name;
}
student.prototype.greet=function(){
console.log("Hello" + this.name);
};
let student1=new student("Ashwath");
let student2=new student("venkat");
student1.greet();
student2.greet();