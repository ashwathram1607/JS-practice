function student(name){
    this.name=name;
}
student.prototype.course="Javascript";
let student1=new student("ashwath");
console.log(student1.hasOwnProperty("name"));
console.log(student1.hasOwnProperty("course"));