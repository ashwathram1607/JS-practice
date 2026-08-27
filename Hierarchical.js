class Animal{
    eat(){
        console.log("Eating");
    }
}
class Dog extends Animal{
    bark(){
        console.log("Barking")
    }  
}
class Cat extends Animal{  
    meow(){
        console.log("Meowing")
    }
}
let dog=new Dog();
dog.eat();
dog.bark();
let cat=new Cat();
cat.eat();
cat.meow();