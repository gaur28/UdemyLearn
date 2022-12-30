let productInputElement =document.getElementById('product-input');
let remainingChar = document.getElementById('charCount');

let maxAllowedChar = productInputElement.maxLength;
function updateReaminingChar(event){
    let enteredText =event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacter =60- enteredTextLength;
    remainingChar.textContent = remainingCharacter;
}
productInputElement = addEventListener('input', updateReaminingChar);