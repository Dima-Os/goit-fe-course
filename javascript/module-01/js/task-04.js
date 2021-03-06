'use strict';
let credits = 23580;
let totalPrice = 0;
const pricePerDroid = 3000;
const buyButtonRef = document.querySelector('.buy-button');
buyButtonRef.addEventListener('click', () => {
  const imputtedAmount = prompt('Введите количество дроидов');
  if (imputtedAmount === null) {
    console.log('Отменено пользователем!');
  } else if (Number.isNaN(Number(imputtedAmount)) || imputtedAmount <= 0) {
    console.log('Введено не корректное число!');
  } else {
    totalPrice = Number(imputtedAmount) * pricePerDroid;
    if (totalPrice > credits) {
      console.log('Недостаточно средств на счету!');
    } else {
      console.log(
        `Вы купили ${Number(imputtedAmount)} дроидов, на счету осталось ${
          credits - totalPrice
        } кредитов.)`,
      );
    }
  }
});
