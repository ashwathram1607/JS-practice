class BankAccount {
    #balance = 0;
    deposit(amount) {
        this.#balance += amount;
    }
    get balance() {
        return this.#balance;
    }
    set balance(amount) {
        if (amount >= 0) {
            this.#balance = amount;
        } else {
            console.log("Balance cannot be negative");
        }
    }
}

let account = new BankAccount();

account.deposit(10000);
console.log(account.balance);