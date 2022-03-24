// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var upperCase = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "!@#$%&*";
  var password = "";
  var allCharacters = "";
  
  var length = prompt("Plaese pick up to 8-128 characters for your password")
  console.log(length)
  // create if condition to compare if length is not between 8-128
  // alert that the number has to be between 8-128
  // call generate password function
  if (length < 8 || length > 128) {
    alert("Please enter a number between 8-128")
    return generatePassword();
  }
    var confirmUpperCase = confirm("Click Ok to confirm if you want letters in your password")
    if (confirmUpperCase === true) {
      allCharacters += upperCase
      console.log(allCharacters)
    }
      
    var confirmLowerCase = confirm("Click OK to confirm if you want lowercase letters in your password")
    if (confirmLowerCase === true) {
      allCharacters += lowerCase
      console.log(allCharacters)
    }
    var confirmNunmbers = confirm("Click OK to confirm if you want numbers in your password")
    if (confirmNunmbers === true) {
      allCharacters += numbers
      console.log(allCharacters)
    }
    var confirmSymbols = confirm("Click OK to confirm if you want symbols in your password")
    if (confirmSymbols === true) {
      allCharacters += symbols
      console.log(allCharacters)
    }

for (var i= 0; i < length; i++) {
  password += allCharacters.charAt(Math.floor(Math.random()* allCharacters.length))
}
  return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




