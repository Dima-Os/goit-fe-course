export const getUsersWithEyeColor = (users, color) => {
  return users.filter(el => el.eyeColor === color);
};
/*The script below were commented to allow button in html run this script*/
// console.log(getUsersWithEyeColor(users, 'blue'));
