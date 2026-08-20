function student (name){
    this.name=name;
};
student.prototype.course="Javascript";
let student1=new student("Ashwath");
console.log(student1.course);