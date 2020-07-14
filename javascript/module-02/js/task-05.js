"use strict";
const checkForSpam = function (message) {
  return (
    message.toLowerCase().includes("sale") ||
    message.toLowerCase().includes("spam")
  );
};
/*Just to separate tasks of homework*/
const checkForSpamFirst = document.querySelector(".check-for-spam-first");
checkForSpamFirst.addEventListener("click", () => {
  console.log(checkForSpam("Latest technology news"));
});
const checkForSpamSecond = document.querySelector(".check-for-spam-second");
checkForSpamSecond.addEventListener("click", () => {
  console.log(checkForSpam("JavaScript weekly newsletter"));
});
const checkForSpamThird = document.querySelector(".check-for-spam-third");
checkForSpamThird.addEventListener("click", () => {
  console.log(checkForSpam("Get best sale offers now!"));
});
const checkForSpamFourth = document.querySelector(".check-for-spam-fourth");
checkForSpamFourth.addEventListener("click", () => {
  console.log(checkForSpam("[SPAM] How to earn fast money?"));
});
