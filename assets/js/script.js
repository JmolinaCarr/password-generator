// Assignment code here
var enter;
var cofirmNumber;
var confirmUppercase;
var confirmLowerCase;
var confirmCharacter;
var generateBtn = document.querySelector("#generate");
var choices
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
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
  result = number.concat(lowercase, symbols, uppercase);
}
// Else if for 3 positive options
else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, uppsercase);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = character.concat(number, lowercase);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = character.concat(lowercase, uppercase);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(uppercase, lowercase);
}
// Else if for 2 positive options 
else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(lowercase);

} else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(uppercase);
}
else if (confirmLowercase && confirmNumber) {
  choices = lowercase.concat(number);

} else if (confirmLowercase && confirmUppercase) {
  choices = lowercase.concat(uppercase);

} else if (confirmNumber && confirmUppercase) {
  choices = number.concat(uppercase);
}
// Else if for 1 positive option
else if (confirmCharacter) {
  choices = character;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = lowercase;
}

for (var i = 0; i <enter; i++){
  choices = choices[Math.floor(Math.random() * choices.length)];
  
}

var password = [];
//display generated password.
return "password";
}

// Write password to the #password input
function writePassword(numbers, lowercase, uppercase, characters) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
