class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

let employee = new Employee("ashwath", 10000);
employee.getDetails();
console.log("Name:", employee.name);
console.log("salary:", employee.salary);