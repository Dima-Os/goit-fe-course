'use strict';
export const findBestEmployee = function (employees) {
  let bestQuantity = 0;
  for (const name in employees) {
    if (employees[name] > bestQuantity) {
      bestQuantity = employees[name];
      console.log('bestQuantity', bestQuantity);
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */ console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence
