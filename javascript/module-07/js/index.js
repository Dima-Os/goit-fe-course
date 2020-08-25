import {
  categoriesRef,
  showCategories,
  showHeadingWithCount,
} from './task-01.js';
import { ingredients, ingredientsRef, createList } from './task-02.js';
import { appendItems } from './task-03.js';

const runlogRef = document.querySelector('.run-log');
const runSecondLogRef = document.querySelector('.run-second-log');
const runThirdLogRef = document.querySelector('.run-third-log');

function onRunLog() {
  showCategories(categoriesRef);
  showHeadingWithCount(categoriesRef);
}
function onRunSecondLog() {
  ingredientsRef.append(...createList(ingredients));
}
function onRunThirdLog() {
  appendItems();
}

runlogRef.addEventListener('click', onRunLog);
runSecondLogRef.addEventListener('click', onRunSecondLog);
runThirdLogRef.addEventListener('click', onRunThirdLog);
