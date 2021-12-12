// Assignment code here
var enter;
var cofirmNumber;
var confirmUppercase;
var confirmLowerCase;
var confirmCharacter;
var generateBtn = document.querySelector("#generate");
var choices;
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
characters = ["!", "@", "#", "$", "%", "^", "&", "*", "("];
convert = [];
var choices;
//convert to uppercase
var toUpper = function(upper) {
  return upper.toUpperCase();
};

alphabetUpper = alphabet.map(toUpper);

var get = document.querySelector("#generate");

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
if (!confirmCharacters && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!");
}
else if (confirmCharacters && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = characters.concat(number, alphabet, alphabetUpper);
}
// selecting all option from the criteria
else if (confirmCharacters && confirmNumber && confirmUppercase) {
  choices = character.concat(number, alphabetUpper, character);
}
else if (confirmCharacters && confirmNumber && confirmLowercase) {
  choices = character.concat(number, alphabet);
}
else if (confirmCharacters && confirmLowercase && confirmUppercase) {
  choices = characters.concat(alphabet, alphabetUpper);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(alphabetUpper, alphabet);
}
// selecting 2 option from the criteria
else if (confirmCharacters && confirmNumber) {
  choices = characters.concat(number);

} else if (confirmCharacters && confirmLowercase) {
  choices = character.concat(alphabet);

} else if (confirmCharacters && confirmUppercase) {
  choices = characters.concat(alphabetUpper);
}
else if (confirmLowercase && confirmNumber) {
  choices = alphabet.concat(number);

} else if (confirmLowercase && confirmUppercase) {
  choices = alphabet.concat(alphabetUpper);

} else if (confirmNumber && confirmUppercase) {
  choices = number.concat(alphabetUpper);
}
// selecting 1 option from the criteria
else if (confirmCharacters) {
  choices = characters;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = alphabet;
}

else if (confirmUppercase) {
  choices = space.concat(alphabetUppercase);
};

var password = [];

for (var i = 0; i <enter; i++){
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}


//display generated password.
var pwd = password.join("");
userInput(pwd);
return pwd;
}
 function userInput(pwd) {
   document.getElementById("password").value = pwd;
 }
// Write password to the #password input
function writePassword(alphabet, alphabetUpper, number, characters) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
