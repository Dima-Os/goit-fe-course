import users from './users.js';
/*==========task-01=============*/
import { getUserNames } from './task-01.js';
const runLog = () => {
  console.log(getUserNames(users));
};
const runLogRef = document.querySelector('.run-log');
runLogRef.addEventListener('click', runLog);
/*==========task-02=============*/
import { getUsersWithEyeColor } from './task-02.js';
const runSecondLog = () => {
  console.log(getUsersWithEyeColor(users, 'blue'));
};
const runSecondLogRef = document.querySelector('.run-second-log');
runSecondLogRef.addEventListener('click', runSecondLog);
/*==========task-03=============*/
import { getUsersWithGender } from './task-03.js';
const runThirdLog = () => {
  console.log(getUsersWithGender(users, 'male'));
};
const runThirdLogRef = document.querySelector('.run-third-log');
runThirdLogRef.addEventListener('click', runThirdLog);
