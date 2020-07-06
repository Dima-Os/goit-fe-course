'use strict';
const ADMIN_PASSWORD = 'jqueryismy';
const authorizationRef = document.querySelector('.authorization');
let message = 0;
authorizationRef.addEventListener('click', () => {
  const userInput = prompt('Введіть пароль:');
  if (userInput == null) {
    message = 'Отменено пользователем!';
  } else if (userInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }
  alert(message);
});
