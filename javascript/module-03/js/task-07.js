"use strict";
export const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
export const account = {
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
      Transaction.DEPOSIT
    );
    this.transactions.push(currentTransaction);
    this.balance += amount;
    return;
  },
  withdraw(amount) {
    if (amount > this.balance) {
      return "Cнятие такой суммы не возможно, недостаточно средств.";
    }
    const currentTransaction = this.createTransaction(
      amount,
      Transaction.WITHDRAW
    );
    this.transactions.push(currentTransaction);
    this.balance -= amount;
    return;
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    for (let transactionToFind of this.transactions) {
      if (transactionToFind.id === id) {
        return transactionToFind;
      }
    }
  },
  getTransactionTotal(type) {
    let totalByType = 0;
    for (let transactionType of this.transactions) {
      if (transactionType.type === type) {
        totalByType += transactionType.amount;
      }
    }
    return totalByType;
  },
};
