class Animal{
eat(){
    console.log("Eating")
}
}
class Mamel extends Animal{
    walk(){
        console.log("walking")
    }
}
class Dog extends Mamel{
    bark(){
        console.log("Barking")
    }
}
let dog=new Dog();
dog.eat();
dog.walk();
dog.eat();

