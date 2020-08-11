export const getUsersWithGender = (user, gender) => {
  return user.filter((el) => el.gender === gender);
};
/*The script below were commented to allow button in html run this script*/
// console.log(getUsersWithGender(users, 'male'));
