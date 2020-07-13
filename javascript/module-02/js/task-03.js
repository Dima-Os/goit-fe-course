"use strict";
const findLongestWord = function (string) {
  let LongestWord = string.split(" ")[0];
  for (let i = 1; i < string.split(" ").length; i += 1) {
    if (string.split(" ")[i].length > LongestWord.length) {
      LongestWord = string.split(" ")[i];
    }
  }
  return LongestWord;
};
/*Just to separate tasks of homework*/
const longestWordFirstRef = document.querySelector(".longest-word-first");
longestWordFirstRef.addEventListener("click", () => {
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
});

const longestWordSecondRef = document.querySelector(".longest-word-second");
longestWordSecondRef.addEventListener("click", () => {
  console.log(findLongestWord("Google do a roll"));
});

const longestWordThirdRef = document.querySelector(".longest-word-third");
longestWordThirdRef.addEventListener("click", () => {
  console.log(findLongestWord("May the force be with you"));
});
