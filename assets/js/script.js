// Assignment code here
//DOM elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lower");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const randomFunction = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,

function getRandomLower() {
	return String.fromCharaCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharaCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharaCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	var symbols = '!@#$%^&*()+?/\';
	return symbols[math.floor(math.random() * symbols.lenght)];
}
console.log(getRandomLower());

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
