"use strict";
let input;
const numbers = [];
let total = 0;
const SummOfArray = function (inputedArray) {
  for (const element of inputedArray) {
    total += +element;
  }
  return total;
};
const startInputButtonRef = document.querySelector(".start-input-button");
startInputButtonRef.addEventListener("click", () => {
  do {
    input = prompt("Введите число:");
    if (Number.isNaN(Number(input))) {
      alert("Было введено не число, попробуйте еще раз!");
    } else if (input === null) {
      break;
    } else {
      numbers.push(input);
    }
  } while (input !== null);

  console.log(SummOfArray(numbers));
});
