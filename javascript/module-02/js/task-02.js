"use strict";
const calculateEngravingPrice = function (message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
};

/*Just to separate tasks of homework*/
const functionArrayFirstRef = document.querySelector(".function-array-first");
functionArrayFirstRef.addEventListener("click", () => {
  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      10
    )
  );
});

const functionArraySecondRef = document.querySelector(".function-array-second");
functionArraySecondRef.addEventListener("click", () => {
  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      20
    )
  );
});

const functionArrayThirdRef = document.querySelector(".function-array-third");
functionArrayThirdRef.addEventListener("click", () => {
  console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
  );
});

const functionArrayFourthRef = document.querySelector(".function-array-fourth");
functionArrayFourthRef.addEventListener("click", () => {
  console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
  );
});
