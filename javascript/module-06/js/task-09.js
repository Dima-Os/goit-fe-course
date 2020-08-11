export const getNamesSortedByFriendsCount = (users) => {
  let sortedNamesArray = [];
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .forEach((element) => {
      sortedNamesArray.push(element.name);
    });
  return sortedNamesArray;
};
/*The script below were commented to allow button in html run this script*/
// console.log(getNamesSortedByFriendsCount(users));
