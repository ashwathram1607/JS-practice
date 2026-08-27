class Bankaccount{
    #balance=0;
    deposite(ammount){
        this.#balance+=ammount;
    }
    getBalance(){
        return this.#balance;
    }
}
let account=new Bankaccount();
account.deposite(10000);
console.log(account.getBalance());
