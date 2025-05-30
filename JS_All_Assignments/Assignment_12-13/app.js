/**
 * 1. Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).
 */

// var char = prompt("Enter any character or number");
// if (char) {

// } else {

// }

/**
 * 2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.
 */

var firstInteger = +prompt("Enter the first number")
var secondInteger = +prompt("Enter the second number")

if (firstInteger > secondInteger) {
    console.log(firstInteger + " is larger than second number.");
} else {
    console.log(secondInteger + ' is larger than first number.');
}

/**
 * 3. Write a program that takes input a number from user &
state whether the number is positive, negative or zero.
 */

var userInp = +prompt("Enter the number to check +ve or -ve.");
if (userInp > 0) {
    console.log("Your number is Positive.");
} else if (userInp == 0) {
    console.log("Your number is 0.");
} else if (userInp < 0) {
    console.log("Your number is Negative.");
} else {
    console.log("Please enter the valid number.");
}

/**
 * 4. Write a program that takes a character (i.e. string of
length 1) and returns true if it is a vowel, false otherwise
 */

var userChar = prompt("Enter the any character to check vowel or consonant.");
if (userChar === "A" || "a" || userChar === "E" || "e" || userChar === "I" || "i" || userChar === "O" || "o" || userChar === "U" || "u") {
    console.log("Your character is vowel.");
} else {
    console.log("Your character is consonant.");
}

/**
 * 5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise.
 */

var correctPass = "MAH@427";
var userPass = prompt("Enter your password");

if (userPass == correctPass) {
    console.log("Correct! The password you entered matches the original password");
} else if (userPass == " ") {
    console.log("Please enter your password.");
} else {
    console.log("Please Enter the valid password.");
}

/**
 * 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}
 */

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

/**
 * 7. Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements
 */

