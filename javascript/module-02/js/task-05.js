'use strict';

const deliveryButtonRef = document.querySelector('.delivery-button');
deliveryButtonRef.addEventListener('click', () => {
  const inputedDeliveryCountry = prompt('Введите название своей страны:');
  if (inputedDeliveryCountry == null) {
    alert('Отменено пользователем!');
  } else {
    const deliveryChina = 'Китай';
    const deliveryCostChina = 100;
    const deliveryChile = 'Чили';
    const deliveryCostChile = 250;
    const deliveryAustralia = 'Австралия';
    const deliveryCostAustralia = 170;
    const deliveryIndia = 'Індия';
    const deliveryCostIndia = 80;
    const deliveryJamaica = 'Ямайка';
    const deliveryCostJamaica = 120;

    switch (inputedDeliveryCountry.toLowerCase()) {
      case 'китай':
        alert(
          `Доставка в ${deliveryChina} будет стоить: ${deliveryCostChina} кредитов.`,
        );
        break;
      case 'чили':
        alert(
          `Доставка в ${deliveryChile} будет стоить: ${deliveryCostChile} кредитов.`,
        );
        break;
      case 'австралия':
        alert(
          `Доставка в ${deliveryAustralia} будет стоить: ${deliveryCostAustralia} кредитов.`,
        );
        break;
      case 'индия':
        alert(
          `Доставка в ${deliveryIndia} будет стоить: ${deliveryCostIndia} кредитов.`,
        );
        break;
      case 'ямайка':
        alert(
          `Доставка в ${deliveryJamaica} будет стоить: ${deliveryCostJamaica} кредитов.`,
        );
        break;
      default:
        alert('В вашей стране доставка не доступна!');
    }
  }
});
