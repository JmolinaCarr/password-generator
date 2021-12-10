// Assignment code here
var enter;
var cofirmNumber;
var confirmUppercase;
var confirmLowerCase;
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  
//prompt user for password criteria
//prompt for lenght between 8 and 128
enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

if (!enter) {
  alert("This needs a value");
} else if (enter <8 || enter > 128) {
  // validate input
  enter = parseInt(prompt("You must choose between 8 and 128"));

} else {
  confirmNumber = confirm("Will this contain numbers?");
  confirmCharacter = confirm("Will this contain Special characters?");
  confirmUppercase = confirm("Will this contain Uppercase characters?");
  confirmLowercase = confirm("Will this contain lowercase characters?");
};
//no selection is done
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!");


}
//display generated password.
return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
