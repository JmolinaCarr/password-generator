// Assignment code here
var enter;
var cofirmNumber;
var confirmUppercase;
var confirmLowerCase;
var confirmCharacter;
var generateBtn = document.querySelector("#generate");
var choices
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
characters = ["!", "@", "#", "$", "%", "^", "&", "*", "("];
function generatePassword () {
  
//prompt user for password criteria, prompt for lenght between 8 and 128
enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

if (!enter) {
  alert("This needs a value");
} else if (enter <8 || enter > 128) {
  // validate input
  enter = parseInt(prompt("You must choose between 8 and 128"));

} else {
  confirmNumber = confirm("Will this contain numbers?");
  confirmCharacters = confirm("Will this contain Special characters?");
  confirmUppercase = confirm("Will this contain Uppercase characters?");
  confirmLowercase = confirm("Will this contain lowercase characters?");
};
//no selection is done
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!");
}
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  result = number.concat(charLowercase, symbols, charUppercase)
}
//display generated password.
return 
}

// Write password to the #password input
function writePassword(numbers, lowercase, uppercase, characters) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}

for (var i = 0; i <= password.length; i++) {
  var randomNumber = math.floor(Math.random() * char.length);
  password += char.substring(randomNumber, randomNumber +1);

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
