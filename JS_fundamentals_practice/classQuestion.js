// We need to take 10 input prompt from user and need to identify the even ad odd number and also  how can we we make multiple prompt


var inputs = [];

var even = 0;
var odd = 0;
for (let i = 0; i < 3; i++) {
    var input = +prompt("Enter number");
    inputs.push(input);
}

console.log(inputs);

for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] % 2 == 0) {
        // document.write("Even number is " + even + "\n")
        console.log(even);
        even++;
    } else {
        // document.write("Odd number is " + odd + "\n")
        odd++;
        console.log(odd);
    }
}

console.log("Total even numbers are " + even + " And total odd number are ");
