const validator = {
  // ...
};

const input = document.getElementById("cardNumber");
const isValidLabel = document.getElementById("isValid");
const maskedCardNumberLabel = document.getElementById("maskedCardNumber");
const cardNumberInput = document.getElementById("cardNumber");

input.addEventListener("keypress", handleKeyPressJustNumbers);


export function handleKeyPressJustNumbers(e) {
  const key = e.charCode || e.keyCode;

  if (!(key >= 48 && key <= 57)) {
    e.preventDefault();
  }
}

export function validateCard(e) {
  e.preventDefault();

  const cardNumber = cardNumberInput.value;

  if (cardNumber !== "") {
    
    const cardNumberArray = cardNumber.split("");
    const reverseCardNumber = cardNumberArray.map(Number).reverse();
    checkCardNUmber(reverseCardNumber);
  } 
  else {
    alert("Type the card number");
  }
}

export function checkCardNUmber(reverseCardNumber) {
  let totalSum = 0;
  
  for (let i = 0; i < reverseCardNumber.length; i++) {
    if ((i+1) % 2 === 0) {

      //refatorar com IF perguntando se o número multiplicado é maior que 10
      // se sim -9 e somatotal
      //se nao soma total

      const evenPositionNumberMultiplied = reverseCardNumber[i] * 2;
      const evenPositionNumberMultipliedArray = [];
      evenPositionNumberMultipliedArray.push(evenPositionNumberMultiplied);

      if (evenPositionNumberMultipliedArray.toString().length === 1) {
        totalSum = totalSum + evenPositionNumberMultiplied;
      } 
      else {
        totalSum += (evenPositionNumberMultiplied - 9);
      }
    } 
    else {
      totalSum += parseInt(reverseCardNumber[i]);
    }
  }
  
  const cardNumber = cardNumberInput.value;
  const maskedValue = "#".repeat(12) + cardNumber.substr(12);
  
  maskedCardNumberLabel.innerHTML = maskedValue;

  if (totalSum % 10 === 0) {
    
    isValidLabel.innerHTML = "Cartão Válido";
  } else {
    
    isValidLabel.innerHTML = "Cartão Inválido";
  }
  
}

export default validator;
