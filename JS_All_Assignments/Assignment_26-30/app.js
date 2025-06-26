// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num1 = 5.4546;

console.log(`Number is : ${num1}`);
console.log(`Round off value is : ${Math.round(num1)}`);
console.log(`Floor value is : ${Math.floor(num1)}`);
console.log(`Ceil value is : ${Math.ceil(num1)}`);


// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num2 = "-5.4546";

num2 = parseFloat(num2);
console.log(`Number is : ${num2}`);
console.log(`Round off value is : ${Math.round(num2)}`);
console.log(`Floor value is : ${Math.floor(num2)}`);
console.log(`Ceil value is : ${Math.ceil(num2)}`);



// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var findAbsVal = prompt("Enter a negative number");
findAbsVal = Number(findAbsVal);

var absVal = Math.abs(findAbsVal);
alert(absVal);


// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in you browser.:


var diceVal1 = Math.round((Math.random() * 2) + 2);
// var diceVal2 = Math.floor((Math.random() + 2) * 3);
console.log(diceVal1);
// console.log(diceVal2);


// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

var coinValue = Math.floor(Math.random() * 2);
console.log(coinValue);


// 6. Write a program that shows a random number between 1 and 100 in your browser.

var num2 = Math.floor((Math.random() * 10) + 60)

// console.log(num2);


// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms




// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

var userNum = prompt("Enter a number between 1-10");
userNum = Number(userNum);

var secretNum = Math.floor((Math.random() * 9) + 1)
if (userNum === secretNum) {
    alert("Your number is " + userNum + " You're won");
} else {
    alert("You lost. Please try again.")
}

console.log(secretNum);