"use strict";
export const checkForSpam = function (message) {
  return (
    message.toLowerCase().includes("sale") ||
    message.toLowerCase().includes("spam")
  );
};
