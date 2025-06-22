// 1. Create a program that asks for the user's birth year using `prompt()`, then calculates and alerts their age.

var usersBirthYr = +prompt("Enter your birth year");
var currentYr = 2025;
var userAge = currentYr - usersBirthYr;
alert(userAge)
// ✅

// 2. Use `prompt()` to get 5 numbers from the user, store them in an array, and then calculate and log the average using a loop.

var numsArray = [];
var sum = 0;

for (var i = 1; i <= 5; i++) {
    var userNumber = +prompt("Enter a number to calculate average");
    numsArray.push(userNumber);
}
for (let j = 0; j < numsArray.length; j++) {
    sum = sum + numsArray[j]
    var average = sum / numsArray.length;
    // console.log(numsArray);
}
alert("Your numbers average is " + average);

console.log(numsArray);
// ✅

// 3. Declare an array of 10 numbers. Use a loop to print only the numbers that are divisible by 3.

var numArr = [3, 8, 6, 7, 9, 10, 55, 60];
for (let i = 0; i <= numArr.length; i++) {
    if (numArr[i] % 3 == 0) {
        console.log(numArr[i]);
    }
}
// ✅

// 4. Write a `for` loop to calculate the factorial of a number entered by the user.

var userFactNum = +prompt("Enter a number to find factorial number")
var findFactNum = 1;
for (let i = 1; i <= userFactNum; i++) {
    findFactNum = findFactNum * i
}
alert(`Your number's factorial is ${findFactNum}`);
// ✅

// 5. Create a program that uses `prompt()` to accept a string from the user and prints the string **in reverse** using a loop.

var userString = prompt("Enter a word");
var reversedString = "";
for (let i = userString.length - 1; i >= 0; i--) {
    reversedString += userString[i];
}
alert(`${userString} ka reverse hoga ${reversedString}`);
// ✅

// 6.How many times a specific letter appears in a given string. Use this in a prompt-based program.

var userGivenStr = prompt("Enter a sentence");
var targetedLetter = prompt("Enter a letter you find in your sentence");

userGivenStr = userGivenStr.toLocaleLowerCase()
targetedLetter = targetedLetter.toLocaleLowerCase()

var letterCount = 0;
for (let i = 0; i < userGivenStr.length; i++) {
    if (userGivenStr[i] === targetedLetter) {
        letterCount++;
    }
}
alert(`The letter ${targetedLetter} appears ${letterCount} in your sentence.`)

// 7. Ask the user to enter five names (one by one using `prompt()`), store them in an array, then sort the array and display it using `console.log()`.

var namesArr = [];
for (let i = 1; i <= 5; i++) {
    var userEnteredNames = prompt("Enter the name");
    namesArr.push(userEnteredNames);
    namesArr.sort()
}
console.log(namesArr);
// ✅

// 8. Use `console.log()` to display a multiplication table (1 to 10) of a number entered by the user via `prompt()`.

var userTableNumber = +prompt("Enter a number to print the table.");
for (let i = 1; i <= 10; i++) {
    console.log(`${userTableNumber} x ${i} = ${userTableNumber * i}`);
}
// ✅

// 9. Write a program that asks the user for a sentence and checks how many vowels it contains. Output the count using `console.log()`.

var usersVowelString = prompt("Write a sentence to check vowels contain");

usersVowelString = usersVowelString.toLocaleLowerCase();

var vowelsCount = 0;

for (let i = 0; i < usersVowelString.length; i++) {
    var currentChar = usersVowelString[i]
    if ("aeiou".includes(currentChar)) {
        vowelsCount++;
    }
}

alert(`Total vowels found ${vowelsCount}`);

// 10. Create two arrays: one with product names and one with prices. Display each product with its corresponding price using a loop.

var productNames = ["Bag", "Helmet", "gloves", "Jacket", "Shoes", "Glasses"];
var productPrices = [4500, 8000, 500, 1000, 3000, 500];

for (let i = 0; i < productNames.length; i++) {
    console.log(productNames[i] + " " + productPrices[i]);
}
// ✅

// 11. Ask the user to enter a temperature in Celsius and convert it to Fahrenheit using the formula:
// `F = (C × 9/5) + 32`, and display the result with `alert()`.

var userTemp = +prompt("Enter the temperature.")
var f_temp = (userTemp * 9 / 5) + 32;
alert("Convert to F  " + f_temp);
// ✅

// 12. Write a script to check whether a given string is a palindrome (e.g., “madam” or “racecar”).

var usersString = prompt("Enter a word to check it's palindrome");
var revString = ""
for (let i = usersString.length - 1; i >= 0; i--) {
    revString += usersString[i];
}

if (revString === usersString) {
    alert("Your word is Palindrome.")
} else {
    alert("Your word is'nt Palindrome.")
}
// ✅

// 13. Ask the user for a number and determine if it is **prime** or not. Show the result using `alert()`.

var userNum = prompt("Enter the number to check prime or not");
if (userNum % 1 == 0 && userNum % userNum == 0) {
    alert("Your number is prime.");
} else {
    alert("Your number is'nt prime.");
}
// ✅

// 14. Create an array of 10 random numbers between 1 and 100. Use a loop to find the largest number in the array.

var randomNumber = [2, 45, 23, 37, 76, 54, 62, 97, 88, 10];
var largestNum = randomNumber[0];
for (let i = 0; i <= randomNumber.length; i++) {
    if (randomNumber[i] > largestNum) {
        largestNum = randomNumber[i];
    }
}
console.log(largestNum);
// ✅

// 15. Write a program to simulate a simple calculator. Ask the user for two numbers and an operation (+, −, ×, ÷), and then perform and display the result.

var calculator_num1 = +prompt("Enter the first number")
var calculator_num2 = +prompt("Enter the second number")
var calculator_operator = prompt("Enter the operator")

if (calculator_operator == "+") {
    alert(calculator_num1 + calculator_num2)
} else if (calculator_operator == "-") {
    alert(calculator_num1 - calculator_num2)
} else if (calculator_operator == "*") {
    alert(calculator_num1 * calculator_num2)
} else if (calculator_operator == "/") {
    alert(calculator_num1 / calculator_num2)
} else {
    console.log("Your operator is invalid.");
}
// ✅

// 16.Loop through an array of numbers and create a new array with only the numbers greater than 50. Use a `for` loop and `push()` method.

var numOldArr = [21, 43, 32, 53, 61, 74, 8, 83, 92, 10];
var newArray = [];
for (let i = 0; i <= numOldArr.length; i++) {
    if (numOldArr[i] > 50) {
        newArray.push(numOldArr[i])
    }
}
console.log(newArray);
// ✅