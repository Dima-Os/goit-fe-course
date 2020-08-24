export const categoriesRef = document.querySelector("#categories");
export const showCategories = (list) =>
  console.log(`В списке ${list.children.length} категории. `);
export const showHeadingWithCount = (list) =>
  [...list.children].forEach((element) => {
    console.log(`Категория: ${element.querySelector("h2").textContent};`);
    console.log(
      `Количество элементов: ${element.querySelectorAll("li").length};`
    );
  });
