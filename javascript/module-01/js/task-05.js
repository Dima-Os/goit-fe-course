'use strict';
let deliveryCost;
const deliveryButtonRef = document.querySelector('.delivery-button');
deliveryButtonRef.addEventListener('click', () => {
  const inputedDeliveryCountry = prompt('Введите название своей страны:');
  if (inputedDeliveryCountry == null) {
    alert('Отменено пользователем!');
  } else {
    let deliveryCountry;
    switch (inputedDeliveryCountry.toLowerCase()) {
      case 'китай':
        deliveryCost = 100;
        deliveryCountry = 'Китай';
        break;
      case 'чили':
        deliveryCost = 250;
        deliveryCountry = 'Чили';
        break;
      case 'австралия':
        deliveryCost = 170;
        deliveryCountry = 'Австралия';
        break;
      case 'индия':
        deliveryCost = 80;
        deliveryCountry = 'Индия';
        break;
      case 'ямайка':
        deliveryCost = 120;
        deliveryCountry = 'Ямайка';
        break;
      default:
        alert('В вашей стране доставка не доступна!');
    }
    if (typeof deliveryCost !== 'undefined') {
      alert(
        `Доставка в ${deliveryCountry} будет стоить: ${deliveryCost} кредитов.`,
      );
    }
  }
});
