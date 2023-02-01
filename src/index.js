import validator from "./validator.js";

const input = document.getElementById("cardNumber");
const isValidLabel = document.getElementById("isValidLabel");
const maskedCardNumberLabel = document.getElementById("maskedCardNumber");
const cardNumberInput = document.getElementById("cardNumber");
const button = document.getElementById("sendButton");

input.addEventListener("keypress", handleKeyPressJustNumbers);
button.addEventListener("click", validateCard);

function handleKeyPressJustNumbers(e) {
  const key = e.charCode || e.keyCode;

  if (!(key >= 48 && key <= 57)) {
    e.preventDefault();
  }
}

export function validateCard(event) {
  event.preventDefault();
  
  const cardNumber = cardNumberInput.value;

  if (cardNumber.length === 16) {
    const cardNumberArray = cardNumber.split("").map(Number);
    const reverseCardNumber = cardNumberArray.reverse();

    const validateCardResult = validator.isValid(reverseCardNumber);
    const maskedNumber = validator.maskify(cardNumber);

    maskedCardNumberLabel.innerHTML = maskedNumber;    
    isValidLabel.classList.remove("valid","invalid");
    
    if (validateCardResult === true) {
      isValidLabel.classList.add("valid");
      isValidLabel.innerHTML = "VALID CARD";
    } else {
      isValidLabel.classList.add("invalid");
      isValidLabel.innerHTML = "INVALID CARD";
    } 
    cardNumberInput.value = "";   
  }   
  else if (cardNumber !== "") {
    alert("Type a valid card number (16 digits)");
  }
  else {
    alert("Type the card number");
  }
}


console.log(validator);