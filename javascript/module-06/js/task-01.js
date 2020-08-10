// import users from './users.js';
export const getUserNames = users => {
  let usersNamesArray = [];
  users.forEach(el => usersNamesArray.push(el.name));
  return usersNamesArray;
};

/*The script below were commented to allow button in html run this script*/
// console.log(getUserNames(users));
