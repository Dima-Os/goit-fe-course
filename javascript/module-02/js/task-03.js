'use strict';
export const findLongestWord = function (string) {
  const splittedString = string.split(' ');
  let LongestWord = splittedString[0];
  for (let i = 1; i < splittedString.length; i += 1) {
    if (string.split(' ')[i].length > LongestWord.length) {
      LongestWord = splittedString[i];
    }
  }
  return LongestWord;
};
