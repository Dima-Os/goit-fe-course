"use strict";
export const formatString = function (string) {
  return string.length <= 40 ? string : string.slice(0, 40) + " ...";
};
