class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(this.name + " is barking");
    }
}
let dog = new Dog("Tommy", "Labrador");
dog.eat();
dog.bark();