import validator from "./validator.js";


const input = document.getElementById("cardNumber");
input.addEventListener("keypress", handleKeyPressJustNumbers);

function handleKeyPressJustNumbers(e) {
  const key = e.charCode || e.keyCode;

  if (!(key >= 48 && key <= 57)) {
    e.preventDefault();
  }
}



console.log(validator);

import { validateCard,  } from "./validator.js";
window.validateCard = validateCard;
//window.checkCardNUmber = checkCardNUmber;

