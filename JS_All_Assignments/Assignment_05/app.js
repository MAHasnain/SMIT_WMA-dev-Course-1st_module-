// MATH EXPRESSIONS 


/**
 * 1. Write a program that take two numbers & add them 
 * in a new variable. Show the result in your browser. 
 */


var addedNumber = 6 + 9;

// console.log(addedNumber);
alert(addedNumber);

/**
 2. Repeat task1 for subtraction, multiplication, division & 
    modulus. 
 */

var subtractedNum = addedNumber - 8;

// console.log(subtractedNum);
alert(subtractedNum);


var dividedNum = subtractedNum / 4;

// console.log(dividedNum);
alert(dividedNum);

var multipliedNum = dividedNum * 6;

console.log(multipliedNum);
alert(multipliedNum);


var remindedNum = multipliedNum % 8;

console.log(remindedNum);
alert(remindedNum);


/**
 * 3. Do the following using JS Mathematic Expressions 
a. Declare a variable.
b. Show the value of variable in your browser like “Value 
after variable declaration is: ??”.
c. Initialize the variable with some number. 
d. Show the value of variable in your browser like “Initial 
value: 5”. 
e. Increment the variable. 
f. Show the value of variable in your browser like “Value 
after increment is: 6”. 
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value 
after addition is: 13”.

i. Decrement the variable. 
j. Show the value of variable in your browser like “Value 
after decrement is: 12”. 
k. Show the remainder after dividing the variable’s value 
by 3.  
l. Output : “The remainder is : 0”.
*/

var value;


var intVal = 29;

++intVal;
console.log(intVal);

intVal + 11;

console.log(intVal);

--intVal;


var output = intVal % 3;


/**
 * 4. Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie. Example output:
 */


var ticketPrice = 600;

var ticketCount = 5;

var totalTicketsCost = ticketCount * ticketPrice;

// alert("Total cost to buy " + ticketCount + "tickets to a movie is " + totalTicketsCost + "PKR.");




/**
 * 
5. Write a script to display multiplication table of any
number in your browser. E.g
 */

var tableNum = 3;

console.log(tableNum + ' x ' + 1 + " = " + tableNum * 1);
console.log(tableNum + ' x ' + 2 + " = " + tableNum * 2);
console.log(tableNum + ' x ' + 3 + " = " + tableNum * 3);
console.log(tableNum + ' x ' + 4 + " = " + tableNum * 4);
console.log(tableNum + ' x ' + 5 + " = " + tableNum * 5);
console.log(tableNum + ' x ' + 6 + " = " + tableNum * 6);
console.log(tableNum + ' x ' + 7 + " = " + tableNum * 7);
console.log(tableNum + ' x ' + 8 + " = " + tableNum * 8);
console.log(tableNum + ' x ' + 9 + " = " + tableNum * 9);
console.log(tableNum + ' x ' + 10 + " = " + tableNum * 10);



/**
 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.

Conversion Formulae:
 */

var temp = 23
var celTemp = (temp - 32) * 5 / 9;
var fntTemp = (celTemp * 9 / 5) + 32;


console.log(celTemp);
console.log(fntTemp);


/**

7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
Store the following in variables

a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges

Compute the total cost & show the receipt in your browser.
*/

var item1 = 650;
var item2 = 100;

var qtyItem1 = item1 * 3;
var qtyItem2 = item2 * 7;
var shippingCharges = 100;

var totalCost = qtyItem1 + qtyItem2 + shippingCharges;
console.log("Total cost of your order is " + totalCost);



/**
8. Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser
 */

var totalMarks = 980;
var obtMarks = 804;
var percentage = obtMarks / totalMarks * 100
console.log(percentage);


/**
 * 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee)
 */

var totalCurrency = 10 * 104 + 25 * 28;

console.log("Total currency is PKR: " + totalCurrency);

/**
 * 10. Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression
 */

var arithmeticOperations = 28 + 5 * 10 / 2;
console.log(arithmeticOperations);



/**
 * 11. The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.

Output them to the screen like so: “They are either NN or NN
years old”.
 */

var currentYr = 2025;
var birthYr = 2001;

var age = currentYr - birthYr;
console.log(age);

/**
 * 12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The
area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
 */

var radius = 20;
var circumference = 125;
var area = radius * circumference;
console.log(area);


/**
 * 13. The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is?
Wonder no more.

a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.

Output the result to the screen like so: “You will need
NNNN to last you until the ripe old age of NN”.
 */

var favSnack = "chocolate chips"
var currentAge = 24;
var maxAge = 62;

var estAmount = 5;

console.log("You will need " + currentAge * estAmount + " " + favSnack + "to last you until the ripe old age of " + maxAge);
