import validator from "./validator.js";

const input = document.getElementById("cardNumber");
const isValidLabel = document.getElementById("isValidLabel");
const cardNumberInput = document.getElementById("cardNumber");
const button = document.getElementById("sendButton");
const labelCardNumber = document.getElementById("label-card-number");
const checkIcon = document.getElementById("check-icon");
const errorIcon = document.getElementById("error-icon");

input.addEventListener("keypress", handleKeyPressJustNumbers);
button.addEventListener("click", validateCard);

function handleKeyPressJustNumbers(e) {
  const key = e.charCode || e.keyCode;

  if (!(key >= 48 && key <= 57)) {
    e.preventDefault();
  }
}

function validateCard(event) {
  event.preventDefault();
  
  const cardNumber = cardNumberInput.value;

  if (cardNumber.length === 16) {
    const cardNumberArray = cardNumber.split("").map(Number);
    const reverseCardNumber = cardNumberArray.reverse();
    
    const validateCardResult = validator.isValid(reverseCardNumber);
    const maskedNumber = validator.maskify(cardNumber);

    labelCardNumber.innerHTML = maskedNumber.substr(-4); 
    isValidLabel.classList.remove("valid","invalid");
    
    if (validateCardResult === true) {
      isValidLabel.classList.add("valid");
      isValidLabel.innerHTML = "VALID CARD";
      errorIcon.classList.add("check-display");
      checkIcon.classList.remove("check-display");
    } else {
      isValidLabel.classList.add("invalid");
      isValidLabel.innerHTML = "INVALID CARD";
      checkIcon.classList.add("check-display");
      errorIcon.classList.remove("check-display");
    } 
    cardNumberInput.value = "";   
  }   
  else if (cardNumber !== "") {
    isValidLabel.classList.add("invalid");
    isValidLabel.innerHTML = "Type a valid card number (16 digits)";
  }
  else {
    isValidLabel.classList.add("invalid");
    isValidLabel.innerHTML = "Type the card number";
  }
}


console.log(validator);