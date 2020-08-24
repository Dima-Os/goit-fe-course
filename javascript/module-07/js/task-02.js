const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const galleryRef = document.querySelector("#gallery");

const createItem = (listItem) => {
  const createdIUtem = document.createElement("li");
  createdIUtem.textContent = listItem;
  return createdIUtem;
};

const createList = (list) => list.map((el) => createItem(el));

// const appendlist = galleryRef.append(...createList(ingredients));
