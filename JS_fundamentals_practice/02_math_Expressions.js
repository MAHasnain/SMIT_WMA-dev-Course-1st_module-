// ✅ 2. Math Expressions / Operators – 20 Questions
// Write a program to calculate the square of a number.

var num = 5
var sqrNum = num * num;
console.log("Square of num is " + sqrNum);

// Use % operator to check if a number is even or odd.

var num1 = 3;
var num2 = 8;

if (num1 % 2 == 0) {
    console.log("num1 is even");
} else {
    console.log("num2 is even");
};

// Calculate area of a rectangle using length and width.

var length = 20;
var width = 30;

var rectangle = length * width;
console.log("area of rectangle is " + rectangle);

// Find the remainder of 25 divided by 4.

var remainder = 25 % 4;
console.log("remainder of 25 is " + remainder);

// Use ** operator to get the cube of a number.

var cubeNum = 2 ** 2;
console.log(cubeNum);

// Convert temperature from Celsius to Fahrenheit using formula.
// °F = °C × (9/5) + 32
var temp_C = 43;
var convert_F = temp_C * (9 / 5) + 32;
console.log(temp_C);
console.log(convert_F);

// Calculate the average of three numbers.

var ave_num1 = 2;
var ave_num2 = 9;
var ave_num3 = 10;
var average = (ave_num1 + ave_num2 + ave_num3) / (3);
console.log(average);

// Use ++ to increment a variable and log it before and after.

var incr = 5;

console.log("incr -> " + incr);
// incr = 5++;
incr++;
console.log(incr++);

// Use -- to decrement and log the result.

var dec = 8;
console.log("dec -> " + dec);
dec--;
console.log(dec);

// Chain multiple arithmetic operations and observe precedence.

// Use compound assignment += to add 10 to a number.

var compVar1 = 20;
console.log(compVar1);
compVar1 += 10;
console.log(compVar1);

// Use *= to double a value in a variable.

var compVar2 = 23;
console.log(compVar2);
compVar2 *= 2;
console.log(compVar2);

// Calculate the percentage of marks obtained from total marks.

var obtainedMarks = 151;
var fullMarks = 200;
var percentage = obtainedMarks / fullMarks * 100;
console.log(percentage);

// Convert total minutes to hours and minutes (e.g., 135 min = 2 hr 15 min).



// Try dividing a number by 0 and log the result.

var dividing_by_0 = 21 / 0;
console.log(dividing_by_0); /// Infinity

// Use parentheses to override operator precedence in a math expression.



// Create a BMI calculator: weight / height².
// formula
// Add a number and a string, then subtract a number — observe results.

var str = "MAHasnain";
var num = 427;
var result = num - str;
console.log(result); //// NaN

// Write a one-line expression to convert inches to centimeters.
// formula
// Use Math.round, Math.floor, and Math.ceil on a decimal value.

var decimalInt = 32.54;
var roundFigure = Math.round(decimalInt);
var floorVal = Math.floor(decimalInt);
var ceilVal = Math.ceil(decimalInt);
console.log(ceilVal);
console.log(floorVal);
console.log(roundFigure);