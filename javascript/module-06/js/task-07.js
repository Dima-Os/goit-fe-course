export const calculateTotalBalance = (users) => {
  return users.reduce((total, current) => total + current.balance, 0);
};
/*The script below were commented to allow button in html run this script*/
// console.log(calculateTotalBalance(users));
