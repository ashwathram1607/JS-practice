class CoffeMachine{
    makecoffe(){
        this.#boilwater();
        this.#addcoffe();
        console.log("Coffe Is Reddy");
    }
#boilwater(){
    console.log("Boiling water")
}
#addcoffe(){
    console.log("Adding coffe")
}
}
let macine=new CoffeMachine();
macine.makecoffe();