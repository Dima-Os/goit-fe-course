/*Task-01*/
import { logItems } from "./task-01.js";
const startFunctionRef = document.querySelector(".start-function");
startFunctionRef.addEventListener("click", () => {
  logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
});

/*Task-02*/
import { calculateEngravingPrice } from "./task-02.js";
const functionArrayFirstRef = document.querySelector(".function-array-first");
functionArrayFirstRef.addEventListener("click", () => {
  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      10
    )
  );
  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      20
    )
  );
  console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
  );
  console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
  );
});

/*Task-03*/
import { findLongestWord } from "./task-03.js";
const longestWordFirstRef = document.querySelector(".longest-word-first");
longestWordFirstRef.addEventListener("click", () => {
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  console.log(findLongestWord("Google do a roll"));
  console.log(findLongestWord("May the force be with you"));
});

/*Task-04*/
import { formatString } from "./task-04.js";
const cutStringFirstRef = document.querySelector(".cut-string-first");
cutStringFirstRef.addEventListener("click", () => {
  console.log(formatString("Curabitur ligula sapien, tincidunt non."));
  console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
  );
  console.log(formatString("Curabitur ligula sapien."));
  console.log(
    formatString(
      "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
    )
  );
});

/*Task-05*/
import { checkForSpam } from "./task-05.js";
const checkForSpamFirst = document.querySelector(".check-for-spam-first");
checkForSpamFirst.addEventListener("click", () => {
  console.log(checkForSpam("Latest technology news"));
  console.log(checkForSpam("JavaScript weekly newsletter"));
  console.log(checkForSpam("Get best sale offers now!"));
  console.log(checkForSpam("[SPAM] How to earn fast money?"));
});
/*Task-07*/
import { logins, isLoginValid, isLoginUnique, addLogin } from "./task-07.js";
const firstLoginButton = document.querySelector(".first-login-button");
firstLoginButton.addEventListener("click", () => {
  console.log(addLogin(logins, "Ajax"));
  console.log(addLogin(logins, "robotGoogles"));
  console.log(addLogin(logins, "Zod"));
  console.log(addLogin(logins, "jqueryisextremelyfast"));
});
