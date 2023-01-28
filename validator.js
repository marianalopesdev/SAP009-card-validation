const isValidLabel = document.getElementById("isValidLabel");
//const maskedCardNumberLabel = document.getElementById("maskedCardNumber");
const cardNumberInput = document.getElementById("cardNumber");

export function validateCard(e) {
  e.preventDefault();

  const cardNumber = cardNumberInput.value;
  console.log("cardnumber");
  // console.log(cardNumber);
  if (cardNumber !== "") {
    const cardNumberArray = cardNumber.split("").map(Number);
  
    const reverseCardNumber = cardNumberArray.reverse();
    
    const bol = validator.isValid(reverseCardNumber);

    if (bol === true) {
      isValidLabel.innerHTML = "CARTAO VÁLIDO";
    }
    validator.maskify(cardNumber);
  } else {
    isValidLabel.innerHTML = "CARTAO INVÁLIDO";
    alert("Type the card number");
  }
}

const validator = {
  isValid: function isValid(reverseCardNumber) {
    // ...do something here

    let totalSum = 0;
    //alert("entrou");
    for (let i = 0; i < reverseCardNumber.length; i++) {
      if ((i + 1) % 2 === 0) {
        //refatorar com IF perguntando se o número multiplicado é maior que 10
        // se sim -9 e somatotal
        //se nao soma total

        const evenPositionNumberMultiplied = reverseCardNumber[i] * 2;
        const evenPositionNumberMultipliedArray = [];
        evenPositionNumberMultipliedArray.push(evenPositionNumberMultiplied);

        if (evenPositionNumberMultipliedArray.toString().length === 1) {
          totalSum = totalSum + evenPositionNumberMultiplied;
        } else {
          totalSum += evenPositionNumberMultiplied - 9;
        }
      } else {
        totalSum += parseInt(reverseCardNumber[i]);
      }
    }

    // const cardNumber = cardNumberInput.value;
    // const maskedValue = "#".repeat(12) + cardNumber.substr(12);

    // maskedCardNumberLabel.innerHTML = maskedValue;

    if (totalSum % 10 === 0) {
      console.log(`valido`);

      return true;
    } else {
      return false;
    }
  },
  maskify: function maskify(cardNumber) {
    //     // const maskedValue = cardNumber.slice(0,16).concat("####");
    // console.log(cardNumberArray);

    const originalString = cardNumber;
    let maskedString = null;
    if (cardNumber.length > 4) {
      return maskedString =
        "#".repeat(originalString.length - 4) + originalString.substr(-4);
      //console.log(maskedString);
    } else {
      maskedString = cardNumber;
      return maskedString;
      //console.log(maskedString);
    }
    //     maskedCardNumberLabel.innerHTML = maskedValue;
    // document.getElementById("cardNumber").value = "";
  },
};
export default validator;
