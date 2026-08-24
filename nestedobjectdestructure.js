let student={
    name:"ashwath",
    age:25,
    address:{
        city:"Madurai",
        state:"TamilNadu",
    }
};
let {address:{city,state}}=student;
console.log(city);
console.log(state);