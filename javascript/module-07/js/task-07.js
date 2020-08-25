const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function onRangeMove(event) {
  textRef.style.fontSize = `${event.target.valueAsNumber}px`;
}

fontSizeControlRef.addEventListener('change', onRangeMove);
