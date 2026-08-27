class Animal{
    sound(){
        console.log("Animal Makes a Sound");
    }
}
class Dog extends Animal{
    sound(){
        super.sound();
        console.log("Dog Barks");
    }
}
let dog=new Dog();
dog.sound();