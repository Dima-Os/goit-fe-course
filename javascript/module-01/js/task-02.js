'use strict';
const totalQuantity = 100;
const orderedQuantityRef = document.querySelector('.ordered-quantity');
const storeCheckRef = document.querySelector('.store-check');

storeCheckRef.addEventListener('click', () => {
  const orderedQuantity = Number(orderedQuantityRef.value);
  if (orderedQuantity > 0 && orderedQuantity > totalQuantity) {
    console.log('На складе недостаточно твоаров!');
  } else if (orderedQuantity > 0 && orderedQuantity <= totalQuantity) {
    console.log('Заказ оформлен, с вами свяжется менеджер.');
  } else {
    console.log('Некорректно введено значение!');
  }
});
