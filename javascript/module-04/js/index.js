'use strict';
/*==========task-01=============*/
import { account } from './task-01.js';
const runLog = function () {
  account.changeDiscount(0.15);
  console.log(account.discount);
  console.log(account.showOrders());
  account.addOrder(5000, 'order-4');
  console.log(account.balance);
  console.log(account.showOrders());
};
const runLogRef = document.querySelector('.run-log');
runLogRef.addEventListener('click', runLog);
/*==========task-02=============*/
import { inventory } from './task-02.js';
import { invokeInventoryAction } from './task-02.js';
const runInv = function () {
  invokeInventoryAction('Medkit', inventory.add.bind(inventory));
  console.log(inventory.items);
  invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
  console.log(inventory.items);
};
const runInvRef = document.querySelector('.run-inventory');
runInvRef.addEventListener('click', runInv);
