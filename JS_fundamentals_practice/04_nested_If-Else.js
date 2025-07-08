// Check if a number is positive, and then check if it’s even.

var numIsPosOrNeg = 23;
if (numIsPosOrNeg >= 0) {
    console.log(numIsPosOrNeg + " is Positive !");
} else {
    console.log(numIsPosOrNeg + "is Negative !");
}

// Prompt for age: if age ≥ 18, then check if they have a license.

var ageForLicense = prompt("Enter your age");

var ageForLicense = 13;
if (ageForLicense >= 18) {
    console.log("You're eligible for License!");
} else {
    console.log("You're not eligible for License!");
};

// If password length ≥ 8, then check if it includes a symbol (@, #, etc).

var userPassword = prompt("Enter Your password!")
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

var marks = prompt("Enter your marks");
marks = Number(marks);
var passingMarks = 40;

if (marks >= passingMarks) {
    if (marks >= 80) {
        console.log("Your Grade is 'A+'");
    } else if (marks >= 70) {
        console.log("Your Grade is 'A'");
    } else if (marks >= 60) {
        console.log("Your Grade is 'B'");
    } else if (marks >= 50) {
        console.log("Your Grade is 'C'");
    } else {
        console.log("You're Passed.");
    }
} else {
    console.log("You're Fail.");
}


// If temperature < 0, say “Freezing”; if > 0 and < 20, say “Cold”; else “Normal”.

var temperature = 0;

if (temperature < 0) {
    console.log("Freezing");
} else if (temperature > 0) {
    console.log("Cold");
} else {
    console.log("Normal");
};

// Check if number is between 1 and 100; if yes, check if divisible by 10.

var num = 5;
if (num >= 1 && num <= 100) {
    if (num % 10 == 0) {
        console.log("Yes It's divisible by 10.");
    } else {
        console.log("No It isn't divisible by 10");
    }
}

// Prompt user for two numbers; if both positive, find which is bigger.

var user = +prompt("Enter two numbers");

if (user >= 0) {
    console.log("Yes Number is Positive.");
} else {
    console.log("Number is Negative");
}

// Ask for user role; if admin, check if access level is "full".

var user = prompt("admin");
if (user == "admin") {
    console.log("Full");
} else {
    console.log("");
}

// Ask for username and password; if both correct, allow login.


var username = prompt("enter your username");
var password = prompt("enter your password");

if (username == "MAHasnain427" || password == "Mah1881*") {
    console.log("You're Logged In.");
} else {
    console.log("Your username or password is incorrect");
}

// Create a nested condition to check whether a number is divisible by 2 and 3 both.

// If user is student, ask for fee payment status; display final message.

// Ask user for favorite subject; if "math", check if they want to solve a quiz.

// Prompt for weather; if “rainy”, check if user has an umbrella.

// If number is greater than 0, check if it’s a perfect square.

// Check if number is odd; if yes, check if it's also a multiple of 3.