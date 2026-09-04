// 1.Normal-function
function placeorder(){
    console.log("order placed");
}
// 2.function Expression
let prepareFood=function(){
    console.log("Food is preparing");
}
// 3.Arrow function
let DeliverFood=()=>{
    console.log("Food Delivered");
}
// function call
placeorder();
prepareFood();
DeliverFood();