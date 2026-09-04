class Food{
    #price;
    constructor (name,price,stock){
        this.name=name;
        this.#price=price;
        this.stock=stock;
    }
    getprice(){
        return this.#price;
    }
    getDetails(){
        return `Food: ${this.name}, Price: ${this.#price}`;
    }
}
class Pizza extends Food {
    constructor(name,price,size,stock) {
        super(name,price,stock);
        this.size=size; 
    }
    getDetails(){
        return `${super.getDetails()}, size: ${this.size}`;
    }
}
let pizza = new Pizza("chicken pizza", 350, "Large", 50);
class Burger extends Food {
    constructor(name,price,type,stock) {
        super(name,price,stock);
        this.type=type; 
    }
    getDetails(){
        return `${super.getDetails()}, type: ${this.type}`;
    }
}
let burger=new Burger("cheese burger",200,"Veg",50);
let foods=[pizza,burger];
foods.forEach(food=>{
    console.log(food.getDetails());
})
let foodNames=foods.map(food=>food.name);
console.log("Food Names:", foodNames);
let selectedFood = foods.find(food => food.name == "chicken pizza");
console.log("Selected:",selectedFood.getDetails());
let expensiveFoods=foods.filter(food=>food.getprice()>250);
console.log(
    "Foods above $250",expensiveFoods.map(food=>food.name)
);
let totalprice = foods.reduce((total, food) => total + food.getprice(), 0);
0
console.log("Total price:", totalprice);
function placeorder(foodName,quantity){
let food=foods.find(food=>food.name==foodName);
}
if(!foods){
console.log("food not found")
return;
}
    


