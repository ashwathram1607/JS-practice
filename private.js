class Bankaccount {
    #balance = 0;
    deposit(amount) {
        this.#balance += amount;
    }

    showbalance() {
        console.log(this.#balance);
    }
}

let account = new Bankaccount();
account.deposit(5000);
account.showbalance();
