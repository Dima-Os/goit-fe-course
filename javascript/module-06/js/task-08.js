export const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(currentFrend => currentFrend.friends.includes(friendName))
    .map(el => el.name);
};
/*The script below were commented to allow button in html run this script*/
// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));
