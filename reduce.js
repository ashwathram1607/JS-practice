let numbers=[20,30,40,50]
let largest=numbers.reduce((max,values)=>{
    if(values>max){
        return values;
    }else{
        return max;
    }

},0)
console.log(largest)