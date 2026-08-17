let numbers=[10,20,30,40]
let result=numbers.reduce(function(total,num){
    return total + num;
},0);
console.log(result)