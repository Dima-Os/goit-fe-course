"use strict";
export const findBestEmployee = function (employees) {
  let bestQuantity = 0;
  let bestEmployee;
  for (const name in employees) {
    if (employees[name] > bestQuantity) {
      bestEmployee = name;
      bestQuantity = employees[name];
    }
  }
  return bestEmployee;
};
