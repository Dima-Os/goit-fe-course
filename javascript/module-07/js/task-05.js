const nameOutputRef = document.querySelector('#name-output');
const nameInput = document.querySelector('#name-input');

function onInput(event) {
  nameOutputRef.textContent =
    event.target.value === '' ? 'Незнакомец' : event.target.value;
}

nameInput.addEventListener('input', onInput);
