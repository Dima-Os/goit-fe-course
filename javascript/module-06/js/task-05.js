export const getUserWithEmail = (users, email) => {
  return users.find((el) => el.email === email);
};
/*The script below were commented to allow button in html run this script*/
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));
