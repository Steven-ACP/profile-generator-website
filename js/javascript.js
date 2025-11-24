/** @format */

//
let urName = document.getElementById("nameInput");
//
let urAge = document.getElementById("ageInput");
//
let colorDrop = document.getElementById("colorInput");
//
let submitButton = document.getElementById("submitBtn");
//
let raDio = document.querySelectorAll("input[type='radio']");
//

submitButton.addEventListener("click", button);

//function button() {
//  let inputName = document.getElementById("nameInput");
//  let inputAge = document.getElementById("ageInput");
//  let inputColor = document.getElementById("colorInput");
//  let value = inputName.value;
//  let ageValue = inputAge.value;
//  let colorValue = inputColor.value;
//  document.getElementById("outPut").textContent =
//    "Your Name:" +
//    value +
//    "Your Age:" +
//    ageValue +
//    "Favorite Color:" +
//    colorValue;

function button() {
  let inputName = document.getElementById("nameInput");
  let inputAge = document.getElementById("ageInput");
  let inputColor = document.getElementById("colorInput");
  let inputRadio = document.getElementById("input[type='radio']");
  /////////////////////////
  let value = inputName.value;
  let ageValue = inputAge.value;
  let colorValue = inputColor.value;
  let radioValue = inputRadio.value;
  document.getElementById("outPut").textContent =
    "Your Name: " +
    value +
    "      Your Age: " +
    ageValue +
    "         Favorite Color: " +
    colorValue +
    "Your favorite animal" +
    radioValue;
}

const names = ["Dog", "Cat", "Fish"];

for (let i = 0; i < names.length; i++) {
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}
