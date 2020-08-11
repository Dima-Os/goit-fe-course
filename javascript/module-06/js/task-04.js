export const getInactiveUsers = (users) => {
  return users.filter((el) => !el.isActive);
};
/*The script below were commented to allow button in html run this script*/
// console.log(getInactiveUsers(users));
