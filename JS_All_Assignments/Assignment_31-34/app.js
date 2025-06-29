// 1. Write a program that displays current date and time in your browser.

var d = new Date();
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(`${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()} ${d.getDay()} ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()} ${d.getTimezoneOffset()}`);
console.log(Date.now());
console.log(`\n${d.toDateString()} ${d.toLocaleTimeString()} `);
console.log(`\n${d.toString()} `);


// 2. Write a program that alerts the current month in words. For example December.

var curMon = months[d.getMonth()];
console.log(`Current Month : ${curMon}`);

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var today = days[d.getDay()];
console.log(`Today is ${today}`);

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

if (today === "Sat" || "Sun") {
    console.log("It's Fun day.");
} else {
    console.log("It's Working day.");
}

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

if (d.getDate() < "15") {
    console.log(`\nFirst fifteen days of the month`);
} else {
    console.log(`\nLast days of the month`);
}

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

var ms = Date.now();
console.log(ms / 60000);

// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

var currentTime = d.toLocaleTimeString()
// console.log(currentTime);
if (currentTime === "AM") {
    console.log("Its AM");
} else {
    console.log("Its PM");
}

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

var laterDate = new Date(2020, 11, 31);
laterDate.setFullYear(2020)
laterDate.setMonth(11)
laterDate.setDate(32)

console.log(laterDate);

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

var curDate = new Date();
var ramadanDate = new Date(2025, 2, 1);

var resultInMs = curDate - ramadanDate
var days = resultInMs / (1000 * 60 * 60 * 24)
days = Math.round(days)
console.log(days);

// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

var referenceDate = new Date(2025, 5, 1);
var beginDate = new Date(2025, 0, 1);

console.log(beginDate);
var resInMs = referenceDate - beginDate;
var resInSeconds = resInMs / 1000
console.log("Result in Seconds : " + resInSeconds);

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

var d = new Date();
console.log(`\n${d.toDateString()} ${d.toLocaleTimeString()} `);
var curHrs = d.getHours();
d.setHours(curHrs+1)
console.log(`\n${d.toDateString()} ${d.toLocaleTimeString()} `);


// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

var resetYrs = curDate.getFullYear() - 100;
console.log(resetYrs);
curDate.setFullYear(resetYrs)
console.log(curDate);

// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var userAge = Number(prompt("Please enter your age"))
var birthYear = d.getFullYear() - userAge;
console.log(birthYear);

// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
