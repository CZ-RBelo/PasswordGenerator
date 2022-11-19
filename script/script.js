// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordCriteria = [];

// Function to prompt user for password options
function getPasswordOptions() {
  // Lowercase
  if (confirm("Do you wish to include lowercase characters?") == true) {
    passwordCriteria = passwordCriteria.concat(lowerCasedCharacters);
  };

  //Uppercase
  if (confirm("Do you wish to include uppercase characters?") == true) {
    passwordCriteria = passwordCriteria.concat(upperCasedCharacters);
  };

  // Numeric
  if (confirm("Do you wish to include numeric characters?") == true) {
    passwordCriteria = passwordCriteria.concat(numericCharacters);
  };

  //Special characters ($@%&*, etc)
  if (confirm("Do you wish to include special characters?") == true) {
    passwordCriteria = passwordCriteria.concat(specialCharacters);
  };
  // Return the user criteria
  return passwordCriteria;
}

// Function for getting a random element from an array
function getRandom(size, arr) {
  var randomChar=[];
  // Loop - till the password size
  for (let i = 0; i < size; i++) {
    // Get a random array index
    var randomIndex = Math.floor(Math.random() * arr.length);
    // Get the array value from the random index
    randomChar += arr[randomIndex];
  };
  // Return the password
  return randomChar;
}
// Function to generate password with user input
function generatePassword() {

  // New Array with User Password Criteria
  passwordCriteria = [];

  // Prompt user for password length
  let passSize = prompt("Please, enter the Length of Password", "At least 10 characters but no more than 64.");

  // Check if the user pressed "Cancel".
  if (passSize == null) {
    return;
    // Check password length is between 10 & 64, and whether it is a number.
  } else {
    if (passSize < 10 || passSize > 64 || isNaN(passSize)) {
      alert("Please, insert a number between 10 and 64.");
      // Prompt user for password length again
      writePassword();
    } else {

      // Call the function to prompt user for password options
      passwordCriteria = getPasswordOptions();

      //Check if the user criteria is empty or undefined
      if (typeof passwordCriteria !== 'undefined' && passwordCriteria.length > 0) {
        // Call the function for getting a random element from an array
        var strPassword = getRandom(passSize, passwordCriteria);
        // Return the password
        return strPassword;
      } else {
        alert("Please, choose at least one criteria.");
      };
    };
  };
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);