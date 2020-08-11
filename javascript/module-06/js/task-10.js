export const getSortedUniqueSkills = users => {
  return users
    .reduce((allSkills, user) => [...allSkills, ...user.skills], [])
    .filter(
      (currentSkills, indexOfSkils, allSkillsArray) =>
        allSkillsArray.indexOf(currentSkills) === indexOfSkils,
    )
    .sort();
};
/*The script below were commented to allow button in html run this script*/
// console.log(getSortedUniqueSkills(users));
