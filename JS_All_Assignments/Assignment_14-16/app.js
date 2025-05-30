// 1. Declare an empty array using JS literal notation to store student names in future.

var students = [];
console.log(students);

// 3. Declare and initialize a strings array.

var strArray = ["MAH", "MAHasnain", "Atta", "Hasnain", "Muhammad Atta", "Atta ul Hasnain"];
console.log(strArray);

// 4. Declare and initialize a numbers array.

var numArray = [4, 2, 7, 6, 2, 4, 6, 1, 8, 8, 1];
console.log(numArray);

// 5. Declare and initialize a boolean array.

var booleanArray = [true, false];
console.log(booleanArray);

// 6. Declare and initialize a mixed array.

var mixedArray = ["MAH", 427, 188, true];
console.log(mixedArray);

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

console.log("Qualifications:");
console.log("1)" + qualifications[0]);
console.log("2)" + qualifications[1]);
console.log("3)" + qualifications[2]);
console.log("4)" + qualifications[3]);
console.log("5)" + qualifications[4]);
console.log("6)" + qualifications[5]);
console.log("7)" + qualifications[6]);
console.log("8)" + qualifications[7]);


/**
8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:
 */

var studentArr = ["Muhammad", "atta", "hasnain"];

var totalScore = 500;
var score = [280, 450, 320];
console.log("Score of " + studentArr[0] + " is " + score[0] + ". Percentage : " + (score[0] * 100) / totalScore + "%");
console.log("Score of " + studentArr[1] + " is " + score[1] + ". Percentage : " + (score[1] * 100) / totalScore + "%");
console.log("Score of " + studentArr[2] + " is " + score[2] + ". Percentage : " + (score[2] * 100) / totalScore + "%");



//  * 9. Initialize an array with color names. Display the array elements in your browser.

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

var colorNames = ["Blue", "White", "Orange", "Yellow", "Crimson", "Red", "Pink"];
var addToBeginning = prompt("Enter color to add in array");
colorNames.unshift(addToBeginning);
console.log(colorNames);

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

var addToEnd = prompt("Enter the color add to end");
colorNames.push(addToEnd)
console.log(colorNames);

// c. Add two more color to the beginning of the array. Display the updated array in your browser.

colorNames.unshift("Navy Blue", "Brown");
console.log(colorNames);

// d. Delete the first color in the array. Display the updated array in your browser.

// colorNames.shift();
console.log("Delete the first color in the array. Display the updated array in your browser. \n" + colorNames);

// e. Delete the last color in the array. Display the updated array in your browser.

colorNames.pop();
console.log(colorNames);

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.   Display the updated array in your browser.

// var desiredIndex = +prompt("Enter the index of array where to add color")
// var userColor = prompt("Enter color to add");
colorNames.splice(desiredIndex, 0, userColor)
console.log(colorNames);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

var whereInArr = +prompt("Enter the number where to remove colors");
var removeManyColors = +prompt("Enter the number of colors who want to remove.");
var copy = colorNames.slice(whereInArr, removeManyColors);
console.log(copy);

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var scoresOfStudents = [320, 420, 280, 130];
scoresOfStudents.sort();

console.log(scoresOfStudents);


// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var cities = ["Karachi", "Quetta", "Islamabad", "Hyederabad"];
var copyCities = cities.slice(2, 4) // 1st param :- Index number  |  2nd param :- array length jahan tk elements extract krny ho
console.log(copyCities);

// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
arr.join()
console.log(arr);

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

var devices = ["Keyboard", "mouse", "printer", "monitor"];
console.log(devices[3]);

// /14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)

/**
 15. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method:
 */

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(manufacturers[0])///
document.write(manufacturers[1])