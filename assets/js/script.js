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

var characterLength = 8;
var choiceArr = [];

// Function to prompt user for password options
function getPasswordOptions() {
    choiceArr = [];

    characterLength = parseInt(prompt("How many characters would you like your password to be? (choose from 8 to 128 characters"));

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Character length needs to be numerical, 8 - 128. Please try again");
      return false;
    }
    if (confirm("Would you like lower case letters in the password? click Ok if yes or click Cancel for no")) {
      choiceArr = choiceArr.concat(lowerCasedCharacters);
    }
    if (confirm("Would you like upper case letters in the password? click Ok if yes or click Cancel for no")) {
      choiceArr = choiceArr.concat(upperCasedCharacters);
    }
    if (confirm("Would you like special characters in the password? click Ok if yes or click Cancel for no")) {
      choiceArr = choiceArr.concat(specialCharacters);
    }
    if (confirm("Would you like numbers in the password? click Ok if yes or click Cancel for no")) {
      choiceArr = choiceArr.concat(numericCharacters);
    }
    return true;
}

// Function to generate password with user input
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPasswordOptions(); //give a Booleen
  var passwordText = document.querySelector('#password');

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;  
    
  } else {
    passwordText.value = ""; //error happening here
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);