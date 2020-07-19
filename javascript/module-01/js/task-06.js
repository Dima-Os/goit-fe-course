'use strict';
let total = 0;
let input;
const startInputButtonRef = document.querySelector('.start-input-button');
startInputButtonRef.addEventListener('click', () => {
  do {
    input = prompt('Введите число:');
    if (input === null) {
      break;
    } else if (Number.isNaN(Number(input))) {
      alert('Было введено не число, попробуйте еще раз!');
    }
    total += +input;
    console.log(input);
  } while (input !== null);
  alert(`Общая сумма чисел равна: ${total}`);
});
