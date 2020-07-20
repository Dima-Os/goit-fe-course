'use strict';
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    this.transactions.push({ AMOUNT: amount, TYPE: type, ID: 0 });
  },
};

account.createTransaction(300, 'deposit');
console.log(account);
console.log(account.transactions);
account.createTransaction(600, 'deposit');
console.log(account);
console.log(account.transactions);
