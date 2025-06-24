// Check if a number is positive, and then check if it’s even.

var numIsPosOrNeg = 23;
if (numIsPosOrNeg >= 0) {
    console.log(numIsPosOrNeg + " is Positive !");
} else {
    console.log(numIsPosOrNeg + "is Negative !");
}

// Prompt for age: if age ≥ 18, then check if they have a license.

// var ageForLicense = prompt("Enter your age");

var ageForLicense = 13;
if (ageForLicense >= 18) {
    console.log("You're eligible for License!");
} else {
    console.log("You're not eligible for License!");
};

// If password length ≥ 8, then check if it includes a symbol (@, #, etc).

// var userPassword = prompt("Enter Your password!")
var userPassword = "MAh@1881"
if (userPassword.includes("@")) {
    // && userPassword.length === 8 to check password length
    console.log("@ found in your Password!");
} else if (userPassword.includes("#")) {
    console.log("# found in your Password!");
} else {
    console.log("@ or # must enter in your password.");
}

// If student passed, then check if grade is A or B and display honor message.



// If temperature < 0, say “Freezing”; if > 0 and < 20, say “Cold”; else “Normal”.

// Check if number is between 1 and 100; if yes, check if divisible by 10.

// Prompt user for two numbers; if both positive, find which is bigger.

// Ask for user role; if admin, check if access level is "full".

// Ask for username and password; if both correct, allow login.

// Create a nested condition to check whether a number is divisible by 2 and 3 both.

// If user is student, ask for fee payment status; display final message.

// Ask user for favorite subject; if "math", check if they want to solve a quiz.

// Prompt for weather; if “rainy”, check if user has an umbrella.

// If number is greater than 0, check if it’s a perfect square.

// Check if number is odd; if yes, check if it's also a multiple of 3.