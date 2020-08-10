export const getUsersWithEyeColor = (users, color) => {
  let usersWithEyeColor = [];
  users.forEach(el => {
    if (el.eyeColor === color) {
      usersWithEyeColor.push(el);
    }
  });
  return usersWithEyeColor;
};
/*The script below were commented to allow button in html run this script*/
// console.log(getUsersWithEyeColor(users, 'blue'));
