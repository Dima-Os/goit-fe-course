export const getUsersWithAge = (users, min, max) => {
  return users.filter((el) => el.age > min && el.age < max);
};
/*The script below were commented to allow button in html run this script*/
// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
