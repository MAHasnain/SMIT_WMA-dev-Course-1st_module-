// ✅ 1. JavaScript Variables – 20 Practice Questions
// Declare a variable to store your name and log it in the console.

var my_Name = "MAHasnain";
// console.log("my name is " + my_Name);

// Create variables for age, city, and isStudent, then display them using console.log.

var my_Age = 24;
var my_City = "Karachi";
// console.log("I'm " + my_Age + " years old.");

// Update a let variable’s value and log both the old and new value.

let isLoggedIn = true;
// console.log(isLoggedIn);

isLoggedIn = false;
// console.log(isLoggedIn);

// Try reassigning a const variable and observe the error.

const userSignIn = false;
// userSignIn = true; TypeError: Assignment to constant variable.
console.log(userSignIn);

// Swap values of two variables using a temporary third variable.

var num1 = 20;
var num2 = 30;

var temp_var = num1;

num1 = num2
// console.log("num1 " + num1);

num2 = temp_var;
// console.log("num2 " + num2);

// Declare three different variables in a single line.

var var1 = 8, var2 = 2, var3 = 123;
// console.log("var1 " + var1);
// console.log("var2 " + var2);
// console.log("var3 " + var3);

// Combine first name and last name in a new variable using concatenation.

var firstName = "Muhammad"
var lastName = "Atta ul Hasnain"

// console.log(firstName + " " + lastName);

// Store the result of 25 + 30 in a variable and display it.

// Create a variable for temperature in Celsius and convert it to Fahrenheit.

var temp_C = 34;
var temp_F = temp_C * (9 / 5) + 32;
// console.log("Temperature in celsius " + temp_C + "\nTemperature in Fahrenheit " + temp_F);

// Declare a boolean variable and use typeof to log its data type.

// console.log(typeof isLoggedIn);

// Declare a variable without assigning a value, then assign and log it.

var init;
// console.log(init);

// Declare a variable using var and access it before declaration.

// Try accessing a let variable before declaring it and observe the behavior.

var init2;
// console.log(init2);
init2 = 3244;

// Create a variable named _userName123 and assign your username.

var _userName123 = "mahasnain427";

// Reassign a string variable to a number and check its type.
// Create a string variable and add a number to it.

var strVar = "MAH";
console.log(typeof strVar);
strVar = 427;
console.log(typeof strVar);

// Store the sum of 3 variables (a, b, c) in another variable.

var a = 23;
var b = 20;
var c = 26;

var anotherVar = a + b + c;
console.log(anotherVar);

// Create variables for item price and quantity, then calculate total price.

var itemPrice = 4656;
var itemQty = 20;
var totalPrice = itemPrice * itemQty;
console.log(totalPrice);

// Use template literals to print: “Hello Ali, you are 22 years old.”

var age = 22;
console.log(`Hello Ali, you are ${age} years old.`);

// Use console.table() to display three variables in table format.


console.table("a ki value "+ a);
console.table(b);
console.table(c);