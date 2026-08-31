class Student {
    static college = "ABC College";
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(this.name);
    }
    static showCollege() {
        console.log(Student.college);
    }
}
let student = new Student("Ashwath");
student.showName();
Student.showCollege();
console.log(Student.college);