// Assignment code here
const characterLength = "";
const letters = "abcdefghijklmnopqrstuvwxyz";
const lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = '!"#$%&()*+,-./:;<=>?@[]/|^_{}~';
const passwordDisplay = document.getElementById("passwordDisplay");

// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);
// console.log(form.lengthValue);
// console.log(lettersUp);
// console.log(numbers);
// console.log(symbols);
// const displayResult = document.getElementById('password');

function getInputValue() {
  // Selecting the input element and get its value
  var lengthValue = document.getElementById("characterLength").value;

  // Displaying the value
  alert(lengthValue);
  return lengthValue;
}

document.getElementById("getLengthResult").innerHTML =
  "Character Length Selected:" + getInputValue();

const form = document.getElementById("type");
// lengthValue.addEventListener('input', getLengthResult)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const lengthAmount = getInputValue;
  const lowercaseBox = document.getElementById("lowercase").checked;
  const uppercaseBox = document.getElementById("uppercase").checked;
  const numbersBox = document.getElementById("numbers").checked;
  const specialBox = document.getElementById("special").checked;
  console.log(uppercaseBox);
  console.log(lowercaseBox);
  console.log(numbersBox);
  console.log(specialBox);

  const password = generatePassword(
    lengthAmount,
    uppercaseBox,
    lowercaseBox,
    specialBox
  );
  passwordDisplay.innerText = password;
});

console.log(form);

// window.alert to create a window alert to notify user to select password criteria to begin
// window.alert("To generate a password, begin by adjusting the criteria needed for the password");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(lengthAmount, lowercaseBox, numbersBox, specialBox) {
  var passwordOptions = [];
  if (lengthAmount > 8 && lengthAmount < 138) {
    console.log(lengthAmount);
    alert(" value input success");
  } else {
    alert("needs to be a value between 8 and 138 ");
  }
  if (uppercaseBox === true) {
    passwordOptions = passwordOptions.concat(lettersUp);
  }
  if (lowercaseBox === true) {
    passwordOptions = passwordOptions.concat(lettersUp);
  }
  if (specialBox === true) {
    passwordOptions = passwordOptions.concat(lettersUp);
  }
  if (numbersBox === true) {
    passwordOptions = passwordOptions.concat(lettersUp);
  }
  console.log(passwordOptions);

  const letterResult = []
  for (let i = 0; i < lengthAmount; i++) {
    const characterCode =
      passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
      letterResult.push(String.fromCharCode(characterCode));
  }
  return letterResult.join('')



//  generatePassword();
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passwordText.value);
  console.log(password);
}

// create function to generate random password with switch case for adding numbers, special characters, lowercase, uppercase mixed case, etc
// function randomLetter(length) {
// letterResult is an empty string
//   var letterResult = '';
//   for ( var i = 0; i < letters.length; i++ ) {
//     letterResult += letters.charAt(Math.floor(Math.random() * letters.length));
//   }
//   console.log(letterResult);
//   console.log(letterResult[0]);
//   // return letterResult;

// // }
// // randomLetter();

// // function to create a random uppercase letter
// // function randomUpLet() {
//   // letterResult is an empty string
//   var letterUpResult = '';
//   for ( var i = 0; i < lettersUp.length; i++ ) {
//     letterUpResult += lettersUp.charAt(Math.floor(Math.random() * lettersUp.length));
//   }
//   console.log(letterUpResult);
//   console.log(letterUpResult[0]);
//   // return letterUpResult;
// // }
// // randomUpLet();
// // console.log(randomUpLet());

// //function to get a random number from string
// // function randomNumbers() {
//   // letterResult is an empty string
//   var numberResult = '';
//   for ( var i = 0; i < numbers.length; i++ ) {
//     numberResult += numbers.charAt(Math.floor(Math.random() * numbers.length));
//   }
//   console.log(numberResult);
//   console.log(numberResult[0]);
// //   return numberResult;
// // }
// // randomNumbers();
// // console.log(randomNumbers())

// // function to get a random symbol from symbols string
// // function randomSymbols() {
//   // letterResult is an empty string
//   var symbolsResult = '';
//   for ( var i = 0; i < symbols.length; i++ ) {
//     symbolsResult += symbols.charAt(Math.floor(Math.random() * symbols.length));
//     // console.log(symbolsResult[i]);
//   }
//   console.log(symbolsResult);
//   console.log(symbolsResult[0]);
//   // console.log(symbolsResult[i]);
// //   return symbolsResult;
// // }
// // randomSymbols([1]);
// console.log(randomSymbols())

// // ---------------------------------- OLD CODE FROM FIRST ATTEMPT COMMENT OUT AND DELETE LATER ----------------------------------- //////////////
// function generatePassword(){

// // * window.alert to create a window alert to notify user to select password criteria to begin
// // window.alert("To generate a password, begin by adjusting the criteria needed for the password");
// // generate multiple prompts to confirm if user wants different special characters
// // window.confirm("Select password options from prompts or choose no in next prompt to select from dropdown list below");

// // function created to prompt user to make selections in a prompt window or a dropdown list
// // function passwordSelect() {
// //   var selection = window.prompt("Would you like to generate a password?");
// //     if (selection === 'yes') {
// //       window.confirm()
// //     }else if (selection === 'no') {
// //       window.alert("Okay, please refresh page to continue with password generation")
// //     } else {
// //       window.alert("Error, please try again! Please enter either yes or no to continue")
// //     }
// //   }
// // passwordSelect();

// // add window prompt to ask if the user wants numbers generated
// //make an if statement
// // function numberSelect() {
// //   var selection = window.confirm("Would you like to include numbers to your random password?");
// //   if (selection) {
// //     return getRandomIntInclusive();
// //   // } else if (selection ) {

// //   // }
// // }
// //  numberSelect();

// // add window prompt to ask if the user wants numbers generated

// // add selections to by creating a string of numbers, another of letters , special characters
// // add a function to generate a random letter from the letterABC string

// function getRandomString() {
//   // letterABC created to pull individual letters from string - join them latter
//   const lettersABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//   return lettersABC[Math.floor(Math.random() * lettersABC.length)];
//   // var length = '';
//   // for ( var i = 0; i < length; i++) {
//   //  length += lettersABC.charAt(Math.floor(Math.random() * lettersABC.length));
//   // }

//   // return length;

// }
// console.log(getRandomString(length));

// // add window alert to question user if they would like to include letters and then one more to confirm upper/lowercase
// function getCasing() {

// // window.confirm("Would you like your Password to include letters?");
// // case choice variable created to prompt user to make choice for upper case
// // let caseChoice = window.prompt("Do you need also need Uppercase letters? Type yes, no");
// // var variable created to make a for loop that runs through the users choice and switched the choice to uppercase randomly
// var upLowCase = '';
// for (var i = 0; i < upLowCase.length; i++)
//   if (caseChoice === 'yes' || caseChoice === 'YES') {
//     upLowCase += caseChoice.charAt(i).toUpperCase();
// // else if the user chooses no or doesn't respond null or undefined the page will continue to next series of prompts
//   } else if ( caseChoice === 'No' || caseChoice === 'NO' || caseChoice === '') {
//     window.alert("Choose next option in new prompt")
//   }
//   else {
//     upLowCase += caseChoice.toLowerCase();
//   }

// return upLowCase;
// }
// getCasing();

// // function charactersRan is to create a prompt that asks yes if the user would like special characters and chooses a random one using  math.random

// function charactersRan () {
// // special characters listed in string below
//   const characters = '! " # $ % & () * + , - . / : ; < = > ? @  \ ^ _ ` | ';
// // prompts user to type yes to add special characters
//   var characterChoice = window.prompt("Would you like to include special characters like ! $ @ ? Please answer either yes or no in box below, then click okay/confirm");
// // if the user answers yes or YES this will return a random char from the characters string
//     if (characterChoice === 'yes' || characterChoice === 'YES') {
//       return characters[Math.floor(Math.random() * characters.length)];

//     } else if ( characterChoice === 'no' || characterChoice === 'NO' || characterChoice === ' ') {

//     }

//   }
// //Log to check if charactersRan is working
// console.log(charactersRan());

// //window.prompt to ask user how many characters their password should be
// var characterSelect = window.prompt("How long would you like your generated password to be?? Please enter a number between 8 and no more than 128 characters")
//   if (characterSelect => 8 || characterSelect <= 128 ) {
//     window.alert("You chose for your password to be " + characterSelect + " characters long.");
//   } else if (characterSelect < 8 || character > 128){
//     window.alert("Error! Please choose a number between 8 and 128 to continue");
//   }

// //function to generate a random number value between 0 and nine -- use function later to call it and join multiple together.

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(0);
//   max = Math.floor(9);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// // function successfully calls random number between 0 and 9
// console.log(getRandomIntInclusive());

// // change most of the data to be inout into objects like
// // let password = {
//   numbers: "",
//   length: "",
//   special characters: "",
// }

// // console.log(capUppercase);

// // // Get references to the #generate element in the html doc in the card-footer class

//

// }
