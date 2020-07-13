'use strict';
const totalQuantity = 100;
const orderedQuantityRef = document.querySelector('.ordered-quantity');
const storeCheckRef = document.querySelector('.store-check');

storeCheckRef.addEventListener('click', () => {
  const orderedQuantity = orderedQuantityRef.value;
  if (orderedQuantity > totalQuantity) {
    console.log('На складе недостаточно твоаров!');
  } else {
    console.log('Заказ оформлен, с вами свяжется менеджер.');
  }
});
