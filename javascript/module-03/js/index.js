import { user } from './task-01.js';
const runLogRef = document.querySelector('.run-log');
runLogRef.addEventListener('click', () => {
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }
});
