/**
1. Declare and initialize an empty multidimensional array.
(Array of arrays)
2. Declare and initialize a multidimensional array
representing the following matrix: */

var mdArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];
console.log(mdArr);

// 3. Write a program to print numeric counting from 1 to 10.

for (let i = 0; i <= 10; i++) {
    console.log(i);
};

/**
 4. Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user.
 */

for (let i = 1; i < 11; i++) {
    console.log("2 * " + i + ' = ' + i * 2);
}

/**
 5. Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”]
 */

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (let i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i]);
}

/**
 6. Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
 */

console.log("Counting ");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("Reverse Counting ");
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

console.log("Even Numbers");
for (let i = 0; i <= 10; i++) {
    console.log(i * 2);
}

/**
7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example:
 */

var userSearch = prompt("Welcome to Our bakery. What do you want to order sir?")

var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

for (let i = 0; i < bakeryItems.length; i++) {
    // console.log(bakeryItems[i]);
    if (userSearch == "cake") {
        alert("cake is available at index 0 in our bakery.")
    } else if (userSearch == "apple pie") {
        alert("apple pie is available at index 1 in our bakery.")
    } else if (userSearch == "cookie") {
        alert("cookie is available at index 2 in our bakery.")
    } else if (userSearch == "chips") {
        alert("chips is available at index 3 in our bakery.")
    } else if (userSearch == "patties") {
        alert("patties is available at index 4 in our bakery.")
    } else {
        alert("Sorry. " + userSearch + " is not available in our bakery.")
    }
}

/**
 * 8. Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12].
 */

var numbers = [24, 53, 78, 91, 12];
var largerNum = numbers[0]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largerNum) {
        largerNum = numbers[i]
    }
}
console.log("Larger number is " + largerNum);


/**
 * 9. Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12]
 */

var smallerNum = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallerNum) {
        smallerNum = numbers[i];
    }
}
console.log("Smaller number is " + smallerNum);

/**
 * 10. Write a program to print multiples of 5 ranging 1 to
100.
 */

for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
