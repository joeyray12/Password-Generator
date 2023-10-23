var characterLength = 8;
var choiceArray = [];

var symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*',];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts){
    var newPassword = generatePassword();
    

    passwordText.value= newPassword;
  } else {
    passwordText.value = "";

  }

 

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
var password ="";
for(var i =0; i <characterLength; i++) {
  var randomLetter = Math.floor(Math.random() * choiceArray.length)
  password = password + choiceArray[randomLetter];
}
return password;

}

function getPrompts(){
  choiceArray = [];

  characterLength = parseInt(prompt("How long would you like your password to be? (8 - 128 characters"))

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number from 8 - 128. Please try again.")
    return false;
  }

  if (confirm("Would you like your password to contain lowercase letters?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }

  if (confirm("Would you like your password to contain uppercase letters?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }

  if (confirm("Would you like your password to cotain special characters?")) {
    choiceArray = choiceArray.concat(symbolsArray);
  }

  if (confirm("Would you like your password to contain numbers?")) {
    choiceArray = choiceArray.concat(numberArray);
  }

  return true;
}