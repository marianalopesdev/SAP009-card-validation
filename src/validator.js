const validator = {
  // ...
  
};

export function validateCard (){
  
  const input = document.getElementById("cardNumber").value;
  console.log(input);
}



const input = document.getElementById("cardNumber");
const labelText = document.getElementById("labelText");

input.addEventListener("keypress", handleKeyPressJustNumbers);
input.addEventListener("input", function() {
  labelText.innerHTML = input.value;
});

export function handleKeyPressJustNumbers(e) {
  const key = e.charCode || e.keyCode;
  
  if (!(key >= 48 && key <= 57)) {
    
    e.preventDefault();   
   
  }
}

export default validator;
