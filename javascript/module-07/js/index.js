// ===========Task-01===========
import {
  categoriesRef,
  showCategories,
  showHeadingWithCount,
} from './task-01.js';
const runlogRef = document.querySelector('.run-log');
const runLog = () => {
  showCategories(categoriesRef);
  showHeadingWithCount(categoriesRef);
};
runlogRef.addEventListener('click', runLog);
// ===========Task-02===========
import { ingredients, ingredientsRef, createList } from './task-02.js';
const runSecondLogRef = document.querySelector('.run-second-log');
const runSecondLog = () => ingredientsRef.append(...createList(ingredients));
runSecondLogRef.addEventListener('click', runSecondLog);
// ===========Task-03===========
import { appendItems } from './task-03.js';
const runThirdLogRef = document.querySelector('.run-third-log');
const runThirdLog = () => appendItems();
runThirdLogRef.addEventListener('click', runThirdLog);
