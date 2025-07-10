
var passwordInput = document.getElementById("passwordInput");
var passwordStatus = document.getElementById("passwordStatus");
var passwordRange = document.getElementById("passwordRange");
var rangeNumber = document.getElementById("rangeNumber");

var upperCaseInput = document.getElementById("upperCase-input");
var lowerCaseInput = document.getElementById("lowerCase-input");
var numberInput = document.getElementById("number-input");
var characterInput = document.getElementById("character-input");

var generateBtn = document.getElementById("generate-btn");


var pass = "";
function generatePassword(e) {
    e.preventDefault();

    for (let i = 0; i <= passwordRange; i++) {
        pass += Math.floor((Math.random() * 10) + 90);
        passwordInput.value = pass;
    }
    
}

// generatePassword()