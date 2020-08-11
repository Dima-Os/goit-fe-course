export const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(el => el.name);
};
/*The script below were commented to allow button in html run this script*/
// console.log(getNamesSortedByFriendsCount(users));
