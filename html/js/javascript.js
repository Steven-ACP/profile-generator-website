/** @format */
//let pfForm = document.getElementById("profileForm");
//
let urName = document.getElementById("nameInput");
//
let urAge = document.getElementById("ageInput");
//
let colorDrop = document.getElementById("colorInput");
//
//let elButton = document.getElementById("button");
//
let submitButton = document.getElementById("submitBtn");
//
let raDio = document.querySelectorAll("input[type='radio']");
//
//let comesOut = document.getElementById("outPut");
//
///const element = document.getElementById(submitBtn);
//element.addEventListener("click", getInfo);

//function getInfo() {
// console.log(naquan);
//}

submitButton.addEventListener("click", button);

function button() {
  let inputName = document.getElementById("nameInput");
  let inputAge = document.getElementById("ageInput");
  let inputColor = document.getElementById("colorInput");
  let value = inputName.value;
  let ageValue = inputAge.value;
  let colorValue = inputColor.value;
  document.getElementById("outPut").textContent =
    "Your Name:" +
    value +
    "Your Age:" +
    ageValue +
    "Favorite Color:" +
    colorValue;
}
