let numbers=[1,2,3]
let result=numbers.flatMap(function(num){
    return[num,num*2];
});
console.log(result);