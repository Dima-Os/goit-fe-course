export const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
export const ingredientsRef = document.querySelector('#ingredients');

export const createItem = listItem => {
  const createdIUtem = document.createElement('li');
  createdIUtem.textContent = listItem;
  return createdIUtem;
};

export const createList = list => list.map(el => createItem(el));

// const appendlist = galleryRef.append(...createList(ingredients));
