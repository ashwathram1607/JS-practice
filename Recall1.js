class Product{
    constructor(name,price,stocks){
        this.name=name;
        this.price=price;
        this.stocks=stocks;
    }
}

let laptop=new Product("Laptop",50000,10);
let mobile=new Product("Mobile",25000,20);
let headset=new Product("Headset",5000,50);
let Products=[laptop,mobile,headset];
console.log(Products);
let search="Laptop";
let result = Products.find(function(product) {
    return product.name === search;
});
console.log(result);
let cart = [];
cart.push(result);
console.log(cart);
let qty=2;
let total=result.price*2;
console.log(result)
result.stocks=result.stocks-qty;
console.log(result.stocks);
let paymentMethod="COD";
switch(paymentMethod){
    case "COD":
        console.log("Cash on Delivery selected");
        break;
    default:
        console.log("Other payment method");
}
let customer1 = {
    name: "Alice",
    email: "alice@example.com"
};
let order = {
    orderId:100,
    customer: customer1,
    product:result,
    qty:2,
    total:100000,
    paymentMethod:"COD",
    status: "Pending"
};
let payment = "success";
if (payment == "success") {

    order.status="Confirmed";
    console.log("Your order is placed");
} else {
    console.log("Wait for your payment");
}
console.log(order);
console.log("orderId",order.orderId);
console.log("Customer:", order.customer.name);
console.log("Product: ",order.product.name);
console.log("Quantity:", order.qty);
console.log("Total:", order.total);
console.log("Payment:", order.paymentMethod);
console.log("Status:", order.status);
let cancelorder=true;
if(cancelorder==true){
    order.status="Cancel"
    console.log("your placeed order is cancelled now!");
    order.product.stocks=order.product.stocks+order.qty;
    console.log("existing stock is Restored");
    console.log("Stock:", order.product.stocks);
    console.log("Status:",order.status);

}