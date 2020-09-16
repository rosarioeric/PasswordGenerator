// Assignment Code
var numbers = confirm ("Do you want to use numbers?");
var uppCase = confirm ("Do you want to use uppercase letters?");
var lowCase = confirm ("Do you want to use lower case letters?");
var symbols = confirm ("Do you want to use symbols?");


var generateBtn = document.querySelector("#generate");
var numArray = [1,2,3,4,5,6,7,8,9,0];
var uppArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
passLength = prompt("How many characters between 8-128");
passLength = parseInt(passLength);


  if (numbers===true) {
    for (var i=0; i<numArray.length; i++) {
      numArray[Math.floor(Math.random() * )]
    
  }
  


// Write password to the #password input
function writePassword() {
  // push arrays into final password array

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);