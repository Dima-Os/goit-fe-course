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
