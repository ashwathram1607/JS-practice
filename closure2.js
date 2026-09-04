function MakeBankaccount(initialbalance) {
    let balance = initialbalance;

    return {
        deposite(amount) {
            balance += amount;
            return `Balance: $${balance}`;
        },
        withdraw(amount) {
            if (amount > balance) {
                return 'Insufficient Funds';
            }
            balance -= amount;
            return `Balance: $${balance}`;
        },
        getBalance() {
            return balance;
        }
    };
}

const myaccount = MakeBankaccount(100);
console.log(myaccount.deposite(50));
console.log(myaccount.withdraw(20));
console.log(myaccount.getBalance());