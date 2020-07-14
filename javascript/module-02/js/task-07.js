"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};
const isLoginUnique = function (allLogins, login) {
  return !allLogins.includes(login);
};
const addLogin = function (allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    logins.push(login);
    return "Логин успешно добавлен!";
  }
  if (!isLoginValid(login)) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }
  if (!isLoginUnique(allLogins, login)) {
    return "Такой логин уже используется!";
  }
};

const firstLoginButton = document.querySelector(".first-login-button");
firstLoginButton.addEventListener("click", () => {
  console.log(addLogin(logins, "Ajax"));
});
const secondLoginButton = document.querySelector(".second-login-button");
secondLoginButton.addEventListener("click", () => {
  console.log(addLogin(logins, "robotGoogles"));
});
const thirdLoginButton = document.querySelector(".third-login-button");
thirdLoginButton.addEventListener("click", () => {
  console.log(addLogin(logins, "Zod"));
});
const fourthLoginButton = document.querySelector(".fourth-login-button");
fourthLoginButton.addEventListener("click", () => {
  console.log(addLogin(logins, "jqueryisextremelyfast"));
});
