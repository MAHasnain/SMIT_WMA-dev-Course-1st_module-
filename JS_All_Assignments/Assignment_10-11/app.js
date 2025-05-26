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