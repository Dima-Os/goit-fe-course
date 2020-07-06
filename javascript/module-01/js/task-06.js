let total = 0;
let input;
const startInputButtonRef = document.querySelector('.start-input-button');
startInputButtonRef.addEventListener('click', () => {
  while (input !== null) {
    input = prompt('Введите число:');
    if (isNaN(input)) {
      alert('Было введено не число, попробуйте еще раз!');
    } else {
      total += Number(input);
    }
  }

  alert(`Общая сумма чисел равна: ${total}`);
});
