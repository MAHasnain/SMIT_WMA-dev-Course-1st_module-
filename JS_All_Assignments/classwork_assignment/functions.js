// 1. Write a function that takes an array of numbers and returns their sum.

function sum(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

var sumOfArrNums = sum([4, 6, 5, 5]);
console.log(sumOfArrNums);

// 2. Write a function that reverses a string.

function revString(str) {
    var string;
    for (let i = str.length; i >= 0; i--) {
        string += str[i];
    }
    return string;
}

var reversed = revString("Hello");
console.log(reversed);

// 3. Write a function that finds the largest number in an array.

function findLargestNum(arr) {
    let largestNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum
}
var res = findLargestNum([4, 7, 19, 8, 6, 2, 3, 5]);
var largestNumber = findLargestNum([4, 72, 19, 8, 6, 2, 3, 5]);
console.log(res);
console.log(largestNumber);

// 4. Write a function that counts the number of vowels in a string.



// 5. Write a function that removes duplicates from an array.

function removeDups(arr) {
    var duplicate ; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === duplicate) {
            
        }
        
    }
}
var res = removeDups();
console.log(res); 

// 6. Write a function that capitalizes the first letter of each word in a sentence.
