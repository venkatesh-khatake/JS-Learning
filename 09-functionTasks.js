// Write a function isPrime(num) using function declaration that checks if a number is prime.

function isPrime(num){
    let result = false;
    for(let i = 2; i < num; i++){
        if(num % i != 0){
            result = true;
        }
    }
    if(result){
        console.log(num + " is a Prime No.");
    }
    else{
        console.log(num + " is not a Prime No.")
    }
}

isPrime(45)


// Create a function expression maxOfTwo that takes 2 numbers and returns the larger one.

let maxOfTwo = function(num1, num2){
    return Math.max(num1, num2);
}
console.log(maxOfTwo(455,85));


// Pass an anonymous function to setTimeout that prints "Hello after 2 seconds".

setTimeout(function(){
    console.log("hello after 2 seconds.")
},2000)

// Create an arrow function reverseString(str) that reverses a given string.

let reverseString = (str)=>{
    let rev = "";
    for(let i = str.length - 1; i>= 0; i--){
        rev += str[i];
    }
    return rev;
}
console.log(reverseString("Venkatesh"));


// Write a function calculate(a, b, callback) where callback can be add, subtract, multiply, or divide.

function calculate(a,b,callback){
    return callback(a,b);
}

let  add = (a,b)=>{
    return a + b;
}
function subtract(a,b){
   return a - b;
}
function multiply(a,b){
    return  a * b;
}
function divide(a,b){
    return  a / b;
}

console.log(calculate(45, 12,divide));


// Use an IIFE to print "JavaScript is awesome!" immediately.

(function () {
    console.log("JavaScript is awesome!");
})();


// Create a constructor function Person(name, age) that stores name and age and has 
// a method greet() which prints "Hi, my name is <name> and I am <age> years old."

function Person(name, age){
    this.name = name;
    this.age = age;

    this.greet = () =>{
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
    }
}

let newUser = new Person("Venkatesh", 23);
newUser.greet();

