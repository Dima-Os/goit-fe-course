export const getSortedUniqueSkills = users => {
  return users
    .reduce((allSkills, user) => [...allSkills, ...user.skills], [])
    .sort()
    .reduce((allUniqSkills, skill) => {
      if (allUniqSkills[allUniqSkills.length - 1] !== skill) {
        allUniqSkills.push(skill);
      }
      return allUniqSkills;
    }, []);
};
/*The script below were commented to allow button in html run this script*/
// console.log(getSortedUniqueSkills(users));
