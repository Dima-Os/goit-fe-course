const boxesRef = document.querySelector('#boxes');
const controlsRef = document.querySelector('#controls');
const userInputRef = document.querySelector('#controls > input[type="number"]');
const renderBtnRef = document.querySelector(
  '#controls > button[data-action="render"]',
);
const destroyBtnRef = document.querySelector(
  '#controls > button[data-action="destroy"]',
);

function getRundomColor() {
  const getRundomNum = () => parseInt(Math.random() * 255);
  return `rgb(${getRundomNum()},${getRundomNum()},${getRundomNum()})`;
}

function createBox(size) {
  const box = document.createElement('div');
  box.setAttribute(
    'style',
    `width:${size}px; height:${size}px; background-color:${getRundomColor()}`,
  );
  return box;
}

function createBoxes(amount) {
  let createdBoxes = document.createElement('div');
  for (let i = 1; i <= amount; i += 1) {
    const size = 30 + i * 10;
    const createdBox = createBox(size);
    createdBoxes.append(createdBox);
  }
  boxesRef.append(createdBoxes);
  userInputRef.value = '';
}
function onRender() {
  createBoxes(+userInputRef.value);
}

function onDestroy() {
  boxesRef.innerHTML = '';
}

renderBtnRef.addEventListener('click', onRender);
destroyBtnRef.addEventListener('click', onDestroy);
