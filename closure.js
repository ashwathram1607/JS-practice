function outer(){
    let name="Ashwath";
    function inner(){
        console.log(name)
    }
    return inner;    
}
let result=outer();
result();