try{
    let age=15;
    if(age<18){
        throw new Error("Age must be 18 or above");
    }
    console.log("Elegible");
}catch(error){
    console.log(error.message);
}  