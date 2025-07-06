// 1. Write a function that displays current date & time in your browser.

const d = new Date();
function curDateAndTime() {
    var dateAndTime = `\n${d.toDateString()} ${d.toLocaleTimeString()} `;
    return dateAndTime;
}

var dt = curDateAndTime();
console.log(dt);

// 2. Write a function that takes first & last name and then it greets the user using his full name.

// var firstName = prompt("Enter your First Name.");
// var lastName = prompt("Enter your last Name.");

function greetUser(firstName, lastName) {
    var greeting = `Salam ${firstName} ${lastName} `;
    return greeting;
}

var greetFunction = greetUser(firstName, lastName);
var greetFunction = greetUser("Atta", "ul Hasnain");
console.log(greetFunction);

// // 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

var num1 = +prompt("Enter the first Number");
var num2 = +prompt("Enter the second Number");

function addition(num1, num2) {
    var add = num1 + num2;
    return add;
};

var add = addition(num1, num2);
console.log(add);

// 4. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// var num1 = +prompt("Enter the first number");
// var num2 = +prompt("Enter the second number");
// var operator = prompt("Enter the operator to calculate your number");

var res = 0;
function calculator(num1, num2, operator) {
    if (operator == "+") {
        res = num1 + num2;
    } else if (operator == "-") {
        res = num1 - num2;
    } else if (operator == "*") {
        res = num1 * num2;
    } else if (operator == "/") {
        res = num1 / num2;
    } else if (operator == "%") {
        res = num1 % num2;
    } else {
        console.log("Please enter a valid operator.");
    }

    return res;
}

var calculation = calculator(4, 2, "*")
console.log(calculation);

// 5. Write a function that squares its argument.

function findSquare(number) {
    var square = number * number;
    return square;
}

var squareOfNum = findSquare(5);
console.log(squareOfNum);

// 6. Write a function that computes factorial of a number.

var usersNum = Number(prompt("Enter a number"))
function factorialOfaNum() {
    var res = 1;
    for (let i = 1; i <= usersNum; i++) {
        res = res * i;
    }
    return res; 
}

var factorialNum = factorialOfaNum();
console.log(`factorial number : ${factorialNum}`);
console.log(factorialOfaNum(6));

// 7. Write a function that take start and end number as inputs & display counting in your browser.

var countStartInp = Number(prompt("Enter counting start number"));
var countEndInp = Number(prompt("Enter counting end number"));
function countingPrint() {
    var count = 0;
    for (let i = countStartInp; i <= countEndInp; i++) {
        console.log(i);
    }
    // return count;
}
var counting = countingPrint();
console.log(counting);

// 8. Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

var base = Number(prompt("Enter the base of right triangle"));
var perpendicular = Number(prompt("Enter the perpendicular of right triangle"));
function calculateHypotenuse() {
    var hypotenuse = 0;
    hypotenuse = base + perpendicular;

    function calculateSquare() {
        var square = hypotenuse * hypotenuse;
        return `Square of Hypotenuse : ${square}`;
    }
    return calculateSquare();
};

var calculated = calculateHypotenuse();
console.log(calculated);

// 9. Write a function that calculates the area of a rectangle.
// A = width * height  Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

var width = Number(prompt("Enter the width of rectangle"));
var height = Number(prompt("Enter the height of rectangle"));

// function calcAreaOfRectangle(width, height) {
function calcAreaOfRectangle() {
    var area = width * height;
    return area;
}

// // var calculatedArea = calcAreaOfRectangle(5, 7); ///Arguments as value
var calculatedArea = calcAreaOfRectangle();   ///Arguments as variables
console.log(calculatedArea);

// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

var userStr = "amdam";
function checkPalindrome(userStr) {
    var reversed = "";
    for (let i = userStr.length - 1; i >= 0; i--) {
        reversed += userStr[i];
    }
    console.log(reversed);
    if (reversed === userStr) {
        console.log("It's Palindrome.");
    } else {
        console.log("It's not Palindrome.");
    }
}
var checked = checkPalindrome("madam");
console.log(checked);

// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

var userStr = 'Web Development Tutorial';
var strArr = userStr.split(" ");
console.log(strArr);
var largestWord = strArr[0];
// console.log(`largest word : ${largestWord}`);
for (let i = 0; i < strArr.length; i++) {
    if (userStr[i].length > largestWord.length) {
        largestWord += userStr[i];
    }
}
console.log("largestWord : " + largestWord);

// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function specifiedLetterCount(str, letter) {
    letter = letter.toLowerCase();
    str = str.toLowerCase();
    var count = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

var letterCount = specifiedLetterCount("MAHasnain", "h")
console.log(letterCount);

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".

// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".

// Circumference of circle = 2πr        Area of circle = πr2

function calcCircumference(radius) {
    var circumference = 2 * radius;
    return `The circumference is ${circumference}.`
};
var circumference = calcCircumference(5);
console.log(circumference);

function calcArea(radius) {
    var area; 
    area = radius * radius;
    return `The area is ${area}.`;
}
var area = calcCircumference(6);
console.log(area);
