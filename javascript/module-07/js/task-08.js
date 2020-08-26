let boxesRef = document.querySelector("#boxes");
const controlsRef = document.querySelector("#controls");
const userInputRef = document.querySelector('#controls > input[type="number"]');
const renderBtnRef = document.querySelector(
  '#controls > button[data-action="render"]'
);
const destroyBtnRef = document.querySelector(
  '#controls > button[data-action="destroy"]'
);

function generateRandomRgb() {
  const rgb = [];
  let i = 0;
  while (i < 3) {
    i += 1;
    rgb.push(parseInt(Math.random() * 255));
  }
  return rgb.join(", ");
}

function createBoxes(amount) {
  let createdDivs = [];
  while (amount !== 0) {
    amount -= 1;
    createdDivs.push(
      `<div style="
      width: ${30 + amount * 10}px; 
      height: ${30 + amount * 10}px;
      background-color: rgb(${generateRandomRgb()});">
      </div>`
    );
  }
  return createdDivs;
}
function onRenderClick() {
  boxesRef.insertAdjacentHTML(
    "afterbegin",
    createBoxes(userInputRef.value).reverse().join("")
  );
}
function onDeleteClick() {
  boxesRef.remove();
  controlsRef.insertAdjacentHTML("afterend", '<div id="boxes"></div>');
  boxesRef = document.querySelector("#boxes");
}

renderBtnRef.addEventListener("click", onRenderClick);
destroyBtnRef.addEventListener("click", onDeleteClick);
