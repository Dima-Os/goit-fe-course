'use strict';
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    return {
      amount: amount,
      type: type,
      id: this.transactions.length,
    };
  },
  deposit(amount) {
    const currentTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT,
    );
    this.transactions.push(currentTransaction);
    this.balance += amount;
    return;
  },
  withdraw(amount) {
    if (this.balance > amount) {
      const currentTransaction = this.createTransaction(
        amount,
        Transaction.DEPOSIT,
      );
      this.transactions.push(currentTransaction);
      this.balance -= amount;
      return;
    }
    return 'Fuck you!';
  },
};

console.log(account);
console.log(account.balance);

console.log(account.withdraw(2000));
console.log(account.withdraw(10));
console.log(account.withdraw(1));
account.deposit(500);
account.deposit(600);
account.deposit(100);
console.log(account.withdraw(10));
console.log(account.withdraw(10));
console.log(account);
console.log(account.balance);
console.log(account.withdraw(2000));
console.log(account);
console.log(account.withdraw(100));
console.log(account.balance);
console.log(account.withdraw(2000));
console.log(account);
console.log(account.balance);
