const validationInputRef = document.querySelector("#validation-input");

function onBlurInput(event) {
  if (event.target.value.length != event.target.dataset.length) {
    event.target.classList.add("invalid");
  } else event.target.classList.add("valid");
}
function onFocusInput(event) {
  event.target.classList.remove("valid", "invalid");
}

validationInputRef.addEventListener("blur", onBlurInput);
validationInputRef.addEventListener("focus", onFocusInput);
