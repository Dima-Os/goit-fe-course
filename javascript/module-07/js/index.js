// ===========Task-01===========
import {
  categoriesRef,
  showCategories,
  showHeadingWithCount,
} from "./task-01.js";
const runlogRef = document.querySelector(".run-log");
const runLog = () => {
  showCategories(categoriesRef);
  showHeadingWithCount(categoriesRef);
};
runlogRef.addEventListener("click", runLog);
// ===========Task-02===========
