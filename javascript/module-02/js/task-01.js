"use strict";

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
const startFunctionRef = document.querySelector(".start-function");
startFunctionRef.addEventListener("click", () => {
  logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
});
const startSecondFunctionRef = document.querySelector(".start-second-function");
startSecondFunctionRef.addEventListener("click", () => {
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
});
