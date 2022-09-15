console.log("Hello World!\n==========\n");

// Exercise 1 Section
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
        continue;
    }
}

// Exercise 2 Section
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizzbuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Exercise 3
let x = 1;
while (x <= 100) {
    if (x % 2 != 0) {
        console.log(x);
    }
    x++;
}

// let num = 1;
// do { 
//     if (num % 3 == 0 && num % 5 == 0) {
//     console.log("Fizzbuzz");
// }
// else if (num % 3 == 0) {
//     console.log("Fizz");
// }
// else if (num % 5 == 0) {
//     console.log("Buzz");
// } else {
//     console.log(num);
// } 
// num++;
// } while (x <= 100)

// Exercise 4
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

let isFound = false;

for (let i = 0; i < n; i++) {
    if (i == value) {
        console.log("Found Value!");
        break;
    } else {
        isFound = false;
    }
} 
if (isFound == false) {
    console.log("Did not find value.")
}

