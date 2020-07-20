"use strict";
export const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];
export const getAllPropValues = function (arr, prop) {
  const propValues = [];
  for (const element of arr) {
    if (element[prop]) {
      propValues.push(element[prop]);
    }
  }
  return propValues;
};
