const productInputElement = document.querySelector('#product-input');
//console.log(productInputElement);
let remainingChar = window.document.getElementById('charCount');

let maxAllowedChar = productInputElement.maxLength;
//console.log(maxAllowedChar);
function updateReaminingChar(event){
    let enteredText =event.target.value;
    let enteredTextLength = enteredText.length;
    // let elementId = productInputElement;
    // console.log(elementId);

    let remainingCharacter =60- enteredTextLength;
    remainingChar.textContent = remainingCharacter;

    if(remainingCharacter <= 10){
       
       // console.dir(productInputElement);
         remainingChar.classList.add('warning');
         productInputElement.classList.add("warning");//check the problem in the doubt session tomorrow.
        // console.log(remainingCharacter);
    }
     else{
        productInputElement.classList.remove("warning");//check the problem in the doubt session tomorrow.
        
         remainingChar.classList.remove('warning');
    //     productInputElement.classList.remove('warning');
     }
}
productInputElement.addEventListener('input', updateReaminingChar);
