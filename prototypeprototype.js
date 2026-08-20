function student(name){
    this.name=name;
}
student.prototype.course="Javascript";
let student1= new  student("Ashwath");
let student2 =new student("venkat");
console.log(student1.name);
console.log(student1.course);
console.log(student2.name);
console.log(student2.course);
