// Assignment code here
const characterLength = '';
const letters = 'abcdefghijklmnopqrstuvwxyz';
const lettersUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const symbols = '!"#$%&()*+,-./:;<=>?@[]/\|^_{}~';

// let for valueCheck
let valueCheck = null;


// console.log(letters);
// console.log(lettersUp);
// console.log(numbers);
// console.log(symbols);

function getNumberLength() {
  // Get the value of the input field with id="numberChoice"
  let x = document.getElementById("numberChoice").value;
  // If x is Not a Number or less than 8 or greater than 228
  let text;
  if (isNaN(x) || x < 8 || x > 229) {
    text = "Input not valid" + " " + x ;
  } else {
    text = "Number Choice: " + " " + x;
  }
  document.getElementById("numberBox").innerHTML = text;
}
// console.log(getNumberLength)
// create function to generate random password with switch case for adding numbers, special characters, lowercase, uppercase mixed case, etc
function randomLetter(length) {
  // letterResult is an empty string
  var letterResult = '';
  for ( var i = 0; i < letters.length; i++ ) {
    letterResult += letters.charAt(Math.floor(Math.random() * letters.length.i));
  }
  // console.log(letterResult);
  return letterResult;
    
}
randomLetter();


// function getCheck() {
  document.getElementById('submit').onclick = function() {
    if(document.getElementById('lowercase').checked) {
      alert(document.getElementById('lowercase').value);
    }
    if(document.getElementById('uppercase').checked)
    {
      alert(document.getElementById('uppercase').value);
    }
    if (document.getElementById('numbers').checked) 
    {
      alert(document.getElementById('numbers').value);
    } 
    else(document.getElementById('special').checked) 
    {
      alert(document.getElementById('special').value);
    }
  };
// getCheck();
// console.log(getCheck);

// function to create a random uppercase letter
function randomUpLet() {
  // letterResult is an empty string
  var letterUpResult = '';
  for ( var i = 0; i < lettersUp.length; i++ ) {
    letterUpResult += lettersUp.charAt(Math.floor(Math.random() * lettersUp.length.i));
  }
  // console.log(letterUpResult);
  return letterUpResult;
}
randomUpLet();

//function to get a random number from string
function randomNumbers() {
  // letterResult is an empty string
  var numberResult = '';
  for ( var i = 0; i < numbers.length; i++ ) {
    numberResult += numbers.charAt(Math.floor(Math.random() * numbers.length.i));
  }
  // console.log(numberResult);
  return numberResult;
}
// randomNumbers();
// console.log(randomNumbers())

let valueNumber = document.getElementById('numbers').value;
for(var i=0; valueNumber[i]; ++i){
  if(!valueNumber[i])
  {
       console.log('not checked');
       break;
  }
  else(valueNumber[i])
  {
    valueCheck = valueNumber[i].value;
    console.log('checked');
    break;
  }
      

};
// console.log(valueNumber)
// function to get a random symbol from symbols string
function randomSymbols() {
  // letterResult is an empty string
  var symbolsResult = '';
  for ( var i = 0; i < symbols.length; i++ ) {
    symbolsResult += symbols.charAt(Math.floor(Math.random() * symbols.length.i));
  }
  // console.log(symbolsResult);
  return symbolsResult;
}
// randomSymbols([1]);
// console.log(randomSymbols())

let valueSpecial = document.getElementById('special').checked;
// console.log(valueSpecial)
for(var i=0; valueSpecial[i]; ++i){
  if(!valueSpecial[i])
  {
       console.log('not checked');
       break;
  }
  else(valueSpecial[i])
  {
    valueCheck = valueSpecial[i].value;
    console.log('checked');
    break;
  }
      

};
// console.log(valueSpecial)


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








