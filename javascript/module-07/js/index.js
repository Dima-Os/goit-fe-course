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
import { ingredients, galleryRef, createItem, createList } from './task-02.js';
const runSecondLogRef = document.querySelector('.run-second-log');
const runSecondLog = () => galleryRef.append(...createList(ingredients));
runSecondLogRef.addEventListener('click', runSecondLog);
