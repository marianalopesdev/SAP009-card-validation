const validator = {
  // ...
};

const input = document.getElementById("cardNumber");
const labelText = document.getElementById("labelText");

input.addEventListener("keypress", handleKeyPressJustNumbers);
input.addEventListener("input", function () {
  labelText.innerHTML = input.value;
});

export function handleKeyPressJustNumbers(e) {
  const key = e.charCode || e.keyCode;

  if (!(key >= 48 && key <= 57)) {
    e.preventDefault();
  }
}

export function validateCard(e) {
  e.preventDefault();
  const cardNumber = document.getElementById("cardNumber").value; 
  // const isValidLabel = document.getElementById("isValidLabel");
  const cardNumberArray = cardNumber.split("");
  const reverseCardNumber = cardNumberArray.map(Number).reverse();

  checkCardNUmber(reverseCardNumber);
}

//PROBLEMA: NUMERO MENOR QUE 5 NA POSICAO PAR

export function checkCardNUmber(reverseCardNumber) {
 
  let totalSum = 0;
  let oddNumber = 0;

  for (let i = 0; i < reverseCardNumber.length; i++) {
    if (i % 2 === 0) {
      console.log("posição par: " + i + " número: " + reverseCardNumber[i]);
      const evenPositionNumberMultiplied = reverseCardNumber[i] * 2;
      console.log("Número ímpar multiplicado: " + evenPositionNumberMultiplied);
      const sumEvenPositionNumberArray = [];
      sumEvenPositionNumberArray.push(evenPositionNumberMultiplied);
      const splitEvenPositionNumber = sumEvenPositionNumberArray
        .toString()
        .split("").map(Number);      
      const sumEvenPositionNumberSplited =
      splitEvenPositionNumber[0] + splitEvenPositionNumber[1];
      
      console.log("soma numeros separados: " + sumEvenPositionNumberSplited);
      totalSum = totalSum + sumEvenPositionNumberSplited;
      console.log("total dentro do if: " + totalSum);
    } 
    else {
      
      oddNumber = reverseCardNumber[i];
      console.log("posição ímpar: " + i +" número da posição ímpar: " + oddNumber);
  
      totalSum = totalSum + parseInt(oddNumber);
      console.log("total dentro do else: " + totalSum);
    }

    console.log("repeticao, a soma pode ser aqui");
  }
  console.log("console log do fim");
}

export default validator;
