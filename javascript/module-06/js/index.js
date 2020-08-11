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
const runFiveLog = () => {
  console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
  console.log(getUserWithEmail(users, "elmahead@omatom.com"));
};
const runFiveLogRef = document.querySelector(".run-five-log");
runFiveLogRef.addEventListener("click", runFiveLog);