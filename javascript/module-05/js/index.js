'use strict';
/*==========task-01=============*/

import { Account } from './task-01.js';
const runLog = () => {
  console.log(Account.prototype.getInfo);

  const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
  });

  mango.getInfo();

  const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
  });

  poly.getInfo();
};
const runLogRef = document.querySelector('.run-log');
runLogRef.addEventListener('click', runLog);

/*==========task-02=============*/

import { User } from './task-02.js';
const runSecondLog = () => {
  const mango = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
  });

  mango.getInfo();

  const poly = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
  });

  poly.getInfo();
};
const runSecondLogRef = document.querySelector('.run-second-log');
runSecondLogRef.addEventListener('click', runSecondLog);

/*==========task-03=============*/
import { Storage } from './task-03.js';
const runThirdLog = () => {
  const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);

  const items = storage.getItems();
  console.table(items);

  storage.addItem('Дроид');
  console.table(storage.items);

  storage.removeItem('Пролонгер');
  console.table(storage.items);
};
const runThirdLogRef = document.querySelector('.run-third-log');
runThirdLogRef.addEventListener('click', runThirdLog);
/*==========task-04=============*/
import { StringBuilder } from './task-04.js';
const runFourthLog = () => {
  const builder = new StringBuilder('.');
  builder.append('^');
  console.log(builder.value);

  builder.prepend('^');
  console.log(builder.value);
  builder.pad('=');
  console.log(builder.value);
};
const runFourthLogRef = document.querySelector('.run-fourth-log');
runFourthLogRef.addEventListener('click', runFourthLog);
