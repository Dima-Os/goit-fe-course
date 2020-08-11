export const getUsersWithFriend = (users, friendName) => {
  return users.reduce((friendArray, currentFrend) => {
    if (currentFrend.friends.includes(friendName)) {
      friendArray.push(currentFrend.name);
    }
    return friendArray;
  }, []);
};
/*The script below were commented to allow button in html run this script*/
// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));
