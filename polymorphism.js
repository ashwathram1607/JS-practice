class Animal{
    sound(){
        console.log("Animal makes a sound")
    }
}
class Dog extends Animal{
    sound(){
        console.log("Dog Barks")
    }
}
class Cat extends Animal{
    sound(){
        console.log("Cat Meow")
    }
}
let dog=new Dog();
let cat=new Cat();
dog.sound();
cat.sound(); 