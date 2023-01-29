const isValidLabel = document.getElementById("isValidLabel");
const maskedCardNumberLabel = document.getElementById("maskedCardNumber");
const cardNumberInput = document.getElementById("cardNumber");

export function validateCard(e) {
  e.preventDefault();

  const cardNumber = cardNumberInput.value;

  if (cardNumber !== "") {
    const cardNumberArray = cardNumber.split("").map(Number);
    const reverseCardNumber = cardNumberArray.reverse();
    const validateCardResult = validator.isValid(reverseCardNumber);
    const maskedNumber = validator.maskify(cardNumber);

    maskedCardNumberLabel.innerHTML = maskedNumber;

    if (validateCardResult === true) {
      isValidLabel.innerHTML = "CARTAO VÁLIDO";
    } else {
      isValidLabel.innerHTML = "CARTAO INVÁLIDO";
    }    
  }   
  else {
    alert("Type the card number");
  }
}

const validator = {
  isValid: function isValid(reverseCardNumber) {
    let totalSum = 0;
    //alert("entrou");
    for (let i = 0; i < reverseCardNumber.length; i++) {
      if ((i + 1) % 2 === 0) {
        
        const evenPositionNumberMultiplied = reverseCardNumber[i] * 2;
      
        if (evenPositionNumberMultiplied < 10) {
          totalSum += evenPositionNumberMultiplied;
        } else {
          totalSum += (evenPositionNumberMultiplied - 9);        }
      } else {
        totalSum += parseInt(reverseCardNumber[i]);
      }
    }
    if (totalSum % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: function maskify(cardNumber) {
    const originalString = cardNumber;
    let maskedString = null;
    if (cardNumber.length > 4) {
      return (maskedString =
        "#".repeat(originalString.length - 4) + originalString.substr(-4));
    } else {
      maskedString = cardNumber;
      return maskedString;
    }
  },
};
export default validator;
