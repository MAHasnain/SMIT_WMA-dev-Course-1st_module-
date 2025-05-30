/**
 * 1. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights”
 */
var cityName = prompt("Enter city name")

if (cityName === "Karachi" || "karachi") {
    console.log("Welcome to city of lights");
} else {
    console.log("Welcome to " + cityName);
}


/**
2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am.
*/

var genderGreet = prompt("Enter your gender");

if (genderGreet === "male" || "Male") {
    alert("Good Morning Sir");
} else if (genderGreet === "female" || "Female") {
    alert("Good Morning Ma’am");
} else {
    alert("Enter valid Gender.");
}


/**
 * 3. Write a program to take input color of road traffic signal
from the user & show the message according to this table:
Signal color Message
Red Must Stop
Yellow Ready to move
Green Move now
 */

var signalColor = prompt("Enter the color of traffic signal");

if (signalColor == "Red" || signalColor == "red") {
    console.log("Must Stop");
} else if (signalColor == "Yellow" || signalColor == "yellow") {
    console.log("Ready to move");
} else if (signalColor == "Green" || signalColor == "green") {
    console.log("move now");
} else {
    console.log("enter the valid color of signal.");
}


/**
 * 4. Write a program to take input remaining fuel in car (in
litres) from user. If the current fuel is less than 0.25litres,
show the message “Please refill the fuel in your car”
 */

var remainingFuel = +prompt("Enter the remaining fuel in litre")

if (remainingFuel <= 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("You never need to more fuel");
}


/**
Run this script, & check whether alert message would be
displayed or not. Record the outputs.
 */
// a:
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// b. 
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// c. 
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
};

// e. 
if (true) {
    alert("True")
};

if (false) {
    // alert("False")
};

// f.
if ("car" < "cat") {
    alert("car is smaller than cat");
}



/***
 * 6. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table:
 */

var subject1 = +prompt("enter your subject 1 marks");
var subject2 = +prompt("enter your subject 2 marks");
var subject3 = +prompt("enter your subject 3 marks");

var totalMarks = 300;

// var subject1Percentage = (subject1 / totalMarks) * totalMarks;
// var subject2Percentage = (subject2 / totalMarks) * totalMarks;
// var subject3Percentage = (subject3 / totalMarks) * totalMarks;
var totalObtnMrks = subject1 + subject2 + subject3;
var percentage = (totalObtnMrks / totalMarks) * 100

// console.log("Percentage of Subject 1 is " + subject1Percentage);
// console.log("Percentage of Subject 2 is " + subject2Percentage);
// console.log("Percentage of Subject 3 is " + subject3Percentage);

// var totalPrcnt = subject1Percentage + subject2Percentage + subject3Percentage;

if (percentage >= 80) {
    console.log("Total Obtained Marks :" + totalObtnMrks);
    console.log("Percentage :" + percentage);
    console.log("Grade : A-One");
    console.log("Remarks : Excellent");
} else if (percentage >= 70) {
    console.log("Total Obtained Marks :" + totalObtnMrks);
    console.log("Percentage :" + percentage);
    console.log("Grade : A");
    console.log("Remarks : Well done");
} else if (percentage >= 60) {
    console.log("Total Obtained Marks :" + totalObtnMrks);
    console.log("Percentage :" + percentage);
    console.log("Grade : C");
    console.log("Remarks : Good");
} else if (percentage >= 50) {
    console.log("Total Obtained Marks :" + totalObtnMrks);
    console.log("Percentage :" + percentage);
    console.log("Grade : D");
    console.log("Remarks : Not Bad");
} else if (percentage < 50) {
    console.log("Total Obtained Marks :" + totalObtnMrks);
    console.log("Percentage :" + percentage);
    console.log("You're Fail");
    console.log("Remarks : You need to Improve.");
}

/**
7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”. 
*/

var scrtNum = 7;
var userGuessed = +prompt("Guess the number between 1 - 10")

if (scrtNum === userGuessed) {
    console.log("Bingo! Correct answer");
} else if (scrtNum > userGuessed) {
    console.log("little bit up please!... Close enough to the correct answer");
} else if (scrtNum < userGuessed) {
    console.log("little bit down please!... Close enough to the correct answer");
} else {
    console.log("Enter number in range 1-10.");
}

/**
8. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3.
 */

var givenNum = prompt("Enter the number");
if (givenNum % 3 == 0) {
    console.log("Your number is divisible by 3");
} else {
    console.log("Your number is not divisible by 3");
}

/**
 * 9. Write a program that checks whether the given input is an
even number or an odd number.
 */

var givenNum2 = prompt("Enter number to check even or odd");
if (givenNum2 % 2 == 0) {
    console.log("Your number is even.");
} else {
    console.log("Your number is odd.");
}

/**
 * 10. Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”
 */

var temp = prompt("Enter the Temperature");
if (temp > 40) {
    console.log("It is too hot outside.");
} else if (temp > 30) {
    console.log("The Weather today is Normal.");
} else if (temp > 20) {
    console.log("Today’s Weather is cool.");
} else if (temp > 10) {
    console.log("OMG! Today’s weather is so Cool.");
}

/**
 * 11. Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.
 */

var firstNumber = +prompt("Enter your first number")
var secondNumber = +prompt("Enter your second number")
var operator = +prompt("Enter the operator (e.g. + - / * %)");

if (operator == "+") {
    console.log(firstNumber + secondNumber);
} else if (operator == "-") {
    console.log(firstNumber - secondNumber);
} else if (operator == "/") {
    console.log(firstNumber / secondNumber);
} else if (operator == "*") {
    console.log(firstNumber * secondNumber);
} else if (operator == "%") {
    console.log(firstNumber % secondNumber);
} else {
    console.log("Please enter the correct operator.");
}