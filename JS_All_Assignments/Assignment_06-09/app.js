/**
 * 1. Write a program to take a number in a variable, do the 
required arithmetic to display the following result in your 
browser:
*/

var a = +prompt("Enter a number ")

console.log("your Number is ", a);

// Preincrement
console.log(++a);

// var preincrement_a = ++a
// console.log(a);
// console.log("preincrement_a", preincrement_a);


// Postincrement
var postincrement_a = a++;
console.log("postincrement_a", a);



// Predecrement

console.log("predecreament", --a);

var predecreament_a = --a;

console.log("predecreament_a", predecreament_a);


// Postdecrement 

var postdecrement_a = a--;
console.log("postdecrement_a", postdecrement_a);




/**
 * 2. What will be the output in variables a, b & result after 
execution of the following script: 
var a = 2, b = 1; 
var result =  --a - --b + ++b + b--;
Explain the output at each stage: 
--a; 
--a - --b;
--a - --b + ++b; 
--a - --b + ++b + b--;
 */

var a = 4;
var b = 2;

var result = --a - --b + ++b + b--;
console.log("result", result);

console.log(--a); // 3
console.log(--a - --b); // 2-1
console.log(--a - --b + ++b); // 1-0 + 1
console.log(--a - --b + ++b + b--); // 0-0 + 1 + 1
// console.log(a);
console.log(--a - --b + ++b + b--); // 0-0 + 0 + 0
// console.log(b);

var result = --a - --b + ++b + b--;
console.log("result", result);


/**
 * 3. Write a program that takes input a name from user & 
    greet the user.
 */

var userName = prompt("Enter your name.")

alert("Welcome to " + userName);


/**
 * 4. Write a program to take input a number from user & 
display it’s multiplication table on your browser. If user 
does not enter a new number, multiplication table of 5 
should be displayed by default.
 */

var num = prompt("write a number");

if (num) {
    console.log(num + "x" + 1 + "=" + num * 1);
    console.log(num + "x" + 2 + "=" + num * 2);
    console.log(num + "x" + 3 + "=" + num * 3);
    console.log(num + "x" + 4 + "=" + num * 4);
    console.log(num + "x" + 5 + "=" + num * 5);
    console.log(num + "x" + 6 + "=" + num * 6);
    console.log(num + "x" + 7 + "=" + num * 7);
    console.log(num + "x" + 8 + "=" + num * 8);
    console.log(num + "x" + 9 + "=" + num * 9);
    console.log(num + "x" + 10 + "=" + num * 10);
} else {
    console.log(5 + "x" + 1 + "=" + 5 * 1);
    console.log(5 + "x" + 2 + "=" + 5 * 2);
    console.log(5 + "x" + 3 + "=" + 5 * 3);
    console.log(5 + "x" + 4 + "=" + 5 * 4);
    console.log(5 + "x" + 5 + "=" + 5 * 5);
    console.log(5 + "x" + 6 + "=" + 5 * 6);
    console.log(5 + "x" + 7 + "=" + 5 * 7);
    console.log(5 + "x" + 8 + "=" + 5 * 8);
    console.log(5 + "x" + 9 + "=" + 5 * 9);
    console.log(5 + "x" + 10 + "=" + 5 * 10);
}


/**
5. Take 
a) Take three subjects name from user and store them in 3 
different variables. 
b) Total marks for each subject is 100, store it in another 
variable. 
c) Take obtained marks for first subject from user and 
stored it in different variable. 
d) Take obtained marks for remaining 2 subjects from user 
and store them in variables. 
e) Now calculate total marks and percentage and show the 
result in browser like this.(Hint: user table) 
 */


var subject1 = prompt("Enter first subject name ");
var subject2 = prompt("Enter second subject name ");
var subject3 = prompt("Enter third subject name ");

var totalMarks = 100;
var sub1_obtainedMarks = prompt("Enter your obtained marks of first subject")
var sub2_obtainedMarks = prompt("Enter your obtained marks of second subject")
var sub3_obtainedMarks = prompt("Enter your obtained marks of third subject")

console.log(subject1 + " " + totalMarks + " " + sub1_obtainedMarks + " " + (sub1_obtainedMarks / 100) * 100 + "%");
console.log(subject2 + " " + totalMarks + " " + sub2_obtainedMarks + " " + (sub2_obtainedMarks / 100) * 100 + "%");
console.log(subject3 + " " + totalMarks + " " + sub3_obtainedMarks + " " + (sub3_obtainedMarks / 100) * 100 + "%");


