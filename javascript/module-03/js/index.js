"use strict";
/*==========task-01=============*/
import { user } from "./task-01.js";
const runLogRef = document.querySelector(".run-log");
runLogRef.addEventListener("click", () => {
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }
});
/*==========task-02=============*/
import { countProps } from "./task-02.js";
const runFunctionRef = document.querySelector(".run-function");
runFunctionRef.addEventListener("click", () => {
  console.log(countProps({}));
  console.log(countProps({ name: "Mango", age: 2 }));
  console.log(
    countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
  );
});
/*==========task-03=============*/
import { findBestEmployee } from "./task-03.js";
const findBestEmployeeRef = document.querySelector(".find-best-employee");
findBestEmployeeRef.addEventListener("click", () => {
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    })
  );
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    })
  );

  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    })
  );
});
/*==========task-04=============*/
import { countTotalSalary } from "./task-04.js";
const countTotalSalaryRef = document.querySelector(".count-total-salary");
countTotalSalaryRef.addEventListener("click", () => {
  console.log(countTotalSalary({})); // 0

  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    })
  );

  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    })
  );
});
/*==========task-05=============*/
import { getAllPropValues } from "./task-05.js";
import { products } from "./task-05.js";
const returnValuesArrayRef = document.querySelector(".return-values-array");
returnValuesArrayRef.addEventListener("click", () => {
  console.log(getAllPropValues(products, "name"));
  console.log(getAllPropValues(products, "quantity"));
  console.log(getAllPropValues(products, "category"));
});
/*==========task-06=============*/
import { products }

// calculate-total-price