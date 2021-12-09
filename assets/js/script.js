// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  console.log("Hey you click a button!");
//prompt user for password criteria
//prompt for lenght between 8 and 128
//prompt for lowercase, uppercase and special charaters
// validate input 
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
