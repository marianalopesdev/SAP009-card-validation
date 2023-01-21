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
  //console.log(cardNumber);
  // const isValidLabel = document.getElementById("isValidLabel");
  const cardNumberArray = cardNumber.split("");
  //console.log(cardNumberArray);
  const reverseCardNumber = cardNumberArray.reverse();
  // console.log(reverseCardNumber);
  checkCardNUmber(reverseCardNumber);

  // console.log(reverseCardNumber);
  // Step 3. Use the join() method to join all elements of the array into a string
  // var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // // "olleh"

  // //Step 4. Return the reversed string
  // return joinArray; // "olleh"
}

export function checkCardNUmber(reverseCardNumber) {
  for (let i = 0; i < reverseCardNumber.length; i++) {
    if (i % 2 === 0) {
      console.log("hi");

     
      const sumEvenPositionNumber = reverseCardNumber[i] * 2;
      //FALTA VERIFICAR SE TEM DOIS DIGITOS
      //SE SIM SOMAR E DEPOIS SOMAR NA SOMA TOTAL
      //SE NAO SÓ SOMAR NA SOMA TOTAL
      
      //console.log(sumEvenPositionNumber);
      const sumEvenPositionNumberArray = [];
      sumEvenPositionNumberArray.push(sumEvenPositionNumber);
      //console.log(cardNumberArray);
      const splitEvenPositionNumber = sumEvenPositionNumberArray.toString().split("");
      // console.log(splitNumber);
      const evenPositionNumberArray = splitEvenPositionNumber.map(Number);
      const sumEvenPositionNumberSplited = evenPositionNumberArray[0] + evenPositionNumberArray[1];
      console.log(evenPositionNumberArray); // Output: [1, 2, 3, 4, 5]
      console.log(sumEvenPositionNumberSplited);

    
    } else {
      console.log("bye");
    }

    console.log(i + " posicao");
  }
}

export default validator;
