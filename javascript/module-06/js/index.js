/*==========task-01=============*/
import { getUserNames } from './task-01.js';
import users from './users.js';
const runLog = () => {
  console.log(getUserNames(users));
};
const runLogRef = document.querySelector('.run-log');
runLogRef.addEventListener('click', runLog);
