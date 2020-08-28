const valueRef = document.querySelector("#value");
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);

let counterValue = +valueRef.textContent;

const increment = () => ++valueRef.textContent;
const decrement = () => --valueRef.textContent;

incrementBtnRef.addEventListener("click", increment);
decrementBtnRef.addEventListener("click", decrement);
