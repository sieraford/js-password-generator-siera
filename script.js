// Assignment code here
// lowercase, uppercase, numeric, and/or special characters
var numbers = [1,2,3,4,5,6,7,8,9,0];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = ['!', '"', '#','$', '%', '&','(',')',',',"'",')','*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?','@','[',"]",",",'^','_','`','{','|','}','~']
var generatePassword = function () {
  //Ask user for desired length of password
  var numberOfCharacters = window.prompt("Length of password? Must be at least 8 characters and no more than 128 characters.");

  if (!userChoice) {
    return;
  }
  
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Invalid number of characters. Please try again.")
  }

  
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




