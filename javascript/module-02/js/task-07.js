"use strict";
export const logins = [
  "Mango",
  "robotGoogles",
  "Poly",
  "Aj4x1sBozz",
  "qwerty123",
];
export const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};
export const isLoginUnique = function (allLogins, login) {
  return !allLogins.includes(login);
};
export const addLogin = function (allLogins, login) {
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
