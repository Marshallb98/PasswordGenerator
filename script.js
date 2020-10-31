// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// trying to use symbols that websites actually allow in passwords
var sym = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\\', "]", "^", "_", "`", "{", "|", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Write password to the #password input
function writePassword() {

  // Asks pass length
  var passwordLength = prompt("Enter how long you want your password to be between 8-128 characters")

  passwordLength = parseInt(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
  }
  else {
    return alert("ERROR Please enter a number between 8 and 128");
  }

  // asks series of questions to figure out what stile password they want
  var lowerC = confirm("Do you want lowercase letters?");
  var upperC = confirm("Do you want your password to have uppercase letters?");
  var numC = confirm("Do you want your password to have numbers?");
  var symC = confirm("Do you want your password to have special characters?");


  // starts array for final function
  var passArray = [];


  if (lowerC === true) {
    passArray = passArray.concat(lowerCase);
  }
  if (upperC === true) {
    passArray = passArray.concat(upperCase);
  }
  if (numC === true) {
    passArray = passArray.concat(numbers);
  }
  if (symC === true) {
    passArray = passArray.concat(sym);
  }
  // what actually creates password
  function generatePassword() {
    var passwordText = "";
    for (var i = 0; i < passwordLength; i++) {
      passwordText += passArray[Math.floor(Math.random() * passArray.length)];
    }
    return passwordText;
  }

  var passwordTextField = document.querySelector("#password");

  passwordTextField.value = generatePassword();
}

// Add event listener for user click to run function to writePassword
generateBtn.addEventListener("click", writePassword);