// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName = prompt("Enter your first Name");
var lastName = prompt("Enter your last Name");

var fullName = firstName + " " + lastName;
var greetUser = "Hello " + fullName;
alert(greetUser);



// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var userFavoriteMob = prompt("Enter your favorite Mobile model");

var lengthOfUserInput = userFavoriteMob.length;

alert("Your favorite Mobile is " + userFavoriteMob + "\n Length is " + lengthOfUserInput);


// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var str = "Pakistani";
var userStr = prompt("Enter your sentence")
var userFindLetterIndex = prompt("Enter the letter to find index in your sentence.")

userStr = userStr.toLowerCase()
userFindLetterIndex = userFindLetterIndex.toLowerCase()

var letterIndex = userStr.indexOf(userFindLetterIndex);

alert("word " + userStr + " in letter " + userFindLetterIndex + " is " + letterIndex);

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var userString = "Hello World";
var userString = prompt("enter your sentence");
var letterIndex = prompt("Enter your last index letter to find in your sentence.")

letterIndex = letterIndex.toLowerCase();
userString = userString.toLowerCase();

var lastIndexOfLetter = userString.lastIndexOf(letterIndex);

alert(`last Index of ${letterIndex} is ${lastIndexOfLetter}`);



// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

var userStrForChar = prompt("Write a sentence");
var userCharIndex = +prompt("Enter a number to find index in your sentence.");

userStrForChar = userStrForChar.toLowerCase();

var userIndexLetter = userStrForChar.charAt(userCharIndex);

alert(`${userCharIndex} index pr ${userIndexLetter} `)


//Q6 . Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var userFirstName = prompt("Write your first name")
var userSecondName = prompt("Write your second name")

var fullName = userFirstName.concat(userSecondName)

alert(fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";
var replaced = city.replace("Hyder", "Islam");
console.log(city + " replaced by " + replaced);

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var messageReplaced = message.replaceAll("and", "&");
// console.log(messageReplaced);

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var numString = "472";

var strConverted = Number(numString);
console.log(typeof numString);
console.log(numString);
console.log(typeof strConverted);
console.log(strConverted);

// 10. Write a program that takes user input. Convert and show the input in capital letters.

var userInp = prompt("Write a word");
var convertToUppercase = userInp.toUpperCase()

alert(convertToUppercase);


// 11. Write a program that takes user input. Convert and show the input in title case.



// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 32.79;
var numToStr = num.toString();
console.log(`value of num is ${num}, value of numToString is ${numToStr}, and type is ${typeof numToStr}`);
var dotReplaced = numToStr.replace(".", "")
console.log(`value of dotReplaced is ${dotReplaced},`);

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// prompt me user se username input le liya 
// conditional checking username me !,.@ symbols hen to nhi 
// symbols hen to prompt (invalid user) show krna h.
// otherwise alert (username accept)

var username = prompt("Enter username");
// if (username.includes("@") || username.includes("!") || username.includes(",") || username.includes(".")) {
//     prompt("Enter valid username")
// } else {
//      alert("Username Accept!")
// }
var isValid = true;
for (let i = 0; i < username.length; i++) {
    if (username.charCodeAt(i) === 33 || username.charCodeAt(i) === 44 || username.charCodeAt(i) === 46 || username.charCodeAt(i) === 64) {
        console.log("username", username);
        isValid = false;
        break;
    }
}

if (isValid) {
    alert("Username Accept");
} else {
    username = prompt("Enter valid username");
    username;
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

var usersRequirement = prompt("What do you want to order sir/ma'am ?")

usersRequirement = usersRequirement.toLowerCase();

for (let i = 0; i < bakeryItems.length; i++) {
    console.log(bakeryItems[i] + " -> " + bakeryItems.indexOf(bakeryItems[i]));

    if (bakeryItems[i] === usersRequirement) {
        var itemFound = bakeryItems[i];
    }
}
alert(`${usersRequirement} is available at index ${bakeryItems.indexOf(itemFound)} in our bakery.`);

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// var userPassword = prompt("Enter your secure password")
// var isValid = true;
// var hasAlphabet = true;
// var hasAlphabet = true;
// for (let i = 0; i <= userPassword.length; i++) {
//     if (userPassword.length < 6) {
//         isValid = false;
//     } else if (userPassword.charCodeAt()) {
//         hasAlphabet = false
//     }
// }


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var uni = "University of Karachi";
var convertedToArray = uni.split("");

console.log(convertedToArray);
