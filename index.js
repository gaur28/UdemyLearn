// // creating new element

// let newAnchorElement= document.createElement('a');
// newAnchorElement.href = "https://google.com";
// newAnchorElement.textContent = "to the google";

// //Get access to Parent Element 

// let First = document.querySelector('p');

// //Insert element to parent element

// First.append(newAnchorElement);

// //remove element from Dom

// let firstH1Element = document.querySelector('#first-heading');

// //remove it
// firstH1Element.remove();
// // firstH1Element.parentElement.removeChild(firstH1Element);

// //move element
// First.parentElement.append(First);

// // Inner HTML

// First.innerHTML = "hi! this is <strong>Tushar Gaur</strong>"
function clicked(){
    paragarph.textContent = 'clicked';
    console.log("clicked");
}
let inputElement = document.querySelector('input');
let paragarph = document.querySelector('p');
//paragarph.addEventListener('click', clicked);
function pressed(event){
    //let enteredText = inputElement.value;
    //let enteredText = event.target.value;
    let enteredText = event.data;
    console.log(enteredText);
    //console.log(event);
}

inputElement.addEventListener('input', pressed);