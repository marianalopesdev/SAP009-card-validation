const validator = {
  // ...
};

const input = document.getElementById("cardNumber");
const isValidLabel = document.getElementById("labelText");

input.addEventListener("keypress", handleKeyPressJustNumbers);


export function handleKeyPressJustNumbers(e) {
  const key = e.charCode || e.keyCode;

  if (!(key >= 48 && key <= 57)) {
    e.preventDefault();
  }
}

export function validateCard(e) {
  e.preventDefault();

  const cardNumber = document.getElementById("cardNumber").value;

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
  
  if (totalSum % 10 === 0) {
    alert("cartão válido");
  } else {
    alert("cartão inválido");
  }
  
}

export default validator;
