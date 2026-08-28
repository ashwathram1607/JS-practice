class Bankaccount{
    #balance=0;
    deposite(ammount){
        this.#balance+=ammount;
    }
    withdraw(ammount){
        if(ammount >= this.#balance){ 
            this.#balance -= ammount;
            console.log("withdraw ammount successfully!");
        }else{
            console.log("Insufficient balance!");
        }
    }
    getBalance(){
        return this.#balance;
    }
}
let account=new Bankaccount();
account.deposite(10000);
console.log(account.getBalance());
