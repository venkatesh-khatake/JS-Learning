// Print numbers from 1 to 10 using a for loop.

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Print the even numbers between 1 and 20.

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

// Calculate the sum of numbers from 1 to 100 using a for loop.

let sum = 0;

for(let i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log("sum of 1 to 100 : ", sum);



//Print a pattern like:

// *
// **
// ***
// ****
// *****

for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write("*")
    }
    console.log(" ");
}

// Given an array:
let fruits = ["apple", "banana", "cherry", "grape"];
// Use a for loop to print each fruit.

for(let i = 0; i <= fruits.length-1; i++){
    console.log(fruits[i]);
}


// Print numbers from 10 to 1 using a while loop.

let num = 10; 
while(num >= 0){
    console.log(num);
    num--;
}

// Print the multiplication table of 5 (5 × 1 to 5 × 10).

let i = 1; 

while(i <= 10){
    console.log(i * 5);
    i++;
}


// Find the factorial of a number (e.g., 5! = 120) using a while loop.

let myNum = 5; 
let factorial = 1; 
let j = 1; 

while(j <= myNum){
    factorial = factorial * j;
    j++;
}
console.log(`factorial of ${myNum} is ${factorial}`)