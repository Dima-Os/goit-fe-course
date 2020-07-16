"use strict";
export const findLongestWord = function (string) {
  let LongestWord = string.split(" ")[0];
  for (let i = 1; i < string.split(" ").length; i += 1) {
    if (string.split(" ")[i].length > LongestWord.length) {
      LongestWord = string.split(" ")[i];
    }
  }
  return LongestWord;
};
