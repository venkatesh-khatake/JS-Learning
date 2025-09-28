// Swap two numbers without using a third variable.

let a = 12;
let b = 14;
console.log("initial value of a : " + a);
console.log("initial value of b : " + b);

a = a + b;
b = a - b;
a = a - b;

console.log("Swapped value of a : " + a);
console.log("Swapped value of b : " + b);

// Check even/odd number.

// let num = prompt("Enter a number to check it is Even or Odd : ");
let num = 1121;

if (num % 2 == 0) {
  console.log(num + " is even");
} else {
  console.log(num + " is Odd");
}

// Find the largest of three numbers.

let num1 = 120;
let num2 = 45;
let num3 = 78;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1 + " is a largest Number");
  } else {
    console.log(num3 + " is a largest number");
  }
} else if (num2 > num1) {
  if (num2 > num3) {
    console.log(num2 + " is a largest Number");
  } else {
    console.log(num3 + " is a largest Number");
  }
}



// Simple calculator (take 2 numbers & operator as input, perform operation).

let x = Number(prompt("Enter a number : "));
let y = Number(prompt("Enter another number : "));

let op = prompt("Enter operation : ");

switch(op){
    case '+':
        console.log(x + y);
        break;
    case '-':
        console.log(x - y);
        break;
    case '*':
        console.log(x * y);
        break;
    case '/':
        console.log(x / y);
        break;
    case '%':
        console.log(x % y);
        break;
    default:
        console.log("Enter correct operation");
}


// Print multiplication table of any number.

let num = prompt("Enter number : ");

for(let i = 1; i<= 10; i++){
    console.log(num +" * "+i +" = "+ num * i);
}



// Factorial of a number using loop.

let num = Number(prompt("Enter number : "));

let factorial = num;
for(let i = num -1; i >= 1; i--){
    factorial *= i 
}
console.log(factorial)


// Reverse a number (e.g., 123 → 321).

function reverse(num){
    let rev = 0;
    while(num > 0){
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10)
    }
    return rev;
}

console.log(reverse(789))


// Sum of digits of a number.


function sumOfDigit(num){
    let sum = 0;
    
    while(num > 0){
        let digit = num % 10;
        sum = sum + digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumOfDigit(456))


// Fibonacci series up to n terms.  

function fibonacci(num){
    let n1 = 0;
    let n2 = 1;
    
    for(let i = 0; i< num; i++){
        console.log(n1);
        
        let n3 = n1 + n2;
         
         n1 = n2;
         n2 = n3;
    }
}

fibonacci(7)


// Find maximum and minimum in an array.

let arr = [78,25,47,32,11,59,2];

 let small = arr[0];
 let big = arr[0]
for(let i = 0; i< arr.length; i++){
   
    if(arr[i] < small){
        small = arr[i];
    }
    
    if(arr[i] > big){
        big = arr[i]
    }
    
}
console.log("smallest number in the array : ",small)
console.log("Largest Number in the array : ",big)



// Sum of all elements in an array.

let arr = [78,25,47,32,11,59,2];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}
console.log(sum)


// Count even and odd numbers in an array.

let arr = [78,25,47,32,11,59,2];

let evenCount = 0;
let oddCount = 0;
for(let i = 0; i< arr.length; i++){
        
        if(arr[i] % 2 == 0){
            evenCount++;
        }
        else{
            oddCount++;
        }
}
console.log("Even No. Count : ",evenCount);
console.log("Odd No. Count : ", oddCount);


// Reverse an array without using reverse().

let arr = [78,25,47,32,11,59,2];

let arrReverse = [];
for(let i = arr.length-1; i>= 0; i--){
    arrReverse.push(arr[i]);
}
console.log(arr)
console.log(arrReverse)

