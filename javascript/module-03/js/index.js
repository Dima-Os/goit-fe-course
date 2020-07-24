'use strict';
/*==========task-01=============*/
import { user } from './task-01.js';
const runLogRef = document.querySelector('.run-log');
runLogRef.addEventListener('click', () => {
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }
});
/*==========task-02=============*/
import { countProps } from './task-02.js';
const runFunctionRef = document.querySelector('.run-function');
runFunctionRef.addEventListener('click', () => {
  console.log(countProps({}));
  console.log(countProps({ name: 'Mango', age: 2 }));
  console.log(
    countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }),
  );
});
/*==========task-03=============*/
import { findBestEmployee } from './task-03.js';
const findBestEmployeeRef = document.querySelector('.find-best-employee');
findBestEmployeeRef.addEventListener('click', () => {
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  );
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  );

  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  );
});
/*==========task-04=============*/
import { countTotalSalary } from './task-04.js';
const countTotalSalaryRef = document.querySelector('.count-total-salary');
countTotalSalaryRef.addEventListener('click', () => {
  console.log(countTotalSalary({})); // 0

  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  );

  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  );
});
/*==========task-05=============*/
import { getAllPropValues } from './task-05.js';
import { products } from './task-05.js';
const returnValuesArrayRef = document.querySelector('.return-values-array');
returnValuesArrayRef.addEventListener('click', () => {
  console.log(getAllPropValues(products, 'name'));
  console.log(getAllPropValues(products, 'quantity'));
  console.log(getAllPropValues(products, 'category'));
});
/*==========task-06=============*/

import { calculateTotalPrice } from './task-06.js';
const calculateTotalPriceRef = document.querySelector('.calculate-total-price');
calculateTotalPriceRef.addEventListener('click', () => {
  console.log(calculateTotalPrice(products, 'Радар')); // 5200
  console.log(calculateTotalPrice(products, 'Дроид'));
});

/*==========task-07=============*/
/*A few functions just to test methods */
import { Transaction } from './task-07.js';
import { account } from './task-07.js';
const runCabinet = document.querySelector('.run-cabinet');
runCabinet.addEventListener('click', () => {
  account.deposit(500);
  account.deposit(600);
  account.deposit(100);
  account.withdraw(10);
  account.withdraw(10);
  account.withdraw(200);
  account.withdraw(100);
  console.log(account.getBalance());
  account.withdraw(200);
  console.log(account.getBalance());
  console.log(account.getTransactionDetails(4));
  console.log(account.getTransactionTotal(Transaction.WITHDRAW));
  console.log(account.getTransactionTotal(Transaction.DEPOSIT));
});
