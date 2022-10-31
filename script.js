// Arrays for all possible password character types
var numbers = [1,2,3,4,5,6,7,8,9,0];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLetters = lowerCaseLetters.map(function(x) { return x.toUpperCase(); });
var specialCharacters = ['!', '"', '#','$', '%', '&','(',')',',',"'",')','*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?','@','[',"]",",",'^','_','`','{','|','}','~'];

var numberOfCharacters;
var selectedCriteria;

// Helper function to randomize password
var randomizePass = function (chars) { 
    var pass = []
      for(i = 0; i < numberOfCharacters; i++) {
        const randIndex = [Math.floor(Math.random() * chars.length)];
        pass[i] = chars[randIndex];
      }
      var passString = pass.join('');
      return passString;
}

// Helper function to prompt user for desired character types
var promptForPreferences = function (characterType, characterArray) {
  var message = "Include " + characterType + " ? Y or N"
  var includeCharacterType = prompt(message)
  
  // Immediately end function if users clicks cancel
  if (!includeCharacterType) {
    return; 
  }
  
  // Ask user to try again if they enter an invalid entry 
  while(includeCharacterType != "Y" && includeCharacterType != "N") {
    alert("Invalid entry. Please try again.")
    includeCharacterType = prompt(message)
  } 

  // Include character type in selected criteria if user enters Y
  if (includeCharacterType == "Y") {
    selectedCriteria = selectedCriteria.concat(characterArray);
  }

  return selectedCriteria;
}

// Function that generates password based off user inputs
var generatePassword = function () {
  selectedCriteria = [];
  
  // Ask user for desired length of password
  numberOfCharacters = window.prompt("Length of password? Must be at least 8 characters and no more than 128 characters.");

  // Immediately end function if user clicks cancel
  if (!numberOfCharacters) {
    return;
  }

  // Alert user if invalid number of characters were entered
  if (numberOfCharacters < 8 ||  numberOfCharacters > 128 || isNaN(numberOfCharacters)) {
    alert("Invalid number of characters. Please try again.")
    return;
  } 

 // Prompt user for preferences about each character type 
  promptForPreferences("lowercase letters", lowerCaseLetters);
  promptForPreferences("uppercase letters", upperCaseLetters);
  promptForPreferences("numbers", numbers);
  promptForPreferences("special characters", specialCharacters);

  // Alert user that at least one character type is required
  if(selectedCriteria === []) {
    return alert("Must select at least one character type. Please try again.")
  }

  return randomizePass(selectedCriteria);
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
