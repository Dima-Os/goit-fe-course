import users from "./users.js";
/*==========task-01=============*/
import { getUserNames } from "./task-01.js";
const runLog = () => {
  console.log(getUserNames(users));
};
const runLogRef = document.querySelector(".run-log");
runLogRef.addEventListener("click", runLog);
/*==========task-02=============*/
import { getUsersWithEyeColor } from "./task-02.js";
const runSecondLog = () => {
  console.log(getUsersWithEyeColor(users, "blue"));
};
const runSecondLogRef = document.querySelector(".run-second-log");
runSecondLogRef.addEventListener("click", runSecondLog);
/*==========task-03=============*/
import { getUsersWithGender } from "./task-03.js";
const runThirdLog = () => {
  console.log(getUsersWithGender(users, "male"));
};
const runThirdLogRef = document.querySelector(".run-third-log");
runThirdLogRef.addEventListener("click", runThirdLog);
/*==========task-04=============*/
import { getInactiveUsers } from "./task-04.js";
const runFourthLog = () => {
  console.log(getInactiveUsers(users));
};
const runFourthLogRef = document.querySelector(".run-fourth-log");
runFourthLogRef.addEventListener("click", runFourthLog);
/*==========task-05=============*/
import { getUserWithEmail } from "./task-05.js";
const runFivethLog = () => {
  console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
  console.log(getUserWithEmail(users, "elmahead@omatom.com"));
};
const runFivethLogRef = document.querySelector(".run-fiveth-log");
runFivethLogRef.addEventListener("click", runFivethLog);
/*==========task-06=============*/
import { getUsersWithAge } from "./task-06.js";
const runSixthLog = () => {
  console.log(getUsersWithAge(users, 20, 30));
  console.log(getUsersWithAge(users, 30, 40));
};
const runSixthLogRef = document.querySelector(".run-sixth-log");
runSixthLogRef.addEventListener("click", runSixthLog);
/*==========task-07=============*/
import { calculateTotalBalance } from "./task-07.js";
const runSeventhLog = () => {
  console.log(calculateTotalBalance(users));
};
const runSeventhLogRef = document.querySelector(".run-seventh-log");
runSeventhLogRef.addEventListener("click", runSeventhLog);
/*==========task-08=============*/
import { getUsersWithFriend } from "./task-08.js";
const runEighthLog = () => {
  console.log(getUsersWithFriend(users, "Briana Decker"));
  console.log(getUsersWithFriend(users, "Goldie Gentry"));
};
const runEighthLogRef = document.querySelector(".run-eighth-log");
runEighthLogRef.addEventListener("click", runEighthLog);
/*==========task-09=============*/
import { getNamesSortedByFriendsCount } from "./task-09.js";
const runNinethLog = () => {
  console.log(getNamesSortedByFriendsCount(users));
};
const runNinethLogRef = document.querySelector(".run-ninth-log");
runNinethLogRef.addEventListener("click", runNinethLog);
