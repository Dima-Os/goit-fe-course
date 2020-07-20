"use strict";
export const countTotalSalary = function (employees) {
  let totalSalary = 0;
  for (const employee in employees) {
    totalSalary += employees[employee];
  }
  return totalSalary;
};
