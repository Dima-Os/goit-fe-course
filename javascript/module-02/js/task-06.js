'use strict';
let input;
const numbers = [];
let total = 0;

const startInputButtonRef = document.querySelector('.start-input-button');
startInputButtonRef.addEventListener('click', () => {
  do {
    input = prompt('Введите число:');
    if (Number.isNaN(+input)) {
      alert('Было введено не число, попробуйте еще раз!');
    }
    numbers.push(input);
  } while (input !== null);

  if (numbers.length > 0) {
    for (const element of numbers) {
      total += +element;
    }

    console.log(`Общая сумма чисел равна: ${total} .`);
  }
});
