// Arrays of all possible password characters 
var numbers = [1,2,3,4,5,6,7,8,9,0];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLetters = lowerCaseLetters.map(function(x) { return x.toUpperCase(); });
var specialCharacters = ['!', '"', '#','$', '%', '&','(',')',',',"'",')','*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?','@','[',"]",",",'^','_','`','{','|','}','~'];

var numberOfCharacters;

var randomizePass = function (chars) { 
    var pass = []
      for(i = 0; i < numberOfCharacters; i++) {
        const randIndex = [Math.floor(Math.random() * chars.length)];
        pass[i] = chars[randIndex];
      }
      var passString = pass.join('');
      return passString;
}


var generatePassword = function () {
  //Ask user for desired length of password
  numberOfCharacters = window.prompt("Length of password? Must be at least 8 characters and no more than 128 characters.");

  // If user pressed Cancel, immediately end function
  if (!numberOfCharacters) {
    return;
  }

  //Alert user if invalid number of characters were entered
  if (numberOfCharacters < 8 ||  numberOfCharacters > 128 || isNaN(numberOfCharacters)) {
    console.log(isNaN(numberOfCharacters));
    alert("Invalid number of characters. Please try again.")
    return;
  } 

  //Ask user if lower case letters should be included
  var includeLowerCaseLetters = prompt("Include lower case letters? Y or N")
  if (!includeLowerCaseLetters) {
    return;
  } else if (includeLowerCaseLetters != 'Y' || includeLowerCaseLetters != 'N') {
    alert("Invalid entry. Please try again.");
    return;
  }

  //Ask user if upper case letter should be included
  var includeUpperCaseLetters = prompt("Include upper case letters? Y or N")
  if (!includeUpperCaseLetters) {
    return;
  }

  // Ask user if numbers should be included
  var includeNumbers = prompt("Include numbers? Y or N")
  if (!includeNumbers) {
    return;
  }

  // Ask user if special characters should be included
  var includeSpecialCharacters = prompt("Include special characters? Y or N")
  if (!includeSpecialCharacters) {
    return;
  }

  // Create password

  // All types of characters included
  if (includeLowerCaseLetters == "Y" && includeUpperCaseLetters == "Y" && includeNumbers == "Y" && includeSpecialCharacters == "Y") {
    var characters = numbers.concat(lowerCaseLetters).concat(upperCaseLetters).concat(specialCharacters);
    return randomizePass(characters);
    
  // No special characters
  } else if (includeLowerCaseLetters == "Y" && includeUpperCaseLetters == "Y" && includeNumbers == "Y" && includeSpecialCharacters == "N") {
      var characters = numbers.concat(lowerCaseLetters).concat(upperCaseLetters);

      return randomizePass(characters);

  // No numbers
  } else if (includeLowerCaseLetters == "Y" && includeUpperCaseLetters == "Y" && includeNumbers == "N" && includeSpecialCharacters == "Y") {
      var characters = lowerCaseLetters.concat(upperCaseLetters).concat(specialCharacters);
      return randomizePass(characters);

  // No lowercase letters
  } else if (includeLowerCaseLetters == "N" && includeUpperCaseLetters == "Y" && includeNumbers == "N" && includeSpecialCharacters == "Y") {
      var characters = numbers.concat(upperCaseLetters).concat(specialCharacters);
      return randomizePass(characters);

  // No uppercase letters  
  } else if (includeLowerCaseLetters == "Y" && includeUpperCaseLetters == "N" && includeNumbers == "Y" && includeSpecialCharacters == "Y") {
      var characters = numbers.concat(lowerCaseLetters).concat(specialCharacters);
      return randomizePass(characters);
  
  // No lowercase or uppercase letters
  } else if (includeLowerCaseLetters == "N" && includeUpperCaseLetters == "N" && includeNumbers == "Y" && includeSpecialCharacters == "Y") {
      var characters = numbers.concat(specialCharacters);
      return randomizePass(characters);
  
  // No lowercase letters or numbers
  } else if (includeLowerCaseLetters == "N" && includeUpperCaseLetters == "Y" && includeNumbers == "N" && includeSpecialCharacters == "Y") {
      var characters = upperCaseLetters.concat(specialCharacters);
      return randomizePass(characters);
  
  // No lowercase letters or special characters
  } else if (includeLowerCaseLetters == "N" && includeUpperCaseLetters == "Y" && includeNumbers == "Y" && includeSpecialCharacters == "N") {
      var characters = upperCaseLetters.concat(numbers);
      return randomizePass(characters);
  
  // No uppercase letters or numbers
  } else if (includeLowerCaseLetters == "Y" && includeUpperCaseLetters == "N" && includeNumbers == "N" && includeSpecialCharacters == "Y") {
      var characters = lowerCaseLetters.concat(specialCharacters);
      return randomizePass(characters);

  // No uppercase letters or special characters
  } else if (includeLowerCaseLetters == "Y" && includeUpperCaseLetters == "N" && includeNumbers == "Y" && includeSpecialCharacters == "N") {
      var characters = lowerCaseLetters.concat(numbers);
      return randomizePass(characters);

  // No special characters or numbers
  } else if (includeLowerCaseLetters == "Y" && includeUpperCaseLetters == "Y" && includeNumbers == "N" && includeSpecialCharacters == "N") {
      var characters = upperCaseLetters.concat(lowerCaseLetters);
      return randomizePass(characters);
  
  // Only lowercase letters
  } else if (includeLowerCaseLetters == "Y" && includeUpperCaseLetters == "N" && includeNumbers == "N" && includeSpecialCharacters == "N") {
      var characters = lowerCaseLetters;
      return randomizePass(characters);

  // Only uppercase letters
  } else if (includeLowerCaseLetters == "N" && includeUpperCaseLetters == "Y" && includeNumbers == "N" && includeSpecialCharacters == "N") {
      var characters = upperCaseLetters;
      return randomizePass(characters);
  
  // Only numbers
  } else if (includeLowerCaseLetters == "N" && includeUpperCaseLetters == "N" && includeNumbers == "Y" && includeSpecialCharacters == "N") {
      var characters = numbers;
      return randomizePass(characters);

  // Only special characters
  } else if (includeLowerCaseLetters == "N" && includeUpperCaseLetters == "N" && includeNumbers == "N" && includeSpecialCharacters == "Y") {
      var characters = specialCharacters;
      return randomizePass(characters);
  } else {     
      alert("Invalid entry. Please try again.")
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




